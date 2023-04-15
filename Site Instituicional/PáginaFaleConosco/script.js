function clickMenuLeft() {
    if (menuleft1.style.display == "flex") {
        menuleft1.style.display = 'none'
        menuleft2.style.display = 'none'
        menuleft3.style.display = 'none'
        menuleft4.style.display = 'none'
        iconmenuleft.style.transform = 'rotate(360deg)'
    } else {
        menuleft1.style.display = 'flex'
        menuleft2.style.display = 'flex'
        menuleft3.style.display = 'flex'
        menuleft4.style.display = 'flex'
        iconmenuleft.style.transform = 'rotate(180deg)'
    }
}

function clickMenu() {
    if (menumenu.style.display == "flex") {
        menumenu.style.display = 'none'
        iconmenumenu.innerHTML = 'menu'
    } else {
        menumenu.style.display = "flex"
        iconmenumenu.innerHTML = "close"
    }
}



function clickBloco1() {
    if (dashdash1.style.display == 'none') {

        menuleft2.style.backgroundColor = '#2E2109'
        menuleft3.style.backgroundColor = '#2E2109'
        menuleft4.style.backgroundColor = '#2E2109'

        dashdash2.style.display = 'none'
        dashdash3.style.display = 'none'
        dashdash4.style.display = 'none'
        dashdash1.style.display = 'flex'
        dashstandby.style.display = 'none'

        menuleft1.style.backgroundColor = '#775201'
        dashdashtexto.innerHTML = `DASHBOARD DA ALA 1`
    } else {
        dashdash1.style.display = 'none'
        menuleft1.style.backgroundColor = '#2E2109'
        dashstandby.style.display = 'flex'
        dashdashtexto.innerHTML = ` `
    }

}

function clickBloco2() {
    
    if (dashdash2.style.display == 'none') {
        menuleft1.style.backgroundColor = '#2E2109'
        menuleft3.style.backgroundColor = '#2E2109'
        menuleft4.style.backgroundColor = '#2E2109'
        menuleft2.style.backgroundColor = '#775201'

        dashdash1.style.display = 'none'
        dashdash3.style.display = 'none'
        dashdash4.style.display = 'none'
        dashdash2.style.display = 'flex'
        dashstandby.style.display = 'none'
        dashdashtexto.innerHTML = `DASHBOARD DA ALA 2`

    } else {
        menuleft2.style.backgroundColor = '#2E2109'
        dashdash2.style.display = 'none'
        dashstandby.style.display = 'flex'
        dashdashtexto.innerHTML = ` `
    }

}

function clickBloco3() {

    if (dashdash3.style.display == 'none') {
        menuleft1.style.backgroundColor = '#2E2109'
        menuleft2.style.backgroundColor = '#2E2109'
        menuleft4.style.backgroundColor = '#2E2109'
        dashdash1.style.display = 'none'
        dashdash2.style.display = 'none'
        dashdash4.style.display = 'none'
        dashdash3.style.display = 'flex'
        dashstandby.style.display = 'none'
        menuleft3.style.backgroundColor = '#775201'
        dashdashtexto.innerHTML = `DASHBOARD DA ALA 3`
    } else {
        dashdash3.style.display = 'none'
        menuleft3.style.backgroundColor = '#2E2109'
        dashstandby.style.display = 'flex'
        dashdashtexto.innerHTML = ` `
    }

}

function clickBloco4() {
    if (dashdash4.style.display == 'none') {
        menuleft1.style.backgroundColor = '#2E2109'
        menuleft2.style.backgroundColor = '#2E2109'
        menuleft3.style.backgroundColor = '#2E2109'
        dashdash1.style.display = 'none'
        dashdash2.style.display = 'none'
        dashdash3.style.display = 'none'
        dashdash4.style.display = 'flex'
        dashstandby.style.display = 'none'
        menuleft4.style.backgroundColor = '#775201'
        dashdashtexto.innerHTML = `DASHBOARD DA ALA 4`
    } else {
        dashdash4.style.display = 'none'
        menuleft4.style.backgroundColor = '#2E2109'
        dashstandby.style.display = 'flex'
        dashdashtexto.innerHTML = ` `
    }

}

function clickPerfil() {
    if (subsub.style.display == 'flex') {
        subsub.style.display = 'none'
    } else {
        subsub.style.display = 'flex'
    }


}


function dashboard() {
    window.location.href = "./dashs/chart.html"
}