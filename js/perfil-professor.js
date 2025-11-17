// ===================================
// PERFIL DO PROFESSOR
// ===================================

// Dados adicionais dos professores
const teacherData = {
  'roberto.martins@colegio.edu.br': {
    events: [
      { date: '15/11/2024', type: 'prova', description: 'Álgebra e Geometria', classes: '3º Ano A, B, C' },
      { date: '22/11/2024', type: 'prova', description: 'Cálculo', classes: '3º Ano A, B' },
      { date: '25/11/2024', type: 'trabalho', description: 'Lista de Exercícios', classes: '3º Ano B' },
      { date: '30/11/2024', type: 'prova', description: 'Trigonometria', classes: '3º Ano C' }
    ]
  },
  'fernanda.souza@colegio.edu.br': {
    events: [
      { date: '16/11/2024', type: 'trabalho', description: 'Análise de Texto Literário', classes: '3º Ano A, B, C' },
      { date: '27/11/2024', type: 'prova', description: 'Redação e Interpretação', classes: '3º Ano A, C' },
      { date: '28/11/2024', type: 'trabalho', description: 'Seminário de Poesia', classes: '3º Ano B' },
      { date: '02/12/2024', type: 'prova', description: 'Literatura Brasileira', classes: '3º Ano A, B, C' }
    ]
  }
};

// Verificar autenticação
checkAuth();

// Obter dados do usuário
const user = getCurrentUser();

// Preencher informações profissionais
document.getElementById('teacherName').textContent = user.name;
document.getElementById('teacherDepartment').textContent = user.department;
document.getElementById('userDisplay').textContent = '👤 ' + user.name.split(' ')[0];
document.getElementById('teacherId').textContent = user.id;
document.getElementById('email').textContent = user.email;
document.getElementById('phone').textContent = user.phone;
document.getElementById('office').textContent = user.office;
document.getElementById('officeHours').textContent = user.officeHours;

// Preencher eventos
const eventsContainer = document.getElementById('eventsContainer');
const events = teacherData[user.email]?.events || [];

let eventsHTML = '';
events.forEach(event => {
  const eventTypeClass = event.type === 'prova' ? 'prova' : 'trabalho';
  const eventTypeLabel = event.type === 'prova' ? 'Prova' : 'Trabalho';
  
  eventsHTML += `
    <tr>
      <td>${event.date}</td>
      <td><span class="event-type ${eventTypeClass}">${eventTypeLabel}</span></td>
      <td>${event.description}</td>
      <td>${event.classes}</td>
    </tr>
  `;
});

eventsContainer.innerHTML = eventsHTML;
