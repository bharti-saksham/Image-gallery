const client_id = "8nfDyACX3Hinup4ZPRPd3Uca_PUaJjyRLmawDIYl1Rs"
const container = document.querySelector("#imgcont")
const load = document.querySelector("#load")
const loader = document.querySelector("#loading")

const arr1 = []
let result = ''
let page = 1


async function FetchData(page) {
    const response = await fetch(`https://api.unsplash.com/photos/?client_id=${client_id}&page=${page}`)
    const data = await response.json()
    const arr1 = data




    arr1.map(el => {
        result += `<div class="w-[394px] mb-5 flex flex-col relative group  "><img src=${el.urls.raw}/> <div class="text-white absolute bottom-[-100px]  px-2 py-2 group-hover:bottom-0 transition-bottom ease-in-out duration-100 ">${el.user.first_name} ${el.user.last_name}</div></div>`
    })

    container.innerHTML = result

    console.log(loader)





    return data

    // console.log(data)
}


async function loadMore() {
    page = page + 1

    const data = await FetchData(page)
    arr1 = [...arr1, ...data]


    arr1.map(el => {
        result += `<div class="w-[394px]"><img src=${el.urls.raw}/></div>`

    })


}

FetchData(1)





load.addEventListener("click", loadMore)


