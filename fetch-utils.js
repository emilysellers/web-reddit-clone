const SUPABASE_URL = 'https://lzgjjdporslitaryfeej.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx6Z2pqZHBvcnNsaXRhcnlmZWVqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQ4MjYwMDQsImV4cCI6MTk4MDQwMjAwNH0.us-dpAEjr_Gri3_kJFtBGYpmQD8oCt7Yer9sEQoohaU';
const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

/* Auth related functions */

export function getUser() {
    return client.auth.user();
}

export async function signUpUser(email, password) {
    return await client.auth.signUp({
        email,
        password,
    });
}

export async function signInUser(email, password) {
    return await client.auth.signIn({
        email,
        password,
    });
}

export async function signOutUser() {
    return await client.auth.signOut();
}

/* Data functions */
