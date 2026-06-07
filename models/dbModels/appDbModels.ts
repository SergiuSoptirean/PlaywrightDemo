export interface User {
    email: string;
    is_active: boolean;
    is_superuser: boolean;
    full_name: string | null;
    id: string;
    created_at: string;
}