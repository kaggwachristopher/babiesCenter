<template>
  <div>
    <NavBar />
    <div class="grid main">
      <fieldset>
        <legend class="outLegend">
          <div class="tab flex jc-around">
            <button
              class="tablinks button bg1"
              id="tab1"
              onclick="tabbed_menu(event, 'receipts')"
            >Receipts</button>
            <button
              class="tablinks button bg1"
              id="tab2"
              onclick="tabbed_menu(event, 'sitters')"
            >Sitters</button>
            <button
              class="tablinks button bg1"
              id="tab3"
              onclick="tabbed_menu(event, 'babies')"
            >Babies</button>
            <button
              class="tablinks button bg1"
              id="tab3"
              onclick="tabbed_menu(event, 'customers')"
            >Customers</button>
          </div>
        </legend>
        <div id="receipts" class="tabcontent grid">
          <div class="row">
            <Receipt :section="sections[0]" />
            <Receipt :section="sections[1]" />
          </div>
          <!-- <p>{{section}}</p> -->
          <div class="row">
            <Receipt :section="sections[2]" />
            <div class="md-6">
              <fieldset>
                <legend>Grand Total</legend>
                <div>
                  <div class="accounts flex jc-between bg1">
                    <span>Morning</span>
                    <span>46,000,000</span>
                  </div>
                  <div class="accounts flex jc-between bg1">
                    <span>Afternoon</span>
                    <span>20,000,000</span>
                  </div>
                  <div class="accounts flex jc-between bg1">
                    <span>Evening</span>
                    <span>20,000,000</span>
                  </div>
                  <div class="accounts flex jc-between bg1">
                    <span>Total Hours Attended</span>
                    <span>800</span>
                  </div>
                  <div class="accounts flex jc-between bg1">
                    <span>Total</span>
                    <span>UGX.55,850,000</span>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
        </div>

        <div id="sitters" class="tabcontent">
          <div class="grid">
            <div class="row">
              <div class="md-6">
                <UserBox />
              </div>
              <div class="md-6">
                <UserBox />
              </div>
            </div>
            <div class="row">
              <div class="md-6">
                <UserBox />
              </div>
              <div class="md-6">
                <UserBox />
              </div>
            </div>
          </div>
        </div>

        <div id="babies" class="tabcontent">
          <div class="grid">
            <div class="row">
              <div class="md-6">
                <UserBox />
              </div>
              <div class="md-6">
                <UserBox />
              </div>
            </div>
            <div class="row">
              <div class="md-6">
                <UserBox />
              </div>
              <div class="md-6">
                <UserBox />
              </div>
            </div>
          </div>
        </div>
        <div id="customers" class="tabcontent">
          <div class="grid">
            <div class="row">
              <div class="md-6">
                <UserBox />
              </div>
              <div class="md-6">
                <UserBox />
              </div>
            </div>
            <div class="row">
              <div class="md-6">
                <UserBox />
              </div>
              <div class="md-6">
                <UserBox />
              </div>
            </div>
          </div>
        </div>
      </fieldset>
    </div>
  </div>
</template>
<script>
import NavBar from "./NavBar";
import UserBox from "./UserBox";
import Receipt from "./Receipt";
export default {
  name: "Official",
  components: {
    NavBar,
    UserBox,
    Receipt
  },
  data() {
    return {
      sections: [
        {
          shift: "Morning",
          rate: 2000,
          childrenSize: 565,
          sitters: 20,
          hoursWorked: 22,
          charge: 34,
          total: 55
        },
        {
          shift: "Afternoon",
          rate: 2000,
          childrenSize: 565,
          sitters: 20,
          hoursWorked: 22,
          charge: 34,
          total: 55
        },
        {
          shift: "Evening",
          rate: 2000,
          childrenSize: 565,
          sitters: 20,
          hoursWorked: 22,
          charge: 3400,
          total: 55
        }
      ]
    };
  },
  mounted() {
    const tabJs = require("../assets/js/tab.js");

    let injectedJs = document.createElement("script");
    // injectedJs.setAttribute("src", func);
    injectedJs.textContent = tabJs;
    document.head.appendChild(injectedJs);
  }
};
</script>
<style>
.tab {
}

.tab button {
  transition: 0.7s;
  margin: 0px 5px;
}

.tab button:hover {
  box-shadow: none;
}

.tab button.active {
  background-color: #a92020 !important;
}

.tabcontent {
  display: none;
}

.accounts {
  padding: 10px 8px;
  margin: 2px 0px;
  font-size: 18px;
  border-radius: 3px;
}
legend {
  font-weight: 600;
  color: #966758;
}
.md-6 fieldset {
  border: 0.1px solid #00000014;
}
.outLegend {
  margin-bottom: 15px;
}
.tab {
}

.tab button {
  transition: 0.7s;
  margin: 0px 5px;
}

.tab button:hover {
  box-shadow: none;
}

.tab button.active {
  background-color: #a92020 !important;
}

.tabcontent {
  display: none;
}

.accounts {
  padding: 10px 8px;
  margin: 2px 0px;
  font-size: 18px;
  border-radius: 3px;
}
legend {
  font-weight: 600;
  color: #966758;
}
.md-6 fieldset {
  border: 0.1px solid #00000014;
}
.outLegend {
  margin-bottom: 15px;
}
.tab {
}

.tab button {
  transition: 0.7s;
  margin: 0px 5px;
}

.tab button:hover {
  box-shadow: none;
}

.tab button.active {
  background-color: #a92020 !important;
}

.tabcontent {
  display: none;
}

.accounts {
  padding: 10px 8px;
  margin: 2px 0px;
  font-size: 18px;
  border-radius: 3px;
}
legend {
  font-weight: 600;
  color: #966758;
}
.md-6 fieldset {
  border: 0.1px solid #00000014;
}
.outLegend {
  margin-bottom: 15px;
}
</style>