## models
### PersonalInfo
- name
>Jarib
- age
>21
- gender
>male
- dob
>2000/04/07
- nationality
>congolese
- occupation
> self employed

### Programming languages
- name
>python
- frameworks  
>>django  
>>flask  
- comfortability
>>4.5
- name
>javascript  
- framework
>>react  
>>redux
- comfortability
>>3

### Educations levels
- level
>primary school
- name
>Channester Academy
- certificate
>KCPE
- certificate image
>url/...(image)
- date completed
>datetime.datetime()
- awards
>list(*awards)

### Hirers
- name
>John Paul
- work description
>...
- date authored
>timezone.now()
- category(property)
>regex on words

### contacts
- media_name
>twitter
- media_url(null, blank)
> twitter.com/wetshi_jarib
- media_no.
> 0745036752

### work_experience
- company_name
>safaricom
- role
>junior developer
- date_started
>datetime()
- date_left
>datetime()
- years_experience
>date_left-date_started
- referee(foreign_key)
>George Magoha
- referee_level
>software

### my_projects
- name
>business card
- description
>descriptions
- rate(manytomany)
>0-5.1
- state
>public|private