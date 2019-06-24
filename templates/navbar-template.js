const NavbarTemplate = `
	<v-toolbar color ="teal darken-4" dark>
		<v-toolbar-slide-icon></v-toolbar-slide-icon>
		<v-toolbar-title-class="white--text"> Title</v-toolbar-title-class>
		<v-spacer></v-spacer>
		<v-toolbar-tems class="hidden-sm-and-down">
			<v-btn to="#/">Home</v-btn>
			<v-btn to="#/about">About Us</v-btn>
		</v-toolbar-tems>
	<nav>

		<ul>
			<li><a class="active" href="/">Home</a></li>
			<li><a href="#/about">About Us</a></li>
		</ul>
	</nav>
	</v-toolbar>
	`


export {NavbarTemplate}