const site: unknown = "https://hcode.com.br";
let sitesFavoritos: string[] = [];

sitesFavoritos.push(site as string); //dois exemplos de forçar ele a aceitar a string, é como se eu estivesse dizendo: pode aceitar esse dado, não se preocupa;
sitesFavoritos.push(<string>site);

