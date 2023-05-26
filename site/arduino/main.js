// não altere!
const serialport = require('serialport');
const express = require('express');
const mysql = require('mysql2');
const sql = require('mssql');

// não altere!
const SERIAL_BAUD_RATE = 9600;
const SERVIDOR_PORTA = 3300;

// configure a linha abaixo caso queira que os dados capturados sejam inseridos no banco de dados.
// false -> nao insere
// true -> insere
const HABILITAR_OPERACAO_INSERIR = true;

// altere o valor da variável AMBIENTE para o valor desejado:
// API conectada ao banco de dados remoto, SQL Server -> 'producao'
// API conectada ao banco de dados local, MySQL Workbench - 'desenvolvimento'
const AMBIENTE = 'desenvolvimento';

const serial = async (
    valoresDht11Umidade,
    valoresDht11Temperatura,
    // valoresfkSensor
) => {
    let poolBancoDados = ''

    if (AMBIENTE == 'desenvolvimento') {
        poolBancoDados = mysql.createPool(
            {
                // altere!
                // CREDENCIAIS DO BANCO - MYSQL WORKBENCH
                host: 'localhost',
                user: 'aluno',
                password: 'sptech',
                database: 'arttech'
            }
        ).promise();
    } else if (AMBIENTE == 'producao') {
        console.log('Projeto rodando inserindo dados em nuvem. Configure as credenciais abaixo.');
    } else {
        throw new Error('Ambiente não configurado. Verifique o arquivo "main.js" e tente novamente.');
    }


    const portas = await serialport.SerialPort.list();
    const portaArduino = portas.find((porta) => porta.vendorId == 2341 && porta.productId == 43);
    if (!portaArduino) {
        throw new Error('O arduino não foi encontrado em nenhuma porta serial');
    }
    const arduino = new serialport.SerialPort(
        {
            path: portaArduino.path,
            baudRate: SERIAL_BAUD_RATE
        }
    );
    arduino.on('open', () => {
        console.log(`A leitura do arduino foi iniciada na porta ${portaArduino.path} utilizando Baud Rate de ${SERIAL_BAUD_RATE}`);
    });
    arduino.pipe(new serialport.ReadlineParser({ delimiter: '\r\n' })).on('data', async (data) => {
        //console.log(data);
        const valores = data.split(';');
        
        var dht11Umidade1 = parseFloat(valores[0]);
        var dht11Temperatura1 = parseFloat(valores[1]);

        var dht11Umidade2 = parseFloat(valores[3]);
        var dht11Temperatura2 = parseFloat(valores[4]);

        var dht11Umidade3 = parseFloat(valores[6]);
        var dht11Temperatura3 = parseFloat(valores[7]);

        var dht11Umidade4 = parseFloat(valores[9]);
        var dht11Temperatura4 = parseFloat(valores[10]);

        var dht11Umidade5 = parseFloat(valores[12]);
        var dht11Temperatura5 = parseFloat(valores[13]);

        var dht11Umidade6 = parseFloat(valores[15]);
        var dht11Temperatura6 = parseFloat(valores[16]);

        console.log(data)

        
        

        valoresDht11Umidade.push(dht11Umidade1,dht11Umidade2,dht11Umidade3,dht11Umidade4,dht11Umidade5,dht11Umidade6);
        valoresDht11Temperatura.push(dht11Temperatura1);
        // valoresfkSensor.push(fkSensor);

        console.log(valoresDht11Umidade);
        console.log(valoresDht11Temperatura);

        if (HABILITAR_OPERACAO_INSERIR) {
            if (AMBIENTE == 'producao') {
                // altere!
                // Este insert irá inserir os dados na tabela "medida"
                // -> altere nome da tabela e colunas se necessário
                // Este insert irá inserir dados de fk_aquario id=1 (fixo no comando do insert abaixo)
                // >> Importante! você deve ter o aquario de id 1 cadastrado.
                sqlquery = `INSERT INTO medida (dht11_umidade, dht11_temperatura, luminosidade, lm35_temperatura, chave, momento, fk_aquario) VALUES (${dht11Umidade}, ${dht11Temperatura}, ${luminosidade}, ${lm35Temperatura}, ${chave}, CURRENT_TIMESTAMP, 1)`;

                // CREDENCIAIS DO BANCO REMOTO - SQL SERVER
                // Importante! você deve ter criado o usuário abaixo com os comandos presentes no arquivo
                // "script-criacao-usuario-sqlserver.sql", presente neste diretório.
                const connStr = "Server=servidor-acquatec.database.windows.net;Database=bd-acquatec;User Id=usuarioParaAPIArduino_datawriter;Password=#Gf_senhaParaAPI;";

                function inserirComando(conn, sqlquery) {
                    conn.query(sqlquery);
                    console.log("valores inseridos no banco: ", dht11Umidade + ", " + dht11Temperatura + ", " + fkSensor)
                }

                sql.connect(connStr)
                    .then(conn => inserirComando(conn, sqlquery))
                    .catch(err => console.log("erro! " + err));

            } else if (AMBIENTE == 'desenvolvimento') {

                // altere!
                // Este insert irá inserir os dados na tabela "medida"
                // -> altere nome da tabela e colunas se necessário
                // Este insert irá inserir dados de fk_aquario id=1 (fixo no comando do insert abaixo)
                // >> você deve ter o aquario de id 1 cadastrado.
                await poolBancoDados.execute(
                    'INSERT INTO registro (umidade, temperatura, dataHora, fkSensor) VALUES (?, ?, now(), 1)', [dht11Umidade1, dht11Temperatura1]
                );
                await poolBancoDados.execute(
                    'INSERT INTO registro (umidade, temperatura, dataHora, fkSensor) VALUES (?, ?, now(), 2)', [dht11Umidade2, dht11Temperatura2]
                );
                await poolBancoDados.execute(
                    'INSERT INTO registro (umidade, temperatura, dataHora, fkSensor) VALUES (?, ?, now(), 3)', [dht11Umidade3, dht11Temperatura3]
                );
                await poolBancoDados.execute(
                    'INSERT INTO registro (umidade, temperatura, dataHora, fkSensor) VALUES (?, ?, now(), 4)', [dht11Umidade4, dht11Temperatura4]
                );
                await poolBancoDados.execute(
                    'INSERT INTO registro (umidade, temperatura, dataHora, fkSensor) VALUES (?, ?, now(), 5)', [dht11Umidade5, dht11Temperatura5]
                );
                await poolBancoDados.execute(
                    'INSERT INTO registro (umidade, temperatura, dataHora, fkSensor) VALUES (?, ?, now(), 6)', [dht11Umidade6, dht11Temperatura6]
                );
                console.log("valores inseridos no banco: ")

            } else {
                throw new Error('Ambiente não configurado. Verifique o arquivo "main.js" e tente novamente.');
            }
        }
    });
    arduino.on('error', (mensagem) => {
        console.error(`Erro no arduino (Mensagem: ${mensagem}`)
    });
}


// não altere!
const servidor =(
    valoresDht11Umidade,
    valoresDht11Temperatura,
) => {
    const app = express();
    app.use((request, response, next) => {
        response.header('Access-Control-Allow-Origin', '*');
        response.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
        next();
    });
    app.listen(SERVIDOR_PORTA, () => {
        console.log(`API executada com sucesso na porta ${SERVIDOR_PORTA}`);
    });
    app.get('/sensores/dht11/umidade', (_, response) => {
        return response.json(valoresDht11Umidade);
    });
    app.get('/sensores/dht11/temperatura', (_, response) => {
        return response.json(valoresDht11Temperatura);
    });
}

(async () => {
    const valoresDht11Umidade = [];
    const valoresDht11Temperatura = [];
    // var fkSensor = [];
    await serial(
        valoresDht11Umidade,
        valoresDht11Temperatura,
        // fkSensor,
        
    );
    servidor(
        valoresDht11Umidade,
        valoresDht11Temperatura,
        // fkSensor,
    );
})();
