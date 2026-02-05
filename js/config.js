const defaultConfig = {
    app_title: 'ระบบจัดการข้อมูลผู้รับประโยชน์ โครงการรอมาฎอน 2026',
    org_name: 'มูลนิธิเอคิฎมัต',
    primary_color: '#1e3a5f',
    secondary_color: '#ffffff',
    text_color: '#1f2937',
    accent_color: '#2563eb',
    surface_color: '#f3f4f6'
};

let allData = [];
let filteredData = [];
let currentMode = 'team';
let isLoading = false;