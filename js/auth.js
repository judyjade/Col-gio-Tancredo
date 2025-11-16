// ===================================
// DADOS DE USUÁRIOS PRÉ-CONFIGURADOS
// ===================================

const users = {
  // Alunos
  aluno1: {
    id: 'ALU001',
    name: 'João Silva Santos',
    email: 'joao.silva@colegio.edu.br',
    password: '123456',
    role: 'student',
    class: '3º Ano - Turma A',
    enrollment: 'ALU-2024-001',
    birthDate: '15/03/2006',
    phone: '(45) 99999-1111',
    address: 'Rua das Flores, 123 - Foz do Iguaçu, PR',
    guardian: 'Maria Silva Santos',
    subjects: ['Matemática', 'Português', 'História', 'Biologia'],
    grades: {
      'Matemática': '8.5',
      'Português': '9.0',
      'História': '8.0',
      'Biologia': '7.5'
    },
    schedule: [
      { day: 'Segunda', time: '07:00 - 12:00', subjects: 'Aulas Regulares' },
      { day: 'Terça', time: '07:00 - 12:00', subjects: 'Aulas Regulares' },
      { day: 'Quarta', time: '07:00 - 12:00', subjects: 'Aulas Regulares + Ed. Física' },
      { day: 'Quinta', time: '07:00 - 12:00', subjects: 'Aulas Regulares' },
      { day: 'Sexta', time: '07:00 - 12:00', subjects: 'Aulas Regulares' }
    ]
  },
  aluno2: {
    id: 'ALU002',
    name: 'Maria Oliveira Costa',
    email: 'maria.oliveira@colegio.edu.br',
    password: '123456',
    role: 'student',
    class: '2º Ano - Turma B',
    enrollment: 'ALU-2024-002',
    birthDate: '22/07/2007',
    phone: '(45) 99999-2222',
    address: 'Avenida Brasil, 456 - Foz do Iguaçu, PR',
    guardian: 'Carlos Oliveira Costa',
    subjects: ['Matemática', 'Português', 'Química', 'Física'],
    grades: {
      'Matemática': '9.0',
      'Português': '8.5',
      'Química': '8.0',
      'Física': '7.8'
    },
    schedule: [
      { day: 'Segunda', time: '07:00 - 12:00', subjects: 'Aulas Regulares' },
      { day: 'Terça', time: '07:00 - 12:00', subjects: 'Aulas Regulares + Laboratório' },
      { day: 'Quarta', time: '07:00 - 12:00', subjects: 'Aulas Regulares' },
      { day: 'Quinta', time: '07:00 - 12:00', subjects: 'Aulas Regulares' },
      { day: 'Sexta', time: '07:00 - 12:00', subjects: 'Aulas Regulares + Projeto' }
    ]
  },

  // Professores
  prof1: {
    id: 'PROF001',
    name: 'Dr. Roberto Alves Martins',
    email: 'roberto.martins@colegio.edu.br',
    password: '123456',
    role: 'teacher',
    department: 'Ciências Exatas',
    subjects: ['Matemática', 'Física'],
    classes: ['1º Ano - Turma A', '2º Ano - Turma B', '3º Ano - Turma A'],
    phone: '(45) 98888-1111',
    office: 'Sala 15 - Bloco A',
    officeHours: 'Terça e Quinta - 12:30 às 13:30',
    experience: '15 anos',
    education: 'Mestrado em Educação Matemática - UFPR',
    students: 87
  },
  prof2: {
    id: 'PROF002',
    name: 'Dra. Fernanda Souza Lima',
    email: 'fernanda.souza@colegio.edu.br',
    password: '123456',
    role: 'teacher',
    department: 'Linguagens e Códigos',
    subjects: ['Português', 'Literatura'],
    classes: ['1º Ano - Turma B', '2º Ano - Turma A', '3º Ano - Turma B'],
    phone: '(45) 98888-2222',
    office: 'Sala 22 - Bloco B',
    officeHours: 'Segunda e Quarta - 12:30 às 13:30',
    experience: '12 anos',
    education: 'Mestrado em Letras - USP',
    students: 92
  }
};

// ===================================
// FUNÇÕES DE AUTENTICAÇÃO
// ===================================

function login(email, password, role) {
  // Procurar usuário nos dados
  for (let key in users) {
    const user = users[key];
    if (user.email === email && user.password === password && user.role === role) {
      // Salvar no localStorage
      localStorage.setItem('currentUser', JSON.stringify(user));
      localStorage.setItem('isLoggedIn', 'true');
      return { success: true, user: user };
    }
  }
  return { success: false, message: 'Email ou senha incorretos' };
}

function logout() {
  localStorage.removeItem('currentUser');
  localStorage.removeItem('isLoggedIn');
  window.location.href = '/index.html';
}

function getCurrentUser() {
  const user = localStorage.getItem('currentUser');
  return user ? JSON.parse(user) : null;
}

function isLoggedIn() {
  return localStorage.getItem('isLoggedIn') === 'true';
}

function checkAuth() {
  if (!isLoggedIn()) {
    window.location.href = '/index.html';
  }
}

// ===================================
// ATUALIZAR INTERFACE COM USUÁRIO
// ===================================

function updateUserInterface() {
  const user = getCurrentUser();
  const authButtons = document.querySelector('.auth-buttons');
  
  if (user && authButtons) {
    authButtons.innerHTML = `
      <span style="color: white; display: flex; align-items: center; gap: 0.5rem;">
        👤 ${user.name.split(' ')[0]}
      </span>
      <button class="btn btn-secondary" onclick="logout()">Sair</button>
    `;
  }
}

// Atualizar interface ao carregar a página
document.addEventListener('DOMContentLoaded', updateUserInterface);
