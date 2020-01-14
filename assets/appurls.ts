import { HttpHeaders } from '@angular/common/http';

// export const backendUrl = 'http://localhost:5000';
export const backendUrl = 'http://165.22.182.189:4000';
export const token = localStorage.getItem('token');

export const checkauth = {headers: new HttpHeaders({ 'authorization': 'Bearer' + ' ' + token})}

