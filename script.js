"use strict"

const body = document.querySelector('body');
body.style.cssText = 'margin: 0;padding: 0;box-sizing: border-box;'

const container = document.querySelectorAll('.container')
container.forEach((conElement) => {
    conElement.style.cssText = ' max-width: 1140px; margin: 0 auto;'
})

const navbar = document.querySelector('.navbar');
navbar.style.cssText = 'width: 100%;height: 900px;background-image: url("images/Rectangle\ 31.png");background-position: center;background-repeat: no-repeat;background-size: cover;'

const menu = document.querySelector('.menu');
menu.style.cssText = 'padding: 47px 0;display: flex;flex-direction: row;justify-content: space-between;align-items: center;'

const logoh1 = navbar.querySelector('h1');
logoh1.style.cssText = 'color: #FFF;font-family: Ribeye;font-size: 24px;font-style: normal;font-weight: 400;line-height: 150%;letter-spacing: 1.44px;'

const items = document.querySelector('.items');
items.style.cssText = 'list-style: none;display: flex;gap: 50px;'

const itemA = items.querySelectorAll('a');
itemA.forEach((itemAElement) =>{
    itemAElement.style.cssText = 'text-decoration: none;color: #FFF;font-family: Roboto;font-size: 18px;font-style: normal;font-weight: 500;line-height: 150%;'
})

const menuBtn = document.querySelectorAll('.menu-btn');
menuBtn.forEach((menuBtnElement) => {
    menuBtnElement.style.cssText = 'border: none;width: 163px;height: 51px;flex-shrink: 0;border-radius: 5px;background: #C9453B;'
})

const menuBtnA = navbar.querySelectorAll('a');
menuBtnA.forEach((menuBtnAElement) => {
    menuBtnAElement.style.cssText = 'text-decoration: none;color: #FFF;font-family: Roboto;font-size: 16px;font-style: normal;font-weight: 400;line-height: 150%;'
})

const mainTitle = document.querySelector('.main-title');
mainTitle.style.cssText = 'padding: 70px 0 0 0;'

const mainTitleH3 = mainTitle.querySelector('h3');
mainTitleH3.style.cssText = 'width: 804px;height: 154px;flex-shrink: 0;color: #FFF;font-family: Gelasio;font-size: 65px;font-style: normal;font-weight: 700;line-height: 120%;'

const mainTitlep = mainTitle.querySelector('p');
mainTitlep.style.cssText = 'width: 458px;color: #FFF;font-family: Roboto;font-size: 18px;font-style: normal;font-weight: 400;line-height: 160%;padding-top: 20px;padding-bottom: 20px;'

const popular = document.querySelector('#popular')

const title = popular.querySelector('.title');
title.style.cssText = 'text-align: center;display: flex;flex-direction: column;align-items: center;'

const titleH1 = popular.querySelector('h1');
titleH1.style.cssText = 'padding: 140px 0 20px 0;color: #000;font-family: Gelasio;font-size: 43px;font-style: normal;font-weight: 500;line-height: 140%;'

const titlep = popular.querySelector('p');
titlep.style.cssText = 'width: 735px;color: #000;text-align: center;font-family: Roboto;font-size: 18px;font-style: normal;font-weight: 400;line-height: 160%;text-align: center;padding-bottom: 50px;'

// const popularClass = popular.querySelector('.popular');
// popularClass.style.cssText = 'padding: 0 0 140px 0;'

const mainImg = popular.querySelector('.main-img');
mainImg.style.cssText = 'display: flex;justify-content: space-between;'

const img = popular.querySelectorAll('.img');
img.forEach((imgElement) => {imgElement.style.cssText = 'width: 360px;height: 555px;flex-shrink: 0;border-radius: 10px;border: 1px solid rgba(0, 0, 0, 0.10);background: #FFF;'
})

const imgtxt = popular.querySelectorAll('.img-txt');
imgtxt.forEach((imgtxtElement) => {
    imgtxtElement.style.cssText = 'padding: 35px 0 0 0;display: flex;flex-direction: column;gap: 10px;align-items: center;justify-content: space-evenly;'
})

const imgtxth3 = popular.querySelectorAll('h3');
imgtxth3.forEach((imgtxth3Element) =>{
    imgtxth3Element.style.cssText = 'color: #000;text-align: center;font-family: Gelasio;font-size: 24px;font-style: normal;font-weight: 500;line-height: 150%;'
})


const imgtxtp = popular.querySelectorAll('p');
imgtxtp.forEach((imgtxtpElement) => {
    imgtxtpElement.style.cssText = 'width: 306px;height: 55px;flex-shrink: 0;color: #000;text-align: center;font-family: Roboto;font-size: 18px;font-style: normal;font-weight: 400;line-height: 160%;'
})

const offers = document.querySelector('#offers');

const offerTitle = offers.querySelector('.title');
offerTitle.style.cssText = 'text-align: center;display: flex;flex-direction: column;align-items: center;'

const offerTitleH1 = offers.querySelector('h1');
offerTitleH1.style.cssText = 'padding: 140px 0 20px 0;color: #000;font-family: Gelasio;font-size: 43px;font-style: normal;font-weight: 500;line-height: 140%;'

const offerTitlep = offers.querySelector('p');
offerTitlep.style.cssText = 'width: 735px;color: #000;text-align: center;font-family: Roboto;font-size: 18px;font-style: normal;font-weight: 400;line-height: 160%;text-align: center;padding-bottom: 50px;'

const special = offers.querySelector('.special');
special.style.cssText = 'display: flex;justify-content: space-between;padding-bottom: 52px;'

const mainCountry = offers.querySelectorAll('.main-country');
mainCountry.forEach((mainCountryElement) => {
    mainCountryElement.style.cssText = 'display: flex;flex-direction: column;'
    const countryImg = mainCountryElement.querySelectorAll('img');
    countryImg.forEach((countryImgElement) => {
    countryImgElement.style.cssText = 'width: 262px;height: 173px;flex-shrink: 0;padding-bottom: 20px;'
    })
})

const mainNew = offers.querySelectorAll('.main-new');
mainNew.forEach((mainNewElement) => {
    mainNewElement.style.cssText = 'display: flex;flex-direction: row;width: 262px;'
})

const newI = offers.querySelectorAll("i");
newI.forEach((newIElement) => {
    newIElement.style.cssText = 'width: 10.858px;height: 15.201px;flex-shrink: 0;color: #FC1200;'
})

const newYork = offers.querySelectorAll('.new-york');
newYork.forEach((newYorkIElement) => {
    const newSpan = newYorkIElement.querySelectorAll('span')
    newSpan.forEach((newSpanElement) => {
    newSpanElement.style.cssText = 'color: #000;font-family: Roboto;font-size: 20px;font-style: normal;font-weight: 400;line-height: 150%;opacity: 0.6;'
    })
    const newH4 = newYorkIElement.querySelectorAll('h4')
    newH4.forEach((newH4Element) => {
        newH4Element.style.cssText = 'color: rgba(0, 0, 0, 0.60);font-family: Roboto;font-size: 16px;font-style: normal;font-weight: 400;line-height: 150%;padding: 8px 0;'
    })
    const newH5 = newYorkIElement.querySelectorAll('h5')
    newH5.forEach((newH5Element) => {
        newH5Element.style.cssText = 'color: #000;font-family: Roboto;font-size: 18px;font-style: normal;font-weight: 500;line-height: 150%;'
        const newH5Span = newH5Element.querySelectorAll('span');
        newH5Span.forEach((h5Element) => {
            h5Element.style.cssText = 'color: #000;font-family: Roboto;font-size: 18px;font-style: normal;font-weight: 400;line-height: 150%;'
        })
    })
})
    


const star = offers.querySelectorAll('.star');
star.forEach((starElement) => {
    starElement.style.cssText = 'padding-left: 47px;padding-top: 10px;'
    const starI = starElement.querySelectorAll('i')
    starI.forEach((starIElement) => {
        starIElement.style.cssText = 'width: 24px;height: 24px;flex-shrink: 0;color: #FFC700;'
    })
})

const scroll = offers.querySelector('.scroll');
scroll.style.cssText = 'display: flex;flex-direction: row;justify-content: center;gap: 50px;padding-bottom: 143px;'

const blog = document.querySelector('#blog')

const blogTitle = blog.querySelector('.title');
blogTitle.style.cssText = 'text-align: center;display: flex;flex-direction: column;align-items: center;'

const blogTitleH1 = blog.querySelector('h1');
blogTitleH1.style.cssText = 'padding: 140px 0 20px 0;color: #000;font-family: Gelasio;font-size: 43px;font-style: normal;font-weight: 500;line-height: 140%;'

const blogTitlep = blog.querySelector('p');
blogTitlep.style.cssText = 'width: 735px;color: #000;text-align: center;font-family: Roboto;font-size: 18px;font-style: normal;font-weight: 400;line-height: 160%;text-align: center;padding-bottom: 50px;'

const blogImgs = blog.querySelector('.blog-imgs')
blogImgs.style.cssText = 'width: 100%;height: 635px;display: flex;align-items: flex-start;padding-bottom: 140px;'

const bigImg = blog.querySelector('.big-img')
bigImg.style.cssText = 'width: 50%;'

const bigImgImg = bigImg.querySelector('img')
bigImgImg.style.cssText = 'padding: 0px 0 35px 0;width: 554px;height: 397px;flex-shrink: 0;'

const bigImgH1 = bigImg.querySelector('h1')
bigImgH1.style.cssText = 'padding-bottom: 10px;'

const bigImgP = bigImg.querySelector('p')
bigImgP.style.cssText = 'padding-bottom: 10px;'

const bigImgA = bigImg.querySelector('a')
bigImgA.style.cssText = 'text-decoration: none;color: #000;font-family: Roboto;font-size: 20px;font-style: normal;padding-bottom: 140px;'

const smallImages = blog.querySelector('.small-images')
smallImages.style.cssText = 'width: 50%;height: 348px;display: flex;flex-direction: column;padding-bottom: 140px;'

const mainBlog = blog.querySelectorAll('.main-blog')
mainBlog.forEach((mainBlogElement) => {
    mainBlogElement.style.cssText = 'display: flex;'
})

const blogImages = smallImages.querySelectorAll('.blog-images')
blogImages.forEach((blogImagesElement) => {
    const blogImagesImg = blogImagesElement.querySelectorAll('img')
    blogImagesImg.forEach((blogImagesImgElement) => {
        blogImagesImgElement.style.cssText = 'width: 263px;height: 201px;flex-shrink: 0;border-radius: 10px;'
    })
})

const imageTxth2 = smallImages.querySelectorAll('.image-txt')
imageTxth2.forEach((imageTxth2Element) => {
    const txtH2Child = imageTxth2Element.querySelectorAll('h2')
    txtH2Child.forEach((txtH2ChildElement) => {
        txtH2ChildElement.style.cssText = 'padding: 33px 0 10px 27px;width: 226px;color: #000;font-family: Gelasio;font-size: 20px;font-style: normal;font-weight: 500;line-height: 150%;'
    })
    const txtPChild = imageTxth2Element.querySelectorAll('p')
    txtPChild.forEach((txtPChildElement) => {
        txtPChildElement.style.cssText = 'padding: 0 0 5px 27px;width: 243px;height: 60px;flex-shrink: 0;color: #000;font-family: Roboto;font-size: 18px;font-style: normal;font-weight: 400;line-height: 160%;opacity: 0.6;'
    })
    const txtAChild = imageTxth2Element.querySelectorAll('a')
    txtAChild.forEach((txtAChildElement) => {
        txtAChildElement.style.cssText = 'padding: 0 0 33px 27px;text-decoration: none;width: 126.857px;color: #000;font-family: Roboto;font-size: 20px;font-style: normal;font-weight: 400;line-height: 150%;'
    })
})

const footer = document.querySelector('footer')
footer.style.cssText = 'width: 100%;height: 348px;background: rgba(38, 148, 153, 0.04);'

const mainFooter = footer.querySelector('.main-footer')
mainFooter.style.cssText = 'display: flex;flex-direction: row;align-items: center;justify-content: space-between;padding: 70px 0 100px 0;'

const footLogoh1 = footer.querySelector('h1');
footLogoh1.style.cssText = 'color: #000;font-family: Ribeye;font-size: 24px;font-style: normal;font-weight: 400;line-height: 150%;letter-spacing: 1.44px;padding-bottom: 40px;'

const contactUsH4 = footer.querySelector('h4')
contactUsH4.style.cssText = 'color: #000;font-family: Roboto;font-size: 16px;font-style: normal;font-weight: 400;line-height: 160%;letter-spacing: 0.96px;padding-bottom: 10px;'

const contactUsH5 = footer.querySelector('h5')
contactUsH5.style.cssText = 'padding-bottom: 20px;'

const contactUsH5A = contactUsH5.querySelector('a')
contactUsH5A.style.cssText = 'text-decoration: none;color: #000;font-family: Roboto;font-size: 16px;font-style: normal;font-weight: 400;line-height: 160%;letter-spacing: 0.96px;'

const footItems = footer.querySelectorAll('.foot-items')
footItems.forEach((footItemsElement) => {
    footItemsElement.style.cssText = 'list-style: none;display: flex;flex-direction: column;gap: 20px;'
    const footItem = footItemsElement.querySelectorAll('a')
    footItem.forEach((footItemElement) => {
        footItemElement.style.cssText = 'text-decoration: none;color: #000;font-family: Roboto;font-size: 16px;font-style: normal;font-weight: 500;line-height: 150%;letter-spacing: 0.96px;'
    })
})

const subscribe = footer.querySelector('.subscribe')

const subscribeH1 = subscribe.querySelector('h1')
subscribeH1.style.cssText = 'color: #000;font-family: Roboto;font-size: 20px;font-style: normal;font-weight: 500;line-height: 150%;padding: 0 25px 42px 0;letter-spacing: 1.2px;'

const footBtn = footer.querySelector('.foot-btn')
footBtn.style.cssText = 'border: none;width: 103px;height: 44px;flex-shrink: 0;border-radius: 5px;background: #C9453B;'

const footBtnA = footBtn.querySelector('a')
footBtnA.style.cssText = 'text-decoration: none;color: #FFF;font-family: Roboto;font-size: 16px;font-style: normal;font-weight: 400;line-height: 150%;letter-spacing: 0.96px;'

const email = footer.querySelector('.email')
email.style.cssText = 'display: flex; align-items: center;'
const input = footer.querySelector('input')
input.style.cssText = 'width: 195px;height: 44px;flex-shrink: 0;border-radius: 5px;border: 1px solid #000;opacity: 0.1;box-shadow: 0px 0px 10px 10px rgba(0, 0, 0, 0.15);'