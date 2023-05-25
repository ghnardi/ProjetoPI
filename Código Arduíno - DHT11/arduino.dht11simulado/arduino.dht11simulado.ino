# include "DHT.h"
# define dht_type DHT11

int dht_pin = A0;

DHT dht_1 = DHT(dht_pin, dht_type);

float temperature;

void setup()

{

  Serial.begin(9600);

  dht_1.begin();

}

void loop()

{

  float umidade = dht_1.readHumidity();

  float temperatura = dht_1.readTemperature();

  float temperaturaSimulada = (temperatura * 0.39) + 6.89;
  float umidadeSimulada = (umidade * 0.4) + 37.8;

  float sensor1Temperatura = temperaturaSimulada * 1.2;
  float sensor1Umidade = umidadeSimulada;

  float sensor2Temperatura = temperaturaSimulada * 1.22;
  float sensor2Umidade = umidadeSimulada * 1.01;

  float sensor3Temperatura = temperaturaSimulada * 1.15;
  float sensor3Umidade = umidadeSimulada * 0.97;

  float sensor4Temperatura = temperaturaSimulada * 0.8;
  float sensor4Umidade = umidadeSimulada * 0.75;

  float sensor5Temperatura = temperaturaSimulada * 1.4;
  float sensor5Umidade = umidadeSimulada * 0.52;

  float sensor6Temperatura = temperaturaSimulada * 1;
  float sensor6Umidade = umidadeSimulada * 0.82;

  if (isnan(temperatura) or isnan(umidade))

  {

    Serial.println("Erro ao ler o DHT");

  }

  else

  {

    Serial.print(sensor1Temperatura);

    Serial.print(";");

    Serial.print(sensor1Umidade);

    Serial.print(";");
    Serial.print(1);
    
Serial.print(";");

    Serial.print(sensor2Temperatura);

    Serial.print(";");

    Serial.print(sensor2Umidade);

    Serial.print(";");
    Serial.print(2);
    
Serial.print(";");


    Serial.print(sensor3Temperatura);

    Serial.print(";");

    Serial.print(sensor3Umidade);

    Serial.print(";");
    Serial.print(3);
    
Serial.print(";");


  Serial.print(sensor4Temperatura);

  Serial.print(";");

  Serial.print(sensor4Umidade);

  Serial.print(";");
  Serial.print(4);
  
Serial.print(";");
  

Serial.print(sensor5Temperatura);

Serial.print(";");

Serial.print(sensor5Umidade);

Serial.print(";");
Serial.print(5);

Serial.print(";");


Serial.print(sensor6Temperatura);

Serial.print(";");

Serial.print(sensor6Umidade);

Serial.print(";");
Serial.println(6);

}


delay(3000);
}
