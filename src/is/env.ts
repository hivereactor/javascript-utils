/**
 * Checks if the process environment equals
 * to the passed string.
 * 
 * @param {string} env
 * @return {boolean}
 */

export function env(env: string): boolean {
    return process.env.NODE_ENV === env;
}
