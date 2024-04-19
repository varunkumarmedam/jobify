import React from "react";

export default function Footer() {
  return (
    <div style={{ backgroundColor: "rgb(136 137 139)", color: "white" }}>
      <footer
        class=" text-white "
        style={{ backgroundColor: "#a5a8ab!important", color: "white" }}
      >
        <div class="container py-4 mt-5">
          <div class="row">
            <div class="col-lg-12 col-12">
              <h4>Quick Links</h4>
              <ul class="list-unstyled d-flex justify-content-between mt-3">
                {/* <li>
                  <a
                    href="/"
                    class="text-white"
                    style={{ textDecoration: "none" }}
                  >
                    Home
                  </a>
                </li> */}
                <li>
                  <a
                    href="/about"
                    class="text-white"
                    style={{ textDecoration: "none" }}
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/Privacy"
                    class="text-white"
                    style={{ textDecoration: "none" }}
                  >
                    Privacy
                  </a>
                </li>

                <li>
                  <a
                    href="/Contact-Us"
                    class="text-white"
                    style={{ textDecoration: "none" }}
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="/Term"
                    class="text-white"
                    style={{ textDecoration: "none" }}
                  >
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="text-center py-3 bg-secondary">
          &copy; 2023 Jobify. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
