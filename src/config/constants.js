export const API_URL = 'http://192.168.44.122:3000/api/v1/parkingHero/';
export const API_TIMEOUT = 12000;
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFVzZXIiOiI1ZmRjMDk3NWJhNDMzNTE4YWYzYjMxMTQiLCJ1c2VybmFtZSI6IlRyaSBIYXJpeWFkaSIsImVtYWlsIjoidHJpaGFyaXlhZGkyNEBnbWFpbC5jb20iLCJwaG9uZW51bWJlciI6IjA4OTY2MDI3ODIyMSIsImlhdCI6MTYwODM0ODM1MywiZXhwIjoxNjA4NDM0NzUzfQ.QDkb6QY6-QXgMw1i7untrCSj9bGMjU5XMR_iKsDhHoQ'
export const API_HEADER = {
  "Content-Type": "application/json"
}

export const API_HEADERS_AUTH = {
  "Authorization": `Basic ${token}`
}

export const API_HEADERS_MULTIPART = {
  'Content-Type': 'multipart/form-data',
  // "Authorization": `Basic ${token}`
}
