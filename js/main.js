// ===================================
// AUTENTICAÇÃO E GERENCIAMENTO DE USUÁRIO
// ===================================

// Dados de teste
const students = [
  {
    id: 1,
    email: 'joao.silva@colegio.edu.br',
    password: '123456',
    name: 'João Silva',
    class: '3º Ano A',
    enrollment: 'MAT001',
    birthDate: '15/03/2007',
    email: 'joao.silva@colegio.edu.br',
    phone: '(45) 98765-4321',
    address: 'Rua das Flores, 123'
  },
  {
    id: 2,
    email: 'maria.oliveira@colegio.edu.br',
    password: '123456',
    name: 'Maria Oliveira',
    class: '3º Ano B',
    enrollment: 'MAT002',
    birthDate: '22/07/2007',
    email: 'maria.oliveira@colegio.edu.br',
    phone: '(45) 99876-5432',
    address: 'Avenida Principal, 456'
  }
];

const teachers = [
  {
    id: 1,
    email: 'roberto.martins@colegio.edu.br',
    password: '123456',
    name: 'Dr. Roberto Martins',
    department: 'Matemática',
    id: 'PROF001',
    email: 'roberto.martins@colegio.edu.br',
    phone: '(45) 3521-5678',
    office: 'Sala 201',
    officeHours: 'Terça e Quinta, 14h-16h'
  },
  {
    id: 2,
    email: 'fernanda.souza@colegio.edu.br',
    password: '123456',
    name: 'Dra. Fernanda Souza',
    department: 'Português',
    id: 'PROF002',
    email: 'fernanda.souza@colegio.edu.br',
    phone: '(45) 3521-5679',
    office: 'Sala 202',
    officeHours: 'Segunda e Quarta, 15h-17h'
  }
];

// Função de login
function login(email, password, type) {
  const users = type === 'student' ? students : teachers;
  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    localStorage.setItem('currentUser', JSON.stringify(user));
    localStorage.setItem('userType', type);
    return { success: true, message: 'Login realizado com sucesso!' };
  } else {
    return { success: false, message: 'Email ou senha incorretos!' };
  }
}

// Função para obter usuário atual
function getCurrentUser() {
  const user = localStorage.getItem('currentUser');
  return user ? JSON.parse(user) : null;
}

// Função para obter tipo de usuário
function getUserType() {
  return localStorage.getItem('userType');
}

// Função para verificar autenticação
function checkAuth() {
  const user = getCurrentUser();
  if (!user) {
    window.location.href = '../index.html';
  }
}

// Função de logout
function logout() {
  localStorage.removeItem('currentUser');
  localStorage.removeItem('userType');
  window.location.href = '../index.html';
}

// ===================================
// MENU HAMBÚRGUER
// ===================================

function initHamburgerMenu() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      mobileMenu.classList.toggle('active');
    });

    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    mobileMenuLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
      });
    });
  }
}

// Inicializar menu hambúrguer quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', initHamburgerMenu);
