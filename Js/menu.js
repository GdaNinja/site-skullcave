document.addEventListener('DOMContentLoaded', function() {
    const mobileBtn = document.getElementById('mobile_btn');
    const mobileMenu = document.querySelector('.mobile_menu');
    const menuItems = document.querySelectorAll('.mobile_menu-list .menu_item a');

    // Toggle do menu ao clicar no botão
    if (mobileBtn) {
        mobileBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            
            // Troca o ícone entre hambúrguer e X
            const icon = this.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-x');
            } else {
                icon.classList.remove('fa-x');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Fecha o menu ao clicar em um item
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            
            // Volta o ícone para hambúrguer
            const icon = mobileBtn.querySelector('i');
            icon.classList.remove('fa-x');
            icon.classList.add('fa-bars');
        });
    });

    // Fecha o menu ao clicar fora dele
    document.addEventListener('click', function(event) {
        const isClickInsideMenu = mobileMenu.contains(event.target);
        const isClickOnButton = mobileBtn.contains(event.target);
        
        if (!isClickInsideMenu && !isClickOnButton && mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
            
            // Volta o ícone para hambúrguer
            const icon = mobileBtn.querySelector('i');
            icon.classList.remove('fa-x');
            icon.classList.add('fa-bars');
        }
    });
});