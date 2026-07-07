// ==========================================
// BANCO DE DADOS INICIAL (LISTA OFICIAL)
// ==========================================
const crismandosOficiais = [
    { id: "j_01", nome: "Alícia Andrade Mazias", catequista: "Ana Júlia" },
    { id: "j_02", nome: "Ana Beatriz", catequista: "Duda / Ju" }, 
    { id: "j_03", nome: "Ana Júlia Matiello", catequista: "Duda / Ju" },
    { id: "j_04", nome: "Ana Luiza Silveira Bonvechio", catequista: "Duda / Ju" },
    { id: "j_05", nome: "Beatriz de Carmo Ferreira", catequista: "Ana Júlia" },
    { id: "j_06", nome: "Bruno Henrique Bertoncelli Pinto", catequista: "Léo / Joao" },
    { id: "j_07", nome: "Cecília Steca de Albuquerque Lins", catequista: "Alice" },
    { id: "j_08", nome: "Diogo Marinello dos Santos", catequista: "Léo / Joao" },
    { id: "j_09", nome: "Enzo Henrique de Paula Ramos", catequista: "Léo / Joao" },
    { id: "j_10", nome: "Felipe Angeloni Bernardes Teixeira", catequista: "Gabriel" },
    { id: "j_11", nome: "Felipe Francisco Figueiredo", catequista: "Léo / Joao" },
    { id: "j_12", nome: "Francisca Yohana Sousa Nunes", catequista: "Pietra" },
    { id: "j_13", nome: "Gabriel Barreto", catequista: "Brenda" },
    { id: "j_14", nome: "Gabriel Brasileiro Cavalcanti", catequista: "Léo / Joao" },
    { id: "j_15", nome: "Gabriel de Holanda Simões", catequista: "Gabriel" },
    { id: "j_16", nome: "Gabriella Nascimento Ribeiro", catequista: "Brenda" },
    { id: "j_17", nome: "Guilherme Sberci da Rocha", catequista: "Léo / Joao" },
    { id: "j_18", nome: "Gustavo Almeida Abrahão de Campos", catequista: "Gabriel" },
    { id: "j_19", nome: "Gustavo Angelo de Carvalho", catequista: "Alice" },
    { id: "j_20", nome: "Gustavo Gomes Casarim", catequista: "Léo / Joao" },
    { id: "j_21", nome: "Hannah Beatrice Dopfer Schmitz", catequista: "Brenda" },
    { id: "j_22", nome: "Isabella Ferreira da Silva", catequista: "Alice" },
    { id: "j_23", nome: "Isabella Nascimento ribeiro de sá", catequista: "Alice" },
    { id: "j_24", nome: "Isabella Pinheiro Giannelli", catequista: "Pietra" },
    { id: "j_25", nome: "Isabelly Cristina Matiello", catequista: "Ana Júlia" },
    { id: "j_26", nome: "Laura Quartaroli Silva", placeholder: "", catequista: "Brenda" },
    { id: "j_27", nome: "Laura Trujillo de Souza Ferreira", catequista: "Duda / Ju" },
    { id: "j_28", nome: "Lauren", catequista: "Alice" },
    { id: "j_29", nome: "Lucas Zanni Otaviano", catequista: "Brenda" },
    { id: "j_30", nome: "Maria", catequista: "Pietra" },
    { id: "j_31", nome: "Maria Clara de Paula Duarte", catequista: "Duda / Ju" },
    { id: "j_32", nome: "Maria Luiza Gonçalves", catequista: "Duda / Ju" },
    { id: "j_33", nome: "Maria Valentina de Souza Feriani", catequista: "Duda / Ju" },
    { id: "j_34", nome: "Marina Francisco Camargo", catequista: "Pietra" },
    { id: "j_35", nome: "Mateus Zanoni", catequista: "Gabriel" },
    { id: "j_36", nome: "Matheus Nucci Adami", catequista: "Alice" },
    { id: "j_37", nome: "Miguel Galvão de Mesquita", catequista: "Ana Júlia" },
    { id: "j_38", nome: "Miguel volf ferrari", catequista: "Pietra" },
    { id: "j_39", nome: "Murillo Fernandes Borelli", catequista: "Léo / Joao" },
    { id: "j_40", nome: "Paulo César Camargo Neto", catequista: "Duda / Ju" },
    { id: "j_41", nome: "Pedro Henrique de Oliveira Hepp", catequista: "Gabriel" },
    { id: "j_42", nome: "Pedro Henrique Ignacio Roque", catequista: "Duda / Ju" },
    { id: "j_43", nome: "Pedro M. S. Pinheiro", catequista: "Duda / Ju" },
    { id: "j_44", nome: "Pedro Paulo Lemos Azarias", catequista: "Duda / Ju" },
    { id: "j_45", nome: "Rafael Arcanjo Garcia Andreoni", catequista: "Pietra" },
    { id: "j_46", nome: "Sofia Campanhol de Lima", catequista: "Ana Júlia" },
    { id: "j_47", nome: "Vinícius de Souza Cobra", catequista: "Ana Júlia" },
    { id: "j_48", nome: "Vitor Scabelo", catequista: "Léo / Joao" },
    { id: "j_49", nome: "Wagner de Abreu Filho", catequista: "Léo / Joao" },
    { id: "j_50", nome: "Pedro", catequista: "Sem Equipe" },
    { id: "j_51", nome: "João Pedro", catequista: "Sem Equipe" }
];

// Instâncias globais para os gráficos não duplicarem
let chartAttendanceInstance = null;
let chartGenderInstance = null;

// ==========================================
// CONTROLE DE INICIALIZAÇÃO E NAVEGAÇÃO
// ==========================================
window.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar-menu');
    if (sidebar) {
        sidebar.classList.remove('md:translate-x-0');
    }

    if (!localStorage.getItem('crismandos')) {
        localStorage.setItem('crismandos', JSON.stringify(crismandosOficiais));
    }

    const ultimaAba = localStorage.getItem('aba_atual') || 'home';
    switchTab(ultimaAba);

    try { renderCrismandos(); } catch(e) { console.error(e); }
    try { renderCatequistas(); } catch(e) { console.error(e); }
    try { renderDesafios(); } catch(e) { console.error(e); }
    try { renderChamadasSalvas(); } catch(e) { console.error(e); }
    try { carregarFotoSalva(); } catch(e) { console.error(e); }
    try { atualizarRankingsAmemoria(); } catch(e) { console.error(e); }
});

function toggleMenu() {
    const sidebar = document.getElementById('sidebar-menu');
    if (sidebar) {
        if (sidebar.classList.contains('-translate-x-full')) {
            sidebar.classList.remove('-translate-x-full');
            sidebar.classList.add('translate-x-0');
        } else {
            sidebar.classList.remove('translate-x-0');
            sidebar.classList.add('-translate-x-full');
        }
    }
}

function switchTab(tabId) {
    const tabs = ['home', 'crismandos', 'catequistas', 'chamada', 'amemoria', 'estatisticas'];
    localStorage.setItem('aba_atual', tabId);

    const titulosAbas = {
        'home': 'Menu Inicial',
        'crismandos': 'Cadastro de Crismandos',
        'catequistas': 'Anjos / Protegidos',
        'chamada': 'Chamada',
        'amemoria': 'Amemoria',
        'estatisticas': 'Estatísticas'
    };

    const topTitleElement = document.getElementById('main-top-title');
    if (topTitleElement && titulosAbas[tabId]) {
        topTitleElement.textContent = titulosAbas[tabId];
    }

    tabs.forEach(id => {
        const contentSection = document.getElementById(`content-${id}`);
        const tabButton = document.getElementById(`tab-${id}`);
        
        if (contentSection) {
            if (id === tabId) {
                contentSection.classList.remove('hidden');
            } else {
                contentSection.classList.add('hidden');
            }
        }
        
        if (tabButton) {
            if (id === tabId) {
                tabButton.className = "w-full text-left px-3 py-2.5 rounded-lg font-medium transition bg-red-50 text-red-600 flex items-center space-x-2";
            } else {
                tabButton.className = "w-full text-left px-3 py-2.5 rounded-lg font-medium transition text-gray-600 hover:bg-gray-50 hover:text-gray-900 flex items-center space-x-2";
            }
        }
    });

    if (tabId === 'estatisticas') {
        renderizarGraficosEstatisticas();
    }

    const sidebar = document.getElementById('sidebar-menu');
    if (sidebar) {
        sidebar.classList.remove('translate-x-0');
        sidebar.classList.add('-translate-x-full');
    }

    if (tabId === 'amemoria') {
        try { atualizarRankingsAmemoria(); } catch(e){}
    }
}

// ==========================================
// LÓGICA DE GERAÇÃO DOS GRÁFICOS
// ==========================================
function renderizarGraficosEstatisticas() {
    const chamadasDB = JSON.parse(localStorage.getItem('chamadas_salvas')) || [];
    const listaCrismandos = JSON.parse(localStorage.getItem('crismandos')) || [];

    let totalPresencas = 0;
    let totalFaltas = 0;

    chamadasDB.forEach(c => {
        totalPresencas += c.totalPresencas || 0;
        totalFaltas += c.totalFaltas || 0;
    });

    if (chamadasDB.length === 0) {
        totalPresencas = 1; 
        totalFaltas = 0;
    }

    const ctxAttendance = document.getElementById('chart-attendance');
    if (ctxAttendance) {
        if (chartAttendanceInstance) chartAttendanceInstance.destroy();
        chartAttendanceInstance = new Chart(ctxAttendance, {
            type: 'doughnut',
            data: {
                labels: ['Presenças', 'Faltas'],
                datasets: [{
                    data: [totalPresencas, totalFaltas],
                    backgroundColor: ['#22c55e', '#ef4444'],
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { position: 'bottom' }
                }
            }
        });
    }

    let presencasMeninos = 0;
    let presencasMeninas = 0;

    chamadasDB.forEach(chamada => {
        chamada.presencas.forEach(registro => {
            if (registro.status === 'presente') {
                const crismando = listaCrismandos.find(j => j.id === registro.jovemId);
                if (crismando) {
                    if (crismando.genero === 'F') {
                        presencasMeninas++;
                    } else {
                        presencasMeninos++; 
                    }
                }
            }
        });
    });

    if (presencasMeninos === 0 && presencasMeninas === 0) {
        presencasMeninos = 0;
        presencasMeninas = 0;
    }

    const ctxGender = document.getElementById('chart-gender');
    if (ctxGender) {
        if (chartGenderInstance) chartGenderInstance.destroy();
        chartGenderInstance = new Chart(ctxGender, {
            type: 'pie',
            data: {
                labels: ['Meninos (Presenças)', 'Meninas (Presenças)'],
                datasets: [{
                    data: [presencasMeninos, presencasMeninas],
                    backgroundColor: ['#3b82f6', '#ec4899'],
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { position: 'bottom' }
                }
            }
        });
    }
}

// ==========================================
// FUNÇÕES AUXILIARES DE MODAL
// ==========================================
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('hidden');
        if (modalId === 'modal-desafio') {
            document.getElementById('challenge-title').value = '';
            document.getElementById('challenge-desc').value = '';
            document.getElementById('enquete-options-container').innerHTML = `
                <div class="flex items-center space-x-2 option-row">
                  <input type="text" placeholder="Adicionar opção (Ex: Foto com ramo)" oninput="handleEnqueteInput(this)" class="enquete-text border rounded-lg p-2 flex-1 text-sm outline-none focus:border-red-400">
                  <input type="number" placeholder="Pts" class="enquete-pts border rounded-lg p-2 w-20 text-sm outline-none focus:border-red-400">
                </div>
            `;
        }
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('hidden');
    }
}

// ==========================================
// LÓGICA DE CONTROLE DE PRESENÇA (CHAMADA)
// ==========================================
function abrirNovaChamada() {
    const idEdicaoInput = document.getElementById('chamada-id-edicao');
    if (idEdicaoInput) idEdicaoInput.value = '';

    const hoje = new Date().toISOString().split('T')[0];
    const dataInput = document.getElementById('chamada-data');
    if (dataInput) dataInput.value = hoje;
    
    document.getElementById('chamada-tema').value = '';
    document.getElementById('chamada-desc').value = '';

    const container = document.getElementById('container-chamada-jovens');
    if (!container) return;

    const dadosJovens = localStorage.getItem('crismandos');
    if (!dadosJovens) return;

    let lista = JSON.parse(dadosJovens);
    lista.sort((a, b) => a.nome.localeCompare(b.nome));

    container.innerHTML = lista.map(jovem => `
        <button type="button" 
                onclick="alternarStatusChamada(this)" 
                data-id="${jovem.id}" 
                data-status="pendente" 
                class="flex items-center space-x-3 p-3 rounded-xl border bg-gray-50 border-gray-200 text-left hover:bg-gray-100 transition w-full shadow-sm">
            <span class="status-indicator w-3.5 h-3.5 rounded-full bg-gray-300 border border-gray-400 shrink-0"></span>
            <div class="min-w-0 flex-1">
                <p class="text-sm font-bold text-gray-800 truncate">${jovem.nome}</p>
            </div>
        </button>
    `).join('');

    openModal('modal-chamada');
}

function editarChamada(chamadaId) {
    const chamadasDB = JSON.parse(localStorage.getItem('chamadas_salvas')) || [];
    const llamadaParaEditar = chamadasDB.find(c => c.id === chamadaId); 
    
    if (!llamadaParaEditar) return;

    document.getElementById('chamada-id-edicao').value = llamadaParaEditar.id;
    document.getElementById('chamada-data').value = llamadaParaEditar.data; 
    document.getElementById('chamada-tema').value = llamadaParaEditar.tema;
    document.getElementById('chamada-desc').value = llamadaParaEditar.descricao || '';

    const container = document.getElementById('container-chamada-jovens');
    if (!container) return;

    const dadosJovens = localStorage.getItem('crismandos');
    if (!dadosJovens) return;

    let listaJovens = JSON.parse(dadosJovens);
    listaJovens.sort((a, b) => a.nome.localeCompare(b.nome));

    container.innerHTML = listaJovens.map(jovem => {
        const registroSalvo = llamadaParaEditar.presencas.find(p => p.jovemId === jovem.id);
        const status = registroSalvo ? registroSalvo.status : 'pendente';
        
        let classesBotao = "flex items-center space-x-3 p-3 rounded-xl border text-left transition w-full shadow-sm ";
        let classesIndicador = "status-indicator w-3.5 h-3.5 rounded-full border shrink-0 ";

        if (status === 'presente') {
            classesBotao += "bg-green-50 border-green-300 text-gray-800";
            classesIndicador += "bg-green-500 border-green-600";
        } else if (status === 'falta') {
            classesBotao += "bg-red-50 border-red-300 text-gray-800";
            classesIndicador += "bg-red-500 border-red-600";
        } else {
            classesBotao += "bg-gray-50 border-gray-200 text-gray-800 hover:bg-gray-100";
            classesIndicador += "bg-gray-300 border-gray-400";
        }

        return `
            <button type="button" 
                    onclick="alternarStatusChamada(this)" 
                    data-id="${jovem.id}" 
                    data-status="${status}" 
                    class="${classesBotao}">
                <span class="${classesIndicador}"></span>
                <div class="min-w-0 flex-1">
                    <p class="text-sm font-bold text-gray-800 truncate">${jovem.nome}</p>
                </div>
            </button>
        `;
    }).join('');

    openModal('modal-chamada');
}

function alternarStatusChamada(btnElement) {
    const statusAtual = btnElement.getAttribute('data-status');
    const indicador = btnElement.querySelector('.status-indicator');

    if (statusAtual === 'pendente') {
        btnElement.setAttribute('data-status', 'presente');
        btnElement.className = "flex items-center space-x-3 p-3 rounded-xl border bg-green-50 border-green-300 text-left transition w-full shadow-sm";
        indicador.className = "status-indicator w-3.5 h-3.5 rounded-full bg-green-500 border border-green-600 shrink-0";
    } else if (statusAtual === 'presente') {
        btnElement.setAttribute('data-status', 'falta');
        btnElement.className = "flex items-center space-x-3 p-3 rounded-xl border bg-red-50 border-red-300 text-left transition w-full shadow-sm";
        indicador.className = "status-indicator w-3.5 h-3.5 rounded-full bg-red-500 border border-red-600 shrink-0";
    } else {
        btnElement.setAttribute('data-status', 'pendente');
        btnElement.className = "flex items-center space-x-3 p-3 rounded-xl border bg-gray-50 border-gray-200 text-left hover:bg-gray-100 transition w-full shadow-sm";
        indicador.className = "status-indicator w-3.5 h-3.5 rounded-full bg-gray-300 border border-gray-400 shrink-0";
    }
}

function salvarChamadaDB() {
    const idEdicao = document.getElementById('chamada-id-edicao').value;
    const dataVal = document.getElementById('chamada-data').value;
    const temaVal = document.getElementById('chamada-tema').value.trim();
    const descVal = document.getElementById('chamada-desc').value.trim();

    if (!dataVal || !temaVal) {
        alert("Por favor, preencha pelo menos a Data e o Tema do Encontro!");
        return;
    }

    const container = document.getElementById('container-chamada-jovens');
    const botoes = container.querySelectorAll('button');
    
    let presencasCont = 0;
    let faltasCont = 0;
    let listaAlunosStatus = [];

    botoes.forEach(btn => {
        const id = btn.getAttribute('data-id');
        const status = btn.getAttribute('data-status');

        if (status === 'presente') presencasCont++;
        if (status === 'falta') faltasCont++;

        listaAlunosStatus.push({ jovemId: id, status: status });
    });

    let chamadasDB = JSON.parse(localStorage.getItem('chamadas_salvas')) || [];

    if (idEdicao) {
        const index = chamadasDB.findIndex(c => c.id === idEdicao);
        if (index !== -1) {
            chamadasDB[index] = {
                id: idEdicao,
                data: dataVal,
                tema: temaVal,
                descricao: descVal,
                totalPresencas: presencasCont,
                totalFaltas: faltasCont,
                presencas: listaAlunosStatus
            };
        }
    } else {
        const novaChamada = {
            id: 'chamada_' + Date.now(),
            data: dataVal,
            tema: temaVal,
            descricao: descVal,
            totalPresencas: presencasCont,
            totalFaltas: faltasCont,
            presencas: listaAlunosStatus
        };
        chamadasDB.push(novaChamada);
    }

    localStorage.setItem('chamadas_salvas', JSON.stringify(chamadasDB));
    closeModal('modal-chamada');
    renderChamadasSalvas();
}

function renderChamadasSalvas() {
    const containerLista = document.getElementById('lista-chamadas-salvas');
    if (!containerLista) return;

    const chamadasDB = JSON.parse(localStorage.getItem('chamadas_salvas')) || [];

    if (chamadasDB.length === 0) {
        containerLista.innerHTML = `<p class="text-gray-400 text-sm text-center py-6">Nenhuma chamada registrada. Clique em + Nova Chamada!</p>`;
        return;
    }

    chamadasDB.sort((a, b) => new Date(b.data) - new Date(a.data));

    containerLista.innerHTML = chamadasDB.map(chamada => {
        const [ano, mes, dia] = chamada.data.split('-');
        const dataFormatada = `${dia}/${mes}/${ano}`;

        return `
            <div class="bg-white rounded-xl shadow p-4 border border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative group">
                <div class="space-y-1 min-w-0 flex-1">
                    <div class="flex items-center space-x-2">
                        <span class="bg-red-100 text-red-600 text-xs font-bold px-2.5 py-0.5 rounded-full">${dataFormatada}</span>
                        <h3 class="font-extrabold text-gray-900 text-base truncate">📖 ${chamada.tema}</h3>
                    </div>
                    <p class="text-xs text-gray-500 line-clamp-2 pr-4">${chamada.descricao || 'Sem observações anotadas.'}</p>
                </div>
                <div class="flex items-center space-x-4 shrink-0 bg-gray-50 p-2 rounded-lg border text-xs font-medium pr-16">
                    <span class="text-green-600">🟢 ${chamada.totalPresencas} Presenças</span>
                    <span class="text-red-600">🔴 ${chamada.totalFaltas} Faltas</span>
                </div>
                <div class="absolute right-4 top-1/2 -translate-y-1/2 flex items-center space-x-2">
                    <button onclick="editarChamada('${chamada.id}')" class="text-gray-400 hover:text-blue-500 text-sm p-1 rounded transition" title="Editar">✏️</button>
                    <button onclick="deletarChamada('${chamada.id}')" class="text-gray-400 hover:text-red-500 text-sm p-1 rounded transition" title="Excluir">🗑️</button>
                </div>
            </div>
        `;
    }).join('');
}

function deletarChamada(chamadaId) {
    if (confirm("Tem certeza que deseja apagar o registro de chamada desse encontro?")) {
        let chamadasDB = JSON.parse(localStorage.getItem('chamadas_salvas')) || [];
        chamadasDB = chamadasDB.filter(c => c.id !== chamadaId); 
        localStorage.setItem('chamadas_salvas', JSON.stringify(chamadasDB));
        renderChamadasSalvas();
    }
}

// ==========================================
// LÓGICA DA ARENA DO AMEMORIA 
// ==========================================
function handleEnqueteInput(inputElement) {
    const container = document.getElementById('enquete-options-container');
    if (!container) return;
    
    let rows = Array.from(container.getElementsByClassName('option-row'));
    const lastRow = rows[rows.length - 1];
    const lastInput = lastRow ? lastRow.querySelector('.enquete-text') : null;
    
    if (inputElement === lastInput && inputElement.value.trim() !== "") {
        const newRow = document.createElement('div');
        newRow.className = "flex items-center space-x-2 option-row";
        newRow.innerHTML = `
            <input type="text" placeholder="Adicionar opção..." oninput="handleEnqueteInput(this)" class="enquete-text border rounded-lg p-2 flex-1 text-sm outline-none focus:border-red-400">
            <input type="number" placeholder="Pts" class="enquete-pts border rounded-lg p-2 w-20 text-sm outline-none focus:border-red-400">
        `;
        container.appendChild(newRow);
        return;
    }

    rows = Array.from(container.getElementsByClassName('option-row'));
    if (rows.length > 1) {
        for (let i = rows.length - 2; i >= 0; i--) {
            const textVal = rows[i].querySelector('.enquete-text').value.trim();
            const nextRow = rows[i + 1];
            const nextTextVal = nextRow ? nextRow.querySelector('.enquete-text').value.trim() : "";
            
            if (textVal === "" && nextTextVal === "") {
                rows[i + 1].remove();
                rows.splice(i + 1, 1);
            }
        }
    }
}

function criarDesafio(event) {
    event.preventDefault();
    const titleInput = document.getElementById('challenge-title');
    const descInput = document.getElementById('challenge-desc');
    const container = document.getElementById('enquete-options-container');
    if (!container) return;

    const textInputs = container.getElementsByClassName('enquete-text');
    const ptsInputs = container.getElementsByClassName('enquete-pts');

    let opcoes = [];
    for (let i = 0; i < textInputs.length; i++) {
        const texto = textInputs[i].value.trim();
        const pontos = parseInt(ptsInputs[i].value) || 0;
        if (texto !== "") opcoes.push({ texto: texto, pontos: pontos });
    }

    if (opcoes.length === 0) {
        alert("Adicione pelo menos uma opção de pontuação!");
        return;
    }

    const novoDesafio = {
        id: 'desafio_' + Date.now(),
        titulo: titleInput.value.trim(),
        descricao: descInput.value.trim(),
        opcoes: opcoes
    };

    let desafiosDB = JSON.parse(localStorage.getItem('gincana_desafios')) || [];
    desafiosDB.push(novoDesafio);
    localStorage.setItem('gincana_desafios', JSON.stringify(desafiosDB));

    closeModal('modal-desafio');
    closeModal('modal-challenge');
    
    document.getElementById('form-desafio').reset();
    renderDesafios(); 
}

function renderDesafios() {
    const grid = document.getElementById('grid-challenges');
    if (!grid) return;

    const desafiosDB = JSON.parse(localStorage.getItem('gincana_desafios')) || [];
    if (desafiosDB.length === 0) {
        grid.innerHTML = `<p class="text-gray-400 text-sm col-span-full text-center py-4">Nenhum desafio criado ainda. Clique em + Novo Desafio!</p>`;
        return;
    }

    grid.innerHTML = desafiosDB.map(desafio => `
        <div class="bg-white rounded-xl shadow p-4 border border-gray-100 flex flex-col relative group">
            <button onclick="deletarDesafio('${desafio.id}')" class="absolute top-3 right-3 text-gray-400 hover:text-red-500 text-sm p-1 rounded transition">🗑️</button>
            <h3 class="font-bold text-gray-900 text-lg mb-1 pr-6">🎯 ${desafio.titulo}</h3>
            <p class="text-xs text-gray-500 mb-3">${desafio.descricao || 'Sem descrição.'}</p>
            <div class="bg-gray-50 rounded-lg p-2 mb-4 space-y-1 text-xs text-gray-600 border">
                <p class="font-bold text-[10px] text-gray-400 uppercase tracking-wider mb-1">Tabela de Alvos:</p>
                ${desafio.opcoes.map(op => `
                    <div class="flex justify-between border-b border-gray-100 last:border-none pb-0.5">
                        <span>▪️ ${op.texto}</span>
                        <span class="font-bold text-red-500">+${op.pontos} pts</span>
                    </div>
                `).join('')}
            </div>
            <button onclick="lancarPontosDesafioModal('${desafio.id}')" class="w-full bg-red-500 hover:bg-red-600 text-white text-xs font-semibold py-2 rounded-lg shadow-sm transition mt-auto">Lançar Pontos</button>
        </div>
    `).join('');
}

function deletarDesafio(challengeId) {
    if (confirm("Tem certeza que deseja remover este desafio?")) {
        let desafiosDB = JSON.parse(localStorage.getItem('gincana_desafios')) || [];
        desafiosDB = desafiosDB.filter(d => d.id !== challengeId);
        localStorage.setItem('gincana_desafios', JSON.stringify(desafiosDB));
        renderDesafios();
    }
}

function lancarPontosDesafioModal(desafioId) {
    const desafiosDB = JSON.parse(localStorage.getItem('gincana_desafios')) || [];
    const desafio = desafiosDB.find(d => d.id === desafioId);
    if (!desafio) return;

    document.getElementById('challenge-modal-title').textContent = `🎯 Pontuar: ${desafio.titulo}`;
    
    const descElement = document.getElementById('challenge-modal-desc');
    if (descElement) {
        descElement.textContent = desafio.descricao || "Selecione o alvo atingido por cada crismando neste desafio.";
    }

    const listContainer = document.getElementById('challenge-scoring-list');
    if (!listContainer) return;

    let listaCrismandos = JSON.parse(localStorage.getItem('crismandos')) || [];
    listaCrismandos.sort((a, b) => a.nome.localeCompare(b.nome));

    listContainer.innerHTML = listaCrismandos.map(jovem => `
        <div class="flex items-center justify-between py-2 border-b border-gray-50 text-sm">
            <span class="font-medium text-gray-800 truncate pr-2">${jovem.nome}</span>
            <select data-jovem-id="${jovem.id}" class="select-pontos-jovem border rounded-lg p-1.5 text-xs bg-gray-50 font-semibold text-gray-700 outline-none focus:border-red-400 max-w-[160px]">
                <option value="0">Nenhum (0 pts)</option>
                ${desafio.opcoes.map(op => `<option value="${op.pontos}">${op.texto} (+${op.pontos})</option>`).join('')}
            </select>
        </div>
    `).join('');

    openModal('modal-challenge');
}

function salvarPontosDesafio() {
    const container = document.getElementById('challenge-scoring-list');
    if (!container) return;

    const dropdowns = container.querySelectorAll('.select-pontos-jovem');
    let listaCrismandos = JSON.parse(localStorage.getItem('crismandos')) || [];
    let pontosDistribuidos = false;

    dropdowns.forEach(select => {
        const jovemId = select.getAttribute('data-jovem-id');
        const pontosAAdicionar = parseInt(select.value) || 0;

        if (pontosAAdicionar > 0) {
            const index = listaCrismandos.findIndex(j => j.id === jovemId);
            if (index !== -1) {
                if (!listaCrismandos[index].pontos) {
                    listaCrismandos[index].pontos = 0;
                }
                listaCrismandos[index].pontos += pontosAAdicionar;
                pontosDistribuidos = true;
            }
        }
    });

    if (pontosDistribuidos) {
        localStorage.setItem('crismandos', JSON.stringify(listaCrismandos));
        alert("Pontuações salvas com sucesso no histórico dos crismandos!");
        
        try { renderCrismandos(); } catch(e){}
        try { atualizarRankingsAmemoria(); } catch(e){}
    }

    closeModal('modal-challenge');
}

function atualizarRankingsAmemoria() {
    const listaCrismandos = JSON.parse(localStorage.getItem('crismandos')) || [];
    
    const listaIndividual = [...listaCrismandos]
        .filter(j => (j.pontos || 0) > 0)
        .sort((a, b) => (b.pontos || 0) - (a.pontos || 0));

    const olIndividual = document.getElementById('leaderboard-individual');
    if (olIndividual) {
        if (listaIndividual.length === 0) {
            olIndividual.innerHTML = `<p class="text-xs text-gray-400 italic">Nenhum ponto lançado ainda.</p>`;
        } else {
            olIndividual.innerHTML = listaIndividual.map((j, idx) => `
                <li class="flex justify-between border-b border-gray-100 py-1 font-medium">
                    <span>${idx + 1}º - ${j.nome}</span>
                    <span class="font-bold text-red-500">${j.pontos} pts</span>
                </li>
            `).join('');
        }
    }

    let pointsPorEquipe = {};
    listaCrismandos.forEach(j => {
        const equipe = j.catequista || "Sem Equipe";
        if (!pointsPorEquipe[equipe]) pointsPorEquipe[equipe] = 0;
        pointsPorEquipe[equipe] += (j.pontos || 0);
    });

    const listaEquipes = Object.keys(pointsPorEquipe)
        .map(nome => ({ nome: nome, pontos: pointsPorEquipe[nome] }))
        .filter(e => e.pontos > 0)
        .sort((a, b) => b.pontos - a.pontos);

    const olTeam = document.getElementById('leaderboard-team');
    if (olTeam) {
        if (listaEquipes.length === 0) {
            olTeam.innerHTML = `<p class="text-xs text-gray-400 italic">Nenhum ponto por equipe acumulado.</p>`;
        } else {
            olTeam.innerHTML = listaEquipes.map((e, idx) => `
                <li class="flex justify-between border-b border-gray-100 py-1 font-medium">
                    <span>${idx + 1}º - 🛡️ ${e.nome}</span>
                    <span class="font-bold text-blue-600">${e.pontos} pts</span>
                </li>
            `).join('');
        }
    }
}

// ==========================================
// RENDERIZADORES DE RELAÇÃO DE CRISMANDOS
// ==========================================
function renderCrismandos() {
    const grid = document.getElementById('grid-crismandos');
    if (!grid) return;
    const dados = localStorage.getItem('crismandos');
    if (!dados) return;

    let lista = JSON.parse(dados);
    lista.sort((a, b) => a.nome.localeCompare(b.nome));

    grid.innerHTML = lista.map(jovem => `
        <div class="bg-white rounded-xl shadow p-4 flex flex-col items-center text-center border border-gray-100">
            <div class="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold text-xl mb-3">
                ${jovem.nome.charAt(0)}
            </div>
            <h3 class="font-bold text-gray-900 text-sm line-clamp-2 min-h-[40px]">${jovem.nome}</h3>
            <p class="text-xs text-gray-500 mb-4">Catequista: ${jovem.catequista}</p>
            <div class="flex space-x-2 mt-auto w-full">
                <button onclick="verFicha('${jovem.id}')" class="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs py-1.5 rounded transition">Ver Ficha</button>
                <button class="bg-red-50 hover:bg-red-100 text-red-600 p-1.5 rounded transition">🗑️</button>
            </div>
        </div>
    `).join('');
}

function renderCatequistas() {
    const grid = document.getElementById('grid-catequistas');
    if (!grid) return;
    const dados = localStorage.getItem('crismandos');
    if (!dados) return;

    let lista = JSON.parse(dados);
    let grupos = {};
    lista.forEach(jovem => {
        if (!grupos[jovem.catequista]) grupos[jovem.catequista] = [];
        grupos[jovem.catequista].push(jovem.nome);
    });

    grid.innerHTML = Object.keys(grupos).map(catequista => `
        <div class="bg-white rounded-xl shadow p-5 border-t-4 border-red-400">
            <h3 class="font-bold text-lg text-gray-800 mb-3 flex items-center justify-between">
                <span>🛡️ ${catequista}</span>
                <span class="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full">${grupos[catequista].length}</span>
            </h3>
            <ul class="text-sm text-gray-600 space-y-1.5 max-h-60 overflow-y-auto pr-2">
                ${grupos[catequista].sort().map(nome => `<li class="border-b border-gray-50 pb-1">▪️ ${nome}</li>`).join('')}
            </ul>
        </div>
    `).join('');
}

// ==========================================
// LÓGICA DE CONTROLE DAS FICHAS DE CRISMANDOS
// ==========================================
function selecionarGenero(genero) {
    const nameInput = document.getElementById('student-name');
    if (nameInput && nameInput.hasAttribute('disabled')) return;

    const btnM = document.getElementById('btn-gender-m');
    const btnF = document.getElementById('btn-gender-f');
    const hiddenInput = document.getElementById('student-gender');

    if (hiddenInput) hiddenInput.value = genero;

    if (genero === 'M') {
        if (btnM) btnM.className = "py-2 rounded-xl border text-sm font-bold transition shadow-sm bg-blue-500 border-blue-600 text-white";
        if (btnF) btnF.className = "py-2 rounded-xl border text-sm font-bold text-gray-600 border-gray-200 hover:bg-pink-500 hover:text-white hover:border-pink-600 transition shadow-sm";
    } else {
        if (btnF) btnF.className = "py-2 rounded-xl border text-sm font-bold transition shadow-sm bg-pink-500 border-pink-600 text-white";
        if (btnM) btnM.className = "py-2 rounded-xl border text-sm font-bold text-gray-600 border-gray-200 hover:bg-blue-500 hover:text-white hover:border-blue-600 transition shadow-sm";
    }
}

function toggleCheckbox(inputId, btnId) {
    const nameInput = document.getElementById('student-name');
    if (nameInput && nameInput.hasAttribute('disabled')) return;

    const input = document.getElementById(inputId);
    const btn = document.getElementById(btnId);

    if (!input || !btn) return;

    if (input.value === 'N') {
        input.value = 'S';
        btn.textContent = 'Sim';
        btn.className = "px-4 py-1 rounded-xl border text-xs font-bold bg-green-500 text-white border-green-600 transition shadow-sm";
    } else {
        input.value = 'N';
        btn.textContent = 'Não';
        btn.className = "px-4 py-1 rounded-xl border text-xs font-bold bg-gray-200 text-gray-600 border-gray-300 transition";
    }
}

function verFicha(jovemId) {
    const lista = JSON.parse(localStorage.getItem('crismandos')) || [];
    const jovem = lista.find(j => j.id === jovemId);

    if (!jovem) return;

    if (document.getElementById('student-id')) document.getElementById('student-id').value = jovem.id;
    if (document.getElementById('student-name')) document.getElementById('student-name').value = jovem.nome;
    if (document.getElementById('student-doc')) document.getElementById('student-doc').value = jovem.documento || '';
    if (document.getElementById('student-birth')) document.getElementById('student-birth').value = jovem.dataNascimento || '';
    if (document.getElementById('student-phone')) document.getElementById('student-phone').value = jovem.telefone || '';
    if (document.getElementById('student-resp-name')) document.getElementById('student-resp-name').value = jovem.responsavelNome || '';
    if (document.getElementById('student-resp-phone')) document.getElementById('student-resp-phone').value = jovem.responsavelTelefone || '';
    if (document.getElementById('student-batismo-local')) document.getElementById('student-batismo-local').value = jovem.batLocal || '';
    if (document.getElementById('student-special')) document.getElementById('student-special').value = jovem.observacao || '';

    selecionarGenero(jovem.genero || 'M');

    const batInput = document.getElementById('student-batizado');
    if (batInput) {
        batInput.value = jovem.batizado === 'S' ? 'N' : 'S'; 
        toggleCheckbox('student-batizado', 'btn-batismo');
    }

    const comInput = document.getElementById('student-comunhao');
    if (comInput) {
        comInput.value = jovem.comunhao === 'S' ? 'N' : 'S';
        toggleCheckbox('student-comunhao', 'btn-comunhao');
    }

    travarCamposFicha(true);

    const rodape = document.querySelector('#form-crismando .flex.justify-end');
    if (rodape) {
        rodape.innerHTML = `
            <button type="button" onclick="closeModal('modal-crismando')" class="px-5 py-2 rounded-xl bg-gray-200 hover:bg-gray-300 font-medium text-sm transition">Fechar</button>
            <button type="button" onclick="destravarEdicaoFicha()" class="px-5 py-2 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-medium text-sm transition">✏️ Editar Ficha</button>
        `;
    }

    openModal('modal-crismando');
}

function travarCamposFicha(status) {
    const campos = ['student-name', 'student-doc', 'student-birth', 'student-phone', 'student-resp-name', 'student-resp-phone', 'student-batismo-local', 'student-special'];
    campos.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            if (status) el.setAttribute('disabled', 'true');
            else el.removeAttribute('disabled');
        }
    });
}

function destravarEdicaoFicha() {
    travarCamposFicha(false);

    const rodape = document.querySelector('#form-crismando .flex.justify-end');
    if (rodape) {
        rodape.innerHTML = `
            <button type="button" onclick="verFicha(document.getElementById('student-id').value)" class="px-5 py-2 rounded-xl bg-gray-200 hover:bg-gray-300 font-medium text-sm transition">Cancelar</button>
            <button type="submit" class="px-5 py-2 rounded-xl bg-green-500 hover:bg-green-600 text-white font-medium text-sm transition">Salvar Alterações</button>
        `;
    }
}

// FUNÇÃO OTIMIZADA: SALVA TANTO UM ALUNO NOVO QUANTO UMA EDIÇÃO
function salvarFichaCrismando(event) {
    event.preventDefault();

    const id = document.getElementById('student-id').value;
    let lista = JSON.parse(localStorage.getItem('crismandos')) || [];
    const index = lista.findIndex(j => j.id === id);

    // Constrói os dados da tela
    const jovemData = {
        id: id,
        nome: document.getElementById('student-name').value.trim(),
        documento: document.getElementById('student-doc').value.trim(),
        dataNascimento: document.getElementById('student-birth').value,
        genero: document.getElementById('student-gender').value,
        telefone: document.getElementById('student-phone').value.trim(),
        responsavelNome: document.getElementById('student-resp-name').value.trim(),
        responsavelTelefone: document.getElementById('student-resp-phone').value.trim(),
        batizado: document.getElementById('student-batizado').value,
        batLocal: document.getElementById('student-batismo-local').value.trim(),
        comunhao: document.getElementById('student-comunhao').value,
        observacao: document.getElementById('student-special').value.trim(),
        // Se já existia no banco, mantemos o catequista e os pontos dele intactos
        catequista: index !== -1 ? lista[index].catequista : "Sem Equipe",
        pontos: index !== -1 ? lista[index].pontos : 0
    };

    if (!jovemData.nome) return alert('Por favor, digite o nome do crismando!');

    if (index !== -1) {
        // Se encontrou o ID, é uma EDIÇÃO. Sobrescreve os dados.
        lista[index] = jovemData;
    } else {
        // Se NÃO encontrou o ID, é um ALUNO NOVO. Adiciona na lista.
        lista.push(jovemData);
    }

    localStorage.setItem('crismandos', JSON.stringify(lista));
    
    closeModal('modal-crismando');
    renderCrismandos(); 
    renderCatequistas(); 
    try { atualizarRankingsAmemoria(); } catch(e){}
}

// FUNÇÃO OTIMIZADA: LIMPA TUDO E ABRE A TELA
function novoCrismando() {
    if (document.getElementById('student-id')) {
        document.getElementById('student-id').value = 'jovem_' + Date.now();
    }
    
    const campos = ['student-name', 'student-doc', 'student-birth', 'student-phone', 'student-resp-name', 'student-resp-phone', 'student-batismo-local', 'student-special'];
    campos.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = '';
    });

    selecionarGenero('M');
    
    const batInput = document.getElementById('student-batizado');
    if (batInput) {
        batInput.value = 'S'; 
        toggleCheckbox('student-batizado', 'btn-batismo');
    }

    const comInput = document.getElementById('student-comunhao');
    if (comInput) {
        comInput.value = 'S'; 
        toggleCheckbox('student-comunhao', 'btn-comunhao');
    }

    travarCamposFicha(false);

    const rodape = document.querySelector('#form-crismando .flex.justify-end');
    if (rodape) {
        rodape.innerHTML = `
            <button type="button" onclick="closeModal('modal-crismando')" class="px-5 py-2 rounded-xl bg-gray-200 hover:bg-gray-300 font-medium text-sm transition">Cancelar</button>
            <button type="submit" class="px-5 py-2 rounded-xl bg-red-500 hover:bg-red-600 text-white font-medium text-sm transition">Cadastrar Crismando</button>
        `;
    }

    openModal('modal-crismando');
}

// ==========================================
// LÓGICA DA FOTO OFICIAL DA TURMA
// ==========================================
const fotoInput = document.getElementById('main-photo-input');
if (fotoInput) {
    fotoInput.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = function(event) {
            const base64Image = event.target.result;
            localStorage.setItem('foto_oficial_turma', base64Image);
            mostrarFotoNaTela(base64Image);
        };
        reader.readAsDataURL(file);
    });
}

function mostrarFotoNaTela(imgSrc) {
    const placeholder = document.getElementById('photo-placeholder');
    const displayImg = document.getElementById('main-photo-display');
    
    if (placeholder && displayImg) {
        placeholder.classList.add('hidden'); 
        displayImg.src = imgSrc;             
        displayImg.classList.remove('hidden'); 
    }
}

function carregarFotoSalva() {
    const fotoSalva = localStorage.getItem('foto_oficial_turma');
    if (fotoSalva) {
        mostrarFotoNaTela(fotoSalva);
    }
}