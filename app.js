const puppeteer = require('puppeteer');
const { Client, Buttons, List, MessageMedia, NoAuth } = require('whatsapp-web.js');
// window.Store.genId = window.Store.MsgKey.newId;

const arr = [
  {
    user: 'elkin.torres',
    password: 'Nosferatu721*',
    minTurno: Math.ceil(Math.random() * 10) + 5,
    numero: '573134814366',
  },
  {
    user: 'michel.ibañez',
    password: 'Rpa2022*',
    minTurno: Math.ceil(Math.random() * 10) + 5,
    numero: '573185303259',
  },
];
const arrC = [
  {
    user: 'elkin.torres',
    password: 'Nosferatu721*',
    minTurno: Math.ceil(Math.random() * 10) + 5,
    numero: '573134814366',
  },
  {
    user: 'eyhson.castro',
    password: 'Rpa2022*',
    minTurno: Math.ceil(Math.random() * 10) + 5,
    numero: '573106542257',
  },
  {
    user: 'juan.vargas2',
    password: 'Colombia2022*',
    minTurno: Math.ceil(Math.random() * 10) + 5,
    numero: '573219906245',
  },
  {
    user: 'michel.ibañez',
    password: 'Rpa2022*',
    minTurno: Math.ceil(Math.random() * 10) + 5,
    numero: '573185303259',
  },
  {
    user: 'brayan.yanez1',
    password: 'Rpa2022*',
    minTurno: Math.ceil(Math.random() * 10) + 5,
    numero: '573053599685',
  },
  {
    user: 'RAMON.ROZO',
    password: 'Cos2020*',
    minTurno: Math.ceil(Math.random() * 10) + 5,
    numero: '573102970334',
  },
  {
    user: 'MANUEL.CORDOBA',
    password: 'Colombia2022*',
    minTurno: Math.ceil(Math.random() * 10) + 5,
    numero: '573137485133',
  },
  {
    user: 'Juan.Mendoza',
    password: 'Noxvile99.',
    minTurno: Math.ceil(Math.random() * 10) + 5,
    numero: '573213776554',
  },
  {
    user: 'carlos.santos',
    password: 'Canada76455*',
    minTurno: Math.ceil(Math.random() * 10) + 5,
    numero: '573196431972',
  },
  {
    user: 'david.parra',
    password: 'Colombia22*$',
    minTurno: Math.ceil(Math.random() * 10) + 5,
    numero: '573124640886',
  },
  {
    user: 'daniel.orjuela',
    password: 'Rpa2022*',
    minTurno: Math.ceil(Math.random() * 10) + 5,
    numero: '573194447056',
  },
  {
    user: 'zaira.luna',
    password: 'Colombia123*',
    minTurno: Math.ceil(Math.random() * 10) + 5,
    numero: '573022249441',
  },
];
console.log(arr);

// * Funcion pa Logear
const logear = async (usr, forzar = false) => {
  let hoy = new Date(Date.now()),
    hora = hoy.getHours(),
    minutoActual = hoy.getMinutes();

  if ((hora === 7 && minutoActual === usr.minTurno) || forzar) {
    try {
      clientWP.sendMessage(usr.numero + '@c.us', '(☞ﾟヮﾟ)☞ Logeando ☜(ﾟヮﾟ☜) ...');
      const browser = await puppeteer.launch({ headless: false });
      const page = await browser.newPage();
      await page.goto('https://mysoul.groupcos.com/login');

      await page.type('#mat-input-0', usr.user);

      await page.type('#mat-input-1', usr.password);
      await page.click('[mat-raised-button]');

      setTimeout(async () => {
        let logeado = await page.evaluate(() => {
          let elm = document.querySelector('.mat-list-item.mat-focus-indicator.mat-menu-trigger');
          return elm ? true : false;
        });

        if (logeado) {
          console.log(usr.user, 'Logeado', logeado);
          await page.click('.mat-list-item.mat-focus-indicator.mat-menu-trigger');

          const text = await page.evaluate(() => document.querySelector('[mat-menu-item]'));
          if (text === null) {
            clientWP.sendMessage(usr.numero + '@c.us', 'Sin Horarios ╰（‵□′）╯');
          }
          const turnoMarcado = await page.evaluate(() => document.querySelector('[mat-menu-item]').innerHTML.includes('color: green'));
          const classNameJ = await await page.evaluate(() => document.querySelector('[mat-menu-item]').className);

          setTimeout(async () => {
            if (turnoMarcado) {
              await page.screenshot({ path: `./img/${usr.user}.png`, fullPage: true });
              console.log('Ya se habia marcado turno ༼ つ ◕_◕ ༽つ');
              clientWP.sendMessage(usr.numero + '@c.us', 'Ya se habia marcado turno ༼ つ ◕_◕ ༽つ');
              const media = MessageMedia.fromFilePath(`./img/${usr.user}.png`);
              clientWP.sendMessage(usr.numero + '@c.us', media);
            } else {
              setTimeout(async () => {
                await page.click(`.${classNameJ.split(' ').slice(0, 3).join('.')}`);
                setTimeout(async () => {
                  await page.click('.mat-list-item.mat-focus-indicator.mat-menu-trigger');
                  setTimeout(async () => {
                    await page.screenshot({ path: `./img/${usr.user}.png`, fullPage: true });
                    clientWP.sendMessage(usr.numero + '@c.us', 'Se supone que marco turno el Botsete ༼ つ ◕_◕ ༽つ');
                    const media = MessageMedia.fromFilePath(`./img/${usr.user}.png`);
                    clientWP.sendMessage(usr.numero + '@c.us', media);
                    console.log('Se supone que marco turno ༼ つ ◕_◕ ༽つ', usr.user);
                  }, 3000);
                }, 3000);
              }, 3000);
            }
            setTimeout(async () => {
              await browser.close();
            }, 3000);
          }, 5000);
        } else {
          clientWP.sendMessage(usr.numero + '@c.us', 'Contraseña Incorrecta');
        }
      }, 5000);
      return;
    } catch (error) {
      clientWP.sendMessage(usr.numero + '@c.us', 'Hubo un Error ಥ_ಥ');
      console.log('Hubo un Error ಥ_ಥ');
      return;
    }
  } else {
    console.log(usr.user, 'No es hora de MARCAR ಠ_ಠ', hora, minutoActual);
    setTimeout(() => {
      logear(usr);
    }, 30000);
  }
};

// * Funcion pa Deslogear
const logout = async (usr) => {
  let hoy = new Date(Date.now()),
    hora = hoy.getHours(),
    minutoActual = hoy.getMinutes();

  if (hora === 17 && minutoActual >= 32) {
    clientWP.sendMessage(usr.numero + '@c.us', '(☞ﾟヮﾟ)☞ Cerrando Turno ☜(ﾟヮﾟ☜) ...');
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://mysoul.groupcos.com/login');

    await page.type('#mat-input-0', usr.user);

    await page.type('#mat-input-1', usr.password);
    await page.click('[mat-raised-button]');

    setTimeout(async () => {
      let logeado = await page.evaluate(() => {
        let elm = document.querySelector('.mat-list-item.mat-focus-indicator.mat-menu-trigger');
        return elm ? true : false;
      });

      if (logeado) {
        console.log(usr.user, 'Logeado', logeado);
        await page.click('.mat-list-item.mat-focus-indicator.mat-menu-trigger');

        const text = await page.evaluate(() => document.querySelector('[mat-menu-item]'));
        if (text === null) {
          clientWP.sendMessage(usr.numero + '@c.us', 'Sin Horarios ╰（‵□′）╯');
        }
        const turnoMarcado = await page.evaluate(() => document.querySelector('[mat-menu-item]').innerHTML.includes('color: green'));
        const classNameJ = await await page.evaluate(() => document.querySelector('[mat-menu-item]').className);

        setTimeout(async () => {
          if (turnoMarcado) {
            console.log('Pa Deslogear ༼ つ ◕_◕ ༽つ');
            await page.click(`[mat-menu-item]`);
            setTimeout(async () => {
              await page.click(`.swal2-confirm.swal2-styled`);
              setTimeout(async () => {
                await page.click('.mat-list-item.mat-focus-indicator.mat-menu-trigger');
                setTimeout(async () => {
                  await page.screenshot({ path: `./img/${usr.user}.png`, fullPage: true });
                  clientWP.sendMessage(usr.numero + '@c.us', 'Has sido expropiado jajaja ༼ つ ◕_◕ ༽つ');
                  const media = MessageMedia.fromFilePath(`./img/${usr.user}.png`);
                  clientWP.sendMessage(usr.numero + '@c.us', media);
                  console.log('Deslogeado', usr.user);
                  setTimeout(async () => {
                    await browser.close();
                  }, 3000);
                }, 3000);
              }, 3000);
            }, 3000);
          } else {
            setTimeout(async () => {
              await page.click(`.${classNameJ.split(' ').slice(0, 3).join('.')}`);
              setTimeout(async () => {
                await page.click('.mat-list-item.mat-focus-indicator.mat-menu-trigger');
                setTimeout(async () => {
                  await page.screenshot({ path: `./img/${usr.user}.png`, fullPage: true });
                  clientWP.sendMessage(usr.numero + '@c.us', 'Se supone que marco turno el Botsete ༼ つ ◕_◕ ༽つ');
                  const media = MessageMedia.fromFilePath(`./img/${usr.user}.png`);
                  clientWP.sendMessage(usr.numero + '@c.us', media);
                  console.log('Se supone que marco turno ༼ つ ◕_◕ ༽つ', usr.user);
                  setTimeout(async () => {
                    await browser.close();
                  }, 3000);
                }, 3000);
              }, 3000);
            }, 3000);
          }
        }, 5000);
      } else {
        clientWP.sendMessage(usr.numero + '@c.us', 'Contraseña Incorrecta');
      }
    }, 5000);
    return;
  } else {
    clientWP.sendMessage(usr.numero + '@c.us', 'No es hora de DesLogear ಠ_ಠ Sap@prr ╰（‵□′）╯');
    console.log(usr.user, 'No es hora de DesLogear ಠ_ಠ Sap@prr', hora, minutoActual);
  }
};

// * Iniciar Wasap
const clientWP = new Client({
  puppeteer: {
    headless: false,
    //executablePath: getRutaChrome(),
  },
  authTimeoutMs: 3600000,
  clientId: 'sesion_mibot',
  authStrategy: new NoAuth(),
});

clientWP.on('qr', (qr) => {
  // console.log('QR RECEIVED', qr);
  qrcode.generate(qr, { small: true });
});

clientWP.on('ready', async () => {
  // arr.forEach((usr) => {
  //   let minut = 0;
  //   usr.minTurno.length !== 1 ? (minut = `0${usr.minTurno}`) : (minut = usr.minTurno);
  //   clientWP.sendMessage(usr.numero + '@c.us', `Hello *${usr.user}* el Botsete te marcara a las 7:${minut}. \nCambio y fuera ༼☞◕_◕༽☞`);
  //   logear(usr);
  // });
});

clientWP.on('message', async (msg) => {
  if (msg.type == 'chat' && msg.body == 'PAPITAS') {
    let numeroChat = msg.from.toString().replace('@c.us', '');
    let inList = arr.filter((el) => el.numero === numeroChat);
    if (inList.length >= 1) {
      logear(inList[0], true);
    } else {
      clientWP.sendMessage(usr.numero + '@c.us', 'No estas en la lista ╰（‵□′）╯, cualquier cosa por Nequi jajaja');
    }
  }
  if (msg.type == 'chat' && msg.body == 'CHOCLITOS') {
    let numeroChat = msg.from.toString().replace('@c.us', '');
    let inList = arr.filter((el) => el.numero === numeroChat);
    if (inList.length >= 1) {
      logout(inList[0]);
    } else {
      clientWP.sendMessage(usr.numero + '@c.us', 'No estas en la lista ╰（‵□′）╯, cualquier cosa por Nequi jajaja');
    }
  }
});

clientWP.initialize();

// * --- sesión exitosa en wp web
clientWP.on('authenticated', () => {
  console.log(`AUTHENTICATED (sesión exitosa)`);
});

// * --- sesión no exitosa en wp web
clientWP.on('auth_failure', (msg) => {
  // Fired if session restore was unsuccessfull
  console.error(`AUTHENTICATION FAILURE (sesión no exitosa)`, msg);
});
