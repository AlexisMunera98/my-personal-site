export default async function () {
    const response = await fetch("https://api.github.com/users/alexismunera98/repos")
    return await response.json();
}
