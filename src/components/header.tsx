import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

const Header = () => (
	<header id="site-header">
		<div id="logo">
			<Link to="/">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1594.31 566.62">
					<g id="logo" data-name="Logo with Name">
						<rect
							className="logo--primary"
							x="43.34"
							y="40"
							width="550"
							height="495.78"
						/>
						<g id="logo-square">
							<polygon
								className="logo--secondary"
								points="503.38 48.45 563.38 48.45 383.38 518.45 323.38 518.45 503.38 48.45"
							/>
							<path
								className="logo--secondary"
								d="M155,85.74V216.92l51.3.7L221.21,257l-66.2.86V417.28c0,36.65,10.39,57.42,40.32,57.42,5,0,9.57-.24,13.65-.62L372.57,48.7l60.13-.12-180,469.85-45.39,0s-22.3.29-26,.29c-25.05,0-45.21-7.94-58-22.6-15.27-15.88-20.77-42.15-20.77-77V257.84H56.66V216.92h45.82L101.21,85.74Z"
							/>
						</g>
						<g id="logo-name">
							<path
								className="logo--primary"
								d="M656.62,94.82h-53V68h135.3V94.82h-53V267.63H656.62Z"
							/>
							<path
								className="logo--primary"
								d="M763.34,68h29.28V267.63H763.34Z"
							/>
							<path
								className="logo--primary"
								d="M812.76,68h33.07l55.44,130.12L955.65,68h27.69V267.63H954.06V143.13h-.66L912.93,239H888.52l-40.47-95.88h-.53v124.5H812.76Z"
							/>
							<path
								className="logo--primary"
								d="M606.37,318.37h30.89l30.37,141.92h.53l37.53-141.92h21.22L764.3,460.29h.53l30.51-141.92h30.89L778,518H753.43L716.56,374H716L679,518h-24.4Z"
							/>
							<path
								className="logo--primary"
								d="M924.58,430.77h-76.7V518H818.61V318.37h29.27V404h76.7V318.37h29.28V518H924.58Z"
							/>
							<path
								className="logo--primary"
								d="M973.34,318.37h29.28V518H973.34Z"
							/>
							<path
								className="logo--primary"
								d="M1071,345.19h-53V318.37h135.3v26.82h-53V518H1071Z"
							/>
							<path
								className="logo--primary"
								d="M1144.09,318.37h27.59l87.57,141.92h.53V318.37h29.28V518h-27.73l-87.44-141.92h-.53V518h-29.27Z"
							/>
							<path
								className="logo--primary"
								d="M1309.09,318.37h123.53v28.47h-94.26V404h80.46v26.81h-80.46v58.76h94.26V518H1309.09Z"
							/>
							<path
								className="logo--primary"
								d="M1471.54,435.87l-58.2-117.5h31l41,88.57,41-88.57h31l-58.23,117.48V518h-27.63Z"
							/>
						</g>
					</g>
				</svg>
			</Link>
		</div>
		<div className="header-nav">
			<ul className="nav-ul">
				<li className="nav-li">
					<Link className="li-link" to={`/blog`}>
						Blog
					</Link>
				</li>
				<li className="nav-li">
					<Link className="li-link" to={`/about`}>
						About
					</Link>
				</li>
			</ul>
		</div>
	</header>
);

Header.propTypes = {
	siteTitle: PropTypes.string,
};

Header.defaultProps = {
	siteTitle: ``,
};

export default Header;
