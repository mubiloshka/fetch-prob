import users from './users.js';

const userContainer = document.getElementById('users');
const searchInput = document.getElementById('poiskInput');
const toggleBtn = document.getElementById('toggle');

function renderUsers(usersList) {
    userContainer.innerHTML = '';
    
    if (usersList.length === 0) {
        userContainer.innerHTML = '<div class="no-results">Пользователи не найдены</div>';
        return;
    }

    usersList.forEach(user => {
        const card = document.createElement('div');
        card.classList.add('user-card');
        
        
        card.innerHTML = `
            <h2 class="user-name">${user.name}</h2>
            <p class="user-username">@${user.username}</p>
            <div class="user-details">
                <p class="user-detail"> ${user.email}</p>
                <p class="user-detail"> ${user.phone}</p>
                <p class="user-detail"> ${user.address.city}, ${user.address.street}</p>
            </div>
        `;
        
        userContainer.appendChild(card);
    });
}








function filterUsers() {
    let filteredUsers = users;
    const searchValue = searchInput.value.toLowerCase().trim();
    
    if (searchValue) {
        filteredUsers = filteredUsers.filter(user => 
            user.name.toLowerCase().includes(searchValue)
        );
    }
    
    renderUsers(filteredUsers);
}

function toggleTheme() {
    const body = document.body;
    const isDark = body.classList.contains('dark');
    
    if (isDark) {
        body.classList.remove('dark');
        toggleBtn.innerHTML = '🌙 Dark Mode';
    } else {
        body.classList.add('dark');
        toggleBtn.innerHTML = '☀️ Light Mode';
    }
}

searchInput.addEventListener('input', filterUsers);
toggleBtn.addEventListener('click', toggleTheme);


renderUsers(users);
 