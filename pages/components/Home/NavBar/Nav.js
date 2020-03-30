import React, { Component, Fragment } from "react";
import * as data from "../NavBar/Navigation.json";

class NavBar extends Component {
  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);

    // Ref's for nav links
    this.links = {};

    // Ref's for other nav elements
    this.nav = {
      line: null,
      container: null,
      wrapper: null
    };

    this.state = {
      // Stores active nav item - first by default
      active: data.cities[0]
    };
  }

  componentDidMount() {
    // Set underline to the first active link position
    this.setUnderline();

    // Attach event listeners
    this.attachEventListeners();
  }

  componentDidUpdate() {
    // Move underline when active link changes
    this.setUnderline();
  }

  componentWillUnmount() {
    // Clear event listeners on unmount
    this.detachEventListeners();
  }

  setUnderline = () => {
    const { active } = this.state;

    // Calcaulate nav's position from the edge
    const wrapper = this.nav.wrapper.getBoundingClientRect();
    const containerWidth = this.nav.container.clientWidth;
    const positionFromEdge = (wrapper.width - containerWidth) / 2;

    // Get the scroll position of the div (for when nav is wider than browser)
    const scrollPos = this.nav.scrollContainer.scrollLeft;

    // Get active link position
    const activeLink = this.links[active.section];
    const activeLinkPos = activeLink.getBoundingClientRect();

    // Set line width to match active link width
    this.nav.line.style.width = `${activeLink.clientWidth}px`;
    // Calculate left position of line to line up with active line
    this.nav.line.style.left = `${activeLinkPos.left -
      positionFromEdge +
      scrollPos}px`;
  };

  onResize = () => {
    // Don't transition the underline on resize (so it doesn't lag)
    this.nav.line.classList.remove("transition");
    this.setUnderline();
  };

  onClick = e => {
    e.persist();

    const activeIndex = data.cities.findIndex(x => x.section === e.target.id);
    const activeObj = data.cities[activeIndex];

    // Set transition onClick only
    this.nav.line.classList.add("transition");
    this.setState({ active: activeObj });
  };

  attachEventListeners() {
    // Adjust the underline on resize
    window.addEventListener("resize", this.onResize);
  }

  detachEventListeners() {
    // Remove adjust the underline on resize
    window.addEventListener("resize", this.onResize);
  }

  render() {
    const { active } = this.state;

    return (
      <Fragment>
        <div
          className="scroll-container"
          ref={node => {
            this.nav.scrollContainer = node;
          }}
        >
          <div
            className="wrapper"
            ref={node => {
              this.nav.wrapper = node;
            }}
          >
            <div className="container">
              <div
                className="links-container"
                ref={node => {
                  this.nav.container = node;
                }}
              >
                {data.cities.map(cities => {
                  const { section, label } = cities;

                  return (
                    <div className="link" key={section}>
                      <button
                        className={active.section === section ? "active" : ""}
                        type="button"
                        id={section}
                        onClick={this.onClick}
                        ref={node => {
                          this.links[section] = node;
                        }}
                      >
                        {label}
                      </button>
                    </div>
                  );
                })}
                <div
                  ref={node => {
                    this.nav.line = node;
                  }}
                  className="line"
                />
                <style jsx> {`
                // background-color: teal;
                // margin-bottom: 0;
                .scroll-container {
                  // height: 100%;
                  max-width: 100%;
                  overflow-x: auto;
                }
                .wrapper {
                  min-width: 710px;
                  // padding: 0 26px;
                }
                .container {
                  background: violet;
                  // margin: 152px auto 10px;
                  // padding: 0 5%;
                  // border-bottom: 2px solid #eeeeee;
                  max-width: 1000px;
                }
                .links-container {
                  height: 100%;
                  width: 99%;
                  // background-color: yellowgreen;
                  position: relative;
                }
                .links-container .link {
                  height: 100%;
                  margin-bottom: 3px;
                  // background-color: blue;
                  display: inline-block;
                  width: calc(100% / 7);
                }
                .links-container .link button {
                  background-color: transparent;
                  cursor: pointer;
                  border: none;
                  outline: none;
                  padding: 5px ;
                  color: #00000;
                  font-size: 0.8rem;
                  letter-spacing: 0.7px;
                  display: block;
                  margin: auto;
                  font-family: 'Raleway', sans-serif;
                }
                .links-container .link button:hover {
                  color: #000000;
                }
                .links-container .link button.active {
                  color: #000000;
                }
                .links-container .line {
                  display: block;
                  // width: 1px;
                  height: 2px;
                  position: absolute;
                  background-color: #000000;
                }
                .links-container .line.transition {
                  transition: left 0.35s, width 0.35s;
                }
               
`}
               

                </style>
              </div>
            </div>
          </div>
        </div>
        {/** Content for each tab would go here */}
        {/* <div>{active.content}</div> */}
      </Fragment>
    );
  }
}

export default NavBar;