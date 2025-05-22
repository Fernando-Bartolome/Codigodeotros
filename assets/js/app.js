const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('name');
const $b = document.querySelector('#blog');
const $l = document.querySelector('.location');

async function displayUser(username) {
  if (!$n || !$b || !$l) {
    handleError(new Error("Faltan elementos del DOM (#name, #blog, .location)."));
    return;
  }
  $n.textContent = 'cargando...';
  try {
    const response = await fetch(`${usersEndpoint}/${username}`);
    if (!response.ok) {
      throw new Error(`No se pudo obtener el usuario '${username}'. Código: ${response.status} ${response.statusText}`);
    }

    console.log(data);
    $n.textContent = '${data.name}';
    $b.textContent = '${data.blog}';
    $l.textContent = '${data.location}';
  }

function handleError(err) {
    console.log('OH NO!');
    console.log(err);
    n.textContent = `Algo salió mal: ${err}`
  }

  displayUser('stolinski').catch(handleError);