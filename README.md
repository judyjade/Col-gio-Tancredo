# Portal de Ajuda - Colégio Estadual Cívico-Militar Tancredo de Almeida Neves

## 📋 Descrição

Site estático completo para o Colégio Estadual Cívico-Militar Tancredo de Almeida Neves, localizado em Foz do Iguaçu, Paraná. O portal oferece acesso seguro para alunos e professores, com sistema de autenticação simulado e perfis personalizados.

## 🎨 Design e Cores

O site utiliza as cores características de colégios cívico-militares:

- **Azul Marinho (#1a3a52)**: Cor primária, representa autoridade e confiança
- **Azul Médio (#2d5a7b)**: Cor secundária para gradientes
- **Dourado (#d4af37)**: Cor de destaque, representa excelência
- **Branco e Cinza**: Cores neutras para melhor legibilidade

## 📁 Estrutura do Projeto

```
colegio_help/
├── index.html                 # Página inicial
├── css/
│   └── style.css             # Estilos principais (cores, layout, responsividade)
├── js/
│   └── auth.js               # Lógica de autenticação e dados de usuários
├── pages/
│   ├── login-aluno.html      # Página de login para alunos
│   ├── login-professor.html  # Página de login para professores
│   ├── perfil-aluno.html     # Perfil do aluno (dados pessoais, notas, horário)
│   └── perfil-professor.html # Perfil do professor (informações profissionais, turmas)
└── README.md                  # Este arquivo
```

## 🚀 Como Usar

### 1. Abrir o Site

O site é totalmente estático e pode ser aberto de duas formas:

**Opção A: Abrir arquivo local**
- Navegue até a pasta `colegio_help`
- Clique duas vezes em `index.html`
- O site abrirá no navegador padrão

**Opção B: Usar servidor local (recomendado)**
```bash
cd colegio_help
python3 -m http.server 8000
```
Depois acesse: `http://localhost:8000`

### 2. Navegar no Site

#### Página Inicial (Home)
- Apresenta informações sobre o colégio
- Botões de acesso rápido para login de alunos e professores
- Seções: Sobre, Serviços, Contato

#### Login de Aluno
- **URL**: `pages/login-aluno.html`
- **Credenciais de teste**:
  - Email: `joao.silva@colegio.edu.br` | Senha: `123456`
  - Email: `maria.oliveira@colegio.edu.br` | Senha: `123456`

#### Login de Professor
- **URL**: `pages/login-professor.html`
- **Credenciais de teste**:
  - Email: `roberto.martins@colegio.edu.br` | Senha: `123456`
  - Email: `fernanda.souza@colegio.edu.br` | Senha: `123456`

#### Perfil do Aluno
- Após login bem-sucedido, o aluno é redirecionado para seu perfil
- **Informações disponíveis**:
  - Dados pessoais (matrícula, data de nascimento, telefone, endereço)
  - Responsável/Guardião
  - Notas por disciplina
  - Horário de aulas (segunda a sexta)
  - Lista de disciplinas

#### Perfil do Professor
- Após login bem-sucedido, o professor é redirecionado para seu perfil
- **Informações disponíveis**:
  - Dados profissionais (ID, departamento, sala/escritório)
  - Horário de atendimento
  - Experiência e formação acadêmica
  - Disciplinas que leciona
  - Turmas atribuídas
  - Total de alunos

## 🔐 Sistema de Autenticação

### Como Funciona

O sistema de autenticação é **totalmente simulado** usando `localStorage` do navegador:

1. Usuário insere email e senha na página de login
2. O JavaScript valida contra a lista de usuários pré-configurados em `js/auth.js`
3. Se válido, os dados do usuário são salvos em `localStorage`
4. O usuário é redirecionado para sua página de perfil
5. Ao fazer logout, os dados são removidos de `localStorage`

### Dados de Usuários Pré-configurados

**Alunos:**
- João Silva Santos (ALU001)
- Maria Oliveira Costa (ALU002)

**Professores:**
- Dr. Roberto Alves Martins (PROF001) - Ciências Exatas
- Dra. Fernanda Souza Lima (PROF002) - Linguagens e Códigos

### Adicionar Novos Usuários

Para adicionar novos usuários, edite o arquivo `js/auth.js`:

```javascript
const users = {
  novo_usuario: {
    id: 'ID_UNICO',
    name: 'Nome Completo',
    email: 'email@colegio.edu.br',
    password: '123456',
    role: 'student', // ou 'teacher'
    // ... outros campos específicos
  }
};
```

## 🎯 Funcionalidades Principais

### ✅ Implementado

- [x] Página inicial responsiva com design moderno
- [x] Sistema de login para alunos e professores
- [x] Autenticação com localStorage
- [x] Perfil completo do aluno com notas e horário
- [x] Perfil completo do professor com turmas
- [x] Design responsivo (mobile, tablet, desktop)
- [x] Cores institucionais do colégio
- [x] Navegação intuitiva
- [x] Footer com informações de contato
- [x] Logout seguro

### 🔄 Possíveis Melhorias Futuras

- [ ] Integração com banco de dados real
- [ ] Sistema de recuperação de senha
- [ ] Envio de notificações por email
- [ ] Dashboard com estatísticas
- [ ] Sistema de mensagens entre alunos e professores
- [ ] Calendário acadêmico
- [ ] Galeria de fotos
- [ ] Blog/Notícias do colégio

## 📱 Responsividade

O site é totalmente responsivo e funciona perfeitamente em:

- 📱 Smartphones (320px e acima)
- 📱 Tablets (768px e acima)
- 💻 Desktops (1200px e acima)

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilos, gradientes, flexbox, grid
- **JavaScript (Vanilla)**: Lógica de autenticação e manipulação do DOM
- **localStorage**: Persistência de dados do usuário

## 📝 Notas Importantes

1. **Dados Locais**: Todos os dados são armazenados no `localStorage` do navegador. Ao limpar o cache, os dados de login serão perdidos.

2. **Sem Backend**: Este é um site 100% estático. Não há servidor backend, banco de dados ou autenticação real.

3. **Dados de Teste**: Os dados de alunos e professores são fictícios e servem apenas para demonstração.

4. **Segurança**: Este site é apenas para fins educacionais/demonstrativos. Para produção, seria necessário implementar segurança real (HTTPS, backend seguro, etc).

## 📞 Informações de Contato

**Colégio Estadual Cívico-Militar Tancredo de Almeida Neves**
- 📍 Foz do Iguaçu, Paraná, Brasil
- 📧 Email: contato@colegio.edu.br
- 📱 Telefone: (45) 3521-1234

## 📄 Licença

Este projeto foi criado especificamente para o Colégio Estadual Cívico-Militar Tancredo de Almeida Neves.

---

**Desenvolvido com ❤️ para a comunidade educacional de Foz do Iguaçu**
