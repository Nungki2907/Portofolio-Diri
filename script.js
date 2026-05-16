 function toggleDropdown() { var dd = document.getElementById('myDropdown'), btn = document.getElementById('dropdownBtn'); dd.classList.toggle('open'); btn.classList.toggle('open') }
        function closeDropdown() { var dd = document.getElementById('myDropdown'), btn = document.getElementById('dropdownBtn'); dd.classList.remove('open'); btn.classList.remove('open') }
        document.addEventListener('click', function (e) { var dd = document.getElementById('myDropdown'), btn = document.getElementById('dropdownBtn'); if (!dd.contains(e.target)) { dd.classList.remove('open'); btn.classList.remove('open') } });

        document.addEventListener('DOMContentLoaded', function () {
            const filterBtns = document.querySelectorAll('.filter-btn'), skillCards = document.querySelectorAll('.skill-card'), progressBars = document.querySelectorAll('.progress');

            function animateProgress(bar) { const targetWidth = bar.dataset.progress + '%'; bar.style.transition = 'none'; bar.style.width = '0'; void bar.offsetWidth; bar.style.transition = 'width 1.2s ease-out'; bar.style.width = targetWidth }
            function resetAllProgress() { progressBars.forEach(bar => { bar.style.transition = 'none'; bar.style.width = '0' }) }
            function animateVisibleProgress() { skillCards.forEach(card => { if (!card.classList.contains('hidden')) { const bar = card.querySelector('.progress'); if (bar) animateProgress(bar) } }) }

            filterBtns.forEach(btn => { btn.addEventListener('click', () => { filterBtns.forEach(b => b.classList.remove('active')); btn.classList.add('active'); const filter = btn.dataset.filter; resetAllProgress(); skillCards.forEach(card => { if (filter === 'all' || card.dataset.category === filter) { card.classList.remove('hidden'); card.style.animation = 'none'; setTimeout(() => { card.style.animation = 'fadeInUp 0.5s ease forwards' }, 10) } else { card.classList.add('hidden') } }); setTimeout(animateVisibleProgress, 200) }) });

            setTimeout(() => { animateVisibleProgress() }, 500);

            document.querySelectorAll('a[href^="#"]').forEach(anchor => { anchor.addEventListener('click', function (e) { e.preventDefault(); const target = document.querySelector(this.getAttribute('href')); if (target) { target.scrollIntoView({ behavior: 'smooth', block: 'start' }); document.querySelectorAll('.nav-links a').forEach(link => link.classList.remove('active')); this.classList.add('active'); closeDropdown() } }) });

            window.addEventListener('scroll', function () { const navbar = document.querySelector('.navbar'); if (window.scrollY > 50) { navbar.classList.add('scrolled') } else { navbar.classList.remove('scrolled') } });
        });