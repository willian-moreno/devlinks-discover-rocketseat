/**
 * @param {EventTarget} target
 */
const toggleTheme = (target) => {
	if (target.checked) {
		document.body.classList.remove("dark")
		return
	}

	document.body.classList.add("dark")
}

const handleSwitchThemeEvents = () => {
	/**
	 * @type {HTMLInputElement | null}
	 */
	const switchTheme = document.getElementById("switch-toggle-theme")
	switchTheme && switchTheme.addEventListener("change", ({ target }) => toggleTheme(target))

	switchTheme &&
		switchTheme.addEventListener("keydown", ({ key, target }) => {
			if (key === "Enter") {
				target.checked = !target.checked
				toggleTheme(target)
			}
		})
}

handleSwitchThemeEvents()
