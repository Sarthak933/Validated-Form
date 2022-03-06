(function(){
    "use strict";

    var districts = [];
    var statename = document.getElementById("floatingStateName");
    statename.addEventListener("click", showDistricts);
        function showDistricts() {
            var selectedOption = document.getElementById("floatingStateName").value;
            if (selectedOption == "ap") {
                districts = ["Anantapur", "Chittoor", "East Godavari", "Guntur", "Krishna", "Kurnool", "Prakasam", "Srikakulam", "Sri Potti Sriramulu Nellore", "Vishakhapatnam", "Vizinagaram", "West Godavari", "YSR District"];
            }
            else if (selectedOption == "ar") {
                districts = ["Anjaw", "Changlang", "Dibang Valley", "East Kameng", "East Siang", "Kamle", "Kra Daadi", "Kurung Kumey", "Lepa Rada", "Lohit", "Longding", "Lower Dibang Valley", "Lower Siang", "Lower Subansiri", "Namsai", "Pakke Kessang", "Papum Pare", "Shi Yomi", "Siang", "Tawang", "Tirap", "Upper Siang", "Upper Subansiri", "West Kameng", "West Siang"];
            }
            else if (selectedOption == "as") {
                districts = ["Baksa", "Barpeta", "Biswanath", "Bongaigaon", "Cachar", "Charaideo", "Chirang", "Darrang", "Dhemaji", "Dhubri", "Dibrugarh", "Dima Hasao", "Goalpara", "Golaghat", "Hailakandi", "Hojai", "Jorhat", "Kamrup", "Kamrup Metropolitan", "Karbi Anglong", "Karimganj", "Kokrajhar", "Lakhimpur", "Majuli", "Morigaon", "Nagaon", "Nalbari", "Sivasagar", "Sonitpur", "South Salamara-Mankachar", "Tinsukia", "Udalguri", "West Karbi Anglong"];
            }
            else if (selectedOption == "br") {
                districts = ["Araria", "Arwal", "Aurangabad", "Banka", "Begusarai", "Bhagalpur", "Bhojpur", "Buxar", "Darbhanga", "East Champaran", "Gaya", "Gopalganj", "Jamui", "Jehanabad", "Kaimur", "Katihar", "Khagaria", "Kishanganj", "Lakhisarai", "Madhepura", "Madhubani", "Munger", "Muzaffarpur", "Nalanda", "Nawada", "Patna", "Purnia", "Rohtas", "Saharsa", "Samastipur", "Saran", "Sheikhpura", "Sheohar", "Sitamarhi", "Siwan", "Supaul", "Vaishali", "West Champaran"];
            }
            else if (selectedOption == "ct") {
                districts = ["Balod", "Baloda Bazar", "Balrampur", "Bastar", "Bemetera", "Bijapur", "Bilaspur", "Dantewada", "Dhamtari", "Durg", "Gariyababd", "Janjgir-Champa", "Jashpur", "Kabridham", "Kanker", "Kondagaon", "Korba", "Koriya", "Mahasamund", "Mungeli", "Narayanpur", "Raigarh", "Raipur", "Rajnandgaon", "Sukma", "Surajpur", "Surguja"];
            }
            else if (selectedOption == "dl") {
                districts = ["Central Delhi", "East Delhi", "New Delhi", "North Delhi", "North East Delhi", "North West Delhi", "Shahdara", "South Delhi", "South East Delhi", "South West Delhi", "West Delhi"];
            }
            else if (selectedOption == "ga") {
                districts = ["North Goa", "South Goa"];
            }
            else if (selectedOption == "gj") {
                districts = ["Ahmedabad", "Amreli", "Anand", "Aravalli", "Banaskantha", "Bharush", "Botad", "Chhota Udepur", "Dahod", "Dangs", "Devbhoomi Dwarka", "Gandhinagar", "Gir Somnath", "Jamnagar", "Junagadh", "Kachchh", "Kheda", "Mahisagar", "Mehsana", "Morbi", "Narmada", "Navsari", "Panchmahal", "Patan", "Porbandar", "Rajkot", "Sabarkantha", "Surat", "Surendranagar", "Tapi", "Vadodara", "Valsad"];
            }
            else if (selectedOption == "hr") {
                districts = ["Ambala", "Bhiwani", "Charkhi Dadri", "Faridabad", "Fatehabad", "Gurugram", "Hisar", "Jhajjar", "Jind", "Kaithal", "Karnal", "Kurukshetra", "Mahendragarh", "Nuh", "Palwal", "Panchhkula", "Panipat", "Rewari", "Rohtak", "Sirsa", "Sonipat", "Yamunanagar"];
            }
            else if (selectedOption == "hp") {
                districts = ["Bilaspur", "Chamba", "Hamirpur", "Kangra", "Kinnaur", "Kullu", "Lahaul & Spiti", "Mandi", "Shimla", "Sirmaur", "Solan", "Una"];
            }
            else if (selectedOption == "jk") {
                districts = ["Anantnag", "Bandipore", "Baramulla", "Budgam", "Doda", "Ganderbai", "Jammu", "Kathua", "Kishtwar", "Kulgam", "Kupwara", "Poonch", "Pulwama", "Rajouri", "Ramban", "Reasi", "Samba", "Shopian", "Srinagar", "Udhampur"];
            }
            else if (selectedOption == "jh") {
                districts = ["Bokaro", "Chatra", "Deoghar", "Dhanbad", "Dumka", "East Singhbhum", "Garhwa", "Giridh", "Godda", "Gumla", "Hazaribag", "Jamtara", "Khunti", "Koderma", "Latehar", "Lohardaga", "Pakur", "Palamu", "Ramgarh", "Ranchi", "Sahibganj", "Seraikela-Kharsawan", "Simdega", "West Singhbhum"];
            }
            else if (selectedOption == "ka") {
                districts = ["Bagalkot", "Ballari", "Belagavi", "Bengaluru Rural", "Bengaluru Urban", "Bidar", "Chamarajanagar", "Chikballapur", "Chikkamagaluru", "Chitradurga", "Dakshina Kannada", "Davangere", "Dharwad", "Gadag", "Hassan", "Haveri", "Kalaburagi", "Kodagu", "Kolar", "Koppal", "Mandya", "Mysuru", "Raichur", "Ramanagara", "Shivamogga", "Tumakuru", "Udupi", "Uttara Kannada", "Vijayapura", "Yadgir"];
            }
            else if (selectedOption == "kl") {
                districts = ["Alappuzha", "Ernakulam", "Idukki", "Kannur", "Kasaragod", "Kollam", "Kottayam", "Kozhikode", "Malappuram", "Palakkad", "Pathanamthitta", "Thiruvananthapuram", "Thrissur", "Wayanad"];
            }
            else if (selectedOption == "mp") {
                districts = ["Agar Malwa", "Alirajpur", "Anuppur", "Ashoknagar", "Balaghat", "Barwani", "Betul", "Bhind", "Bhopal", "Burhanpur", "Chhatarpur", "Chhindwara", "Damoh", "Datia", "Dewas", "Dhar", "Dindori", "Guna", "Gwalior", "Harda", "Hoshangabad", "Indore", "Jabalpur", "Jhabua", "Katni", "Khandwa", "Khargone", "Mandla", "Mandsaur", "Morena", "Narsinghpur", "Neemuch", "Panna", "Raisen", "Rajgarh", "Ratlam", "Rewa", "Sagar", "Satna", "Sehore", "Seoni", "Shahdoi", "Shajapur", "Sheopur", "Shivpuri", "Sidhi", "Singrauli", "Tikamgarh", "Ujjain", "Umaria", "Vidisha"];
            }
            else if (selectedOption == "mh") {
                districts = ["Ahmednagar", "Akola", "Amravati", "Aurangabad", "Beed", "Bhandara", "Buldhana", "Chandrapur", "Dhule", "Gadchiroli", "Gondia", "Hingoli", "Jalgaon", "Jalna", "Kolhapur", "Latur", "Mumbai City", "Mumbai Suburban", "Nagpur", "Naded", "Nadurbar", "Nashik", "Osmanabad", "Palghar", "Parbhani", "Pune", "Raigad", "Ratnagiri", "Sangli", "Satara", "Sindhudurg", "Solapur", "Thane", "Wardha", "Washim", "Yavatmal"];
            }
            else if (selectedOption == "mn") {
                districts = ["Bishnupur", "Chandel", "Churachandpur", "Imphal East", "Imphal West", "Jiribam", "Kakching", "Kamjong", "Kangpokpi", "Noney", "Pherzawl", "Senapati", "Temenglong", "Tengnoupal", "Thoubal", "Thoubal", "Ukhrul"];
            }
            else if (selectedOption == "ml") {
                districts = ["East Garo Hills", "East Jaintia Hills", "East Khasi Hills", "North Garo Hills", "Ri Bhoi", "South Garo Hills", "South West Garo Hills", "South West Khasi Hills", "West Garo Hills", "West Jaintia Hills", "West Khasi Hills"];
            }
            else if (selectedOption == "mz") {
                districts = ["Aizwal", "Champhai", "Kolasib", "Lawngtlai", "Lunglei", "Mamit", "Saiha", "Serchhip"];
            }
            else if (selectedOption == "nl") {
                districts = ["Dimapur", "Kiphire", "Kohima", "Longleng", "Mokokchung", "Mon", "Peren", "Phek", "Tuensang", "Wokha", "Zunheboto"];
            }
            else if (selectedOption == "or") {
                districts = ["Angul", "Balangir", "Balasore", "Bargarh", "Bhadrak", "Boudh", "Cuttack", "Deogarh", "Gajapati", "Ganjam", "Jagatsinghapur", "Jajpur", "Jharsuguda", "Kalahandi", "Kandhamal", "Kendrapara", "Kendujhar", "Khordha", "Koraput", "Maikangiri", "Mayurbhanj", "Nayagarh", "Nuapada", "Puri", "Rayagada", "Sambalpur", "Sonepur", "Sundargarh"];
            }
            else if (selectedOption == "pb") {
                districts = ["Amritsar", "Barnala", "Bhatinda", "Faridkot", "Fatehgarh Sahib", "Fazilka", "Ferozepur", "Gurdaspur", "Hoshiarpur", "Jalandhar", "Kapurthala", "Ludhiana", "Mansa", "Moga", "Muktsar", "Nawanshahr", "Pathankot", "Patiala", "Rupnagar", "Mohali", "Sangrur", "Tam Taran"];
            }
            else if (selectedOption == "rj") {
                districts = ["Ajmer", "Alwar", "Banswara", "Baran", "Barmer", "Bharatpur", "Bhilwara", "Bikaner", "Bundi", "Chittorgarh", "Churu", "Dausa", "Dholpur", "Dungarpur", "Hanumangarh", "Jaipur", "Jaisalmer", "Jalore", "Jhalawar", "Jhunjhunu", "Jodhpur", "Karauli", "Kota", "Nagaur", "Pali", "Pratapgarh", "Rajsamand", "Sawai Madhopur", "Sikar", "Sirohi", "Sri Ganganagar", "Tonk", "Udaipur"];
            }
            else if (selectedOption == "sk") {
                districts = ["East Sikkim", "North Sikkim", "South Sikkim", "West Sikkim"];
            }
            else if (selectedOption == "tn") {
                districts = ["Ariyalur", "Chengalpattu", "Chennai", "Coimbatore", "Cuddalore", "Dharamapuri", "Dindigul", "Erode", "Kallakurichi", "Kanchipuram", "Kanyakumari", "Karur", "Krishnagiri", "Madurai", "Nagapattinam", "Namakkai", "Nilgiris", "Perambalur", "Pudukkottai", "Ramanathapuram", "Ranipet", "Salem", "Sivaganga", "Tenkasi", "Thanjavur", "Theni", "Tuticorin", "Tiruchirappalli", "Tirunelveli", "Tirupathur", "Tiruppur", "Tiruvallur", "Tiruvannamalai", "Tiruvarur", "Vellore", "Viluppuram", "Virudhunagar"];
            }
            else if (selectedOption == "tg") {
                districts = ["Adilabad", "Bhadradr Kothagudemi", "Hyderabad", "Jagtial", "Jangaon", "Jayashankar Bhoopalpally", "Jogulamba Gadwal", "Kamareddy", "Karimnagar", "Khammam", "Komaram Bheem Asifabad", "Mahabubabad", "Mancherial", "Medak", "Medchal", "Nagarkurnool", "Nalgonda", "Nirmal", "Nizamabad", "Peddapalli", "Rajanna Sircilla", "Rangareddy", "Sangareddy", "Siddipet", "Suryapet", "Vikarabad", "Wanaparthy", "Warangal Rural", "Warangal Urban", "Yadadri Bhuvanagiri"];
            }
            else if (selectedOption == "tr") {
                districts = ["Dhalai", "Gomati", "Khowai", "North Tripura", "Sepahijala", "South Tripura", "Unakoti", "West Tripura"];
            }
            else if (selectedOption == "up") {
                districts = ["Agra", "Aligarh", "Allahabad", "Ambedkar Nagar", "Amethi", "Amroha", "Auraiya", "Azamgarh", "Baghpat", "Bahraich", "Ballia", "Balrampur", "Banda", "Barabanki", "Bareilly", "Basti", "Bhadohi", "Bijnor", "Budaun", "Bulandshahr", "Chandauli", "Chitrakoot", "Deoria", "Etah", "Etawah", "Faizabad", "Farrukhabad", "Fatehpur", "Firozabad", "Gautam Buddha Nagar", "Ghaziabad", "Ghazipur", "Gonda", "Gorakhpur", "Hamirpur", "Hapur", "Hardoi", "Hathras", "Jalaun", "Jaunpur", "Jhansi", "Kannauj", "Kanpur Dehat", "Kanpur Nagar", "Kasganj", "Padrauna", "Lakhimpur-Kheri", "Lalitpur", "Lucknow", "Maharajganj", "Mahoba", "Mainpuri", "Mathura", "Mau", "Meerut", "Mirzapur", "Moradabad", "Muzaffarnagar", "Pilibhit", "Pratapgarh", "RaeBareily", "Rampur", "Saharanpur", "Sambhal", "Sant Kabir Nagar", "Shahjahanpur", "Shamali", "Shravasti", "Siddharth Nagar", "Sitapur", "Sonbhadra", "Sultanpur", "Unnao", "Varanasi"];
            }
            else if (selectedOption == "ut") {
                districts = ["Almora", "Bageshwar", "Chamoli", "Champawat", "Dehradun", "Haridwar", "Nainital", "Pauri Garhwal", "Pithoragarh", "Rudraprayag", "Tehri Garhwal", "Udham Singh Nagar", "Uttarkashi"];
            }
            else if (selectedOption == "wb") {
                districts = ["Alipurduar", "Bankura", "Birbhum", "Coach Behar", "Dakshin Dinajpur", "Darjeeling", "Hooghly", "Howrah", "Jalpaiguri", "Jhargram", "Kalimpong", "Kolkata", "Malda", "Murshidabad", "Nadia", "North 24 Parganas", "Paschim Medinipur", "Paschim Burdwan", "Purba Burdwan", "Purba Medinipur", "Purulia", "South 24 Parganas", "Uttar Dinajpur"];
            }
            var options = "<option value='placeholder' style = 'display:none;'>District</option>" ;
            for (let district in districts) {
                options += "<option>" + districts[district] + "</option>"
            }
            document.getElementById("floatingDistrictName").innerHTML = options;
        }

        var buttonclick = document.getElementById("submitbutton");
        buttonclick.addEventListener("click", validateForm);
        function validateForm() {
            var flag = false;
        
            var firstname = document.getElementById("floatingFirstName").value;
            var lastname = document.getElementById("floatingLastName").value;
            var radios = document.getElementsByName("Gender");
            var streetaddress = document.getElementById("floatingStreetName").value;
            var housename = document.getElementById("floatingHouseName").value;
            var state = document.getElementById("floatingStateName").value;
            var district = document.getElementById("floatingDistrictName").value
            var pin = document.getElementById("floatingPIN").value;
            var mobile = document.getElementById("floatingMobile").value;
            var alternatemobile = document.getElementById("floatingAlternate").value;
            var personalmail = document.getElementById("floatingPersonal").value;
            var officemail = document.getElementById("floatingOffice").value;
            var cardtype = document.getElementById("floatingCardType").value;
            var cardnumber = document.getElementById("floatingCardNumber").value;
            var cardname = document.getElementById("floatingCardName").value;
            var expdate = document.getElementById("floatingExpDate").value;
            var cvv = document.getElementById("floatingCVV").value;
            
            var email_regex = /^([A-Za-z0-9_\.\-])+\@([A-Za-z0-9_\.\-])+\.([A-Za-z]{2,4})$/;
            var mobile_regex = /^[6-9]\d{9}$/; 
            var rupay_regex = /^6(?!011)(?:0[0-9]{14}|52[12][0-9]{12})$/;
            var visa_regex = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
            var mastercard_regex = /^(?:5[1-5][0-9]{14})$/;
            var amexp_regex = /^(?:3[47][0-9]{13})$/;
            var cvv_regex = /"^[0-9]{3, 4}$"/;

            var i = 0;
                while (!flag && i < radios.length) {
                    if (radios[i].checked) flag = true;
                    i++;        
                }

            if (firstname == "") {
                alert("First name is not filled. Please fill your First Name!");
                document.getElementById("floatingFirstName").focus();
            }

            else if (lastname == "") {
                alert("Last name is not filled. Please fill your Last Name!");
                document.getElementById("floatingLastName").focus();
            }

            else if (!flag) {
                alert("Please check an option in Gender!");
            }

            else if (streetaddress == "") {
                alert("Street Address is not filled. Please fill your Street Address!");
                document.getElementById("floatingStreetName").focus();
            }

            else if (housename == "") {
                alert("House name or number is not filled. Please fill your House Name/Number!");
                document.getElementById("floatingHouseName").focus();
            }

            else if (state == "placeholder") {
                alert("No value in state is selected. Please select your state!");
                document.getElementById("floatingStateName").focus();
            }

            else if (district == "placeholder") {
                alert("No value in district is selected. Please select your district!");
                document.getElementById("floatingHouseName").focus();
            }

            else if (pin == "") {
                alert("PIN is not filled. Please fill your PIN!");
                document.getElementById("floatingPIN").focus();
            }

            else if (mobile == "") {
                alert("Phone number is not filled. Please enter your Phone Number!");
                document.getElementById("floatingMobile").focus();
            }

            else if (mobile_regex.test(mobile) == false) {
                alert("Phone Number is invalid, Please provide a valid phone number!");
                document.getElementById("floatingMobile").focus();
            }

            else if (mobile_regex.test(alternatemobile) == false) {
                alert("Alternate Phone Number is invalid, Please provide a valid phone number!");
                document.getElementById("floatingAlternate").focus();
            }

            else if (personalmail == "") {
                alert("Personal Email address is not filled. Please fill your Personal Email Address!");
                document.getElementById("floatingPersonal").focus();
            }

            else if (email_regex.test(personalmail) == false) {
                alert("Personal Email is invalid, Please provide a valid Email address!");
                document.getElementById("floatingPersonal").focus();
            }

            else if (email_regex.test(officemail) == false) {
                alert("Personal Email is invalid, Please provide a valid Email address!");
                document.getElementById("floatingOffice").focus();
            }
            
            else if (cardnumber == "") {
                alert("Card number is not filled. Please enter the Card Number!");
                document.getElementById("floatingCardNumber").focus();
            }

            else if (cardtype == "Visa") {
                if (visa_regex.test(cardnumber) == false) {
                    alert("Card Number is not valid! Please enter a valid Card number");
                    document.getElementById("floatingCardNumber").focus()
                }
            }

            else if (cardtype == "Rupay") {
                if (rupay_regex.test(cardnumber) == false) {
                    alert("Card Number is not valid! Please enter a valid Card number");
                    document.getElementById("floatingCardNumber").focus()
                }
            }

            else if (cardtype == "Mastercard") {
                if (mastercard_regex.test(cardnumber) == false) {
                    alert("Card Number is not valid! Please enter a valid Card number");
                    document.getElementById("floatingCardNumber").focus()
                }
            }

            else if (cardtype == "American_Express") {
                if (amexp_regex.test(cardnumber) == false) {
                    alert("Card Number is not valid! Please enter a valid Card number");
                    document.getElementById("floatingCardNumber").focus()
                }
            }

            else if (cardname == "") {
                alert("Name on card is not filled. Please fill the name on your card!");
                document.getElementById("floatingCardName").focus();
            }

            else if (expdate == "") {
                alert("Expiry date of the card is not filled. Please enter the expiry date of the card!");
                document.getElementById("floatingExpDate").focus();
            }

            else if (cvv == "") {
                alert("CVV is not filled. Please enter the CVV of your card!");
                document.getElementById("floatingCVV").focus();
            }

            else if (cvv_regex.test(cvv) == false) {
                alert("CVV is invalid, Please provide a valid CVV!");
                document.getElementById("floatingCVV").focus();
            }

            else {
                flag = confirm("Are you sure to save ??");
            }
            return flag;
        }
})();