import React, { useState } from 'react';
import { Code, Database, Globe, Smartphone, Server, Palette, GitBranch, Terminal, Layers, Zap } from 'lucide-react';

const styles = {
    aboutSection: {
        marginBottom: '64px'
    },
    textCenter: {
        textAlign: 'center'
    },
    title: {
        fontSize: '36px',
        fontWeight: 'bold',
        color: '#111827',
        marginBottom: '16px'
    },
    divider: {
        width: '96px',
        height: '4px',
        backgroundColor: '#1f2937',
        margin: '0 auto 32px auto'
    },
    description: {
        fontSize: '18px',
        color: '#4b5563',
        margin: '0 auto',
        lineHeight: '1.625',
        padding: '20px 0px'
    },
    highlightsGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '24px',
        maxWidth: '896px',
        margin: '0 auto',
        fontSize: '1.5rem'
    },
    highlightItem: {
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '16px',
        borderRadius: '8px',
        transition: 'background-color 0.2s',
        cursor: 'pointer'
    },
    highlightDot: {
      width: '8px',
      height: '8px',
      backgroundColor: '#374151',
      borderRadius: '50%',
      marginRight: '16px',
      flexShrink: 0,
      transition: 'all 0.3s ease'
    },
    highlightText: {
      color: '#374151',
      lineHeight: '1.5',
      transition: 'all 0.3s ease'
    },
    skillsGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '24px',
        marginBottom: '48px'
    },
    skillCard: {
        position: 'relative',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        padding: '24px',
        borderRadius: '12px',
        border: '2px solid #e5e7eb',
        backgroundColor: 'white'
    },
    skillCardHover: {
        transform: 'scale(1.05)',
        borderColor: '#6b7280',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
    },
    skillCardSelected: {
        borderColor: '#1f2937',
        backgroundColor: '#f9fafb',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
    },
    skillContent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
    },
    iconContainer: {
        padding: '12px',
        borderRadius: '8px',
        marginBottom: '12px',
        transition: 'all 0.3s ease'
    },
    skillName: {
        fontWeight: '600',
        color: '#111827',
        fontSize: '14px',
        marginBottom: '4px'
    },
    categoryBadge: {
        fontSize: '12px',
        padding: '4px 8px',
        borderRadius: '9999px',
        color: 'white',
        fontWeight: '500'
    },
    progressContainer: {
        marginTop: '16px',
        width: '100%'
    },
    progressBar: {
        width: '100%',
        height: '8px',
        backgroundColor: '#e5e7eb',
        borderRadius: '4px',
        overflow: 'hidden'
    },
    progressFill: {
        height: '100%',
        borderRadius: '4px',
        transition: 'all 0.5s ease'
    },
    progressText: {
        fontSize: '12px',
        color: '#6b7280',
        marginTop: '4px',
        textAlign: 'center'
    },
    detailsCard: {
        backgroundColor: '#f9fafb',
        borderRadius: '12px',
        padding: '32px',
        border: '2px solid #e5e7eb',
        transition: 'all 0.3s ease'
    },
    detailsHeader: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '16px'
    },
    detailsIcon: {
        padding: '12px',
        borderRadius: '8px',
        marginRight: '16px'
    },
    detailsTitle: {
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#111827'
    },
    detailsDescription: {
        color: '#374151',
        fontSize: '18px',
        lineHeight: '1.625'
    },
    proficiencySection: {
        marginTop: '24px'
    },
    proficiencyHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '8px'
    },
    proficiencyLabel: {
        fontSize: '14px',
        fontWeight: '500',
        color: '#4b5563'
    },
    proficiencyValue: {
        fontSize: '14px',
        fontWeight: 'bold',
        color: '#111827'
    },
    proficiencyBar: {
        width: '100%',
        height: '12px',
        backgroundColor: '#e5e7eb',
        borderRadius: '6px',
        overflow: 'hidden'
    }
};

const SkillsAboutSection = () => {
    const [selectedSkill, setSelectedSkill] = useState(null);
    const [hoveredSkill, setHoveredSkill] = useState(null);

    const skills = [
        {
            name: 'JavaScript',
            icon: Code,
            level: 90,
            description: 'ES6+, Modern JavaScript, Async/Await, Promises',
            category: 'Frontend'
        },
        {
            name: 'React.js',
            icon: Layers,
            level: 85,
            description: 'Hooks, Context API, Redux, Component Architecture',
            category: 'Frontend'
        },
        {
            name: 'Node.js',
            icon: Server,
            level: 80,
            description: 'Express.js, REST APIs, Middleware, Authentication',
            category: 'Backend'
        },
        {
            name: 'Database',
            icon: Database,
            level: 75,
            description: 'MongoDB, MySQL, PostgreSQL, Data Modeling',
            category: 'Backend'
        },
        {
            name: 'HTML/CSS',
            icon: Globe,
            level: 95,
            description: 'Semantic HTML, CSS Grid, Flexbox, Animations',
            category: 'Frontend'
        },
        {
            name: 'Mobile Dev',
            icon: Smartphone,
            level: 70,
            description: 'React Native, Responsive Design, PWA',
            category: 'Mobile'
        },
        {
            name: 'UI/UX Design',
            icon: Palette,
            level: 80,
            description: 'Figma, Adobe XD, User Research, Prototyping',
            category: 'Design'
        },
        {
            name: 'Git/GitHub',
            icon: GitBranch,
            level: 85,
            description: 'Version Control, Branching, Code Review, CI/CD',
            category: 'Tools'
        },
        {
            name: 'DevOps',
            icon: Terminal,
            level: 65,
            description: 'Docker, AWS, Linux, Deployment Automation',
            category: 'Tools'
        },
        {
            name: 'Performance',
            icon: Zap,
            level: 75,
            description: 'Optimization, Bundle Analysis, Caching, SEO',
            category: 'Frontend'
        }
    ];

    const aboutContent = {
        title: "About Me",
        description: "I bring enthusiasm and a futuristic approach to every project I am a part of. I live for changing ideas into reality, even more so if it involves a puzzle or challenge. My apps include unit tests, UI tests, scalable architectures, and design patterns, well-documented, easy-to-read code, and automated deployment to the App Store.",
        highlights: [
            "3+ years of professional development experience",
            "Specialized in React.js and Node.js ecosystems",
            "Strong focus on performance and user experience",
            "Collaborative team player with leadership experience"
        ]
    };

    const getCategoryColor = (category) => {
        const colors = {
            'Frontend': '#334155',
            'Backend': '#374151',
            'Mobile': '#3f3f46',
            'Design': '#404040',
            'Tools': '#57534e'
        };
        return colors[category] || '#374151';
    };

    const getSkillCardStyle = (index) => {
        const isHovered = hoveredSkill === index;
        const isSelected = selectedSkill === index;

        return {
            ...styles.skillCard,
            ...(isSelected ? styles.skillCardSelected : {}),
            ...(isHovered ? styles.skillCardHover : {})
        };
    };

    const getIconStyle = (category, index) => {
        const isHovered = hoveredSkill === index;
        const isSelected = selectedSkill === index;

        return {
            ...styles.iconContainer,
            backgroundColor: (isSelected || isHovered) ? getCategoryColor(category) : '#f3f4f6'
        };
    };

    const getProgressStyle = (category, index) => {
        const isHovered = hoveredSkill === index;
        const isSelected = selectedSkill === index;

        return {
            ...styles.progressFill,
            backgroundColor: (isSelected || isHovered) ? getCategoryColor(category) : '#9ca3af'
        };
    };

    return (
        <div className='about sec-pad' id='about'>
            {/* About Section */}
            <div className='main-container'>
                <div style={styles.textCenter}>
                    <h2 style={styles.title}>
                        {aboutContent.title}
                    </h2>
                    <div style={styles.divider}></div>
                    <p style={styles.description}>
                        {aboutContent.description}
                    </p>
                </div>

                <div style={styles.highlightsGrid}>
                    {aboutContent.highlights.map((highlight, index) => (
                        <div
            key={`inline-${index}`}
            style={{
              ...styles.highlightItem,
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              const item = e.currentTarget;
              item.style.backgroundColor = '#f3f4f6';
              item.style.transform = 'translateX(12px)';
              item.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
              item.style.borderColor = '#d1d5db';
              
              // Animate the dot
              const dot = item.querySelector('.dot');
              if (dot) {
                dot.style.backgroundColor = '#000';
                dot.style.transform = 'scale(1.2)';
              }
            }}
            onMouseLeave={(e) => {
              const item = e.currentTarget;
              item.style.backgroundColor = '#fafafa';
              item.style.transform = 'translateX(0)';
              item.style.boxShadow = 'none';
              item.style.borderColor = '#e5e7eb';
              
              // Reset the dot
              const dot = item.querySelector('.dot');
              if (dot) {
                dot.style.backgroundColor = '#374151';
                dot.style.transform = 'scale(1)';
              }
            }}
          >
            <div className="dot" style={styles.highlightDot}></div>
            <span style={styles.highlightText}>{highlight}</span>
          </div>
                    ))}
                </div>
            </div>

            {/* Skills Section */}
            <div className='about sec-pad main-container'>
                <div style={styles.textCenter}>
                    <h2 style={styles.title}>
                        Technical Skills
                    </h2>
                    <div style={styles.divider}></div>
                    <p style={{ ...styles.description, maxWidth: '512px' }}>
                        Technologies and tools I work with to bring ideas to life
                    </p>
                </div>

                {/* Skills Grid */}
                <div style={styles.skillsGrid}>
                    {skills.map((skill, index) => {
                        const IconComponent = skill.icon;

                        return (
                            <div
                                key={index}
                                style={getSkillCardStyle(index)}
                                onMouseEnter={() => setHoveredSkill(index)}
                                onMouseLeave={() => setHoveredSkill(null)}
                                onClick={() => setSelectedSkill(selectedSkill === index ? null : index)}
                            >
                                <div style={styles.skillContent}>
                                    <div style={getIconStyle(skill.category, index)}>
                                        <IconComponent
                                            size={24}
                                            color={(selectedSkill === index || hoveredSkill === index) ? 'white' : '#4b5563'}
                                        />
                                    </div>
                                    <h3 style={styles.skillName}>
                                        {skill.name}
                                    </h3>
                                    <span style={{
                                        ...styles.categoryBadge,
                                        backgroundColor: getCategoryColor(skill.category)
                                    }}>
                                        {skill.category}
                                    </span>
                                </div>

                                {/* Skill Level Bar */}
                                <div style={styles.progressContainer}>
                                    <div style={styles.progressBar}>
                                        <div
                                            style={{
                                                ...getProgressStyle(skill.category, index),
                                                width: `${skill.level}%`
                                            }}
                                        ></div>
                                    </div>
                                    <div style={styles.progressText}>
                                        {skill.level}%
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Selected Skill Details */}
                {selectedSkill !== null && (
                    <div style={styles.detailsCard}>
                        <div style={styles.detailsHeader}>
                            <div style={{
                                ...styles.detailsIcon,
                                backgroundColor: getCategoryColor(skills[selectedSkill].category)
                            }}>
                                {React.createElement(skills[selectedSkill].icon, {
                                    size: 28,
                                    color: "white"
                                })}
                            </div>
                            <div>
                                <h3 style={styles.detailsTitle}>
                                    {skills[selectedSkill].name}
                                </h3>
                                <span style={{
                                    ...styles.categoryBadge,
                                    backgroundColor: getCategoryColor(skills[selectedSkill].category)
                                }}>
                                    {skills[selectedSkill].category}
                                </span>
                            </div>
                        </div>
                        <p style={styles.detailsDescription}>
                            {skills[selectedSkill].description}
                        </p>
                        <div style={styles.proficiencySection}>
                            <div style={styles.proficiencyHeader}>
                                <span style={styles.proficiencyLabel}>Proficiency</span>
                                <span style={styles.proficiencyValue}>
                                    {skills[selectedSkill].level}%
                                </span>
                            </div>
                            <div style={styles.proficiencyBar}>
                                <div
                                    style={{
                                        ...styles.progressFill,
                                        backgroundColor: getCategoryColor(skills[selectedSkill].category),
                                        width: `${skills[selectedSkill].level}%`
                                    }}
                                ></div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SkillsAboutSection;