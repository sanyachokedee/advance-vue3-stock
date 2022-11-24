<template>
	<header class="w-full fixed bg-emerald-700 md:bg-white dark:bg-black">
		<div
			class="container md:flex md:items-center md:justify-between px-4 py-4 auto md:my-2"
		>
			<!-- Start Header -->
			<div class="flex item-center justify-between">
				<div>
					<router-link to="/"
						><img src="@/assets/img/logo.svg" alt="Logo"
					/></router-link>
				</div>
				<div class="md:hidden">
					<a href="#0" @click="toggleMenu">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-7 w-7 text-white"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					</a>
				</div>
			</div>
			<div class="space-x-6 font-medium md:block">
				<ul
					:class="showMenu ? 'flex' : 'hidden'"
					class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:item-center md:space-x-4 md:mt-0 text-center"
				>
					<li>
						<router-link
							to="/"
							class="transition-colors duration-200 text-gray-100 md:text-black hover:text-emerald-700 dark:text-white"
							>Home</router-link
						>
					</li>
					<li  @click="toggleDropdownMenu()">
						<router-link
							to="/features"
							class="
							transition-colors 
							duration-200
							text-gray-100
							md:text-black
						    hover:text-emerald-700
							dark:text-white							
							"
							>Features</router-link>

							<!-- Submenu -->
							<ul 
							v-show = "show_submenu" 
							ref="target"
							class="
							md:absolute							 md:bg-white 
							 w-48 mt-2 
							 rounded-md 
							 md:text-start 
							 shadow-lg ring-1
							  ring-black 
							  ring-opacity-5
							  mx-auto
							  bg-emerald-600">
								<li>
									<a class="md:text-black block px-4 py-2 md:hover:bg-gray-100" href="#Incredible">Incredible</a>
								</li>
								<li>
									<a  class="md:text-black block px-4 py-2 md:hover:bg-gray-100"   href="#Incredible">Fantastic</a>
								</li>
								<li>
									<a  class="md:text-black block px-4 py-2 md:hover:bg-gray-100"   href="#Intelligent">Intelligent</a>
								</li>
							</ul>
					</li>
					<li @click ="show_submenu=false">
						<router-link
							to="/services"
							class="transition-colors duration-200  text-gray-100 md:text-black hover:text-emerald-700 dark:text-white"
							>Services</router-link
						>
					</li>
					<li @click ="show_submenu=false">
						<router-link
							to="/testimonials"
							class="transition-colors duration-200 text-gray-100 md:text-black hover:text-emerald-700 dark:text-white"
							>Testimoials</router-link
						>
					</li>
					<li @click ="show_submenu=false">
						<router-link
							to="/contact"
							class="transition-colors duration-200 text-gray-100 md:text-black hover:text-emerald-700 dark:text-white"
							>Contact</router-link
						>
					</li>
					<li>
						<router-link to="/getstarted">
							<button
								class="bg-emerald-600 hover:bg-emerald-700 transition-colors duration-300 py-2.5 px-2.5 rounded-lg text-white font-semibold  dark:text-white"
							>
								Get Started ({{ count }})
							</button>
						</router-link>
					</li>
					<li>
						<button class="px-4 py-2 text-black dark:text-white" @click = "toggleDark()">{{ isDark ? 'Light Mode' : 'Dark Mode' }}</button>
					</li>
				</ul>
			</div>
			
		</div>
	</header>
	<!-- End Header -->
</template>

<script setup lang="ts">
	// Toglge menu hamberger
import { ref } from 'vue'
import { useDark, useToggle, onClickOutside } from '@vueuse/core'

// สำหรับส่งค่าผ่าน Store จากหน้าอื่นให้ใช้ตัวแปรรวมกันก็ใช้ค่า storeToRefs แต่ถ้าเอา method มาด้วยต้องใส่ mapActions
// Import counter.ts
import { useCounterStore } from '../../store/counter'

import { storeToRefs } from 'pinia'
const store = useCounterStore()
const { count, doubleCount } = storeToRefs(store)

// Toggle menu const for Hamberger menu
const showMenu = ref(false)


// Sub-menu
const show_submenu = ref(false)
// Method Toggle dropdown menu
const toggleDropdownMenu = () => show_submenu.value = !show_submenu.value

//method Toggle Menu
const toggleMenu = () => { showMenu.value = !showMenu.value }

// Hide Dropdown Menu when click outside
const target = ref(null)

onClickOutside(target, (event) => {
	// console.log(event)
	show_submenu.value = false
})  


const isDark = useDark()
const toggleDark = useToggle(isDark)


</script>

<style scoped>
	

</style>
