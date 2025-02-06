function alugarProduto(produto) {
  switch (produto) {
    case 1:
      window.location.href = "aluguelBoard.html";
      break;
    case 2:
      window.location.href = "aluguelSkim.html";
      break;
    case 3:
      window.location.href = "aluguelLong.html";
      break;
    default:
      console.log("Produto não encontrado");
  }
}

function voltar() {
  window.history.back();
}

document.addEventListener("DOMContentLoaded", () => {
  // Verifica se a página tem os elementos antes de executar o código
  const selectMaterial = document.getElementById("select-material");
  const selectTail = document.getElementById("select-tail");
  const textoResultado = document.getElementById("textoResultado");
  const textoResultado2 = document.getElementById("textoResultado2");

  if (selectMaterial && selectTail) {
    let textos = {
      polietileno:
        "Mais flexível, ideal para água fria e resistente a impactos.",
      eps: "Mais leve, indicado para ondas pequenas e médias em climas quentes.",
      poliuretano:
        "Mais rígido e com maior controle, utilizado por profissionais.",
      batTail:
        "Indicado para quem surfa apenas em Prone e quer mais capacidade de manobra.",
      crescentTail:
        "O tipo de tail mais popular, indicado para quem surfa em Prone e Drop Knee.",
      madeira:
        "Mais pesada e resistente, ideal para skimming flatland e iniciantes.",
      espuma: "Mais leve e flexível, ideal para wave skimming e iniciantes.",
      fibraDeCarbono:
        "Mais cara, ideal para profissionais e especialistas em flatland.",
      fibraDeVidro:
        "Versátil, ideal para quem gosta de surfar em ondas e superfícies planas.",
      flatLand:
        "Ideal para águas rasas e arenosas, como riachos, lagos, poças, rios e marés baixas ao longo da praia.",
      waveSkimming:
        "Ideal para linhas de costas onde as ondas quebram sobre águas mais profundas",
      classic:
        "Feito para um surf mais suave e estiloso, com manobras clássicas como hang five e hang ten.",
      performance:
        "Projetado para um surf mais moderno, permitindo curvas mais agressivas e até aéreos.",
      hybrid:
        "Um meio-termo entre um longboard e um shortboard. Boa opção para quem quer transição entre long e short.",
      glider:
        "Longboards bem compridos (10'+ pés), feitos para deslizamento máximo na onda.",
      poliester: "Mais pesado, mas oferece melhor controle e estabilidade.",
      epoxi: "Mais leve e resistente que o poliéster, ideal para performance.",
      madeiraPaulownia: "Mais ecológicos e extremamente duráveis.",
      carbono:
        "Alta tecnologia, mais leve e rígido, utilizado para longboards de alta performance.",
    };

    let valorSelecionado1 = selectMaterial.value;
    let valorSelecionado2 = selectTail.value;

    textoResultado.textContent = textos[valorSelecionado1] || "";
    textoResultado2.textContent = textos[valorSelecionado2] || "";

    selectMaterial.addEventListener("change", () => {
      valorSelecionado1 = selectMaterial.value;
      textoResultado.textContent = textos[valorSelecionado1] || "";
    });

    selectTail.addEventListener("change", () => {
      valorSelecionado2 = selectTail.value;
      textoResultado2.textContent = textos[valorSelecionado2] || "";
    });
  } else {
    console.warn("Página sem selects. Código ignorado.");
  }

  // MENU HAMBÚRGUER
  const menuToggle = document.getElementById("menu-toggle");
  const menuNav = document.getElementById("menu-nav");

  if (menuToggle && menuNav) {
    menuToggle.addEventListener("click", function () {
      menuNav.classList.toggle("active");
    });
  } else {
    console.warn("Página sem menu. Código ignorado.");
  }
});
