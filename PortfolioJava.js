        const seminars = {
            1: {
                title: "Effective Leadership in Digital Age",
                date: "November 15, 2024",
                description: "This comprehensive seminar explored the evolving landscape of leadership in the digital era. Topics included remote team management, digital communication strategies, change management in technology adoption, and building organizational culture in hybrid work environments.",
                learnings: [
                    "Adaptive leadership techniques for remote and hybrid teams",
                    "Digital tools for effective team collaboration and communication",
                    "Strategies for managing organizational change during digital transformation",
                    "Building trust and accountability in virtual environments"
                ],
                reflection: "This seminar fundamentally changed how I approach team leadership. I've since implemented weekly virtual check-ins and adopted new project management tools that have improved our team's productivity by 30%. The emphasis on emotional intelligence in digital spaces was particularly valuable."
            },
            2: {
                title: "Advanced Data Analytics Workshop",
                date: "October 8, 2024",
                description: "An intensive three-day workshop focusing on modern data analytics techniques, statistical modeling, and data visualization best practices. Hands-on sessions included working with real datasets and industry-standard tools.",
                learnings: [
                    "Advanced statistical analysis methods and their applications",
                    "Data visualization principles for effective storytelling",
                    "Predictive modeling techniques using machine learning",
                    "Best practices for data cleaning and preparation"
                ],
                reflection: "The practical approach of this workshop was invaluable. I immediately applied the visualization techniques to our quarterly reports, making data more accessible to stakeholders. The predictive modeling section opened new possibilities for forecasting in my current role."
            },
            3: {
                title: "Project Management Essentials",
                date: "September 22, 2024",
                description: "A foundational course covering core project management principles, methodologies, and tools. The program included case studies from various industries and practical exercises in project planning and execution.",
                learnings: [
                    "Project lifecycle management from initiation to closure",
                    "Agile and Scrum methodologies for iterative development",
                    "Risk assessment and mitigation strategies",
                    "Stakeholder communication and expectation management"
                ],
                reflection: "This course provided me with a structured framework for managing projects. I've since successfully led two major initiatives using the agile methodology learned here, resulting in on-time delivery and satisfied stakeholders."
            },
            4: {
                title: "Strategic Thinking & Innovation",
                date: "August 5, 2024",
                description: "This seminar focused on developing strategic thinking capabilities and fostering innovation within organizations. Interactive sessions included design thinking workshops, competitive analysis exercises, and innovation case studies.",
                learnings: [
                    "Design thinking methodology for problem-solving",
                    "Strategic planning frameworks and tools",
                    "Innovation management and fostering creative culture",
                    "Competitive analysis and market positioning strategies"
                ],
                reflection: "The design thinking approach has become integral to how I tackle challenges. I've facilitated three innovation workshops in my department, leading to the development of two new process improvements that saved significant time and resources."
            }
        };
        
        function openModal(id) {
            const s = seminars[id];
            document.getElementById('modalTitle').textContent = s.title;
            document.getElementById('modalDate').textContent = s.date;
            document.getElementById('modalDescription').textContent = s.description;
            document.getElementById('modalReflection').textContent = s.reflection;
            
            const learningsList = document.getElementById('modalLearnings');
            learningsList.innerHTML = s.learnings.map(l => `<li>${l}</li>`).join('');
            
            document.getElementById('seminarModal').style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
        
        function closeModal() {
            document.getElementById('seminarModal').style.display = 'none';
            document.body.style.overflow = 'auto';
        }
        
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                
                const filter = this.dataset.filter;
                const cards = document.querySelectorAll('.seminar-card');
                
                cards.forEach(card => {
                    if (filter === 'all' || card.dataset.category === filter) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
        
        window.onclick = function(e) {
            const modal = document.getElementById('seminarModal');
            if (e.target === modal) {
                closeModal();
            }
        }