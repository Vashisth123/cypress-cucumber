import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";
import {common} from "./common";
const commonComp = new common();
Given(/^I navigate to (.*)$/,(URL)=>{
    commonComp.openURL(URL);
})
Then(/^I should see text (.*)$/, (text)=>{
    commonComp.validateText(text);
})
When(/^I click on (.*$)/, (link)=>{
    commonComp.clickOnLink(link);
})
When(/^I click tab (.*$)/, (tab)=>{
    commonComp.clickOnHeaderTab(tab);
})
