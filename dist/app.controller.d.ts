import { AuthService } from './auth/auth.service';
export declare class AppController {
    private authService;
    constructor(authService: AuthService);
    testroute(): string;
    login(req: any): {
        access_token: string;
        firstName: any;
        role: any;
        organization: any;
    };
    get(id: string): {
        id: string;
    };
}
