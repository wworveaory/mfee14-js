// 呈現字串
let bodyDisplay = ''

for (let i = 0; i < data.length; i++) {
  bodyDisplay += `<tr>
                  <td>${data[i].name}</td>
                  <td>${data[i].tel}</td>
                  </tr>`
}

// 呈現在網頁上
dataTable.innerHTML = `<tbody>${bodyDisplay}</tbody>`