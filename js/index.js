const params = new URLSearchParams(window.location.search);
const productId = params.get("produto");

const conteudo = document.querySelector("#produto-info");

// Verifica qual produto foi selecionado
switch (productId) {
  case "1":
    conteudo.innerHTML = `
        <h1>BodyBoard</h1>
        <section class='container'>
            <div class='container-title'>
                <img src="img/bodyBoard.jpg" alt="">
            </div>
            <form class='container-form'>
                <h2>Material</h2>
                <select>
                    <option value='polietileno'>Polietileno</option>
                    <option value='eps'>EPS</option>
                    <option value='poliuretano'>Poliuretano</option>
                </select>
                <h2>Tail</h2>
                <select>
                    <option value='batTail'>Bat Tail</option>
                    <option value='crescentTail'>Crescent Tail</option>
                </select>
                <a>Alugar</a>
            </form>
        </section>
    `;
    break;
  case "2":
    conteudo.innerHTML = `
        <h1>SkimBoard</h1>
        <section class='container'>
            <div class='container-title'>
                <img src="img/pranchaSkin.jpeg" alt="">
            </div>
            <form class='container-form'>
                <h2>Núcleo</h2>
                <select>
                    <option value='polietileno'>Madeira</option>
                    <option value='espuma'>Espuma</option>
                    <option value='fibraDeCarbono'>Fibra de Carbono</option>
                    <option value='kevlar'>Kevlar</option>
                    <option value='grafite'>Grafite</option>
                    <option value='fibraDeVidro'>Fibra de Vidro</option>
                    </select>
                <h2>Categoria de Uso</h2>
                <select>
                    <option value='batTail'>Flatland/Inland</option>
                    <option value='crescentTail'>Wave skimming</option>
                </select>
                <a>Alugar</a>
            </form>
        </section>
    `;
    break;
  case "3":
    conteudo.innerHTML = `
        <h1>LongBoard</h1>
        <section class='container'>
            <div class='container-title'>
                <img src="img/prancha4.jpeg" alt="">
            </div>
            <form class='container-form'>
                <h2>Tipo</h2>
                <select>
                    <option value='classic'>Classic/Noserider</option>
                    <option value='performance'>Performance</option>
                    <option value='hybrid'>Hybrid/Mid-Length</option>
                    <option value='glider'>Glider</option>
                </select>
                <h2>Material</h2>
                <select>
                    <option value='poliester'>Poliéster</option>
                    <option value='epoxi'>Epóxi</option>
                    <option value='madeira'>Madeira</option>
                    <option value='carbono'>Carbono</option>
                    </select>
                <a>Alugar</a>
            </form>
        </section>
    `;
    break;
  default:
    conteudo.innerHTML = "Produto não encontrado.";
}
