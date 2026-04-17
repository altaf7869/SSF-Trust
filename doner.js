

const data = [
  { "date": "19-02-2026", "amt": "5,000", "name": "Rathod Barkatullah Kiritsingh", "loc": "Marudhia" },
  { "date": "20-02-2026", "amt": "5,000", "name": "Ghori Sikandar Khan Bapusaheb", "loc": "Naliya" },
  { "date": "20-02-2026", "amt": "5,000", "name": "Ghori Abdulrashid Sher Mohammed", "loc": "Vadodara (Tandalja, Haji Park)" },
  { "date": "21-02-2026", "amt": "5,000", "name": "Ghori Sabir Hussain Latifkha", "loc": "Naliya" },
  { "date": "22-02-2026", "amt": "5,000", "name": "Rathod Munnasab Hanif Saab", "loc": "Naliya" },
  { "date": "23-02-2026", "amt": "5,000", "name": "Rathod Salahuddin Bapusaheb", "loc": "Vadodara" },
  { "date": "23-02-2026", "amt": "5,000", "name": "Malek Soeb Mohammed Umed Khanji", "loc": "Vadodara (Tandalja)" },
  { "date": "24-02-2026", "amt": "5,000", "name": "Syed Dr. Khurshid Hussain bawasaheb", "loc": "Mumbai" },
  { "date": "26-02-2026", "amt": "5,000", "name": "Haji Latifkha Nazarkha", "loc": "Chudeshwar" },
  { "date": "01-03-2026", "amt": "2,500", "name": "Haji Ghori Hanifsab Fakir Mohammed", "loc": "Tilakwada" },
  { "date": "01-03-2026", "amt": "1,100", "name": "Ghori Sirajmohammed Fakir Mohammed", "loc": "Vidyanagar (Chudeshwar Wala)" },
  { "date": "01-03-2026", "amt": "25,000", "name": "A Muslim Sister", "loc": "-" },
  { "date": "01-03-2026", "amt": "5,000", "name": "Thakor Furqan Mohammed Ibrahimkha", "loc": "Vadodara (Aman Colony)" },
  { "date": "01-03-2026", "amt": "5,000", "name": "Ghori Usmankha Masidkha", "loc": "Vakol" },
  { "date": "01-03-2026", "amt": "5,000", "name": "Ghori Maqbulkha Anwarkha", "loc": "Vakol" },
  { "date": "02-03-2026", "amt": "40,000", "name": "Rathod Farooq Khan Zakir Hussain", "loc": "Pahad" },
  { "date": "02-03-2026", "amt": "5,000", "name": "Ghori Safi Mohammad Bapusaheb", "loc": "Naliya" },
  { "date": "03-03-2026", "amt": "1,000", "name": "Chauhan Sakir Hussain Munisaheb", "loc": "Vadodara (Khata Aasitra wala)" },
  { "date": "03-03-2026", "amt": "5,000", "name": "Chauhan Ghulam Mohammad Akbar Khanji", "loc": "Vadodara (Vaziria wala)" },
  { "date": "05-03-2026", "amt": "5,000", "name": "Ghari Afzal Mohammed Fakir Mohammed (Sanjari Faiz Traders)", "loc": "Tilakwada" },
  { "date": "05-03-2026", "amt": "2,500", "name": "Ghori Akhtar Mohammed Fakir Mohammed", "loc": "Tilakwada" },
  { "date": "05-03-2026", "amt": "2,500", "name": "Khan Ikram Ali Sabir Ali", "loc": "Sultanpura" },
  { "date": "05-03-2026", "amt": "5,000", "name": "Ghori Gyasuddin Ibrahimkha", "loc": "Naliya" },
  { "date": "05-03-2026", "amt": "1,000", "name": "Haji Ghori Zafarullah Khan Fakir Mohammed", "loc": "Tilakwada" },
  { "date": "05-03-2026", "amt": "5,000", "name": "Rathod Zakir Hussain Akbarkha", "loc": "Pahad" },
  { "date": "05-03-2026", "amt": "5,000", "name": "Thakor Saimabanu Zakir Hussain (Indian women's cricketer)", "loc": "Mumbai" },
  { "date": "05-03-2026", "amt": "500", "name": "Ghori Imran Hussein Hamidkha", "loc": "Naliya" },
  { "date": "05-03-2026", "amt": "50,000", "name": "Syed Zaheda Amma (Mumbai) and Sahin Apa (U.S.A.)", "loc": "Mumbai/USA" },
  { "date": "06-03-2026", "amt": "11,000", "name": "Haji Rathod Babasaheb Maswarkha (Babul Pro. Store, Devaliya Chowkdi)", "loc": "Unchad" },
  { "date": "06-03-2026", "amt": "1,111", "name": "Chauhan Imtiaz Hussain Rasul Khan", "loc": "Khata Aasitra" },
  { "date": "07-03-2026", "amt": "20,000", "name": "Rathod Shaukat Hussain Zakir Hussain", "loc": "Pahad" },
  { "date": "07-03-2026", "amt": "5,000", "name": "Rathod Umar Khan Anwar Khan", "loc": "Tilakwada (Marundhiya Wala)" },
  { "date": "07-03-2026", "amt": "10,000", "name": "Rathod Irfankha Anwarkha", "loc": "Pahad" },
  { "date": "07-03-2026", "amt": "10,000", "name": "Khan Rehanabanu Fazleh-e-Haq Khanji", "loc": "Kasundar" },
  { "date": "07-03-2026", "amt": "5,000", "name": "Rathod Wasim Khan Malangsaab", "loc": "Vadodara (Pahad wala)" },
  { "date": "07-03-2026", "amt": "1,100", "name": "Ghori Ismailkha Manwarkha", "loc": "Naliya" },
  { "date": "09-03-2026", "amt": "5,000", "name": "Karimbhai", "loc": "Velugam" },
  { "date": "09-03-2026", "amt": "2,100", "name": "Chauhan Imtiaz Hussain Balasaheb", "loc": "Vidyanagar" },
  { "date": "10-03-2026", "amt": "2,500", "name": "Rathod Babasaheb Haji Mohammed Khan", "loc": "Beora" },
  { "date": "10-03-2026", "amt": "2,500", "name": "Ghori Shahidkha Rahmatkha", "loc": "Naliya" },
  { "date": "10-03-2026", "amt": "5,000", "name": "Syed Minaz Apa (Farukh Apa ke Sahzadi)", "loc": "Ahmedabad" },
  { "date": "10-03-2026", "amt": "1,111", "name": "Afghan Moin Khan Babasaheb", "loc": "Vadia Tekra" },
  { "date": "10-03-2026", "amt": "5,000", "name": "Abdemunaf Haji Mohammed Aves", "loc": "Limadiya" },
  { "date": "10-03-2026", "amt": "1,500", "name": "Thakor Liyakat Khanji Rasool Khanji", "loc": "Pan Talavadi" },
  { "date": "11-03-2026", "amt": "10,000", "name": "Rathod Soheb Khan Chhotasaheb", "loc": "Vadodara (Nargam wala)" },
  { "date": "11-03-2026", "amt": "5,000", "name": "Rathod Usman Khan Hameed Khan", "loc": "Mora" },
  { "date": "12-03-2026", "amt": "1,500", "name": "Syed Nafisa Apa", "loc": "Ahmedabad" },
  { "date": "13-03-2026", "amt": "10,000", "name": "Rathod Sabbir Hussain Mehboobkha", "loc": "Gambhirpura" },
  { "date": "13-03-2026", "amt": "2,500", "name": "Ghori Kamil Hussain Munisaheb", "loc": "Naliya" },
  { "date": "13-03-2026", "amt": "2,500", "name": "Ghori Babasaheb Siddhimiya", "loc": "Chudeshwar" },
  { "date": "14-03-2026", "amt": "5,000", "name": "Chauhan Habib Khanji Mehboob Khanji", "loc": "Gochadiya" },
  { "date": "14-03-2026", "amt": "2,500", "name": "Ghori Abdulkarim Hanifsaheb", "loc": "Chudeshwar" },
  { "date": "14-03-2026", "amt": "1,100", "name": "Ghori Firozmahammad Hanifsaheb", "loc": "Chudeshwar" },
  { "date": "14-03-2026", "amt": "1,100", "name": "Ghori Fakirmahammad Hanifsaheb", "loc": "Chudeshwar" },
  { "date": "14-03-2026", "amt": "1,100", "name": "Ghori Jahidhussain Fakirmahammad", "loc": "Chudeshwar" },
  { "date": "14-03-2026", "amt": "1,100", "name": "Ghori Salimkha Manvarkha", "loc": "Chudeshwar" },
  { "date": "14-03-2026", "amt": "1,100", "name": "Rathod Sakirahmed Faizmahammad", "loc": "Chudeshwar" },
  { "date": "14-03-2026", "amt": "1,000", "name": "Rathod Fazalmahammad Faizmahammad", "loc": "Chudeshwar" },
  { "date": "14-03-2026", "amt": "500", "name": "Ghori Harunrashid Nematkhanji", "loc": "Chudeshwar" },
  { "date": "14-03-2026", "amt": "1,100", "name": "Ghori Altafhussain Munirsaheb", "loc": "Chudeshwar" },
  { "date": "14-03-2026", "amt": "1,100", "name": "Ghori Soyebmahammad Amanullakhan", "loc": "Chudeshwar" },
  { "date": "14-03-2026", "amt": "1,100", "name": "Ghori Aasifkhan Firozkhan", "loc": "Chudeshwar" },
  { "date": "16-03-2026", "amt": "2,222", "name": "Mansuri Sahirbhai Noorbhai", "loc": "Dabhoi" },
  { "date": "16-03-2026", "amt": "100,000", "name": "Syed Shabanapa", "loc": "Ahmedabad" },
  { "date": "17-03-2026", "amt": "11,000", "name": "Rathod Hanifsaheb Isabkha", "loc": "Pahad" },
  { "date": "17-03-2026", "amt": "2,500", "name": "Rathod Ahmadbhai Fatehsangji", "loc": "Napad" },
  { "date": "17-03-2026", "amt": "5,000", "name": "Chauhan Nazim Khan Sultan Mohammed", "loc": "Gochadiya" },
  { "date": "18-03-2026", "amt": "5,000", "name": "Rathod Iqbal Hussain Haji. Abdul Karim and Rathod Jauddin Haji. Abdul Karim", "loc": "Tilakwada (Pahad wala)" },
  { "date": "18-03-2026", "amt": "1,500", "name": "Haji Khan Fakir Muhammad Akbar Khan", "loc": "Gorwa" },
  { "date": "18-03-2026", "amt": "2,100", "name": "Haji Sardar Khan Ahmad Khan", "loc": "Vadodara (Gorwa)" },
  { "date": "19-03-2026", "amt": "10,000", "name": "Rathod Zakir Hussain Akbarkha", "loc": "Pahad" },
  { "date": "19-03-2026", "amt": "2,100", "name": "Thakor Shahzad Ali Liyakat Ali", "loc": "Tilakwada" },
  { "date": "19-03-2026", "amt": "5,000", "name": "Thakor Amirkha Amedkha and Batul", "loc": "Mumbai" },
  { "date": "20-03-2026", "amt": "100,000", "name": "Syed Sabanapa (Secretary of Sadbhavna Charitable Foundation)", "loc": "Ahmedabad" },
  { "date": "20-03-2026", "amt": "50,000", "name": "Syed Mohammad Nameer Qadri (Sabana Apa Ke Chhote Shahzade)", "loc": "Ahmedabad" }
]


   const body = document.getElementById('donorBody');
   const total = document.getElementById('total_don');
   var sum = 0;

       // if (!body) return;

        body.innerHTML = data.map((d) => {
            sum+=Number(d.amt.replace(',',""))
            
            return `
            <tr>
                <td class="ps-4 text-muted">${d.date}</td>
                <td class="fw-bold">${d.name}</td>
                <td><span class="badge bg-light text-dark">${d.loc}</span></td>
                <td class="text-end pe-4 fw-bold text-success">₹${d.amt}</td>
            </tr> 
        `
        }).join('');

        total.innerText = sum
    