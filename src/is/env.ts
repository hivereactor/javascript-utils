/**
 * Checks if the NODE_ENV environment variable equals
 * the passed string.
 * 
 * @param {string} env
 * @return {boolean}
 */

export function env(env: string): boolean {
    return process.env.NODE_ENV === env;
}
