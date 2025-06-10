import React, { useState } from 'react';
import { ExternalLink, Github, Eye, Calendar, Code, Users, Star, ArrowRight } from 'lucide-react';

const styles = {
  container: {
    margin: '0 auto',
    backgroundColor: 'white'
  },
  textCenter: {
    textAlign: 'center',
    marginBottom: '48px'
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
    maxWidth: '768px',
    margin: '0 auto',
    lineHeight: '1.625'
  },
  filterContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '12px',
    marginBottom: '48px',
    flexWrap: 'wrap'
  },
  filterButton: {
    padding: '8px 16px',
    borderRadius: '6px',
    border: '2px solid #e5e7eb',
    backgroundColor: 'white',
    color: '#6b7280',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  },
  filterButtonActive: {
    borderColor: '#1f2937',
    backgroundColor: '#1f2937',
    color: 'white'
  },
  projectsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '32px'
  },
  projectCard: {
    borderRadius: '12px',
    border: '2px solid #e5e7eb',
    backgroundColor: 'white',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    cursor: 'pointer'
  },
  projectCardHover: {
    transform: 'translateY(-8px)',
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    borderColor: '#6b7280'
  },
  projectImage: {
    width: '100%',
    height: '200px',
    backgroundColor: '#f3f4f6',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden'
  },
  imageOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(31, 41, 55, 0.8)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0,
    transition: 'opacity 0.3s ease'
  },
  imageOverlayVisible: {
    opacity: 1
  },
  projectContent: {
    padding: '24px'
  },
  projectHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '12px'
  },
  projectTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: '4px'
  },
  projectSubtitle: {
    fontSize: '14px',
    color: '#6b7280',
    fontWeight: '500'
  },
  statusBadge: {
    padding: '4px 12px',
    borderRadius: '12px',
    fontSize: '12px',
    fontWeight: '500',
    color: 'white'
  },
  projectDescription: {
    color: '#4b5563',
    lineHeight: '1.6',
    marginBottom: '16px'
  },
  techStack: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    marginBottom: '16px'
  },
  techTag: {
    padding: '4px 8px',
    backgroundColor: '#f3f4f6',
    color: '#374151',
    fontSize: '12px',
    borderRadius: '4px',
    fontWeight: '500'
  },
  projectStats: {
    display: 'flex',
    gap: '16px',
    marginBottom: '16px',
    fontSize: '14px',
    color: '#6b7280'
  },
  statItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px'
  },
  projectActions: {
    display: 'flex',
    gap: '12px'
  },
  actionButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    padding: '8px 16px',
    borderRadius: '6px',
    fontSize: '14px',
    fontWeight: '500',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    border: 'none'
  },
  primaryButton: {
    backgroundColor: '#1f2937',
    color: 'white'
  },
  secondaryButton: {
    backgroundColor: 'white',
    color: '#374151',
    border: '1px solid #d1d5db'
  },
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
    padding: '20px'
  },
  modal: {
    backgroundColor: 'white',
    borderRadius: '12px',
    maxWidth: '600px',
    width: '100%',
    maxHeight: '80vh',
    overflow: 'auto'
  },
  modalContent: {
    padding: '32px'
  },
  closeButton: {
    position: 'absolute',
    top: '16px',
    right: '16px',
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    backgroundColor: '#f3f4f6',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '18px',
    color: '#6b7280'
  }
};

export const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      subtitle: 'Full-Stack Web Application',
      description: 'A complete e-commerce solution with user authentication, payment integration, inventory management, and admin dashboard. Built with modern web technologies for optimal performance.',
      detailedDescription: 'This comprehensive e-commerce platform includes features like user registration and authentication, product catalog with search and filtering, shopping cart functionality, secure payment processing with Stripe, order management system, admin dashboard for inventory and user management, responsive design for all devices, and email notifications for order updates.',
      category: 'Full-Stack',
      status: 'Completed',
      date: '2024',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'JWT'],
      github: '#',
      live: '#',
      stars: 42,
      contributors: 3,
      commits: 156
    },
    {
      id: 2,
      title: 'Task Management App',
      subtitle: 'Productivity Mobile App',
      description: 'A cross-platform mobile application for task and project management with real-time collaboration features, offline support, and intuitive user interface.',
      detailedDescription: 'A powerful productivity app featuring task creation and management, project organization with boards and lists, real-time collaboration with team members, offline functionality with data sync, push notifications for deadlines, time tracking and reporting, drag-and-drop interface, and cloud backup with Google Drive integration.',
      category: 'Mobile',
      status: 'In Progress',
      date: '2024',
      tech: ['React Native', 'Firebase', 'Redux', 'AsyncStorage'],
      github: '#',
      live: '#',
      stars: 28,
      contributors: 2,
      commits: 89
    },
    {
      id: 3,
      title: 'Analytics Dashboard',
      subtitle: 'Data Visualization Platform',
      description: 'Interactive dashboard for business analytics with real-time data visualization, custom reports, and advanced filtering capabilities for data-driven decision making.',
      detailedDescription: 'A comprehensive analytics platform offering real-time data visualization with interactive charts and graphs, customizable dashboard layouts, advanced filtering and search capabilities, automated report generation, data export functionality, user role management, API integration for multiple data sources, and responsive design optimized for all screen sizes.',
      category: 'Frontend',
      status: 'Completed',
      date: '2023',
      tech: ['React', 'D3.js', 'Chart.js', 'TypeScript', 'API'],
      github: '#',
      live: '#',
      stars: 65,
      contributors: 1,
      commits: 203
    },
    {
      id: 4,
      title: 'API Gateway Service',
      subtitle: 'Microservices Architecture',
      description: 'Scalable API gateway service for microservices architecture with authentication, rate limiting, caching, and comprehensive logging and monitoring.',
      detailedDescription: 'A robust API gateway solution providing centralized authentication and authorization, intelligent request routing and load balancing, rate limiting and throttling mechanisms, response caching for improved performance, comprehensive logging and monitoring, API versioning support, health checks and circuit breakers, and extensive documentation with Swagger integration.',
      category: 'Backend',
      status: 'Completed',
      date: '2023',
      tech: ['Node.js', 'Express', 'Redis', 'Docker', 'AWS'],
      github: '#',
      live: '#',
      stars: 34,
      contributors: 4,
      commits: 127
    },
    {
      id: 5,
      title: 'Design System Library',
      subtitle: 'UI Component Library',
      description: 'Comprehensive design system and component library for consistent UI development across multiple projects with extensive documentation and theming support.',
      detailedDescription: 'A complete design system featuring reusable UI components with consistent styling, comprehensive component documentation with Storybook, customizable theming system, accessibility compliance (WCAG 2.1), responsive design principles, TypeScript support for type safety, npm package distribution, and integration guides for popular frameworks.',
      category: 'Frontend',
      status: 'Ongoing',
      date: '2024',
      tech: ['React', 'Storybook', 'SCSS', 'TypeScript', 'Figma'],
      github: '#',
      live: '#',
      stars: 18,
      contributors: 2,
      commits: 78
    },
    {
      id: 6,
      title: 'Real-time Chat App',
      subtitle: 'WebSocket Communication',
      description: 'Real-time messaging application with group chats, file sharing, emoji reactions, and push notifications for seamless communication experience.',
      detailedDescription: 'A feature-rich messaging platform with real-time messaging using WebSocket technology, group chat creation and management, file and image sharing capabilities, emoji reactions and message threading, push notifications for new messages, user presence indicators, message search and history, end-to-end encryption for security, and cross-platform compatibility.',
      category: 'Full-Stack',
      status: 'Completed',
      date: '2023',
      tech: ['React', 'Socket.io', 'Node.js', 'PostgreSQL', 'Redis'],
      github: '#',
      live: '#',
      stars: 52,
      contributors: 3,
      commits: 189
    }
  ];

  const categories = ['All', 'Full-Stack', 'Frontend', 'Backend', 'Mobile'];

  const getStatusColor = (status) => {
    const colors = {
      'Completed': '#059669',
      'In Progress': '#d97706',
      'Ongoing': '#7c3aed'
    };
    return colors[status] || '#6b7280';
  };

  const filteredProjects = selectedFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedFilter);

  const getProjectCardStyle = (index) => {
    return {
      ...styles.projectCard,
      ...(hoveredProject === index ? styles.projectCardHover : {})
    };
  };

  const getImageOverlayStyle = (index) => {
    return {
      ...styles.imageOverlay,
      ...(hoveredProject === index ? styles.imageOverlayVisible : {})
    };
  };

  return (
    <div style={styles.container} className='main-container sec-pad' id='projects'>
      {/* Header */}
      <div style={styles.textCenter}>
        <h2 style={styles.title}>Featured Projects</h2>
        <div style={styles.divider}></div>
        <p style={styles.description}>
          A showcase of my recent work, demonstrating expertise across different technologies and project types
        </p>
      </div>

      {/* Filter Buttons */}
      <div style={styles.filterContainer}>
        {categories.map((category) => (
          <button
            key={category}
            style={{
              ...styles.filterButton,
              ...(selectedFilter === category ? styles.filterButtonActive : {})
            }}
            onClick={() => setSelectedFilter(category)}
            onMouseEnter={(e) => {
              if (selectedFilter !== category) {
                e.target.style.borderColor = '#6b7280';
                e.target.style.backgroundColor = '#f9fafb';
              }
            }}
            onMouseLeave={(e) => {
              if (selectedFilter !== category) {
                e.target.style.borderColor = '#e5e7eb';
                e.target.style.backgroundColor = 'white';
              }
            }}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div style={styles.projectsGrid}>
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            style={getProjectCardStyle(index)}
            onMouseEnter={() => setHoveredProject(index)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            {/* Project Image/Preview */}
            <div style={styles.projectImage}>
              <Code size={48} color="#9ca3af" />
              <div style={getImageOverlayStyle(index)}>
                <Eye size={32} color="white" />
              </div>
            </div>

            {/* Project Content */}
            <div style={styles.projectContent}>
              <div style={styles.projectHeader}>
                <div>
                  <h3 style={styles.projectTitle}>{project.title}</h3>
                  <p style={styles.projectSubtitle}>{project.subtitle}</p>
                </div>
                <span style={{
                  ...styles.statusBadge,
                  backgroundColor: getStatusColor(project.status)
                }}>
                  {project.status}
                </span>
              </div>

              <p style={styles.projectDescription}>
                {project.description}
              </p>

              {/* Tech Stack */}
              <div style={styles.techStack}>
                {project.tech.map((tech) => (
                  <span key={tech} style={styles.techTag}>
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project Stats */}
              <div style={styles.projectStats}>
                <div style={styles.statItem}>
                  <Star size={14} />
                  <span>{project.stars}</span>
                </div>
                <div style={styles.statItem}>
                  <Users size={14} />
                  <span>{project.contributors}</span>
                </div>
                <div style={styles.statItem}>
                  <Calendar size={14} />
                  <span>{project.date}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={styles.projectActions}>
                <button
                  style={{...styles.actionButton, ...styles.primaryButton}}
                  onClick={() => setSelectedProject(project)}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#374151'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#1f2937'}
                >
                  <Eye size={16} />
                  View Details
                </button>
                <a
                  href={project.github}
                  style={{...styles.actionButton, ...styles.secondaryButton}}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#f9fafb';
                    e.target.style.borderColor = '#9ca3af';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'white';
                    e.target.style.borderColor = '#d1d5db';
                  }}
                >
                  <Github size={16} />
                  Code
                </a>
                <a
                  href={project.live}
                  style={{...styles.actionButton, ...styles.secondaryButton}}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#f9fafb';
                    e.target.style.borderColor = '#9ca3af';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'white';
                    e.target.style.borderColor = '#d1d5db';
                  }}
                >
                  <ExternalLink size={16} />
                  Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div style={styles.modalOverlay} onClick={() => setSelectedProject(null)}>
          <div style={{...styles.modal, position: 'relative'}} onClick={(e) => e.stopPropagation()}>
            <button
              style={styles.closeButton}
              onClick={() => setSelectedProject(null)}
            >
              ×
            </button>
            <div style={styles.modalContent}>
              <div style={styles.projectHeader}>
                <div>
                  <h2 style={styles.projectTitle}>{selectedProject.title}</h2>
                  <p style={styles.projectSubtitle}>{selectedProject.subtitle}</p>
                </div>
                <span style={{
                  ...styles.statusBadge,
                  backgroundColor: getStatusColor(selectedProject.status)
                }}>
                  {selectedProject.status}
                </span>
              </div>

              <div style={styles.techStack}>
                {selectedProject.tech.map((tech) => (
                  <span key={tech} style={styles.techTag}>
                    {tech}
                  </span>
                ))}
              </div>

              <p style={{...styles.projectDescription, marginBottom: '24px'}}>
                {selectedProject.detailedDescription}
              </p>

              <div style={styles.projectStats}>
                <div style={styles.statItem}>
                  <Star size={16} />
                  <span>{selectedProject.stars} stars</span>
                </div>
                <div style={styles.statItem}>
                  <Users size={16} />
                  <span>{selectedProject.contributors} contributors</span>
                </div>
                <div style={styles.statItem}>
                  <Code size={16} />
                  <span>{selectedProject.commits} commits</span>
                </div>
                <div style={styles.statItem}>
                  <Calendar size={16} />
                  <span>{selectedProject.date}</span>
                </div>
              </div>

              <div style={{...styles.projectActions, marginTop: '24px'}}>
                <a
                  href={selectedProject.github}
                  style={{...styles.actionButton, ...styles.primaryButton}}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#374151'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#1f2937'}
                >
                  <Github size={16} />
                  View Code
                </a>
                <a
                  href={selectedProject.live}
                  style={{...styles.actionButton, ...styles.secondaryButton}}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#f9fafb';
                    e.target.style.borderColor = '#9ca3af';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'white';
                    e.target.style.borderColor = '#d1d5db';
                  }}
                >
                  <ExternalLink size={16} />
                  Live Demo
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
