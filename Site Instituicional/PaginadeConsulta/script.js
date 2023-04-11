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

function clickMenu(){
    if (menumenu.style.display == "flex") {
        menumenu.style.display = 'none'
        iconmenumenu.innerHTML = 'menu'
} else {
    menumenu.style.display = "flex"
    iconmenumenu.innerHTML = "close"
}
}


function clickBloco1() {
    blocobloco2.style.backgroundColor = "#2E2109"
    blocobloco3.style.backgroundColor = "#2E2109"
    blocobloco4.style.backgroundColor = "#2E2109"
    hidemenubloco2.style.backgroundColor = "#2E2109"
    hidemenubloco3.style.backgroundColor = "#2E2109"
    hidemenubloco4.style.backgroundColor = "#2E2109"
    dashdash2.style.display = 'none'
    dashdash2.style.display = 'none'
    dashdash4.style.display = 'none'

    if (dashdash1.style.display == 'flex') {
        blocobloco1.style.backgroundColor = "#2E2109"
        dashdash1.style.display = 'none'
        hidemenubloco1.style.backgroundColor = "#2E2109"
    } else {
        dashdash1.style.display = 'flex'
        blocobloco1.style.backgroundColor = "#6D4A00"
        hidemenubloco1.style.backgroundColor = "#6D4A00"
    }
}

function clickBloco2() {
    if (dashdash2.style.display == "none") {
        blocobloco1.style.backgroundColor = "#2E2109"
        blocobloco4.style.backgroundColor = "#2E2109"
        blocobloco3.style.backgroundColor = "#2E2109"
        hidemenubloco1.style.backgroundColor = "#2E2109"
        hidemenubloco4.style.backgroundColor = "#2E2109"
        hidemenubloco3.style.backgroundColor = "#2E2109"
        dashdash1.style.display = 'none'
        dashdash2.style.display = 'none'
        dashdash4.style.display = 'none'

        hidemenubloco2.style.backgroundColor = "#6D4A00"
        blocobloco2.style.backgroundColor = "#6D4A00"
        dashdash2.style.display = "flex"
    } else {
        dashdash2.style.display = "none"
        blocobloco2.style.backgroundColor = "#2E2109"
        hidemenubloco2.style.backgroundColor = "#2E2109"
    }
}

function clickBloco3() {
    if (dashdash2.style.display == "none") {
        blocobloco1.style.backgroundColor = "#2E2109"
        blocobloco2.style.backgroundColor = "#2E2109"
        blocobloco4.style.backgroundColor = "#2E2109"
        hidemenubloco1.style.backgroundColor = "#2E2109"
        hidemenubloco2.style.backgroundColor = "#2E2109"
        hidemenubloco4.style.backgroundColor = "#2E2109"
        dashdash1.style.display = 'none'
        dashdash2.style.display = 'none'
        dashdash4.style.display = 'none'

        hidemenubloco3.style.backgroundColor = "#6D4A00"
        blocobloco3.style.backgroundColor = "#6D4A00"
        dashdash2.style.display = "flex"
    } else {
        dashdash2.style.display = "none"
        blocobloco3.style.backgroundColor = "#2E2109"
        hidemenubloco3.style.backgroundColor = "#2E2109"
    }

}

function clickBloco4() {
    if (dashdash4.style.display == "none") {
        blocobloco1.style.backgroundColor = "#2E2109"
        blocobloco2.style.backgroundColor = "#2E2109"
        blocobloco3.style.backgroundColor = "#2E2109"
        hidemenubloco1.style.backgroundColor = "#2E2109"
        hidemenubloco2.style.backgroundColor = "#2E2109"
        hidemenubloco3.style.backgroundColor = "#2E2109"
        dashdash1.style.display = 'none'
        dashdash2.style.display = 'none'
        dashdash2.style.display = 'none'

        hidemenubloco4.style.backgroundColor = "#6D4A00"
        blocobloco4.style.backgroundColor = "#6D4A00"
        dashdash4.style.display = "flex"
    } else {
        dashdash4.style.display = "none"
        blocobloco4.style.backgroundColor = "#2E2109"
        hidemenubloco4.style.backgroundColor = "#2E2109"
    }

}

function clickHide01() {
    blocobloco3.style.backgroundColor = "#2E2109"
    hidemenubloco3.style.backgroundColor = "#2E2109"
    dashdash3.style.display = 'none'
    blocobloco2.style.backgroundColor = "#2E2109"
    hidemenubloco2.style.backgroundColor = "#2E2109"
    dashdash2.style.display = 'none'
    blocobloco4.style.backgroundColor = "#2E2109"
    hidemenubloco4.style.backgroundColor = "#2E2109"
    dashdash4.style.display = 'none'

    if (dashdash1.style.display == 'flex') {


        blocobloco1.style.backgroundColor = "#2E2109"
        dashdash1.style.display = 'none'
        hidemenubloco1.style.backgroundColor = "#2E2109"
    } else {
        dashdash1.style.display = 'flex'
        blocobloco1.style.backgroundColor = "#6D4A00"
        hidemenubloco1.style.backgroundColor = "#6D4A00"
    }
}

function clickHide02() {
    if (dashdash2.style.display == "none") {
        blocobloco3.style.backgroundColor = "#2E2109"
        hidemenubloco3.style.backgroundColor = "#2E2109"
        dashdash3.style.display = 'none'
        blocobloco1.style.backgroundColor = "#2E2109"
        hidemenubloco1.style.backgroundColor = "#2E2109"
        dashdash1.style.display = 'none'
        blocobloco4.style.backgroundColor = "#2E2109"
        hidemenubloco4.style.backgroundColor = "#2E2109"
        dashdash4.style.display = 'none'

        hidemenubloco2.style.backgroundColor = "#6D4A00"
        blocobloco2.style.backgroundColor = "#6D4A00"
        dashdash2.style.display = "flex"
    } else {
        dashdash2.style.display = "none"
        blocobloco2.style.backgroundColor = "#2E2109"
        hidemenubloco2.style.backgroundColor = "#2E2109"
    }

}

function clickHide03() {
    if (dashdash3.style.display == "none") {
        blocobloco1.style.backgroundColor = "#2E2109"
        hidemenubloco1.style.backgroundColor = "#2E2109"
        dashdash1.style.display = 'none'
        blocobloco2.style.backgroundColor = "#2E2109"
        hidemenubloco2.style.backgroundColor = "#2E2109"
        dashdash2.style.display = 'none'
        blocobloco4.style.backgroundColor = "#2E2109"
        hidemenubloco4.style.backgroundColor = "#2E2109"
        dashdash4.style.display = 'none'

        hidemenubloco3.style.backgroundColor = "#6D4A00"
        blocobloco3.style.backgroundColor = "#6D4A00"
        dashdash3.style.display = "flex"
    } else {
        dashdash3.style.display = "none"
        blocobloco3.style.backgroundColor = "#2E2109"
        hidemenubloco3.style.backgroundColor = "#2E2109"
    }

}
function clickHide04() {
    if (dashdash4.style.display == "none") {
        blocobloco1.style.backgroundColor = "#2E2109"
        hidemenubloco1.style.backgroundColor = "#2E2109"
        dashdash1.style.display = 'none'
        blocobloco2.style.backgroundColor = "#2E2109"
        hidemenubloco2.style.backgroundColor = "#2E2109"
        dashdash2.style.display = 'none'
        blocobloco3.style.backgroundColor = "#2E2109"
        hidemenubloco3.style.backgroundColor = "#2E2109"
        dashdash3.style.display = 'none'

        hidemenubloco4.style.backgroundColor = "#6D4A00"
        blocobloco4.style.backgroundColor = "#6D4A00"
        dashdash4.style.display = "flex"
    } else {
        dashdash4.style.display = "none"
        blocobloco4.style.backgroundColor = "#2E2109"
        hidemenubloco4.style.backgroundColor = "#2E2109"
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