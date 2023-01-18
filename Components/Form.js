import { RootComponent } from "https://erixweb.github.io/lsx/lib/lsxdom-build@1.js"

export function ToBin () {
    RootComponent() 
        .put("<h1>BinAPI</h1>")
        .put(`<gray class='text-bin' onClick="document.querySelector('gray.bin-text').style.display = 'block'; document.querySelector('gray.text-bin').style.display = 'none'; document.querySelector('div.bin-text').style.display = 'none';document.querySelector('div.text-bin').style.display = 'block';">Texto a binario</gray>`)
        .put(`<gray class='bin-text' onClick="document.querySelector('gray.text-bin').style.display = 'block'; document.querySelector('gray.bin-text').style.display = 'none'; document.querySelector('div.text-bin').style.display = 'none';document.querySelector('div.bin-text').style.display = 'block';">Binario a texto</gray>`)
        .put(`
            <div class="text-bin">
                <h2>Texto a binario</h2>
                <input type="text" placeholder="Texto a binario." class="textbinval">
                <input type="submit" placeholder="Convertir" onclick='fetch(encodeURI("https://binarytranslate.templit.repl.co/api?text=" + document.querySelector(".textbinval").value)).then(res => res.text()).then(data => document.querySelector("result").innerHTML = data)' value='Traducir'>
            </div>
            <div class="bin-text">
                <h2>Binario a texto</h2>
                <input type="text" placeholder="Binario a texto." class="bintextval">
                <input type="submit" placeholder="Convertir" onclick='fetch("https://binarytranslate.templit.repl.co/api?text=" + document.querySelector(".bintextval").value+"&format=bintotext").then(res => res.text()).then(data => document.querySelector("result").innerHTML = data)' value='Traducir'>
            </div>
            <result></result>
        `)
        return ""
}