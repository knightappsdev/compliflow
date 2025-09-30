export interface User {
  id: string
  name: string
  email: string
  role: 'user' | 'admin'
  company: string
  department: string
  avatar: string
  lastLogin: string
  status: 'active' | 'inactive'
}

export interface ComplianceFramework {
  id: string
  name: string
  description: string
  progress: number
  status: 'compliant' | 'at-risk' | 'non-compliant'
  lastAudit: string
  nextAudit: string
  requirements: number
  completed: number
  category: string
}

export interface Alert {
  id: string
  type: 'warning' | 'error' | 'info' | 'success'
  title: string
  message: string
  timestamp: string
  framework: string
  priority: 'high' | 'medium' | 'low'
  resolved: boolean
}

export interface AuditReport {
  id: string
  title: string
  framework: string
  date: string
  status: 'completed' | 'in-progress' | 'scheduled'
  score: number
  findings: number
  recommendations: number
  auditor: string
}

export interface Task {
  id: string
  title: string
  description: string
  assignee: string
  dueDate: string
  priority: 'high' | 'medium' | 'low'
  status: 'pending' | 'in-progress' | 'completed' | 'overdue'
  framework: string
  category: string
}

export const demoUsers: User[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    email: 'sarah.johnson@techcorp.com',
    role: 'user',
    company: 'TechCorp Solutions',
    department: 'Compliance',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    lastLogin: '2024-01-15T10:30:00Z',
    status: 'active'
  },
  {
    id: '2',
    name: 'Michael Chen',
    email: 'michael.chen@healthplus.com',
    role: 'user',
    company: 'HealthPlus Medical',
    department: 'Risk Management',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    lastLogin: '2024-01-15T09:15:00Z',
    status: 'active'
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    email: 'emily.rodriguez@financegroup.com',
    role: 'admin',
    company: 'Finance Group Inc',
    department: 'Compliance Administration',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    lastLogin: '2024-01-15T11:45:00Z',
    status: 'active'
  },
  {
    id: '4',
    name: 'David Park',
    email: 'david.park@retailchain.com',
    role: 'user',
    company: 'Retail Chain Co',
    department: 'Operations',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    lastLogin: '2024-01-14T16:20:00Z',
    status: 'active'
  },
  {
    id: '5',
    name: 'Lisa Thompson',
    email: 'lisa.thompson@compliflow.com',
    role: 'admin',
    company: 'CompliFlow',
    department: 'System Administration',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
    lastLogin: '2024-01-15T12:00:00Z',
    status: 'active'
  }
]

export const complianceFrameworks: ComplianceFramework[] = [
  {
    id: '1',
    name: 'GDPR',
    description: 'General Data Protection Regulation',
    progress: 95,
    status: 'compliant',
    lastAudit: '2024-01-10',
    nextAudit: '2024-04-10',
    requirements: 47,
    completed: 45,
    category: 'Data Privacy'
  },
  {
    id: '2',
    name: 'ISO 27001',
    description: 'Information Security Management',
    progress: 78,
    status: 'at-risk',
    lastAudit: '2024-01-05',
    nextAudit: '2024-03-05',
    requirements: 114,
    completed: 89,
    category: 'Security'
  },
  {
    id: '3',
    name: 'SOX',
    description: 'Sarbanes-Oxley Act',
    progress: 88,
    status: 'compliant',
    lastAudit: '2024-01-12',
    nextAudit: '2024-04-12',
    requirements: 32,
    completed: 28,
    category: 'Financial'
  },
  {
    id: '4',
    name: 'HIPAA',
    description: 'Health Insurance Portability and Accountability Act',
    progress: 92,
    status: 'compliant',
    lastAudit: '2024-01-08',
    nextAudit: '2024-04-08',
    requirements: 18,
    completed: 17,
    category: 'Healthcare'
  },
  {
    id: '5',
    name: 'PCI DSS',
    description: 'Payment Card Industry Data Security Standard',
    progress: 65,
    status: 'at-risk',
    lastAudit: '2024-01-03',
    nextAudit: '2024-03-03',
    requirements: 12,
    completed: 8,
    category: 'Payment Security'
  },
  {
    id: '6',
    name: 'CCPA',
    description: 'California Consumer Privacy Act',
    progress: 45,
    status: 'non-compliant',
    lastAudit: '2024-01-01',
    nextAudit: '2024-02-15',
    requirements: 25,
    completed: 11,
    category: 'Data Privacy'
  }
]

export const alerts: Alert[] = [
  {
    id: '1',
    type: 'warning',
    title: 'ISO 27001 Certification Expiring',
    message: 'Your ISO 27001 certification expires in 30 days. Schedule renewal audit immediately.',
    timestamp: '2024-01-15T10:00:00Z',
    framework: 'ISO 27001',
    priority: 'high',
    resolved: false
  },
  {
    id: '2',
    type: 'error',
    title: 'CCPA Compliance Gap Detected',
    message: 'Critical gaps found in data subject rights implementation. Immediate action required.',
    timestamp: '2024-01-15T09:30:00Z',
    framework: 'CCPA',
    priority: 'high',
    resolved: false
  },
  {
    id: '3',
    type: 'info',
    title: 'GDPR Audit Completed',
    message: 'Annual GDPR audit completed successfully with 95% compliance score.',
    timestamp: '2024-01-14T14:20:00Z',
    framework: 'GDPR',
    priority: 'low',
    resolved: true
  },
  {
    id: '4',
    type: 'warning',
    title: 'PCI DSS Vulnerability Scan Overdue',
    message: 'Quarterly vulnerability scan is 5 days overdue. Schedule immediately to maintain compliance.',
    timestamp: '2024-01-13T16:45:00Z',
    framework: 'PCI DSS',
    priority: 'medium',
    resolved: false
  },
  {
    id: '5',
    type: 'success',
    title: 'SOX Controls Testing Complete',
    message: 'All SOX internal controls have been tested and validated for Q4 2023.',
    timestamp: '2024-01-12T11:15:00Z',
    framework: 'SOX',
    priority: 'low',
    resolved: true
  }
]

export const auditReports: AuditReport[] = [
  {
    id: '1',
    title: 'GDPR Annual Compliance Audit',
    framework: 'GDPR',
    date: '2024-01-10',
    status: 'completed',
    score: 95,
    findings: 3,
    recommendations: 5,
    auditor: 'External Auditor - DataSec Ltd'
  },
  {
    id: '2',
    title: 'ISO 27001 Surveillance Audit',
    framework: 'ISO 27001',
    date: '2024-01-05',
    status: 'completed',
    score: 78,
    findings: 8,
    recommendations: 12,
    auditor: 'CertifySecure Inc'
  },
  {
    id: '3',
    title: 'SOX Internal Controls Assessment',
    framework: 'SOX',
    date: '2024-01-12',
    status: 'completed',
    score: 88,
    findings: 2,
    recommendations: 4,
    auditor: 'Internal Audit Team'
  },
  {
    id: '4',
    title: 'HIPAA Security Risk Assessment',
    framework: 'HIPAA',
    date: '2024-01-20',
    status: 'in-progress',
    score: 0,
    findings: 0,
    recommendations: 0,
    auditor: 'HealthSec Consultants'
  },
  {
    id: '5',
    title: 'PCI DSS Quarterly Scan',
    framework: 'PCI DSS',
    date: '2024-01-25',
    status: 'scheduled',
    score: 0,
    findings: 0,
    recommendations: 0,
    auditor: 'PaymentSec Solutions'
  }
]

export const tasks: Task[] = [
  {
    id: '1',
    title: 'Update Data Processing Inventory',
    description: 'Review and update the comprehensive data processing inventory for GDPR compliance',
    assignee: 'Sarah Johnson',
    dueDate: '2024-01-20',
    priority: 'high',
    status: 'in-progress',
    framework: 'GDPR',
    category: 'Documentation'
  },
  {
    id: '2',
    title: 'Implement Access Control Matrix',
    description: 'Deploy new access control matrix for ISO 27001 compliance requirements',
    assignee: 'Michael Chen',
    dueDate: '2024-01-18',
    priority: 'high',
    status: 'pending',
    framework: 'ISO 27001',
    category: 'Security Controls'
  },
  {
    id: '3',
    title: 'Quarterly SOX Testing',
    description: 'Perform quarterly testing of SOX internal controls and document results',
    assignee: 'David Park',
    dueDate: '2024-01-25',
    priority: 'medium',
    status: 'pending',
    framework: 'SOX',
    category: 'Testing'
  },
  {
    id: '4',
    title: 'HIPAA Risk Assessment Update',
    description: 'Complete annual HIPAA security risk assessment and remediation plan',
    assignee: 'Sarah Johnson',
    dueDate: '2024-01-15',
    priority: 'high',
    status: 'overdue',
    framework: 'HIPAA',
    category: 'Risk Management'
  },
  {
    id: '5',
    title: 'PCI DSS Network Segmentation',
    description: 'Implement network segmentation controls for PCI DSS compliance',
    assignee: 'Michael Chen',
    dueDate: '2024-01-30',
    priority: 'medium',
    status: 'pending',
    framework: 'PCI DSS',
    category: 'Network Security'
  },
  {
    id: '6',
    title: 'CCPA Privacy Policy Update',
    description: 'Update privacy policy to address CCPA requirements and consumer rights',
    assignee: 'Emily Rodriguez',
    dueDate: '2024-01-16',
    priority: 'high',
    status: 'completed',
    framework: 'CCPA',
    category: 'Policy'
  }
]

export const complianceStats = {
  totalFrameworks: 6,
  compliantFrameworks: 3,
  atRiskFrameworks: 2,
  nonCompliantFrameworks: 1,
  overallScore: 77,
  totalTasks: 24,
  completedTasks: 18,
  overdueTasks: 3,
  upcomingAudits: 4,
  activeAlerts: 3
}
