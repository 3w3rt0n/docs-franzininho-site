(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{108:function(e,o,i){"use strict";i.r(o),i.d(o,"frontMatter",(function(){return a})),i.d(o,"metadata",(function(){return c})),i.d(o,"toc",(function(){return l})),i.d(o,"default",(function(){return p}));var n=i(3),t=i(7),r=(i(0),i(139)),a={id:"circuitpython-hello-world",title:"Hello World!",slug:"/franzininho-wifi/exemplos-circuitpython/hello-world",description:"Neste texto vamos fazer nosso Blink - Pisca LED com a Franzininho WiFi",author:"Diana Santos"},c={unversionedId:"FranzininhoWifi/exemplos-circuitpython/circuitpython-hello-world",id:"FranzininhoWifi/exemplos-circuitpython/circuitpython-hello-world",isDocsHomePage:!1,title:"Hello World!",description:"Neste texto vamos fazer nosso Blink - Pisca LED com a Franzininho WiFi",source:"@site/docs/FranzininhoWifi/exemplos-circuitpython/hello-world.md",slug:"/franzininho-wifi/exemplos-circuitpython/hello-world",permalink:"/docs-franzininho-site/docs/franzininho-wifi/exemplos-circuitpython/hello-world",editUrl:"https://github.com/Franzininho/docs-franzininho-site/edit/main/docs/FranzininhoWifi/exemplos-circuitpython/hello-world.md",version:"current",sidebar:"docs",previous:{title:"Instalando as ferramentas",permalink:"/docs-franzininho-site/docs/franzininho-wifi/exemplos-circuitpython/ferramentas"},next:{title:"Primeiros Passos com Arduino",permalink:"/docs-franzininho-site/docs/franzininho-wifi/exemplos-arduino/primeiros-passos"}},l=[{value:"Materiais necess\xe1rios",id:"materiais-necess\xe1rios",children:[]},{value:"C\xf3digo",id:"c\xf3digo",children:[]},{value:"An\xe1lise do c\xf3digo",id:"an\xe1lise-do-c\xf3digo",children:[]},{value:"Conclus\xe3o",id:"conclus\xe3o",children:[]}],s={toc:l};function p(e){var o=e.components,a=Object(t.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},s,a,{components:o,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Nesse primeiro  exemplo faremos um blink LED, nosso \u201cHello, World!\u201d com a placa Franzininho WiFi programada em CircuitPython. Assim, aquecemos os motores para explorar diversas aplica\xe7\xf5es com CircuitPython na Franzininho WiFi."),Object(r.b)("h2",{id:"materiais-necess\xe1rios"},"Materiais necess\xe1rios"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"1 Placa Franzininho Wifi com CircuitPython;"),Object(r.b)("li",{parentName:"ul"},"1 Protoboard;"),Object(r.b)("li",{parentName:"ul"},"1 LED vermelho 3 mm;"),Object(r.b)("li",{parentName:"ul"},"1 resistor 330 \u03a9;"),Object(r.b)("li",{parentName:"ul"},"Jumpers.")),Object(r.b)("p",null,"Circuito\nNosso primeiro circuito \xe9 bem simples. Realize a seguinte montagem:"),Object(r.b)("p",null,Object(r.b)("img",{alt:"franzininho-wifi-hello-world",src:i(294).default})),Object(r.b)("h2",{id:"c\xf3digo"},"C\xf3digo"),Object(r.b)("p",null,"Digite o c\xf3digo abaixo no arquivo code.py que est\xe1 no diret\xf3rio CIRCUITPY e salve o arquivo:"),Object(r.b)("p",null,"Obs. Provavelmente voc\xea encontrar\xe1 outro c\xf3digo no arquivo code.py. Apague-o e insira o c\xf3digo novo."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),'""" Hello, World! (Pisca LED)"""\nimport board\nimport timefrom digitalio import DigitalInOut, Direction\n\n# Configurando o pino do LED, o led que configurei foi o pino 4 = IO4\nled = DigitalInOut(board.IO4)\nled.direction = Direction.OUTPUT\n\n#loop infinito - executando sempre\nwhile True:    \n    led.value = True\n    time.sleep(0.5)\n    led.value = False\n    time.sleep(0.5)\n')),Object(r.b)("p",null,"Finalizando a edi\xe7\xe3o do arquivo, salve-o.\nAp\xf3s salvar o arquivo o LED pisca em intervalos de 0,5 segundos. (Blink LED)"),Object(r.b)("h2",{id:"an\xe1lise-do-c\xf3digo"},"An\xe1lise do c\xf3digo"),Object(r.b)("p",null,"Para acessar os pinos da placa precisamos importar o m\xf3dulo board:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"import board\n")),Object(r.b)("p",null,"Como  precisaremos de intervalos de temporiza\xe7\xe3o importamos o m\xf3dulo sleep:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"import time\n")),Object(r.b)("p",null,"O LED foi conectado ao pino 4(IO4) da Franzininho WiFi. Como o LED \xe9 um atuador, preciamos configurar o pino como uma sa\xedda digital. Para isso, precisamos importar os seguintes m\xf3dulos:\nfrom digitalio import DigitalInOut, Direction"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"from digitalio import DigitalInOut, Direction\n")),Object(r.b)("p",null,"Com os m\xf3dulos importados podemos acessar as fun\xe7\xf5es de configura\xe7\xe3o do pino digital:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"led = DigitalInOut(board.IO4)\nled.direction = Direction.OUTPUT\n")),Object(r.b)("p",null,"Note que primeiro mapeamos o pino e depois  configuramos a dire\xe7\xe3o."),Object(r.b)("p",null,"Para que o LED fique piscando infinitamente em intervalos de 500 ms, fazemos um loop infinito com o la\xe7o while. O valor do LED \xe9 invertido a cada 0,5 s loop:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"while True:    \n    led.value = True\n    time.sleep(0.5)\n    led.value = False\n    time.sleep(0.5)\n")),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Sugest\xe3o")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Altere o tempo de intervalo para 0.1 e 1 e observe o efeito."))),Object(r.b)("h2",{id:"conclus\xe3o"},"Conclus\xe3o"),Object(r.b)("p",null,"Neste primeiro exemplo de programa\xe7\xe3o da  Franzininho WiFi com o CircuitPython fizemos um c\xf3digo simples em Python para piscar o LED em intervalos de 0,5 segundos. Esse exemplo serviu para nos ensinar como importar as bibliotecas, configurar o pino como sa\xedda digital e criar um loop infinito para piscar o LED. Voc\xea pode alterar o intervalo de tempo alterando o par\xe2metro na fun\xe7\xe3o sleep.\nCom esse exemplo dominado, podemos passar para a pr\xf3xima etapa."))}p.isMDXComponent=!0},139:function(e,o,i){"use strict";i.d(o,"a",(function(){return d})),i.d(o,"b",(function(){return b}));var n=i(0),t=i.n(n);function r(e,o,i){return o in e?Object.defineProperty(e,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[o]=i,e}function a(e,o){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),i.push.apply(i,n)}return i}function c(e){for(var o=1;o<arguments.length;o++){var i=null!=arguments[o]?arguments[o]:{};o%2?a(Object(i),!0).forEach((function(o){r(e,o,i[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(i,o))}))}return e}function l(e,o){if(null==e)return{};var i,n,t=function(e,o){if(null==e)return{};var i,n,t={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],o.indexOf(i)>=0||(t[i]=e[i]);return t}(e,o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],o.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(t[i]=e[i])}return t}var s=t.a.createContext({}),p=function(e){var o=t.a.useContext(s),i=o;return e&&(i="function"==typeof e?e(o):c(c({},o),e)),i},d=function(e){var o=p(e.components);return t.a.createElement(s.Provider,{value:o},e.children)},m={inlineCode:"code",wrapper:function(e){var o=e.children;return t.a.createElement(t.a.Fragment,{},o)}},u=t.a.forwardRef((function(e,o){var i=e.components,n=e.mdxType,r=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(i),u=n,b=d["".concat(a,".").concat(u)]||d[u]||m[u]||r;return i?t.a.createElement(b,c(c({ref:o},s),{},{components:i})):t.a.createElement(b,c({ref:o},s))}));function b(e,o){var i=arguments,n=o&&o.mdxType;if("string"==typeof e||n){var r=i.length,a=new Array(r);a[0]=u;var c={};for(var l in o)hasOwnProperty.call(o,l)&&(c[l]=o[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var s=2;s<r;s++)a[s]=i[s];return t.a.createElement.apply(null,a)}return t.a.createElement.apply(null,i)}u.displayName="MDXCreateElement"},294:function(e,o,i){"use strict";i.r(o),o.default=i.p+"assets/images/0x00-Hello_world-6a2d3444f01a16a485a1084d37794f5d.png"}}]);