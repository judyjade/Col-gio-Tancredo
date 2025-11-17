// ===================================
// PERFIL DO ALUNO
// ===================================

// Dados adicionais dos alunos
const studentData = {
  'joao.silva@colegio.edu.br': {
    grades: {
      'Matemática': 9.5,
      'Português': 8.7,
      'História': 9.0,
      'Ciências': 8.9
    }
  },
  'maria.oliveira@colegio.edu.br': {
    grades: {
      'Matemática': 8.8,
      'Português': 9.7,
      'História': 9.4,
      'Ciências': 9.8
    }
  }
};

// Verificar autenticação
checkAuth();

// Obter dados do usuário
const user = getCurrentUser();

// Preencher informações pessoais
document.getElementById('studentName').textContent = user.name;
document.getElementById('studentClass').textContent = user.class;
document.getElementById('userDisplay').textContent = '👤 ' + user.name.split(' ')[0];
document.getElementById('enrollment').textContent = user.enrollment;
document.getElementById('birthDate').textContent = user.birthDate;
document.getElementById('email').textContent = user.email;
document.getElementById('phone').textContent = user.phone;

// Preencher notas
const gradesContainer = document.getElementById('gradesContainer');
const grades = studentData[user.email]?.grades || {};

let gradesHTML = '<div class="info-row">';
let count = 0;

for (let subject in grades) {
  const grade = grades[subject];
  const gradeColor = grade >= 9 ? '#1b5e20' : grade >= 8 ? '#2e7d32' : '#d32f2f';
  
  gradesHTML += `
    <div class="info-item">
      <div class="info-label">${subject}</div>
      <div class="info-value" style="font-size: 1.5rem; color: ${gradeColor}; font-weight: bold;">${grade}</div>
    </div>
  `;
  count++;
  if (count % 2 === 0) {
    gradesHTML += '</div><div class="info-row">';
  }
}
gradesHTML += '</div>';
gradesContainer.innerHTML = gradesHTML;
