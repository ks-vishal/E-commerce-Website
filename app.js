const wrapper = document.querySelector('.sliderWrapper');
const menuItems = document.querySelectorAll('.menuItem');

const products = [
	{
		id: 1,
		title: 'Air Force',
		price: 119,
		colors: [
			{
				color: 'black',
				img: './img/air.png',
			},
			{
				color: 'blue',
				img: './img/air2.png',
			},
		],
	},
	{
		id: 21,
		title: 'Air Jordan',
		price: 149,
		colors: [
			{
				color: 'lightgray',
				img: './img/jordan.png',
			},
			{
				color: 'green',
				img: './img/jordan2.png',
			},
		],
	},
	{
		id: 3,
		title: 'Blazer',
		price: 109,
		colors: [
			{
				color: 'lightgray',
				img: './img/blazer.png',
			},
			{
				color: 'green',
				img: './img/blazer2.png',
			},
		],
	},
	{
		id: 4,
		title: 'Crater',
		price: 129,
		colors: [
			{
				color: 'black',
				img: './img/crater.png',
			},
			{
				color: 'lightgray',
				img: './img/aicrater2.png',
			},
		],
	},
	{
		id: 5,
		title: 'Hippie',
		price: 99,
		colors: [
			{
				color: 'gray',
				img: './img/hippie.png',
			},
			{
				color: 'black',
				img: './img/hippie2.png',
			},
		],
	},
];

let choosenProduct = products[0];

let currentProductImg = document.querySelector('.productImg');
let currentProductTitle = document.querySelector('.productTitle');
let currentProductPrice = document.querySelector('.productPrice');
let currentProductColors = document.querySelectorAll('.color');
let currentProductSizes = document.querySelectorAll('.size');

menuItems.forEach((item, index) => {
	item.addEventListener('click', () => {
		// Change the current slide
		wrapper.style.transform = `translateX(${-100 * index}vw )`;

		// Change the chosen product
		choosenProduct = products[index];

		// Change text of currentProduct
		currentProductTitle.textContent = choosenProduct.title;
		currentProductPrice.textContent = '$' + choosenProduct.price;
		currentProductImg.src = choosenProduct.colors[0].img;

		// Assigning new color
		currentProductColors.forEach((color, index) => {
			color.style.backgroundColor = choosenProduct.colors[index].color;
		});
	});
});

currentProductColors.forEach((color, index) => {
	color.addEventListener('click', () => {
		currentProductImg.src = choosenProduct.colors[index].img;
	});
});

currentProductSizes.forEach((size, index) => {
	size.addEventListener('click', () => {
		currentProductSizes.forEach((size) => {
			size.style.backgroundColor = 'white';
			size.style.color = 'black';
		});
		size.style.backgroundColor = 'black';
		size.style.color = 'white';
	});
});

const productButton = document.querySelector('.productButton');
const payment = document.querySelector('.payment');
const close = document.querySelector('.close');
productButton.addEventListener('click', () => {
	payment.style.display = 'flex';
});
close.addEventListener('click', () => {
	payment.style.display = 'none';
});
