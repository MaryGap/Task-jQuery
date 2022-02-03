let headerContacts = $('.header-contacts').text();
headerContacts = headerContacts.replace('(Velcom)','<span></br></span>');
headerContacts = headerContacts.replace('11-11-333','<span style ="margin-bottom:10px">111-13-33</span>');
headerContacts = headerContacts.replace('(29)','<span style="font-weight: 700; font-size:0.5rem">(29)</span>');
$('.header-contacts').html(headerContacts)
