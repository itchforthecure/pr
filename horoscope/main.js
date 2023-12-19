const horoscopes = {
    today: {
        Овен: "Гороскоп для Овна на сегодня: Вас ждет насыщенный день. События, которые произойдут в первой его половине, могут повлиять на ваши планы, заставить отложить запланированные раньше дела и сосредоточиться на чем-то совершенно ином. Вероятны необычные встречи, приятные знакомства. Интересно будет пообщаться с теми, кто совсем на вас не похож.",
        Телец: "Гороскоп для Тельца на сегодня: Если вы запланировали что-то важное, приступайте к выполнению задуманного как можно раньше. Именно первая половина дня окажется особенно благоприятной и плодотворной. Со временем влияние позитивных тенденций снизится. Вероятны задержки в делах, споры с людьми, которые совсем недавно понимали вас с полуслова и во всем поддерживали.",
        Близнецы: "Гороскоп для Близнецов на сегодня: Что бы ни происходило вокруг, вы будете сохранять спокойствие и руководствоваться здравым смыслом. Именно это позволит избежать трудностей и не допустить ошибок, исправить которые было бы нелегко. Полезными окажутся и советы тех, кто давно вас знает. Благодаря таким подсказкам вы быстро найдете кратчайший путь к цели.",
        Рак: "Гороскоп для Рака на сегодня: Вас ждет очень беспокойный день. Думать нужно будет о нескольких делах сразу; не исключено, что это заставит вас нервничать. Некоторым Ракам к тому же придется исправлять чужие ошибки. Это займет немало времени, так что реализацию собственных планов придется отложить. Но огорчаться не стоит! Все самое важное вы обязательно успеете, а к остальному сможете вернуться чуть позже.",
        Лев: "Гороскоп для Льва на сегодня: Даже если вы запланировали на этот день очень многое, не забывайте отдыхать, старайтесь отвлекаться от дел хотя бы ненадолго. Не исключено, что потребуют срочного решения совершенно новые для вас задачи. Справиться с ними будет легче, если вы не станете ориентироваться на опыт, полученный раньше, постараетесь не использовать привычными методами, а придумать нечто иное.",
        Дева: "Гороскоп для Девы на сегодня:День подойдет для работы. Сосредоточьтесь на самых важных делах, и вы добьетесь даже лучших результатов, чем можно было ожидать. Многим Девам пригодится умение ладить с людьми, находить подход к тем, кто настроен недоброжелательно. Благодаря своим дипломатическим талантам представители знака смогут подняться по карьерной лестнице.",
        Весы: "Гороскоп для Весов на сегодня:Отличный день для того, чтобы проявить инициативу в делах. Ставьте перед собой самые высокие цели, не довольствуйтесь малым. Благодаря своей настойчивости и целеустремленности вы добьетесь того, что еще недавно казалось почти невозможным. Старайтесь рассчитывать исключительно на собственные силы: едва ли вы вовремя получите помощь.",
        Скорпион: "День принесет немало переживаний. Но связаны они будут не столько с какими-то серьезными проблемами, сколько с нестабильностью эмоционального фона. Старайтесь проводить время с людьми, которые вдохновляют и поддерживают вас, а не заставляют волноваться еще больше.",
        Стрелец: "Гороскоп для Стрельца на сегодня: День будет особенно благоприятным для тех, чья работа связана с общением, требует умения находить подход к разным людям. Вероятны знакомства, которые откроют новые профессиональные перспективы. Хорошо пройдут деловые встречи. Не исключено, что у вас появится возможность неплохо заработать.Удачными будут поездки, и не важно, планиро",
        Козерог: "Гороскоп для Козерога на сегодня: Сегодня вам будет особенно легко ладить с людьми. Этим стоит воспользоваться, чтобы провести какие-то важные переговоры, пообщаться с теми, чьей поддержкой вы хотели бы заручиться. Возможны необычные встречи, а также полезные знакомства. Не исключены неожиданные, но очень заманчивые деловые предложения.",
        Водолей: "Гороскоп для Водолея на сегодня: Не требуйте слишком многого от окружающих. Возможно, они не сразу смогут оценить по достоинству ваши идеи и предложения. Трудно будет избежать недопонимания, однако в ваших силах не допустить конфликта, сохранить хорошие отношения со всеми. Любые разговоры, касающиеся денег, имущества, будущих покупок, потребуют от вас терпения и самообладания.",
        Рыбы: "Гороскоп для Рыб на сегодня: Не спешите. Начало дня пройдет приятно и спокойно, будет благоприятным для завершения старых дел, решения каких-то текущих вопросов. А еще в это время можно поговорить о будущем с людьми, которые прежде не раз давали вам толковые советы, подсказывали, как стоит действовать. Их опыт вновь будет вам полезен."
    },
    tomorrow: {
        Овен: "Гороскоп для Овна на завтра:День будет беспокойным и чрезвычайно интересным. Действовать по плану едва ли удастся; гораздо вероятнее, что вам нужно будет сосредоточиться на каких-то совершенно новых делах. Волноваться по этому поводу вы не станете, с энтузиазмом возьметесь за решения неожиданных задач и быстро с ними справитесь.",
        Телец: "Гороскоп для Тельца на завтра: Неожиданные новости и удивительные встречи возможны в начале дня. Они могут натолкнуть вас на интересные мысли, помочь по-новому взглянуть на привычные вещи. Некоторым Тельцам захочется взяться за какое-то сложное и важное дело. Однако с этим нужно не спешить: сначала соберите побольше информации, составьте план действий.",
        Близнецы: "Гороскоп для Близнецов на завтра: Хотя день будет насыщенным и наверняка не обойдется без каких-то неожиданных событий, вы сохраните спокойствие и уверенность в своих силах, не станете тревожиться из-за пустяков. Многим Близнецам интуиция подскажет, как нужно действовать, чтобы одержать верх над соперниками. Такие представители знака не станут тратить время напрасно, быстро одержат важные победы.",
        Рак: "Гороскоп для Рака на завтра: Начало дня подойдет для важных разговоров, встреч с людьми, поддержкой которых вы хотели бы заручиться. Нетрудно будет завоевать симпатию новых знакомых. Вы быстро понравитесь даже тем, кто обычно очень требователен к окружающим. Это хорошее время для начала деловых или дружеских отношений. ",
        Лев: "Гороскоп для Льва на завтра: Постарайтесь самостоятельно справиться с самыми важными делами. К сожалению, тут едва ли кто-то сможет помочь вам, да и советы, скорее всего, окажутся бесполезными. Многим Львам пригодится опыт, полученный в последние недели. Благодаря ему представители знака быстро поймут, как нужно действовать, и не допустят ошибок.",
        Дева: "Гороскоп для Девы на завтра: День пройдет очень плодотворно: вы сделаете много полезного и для себя, и для окружающих. Будет возможность завершить какие-то старые дела, решить проблемы, которые огорчали вас и заставляли беспокоиться. Девы, которые возьмутся за что-то новое, быстро добьются успеха. Им пригодится умение подходить к любому делу творчески.",
        Весы: "Гороскоп для Весов на завтра: Отличный день для деловых встреч, переговоров, обсуждения любых вопросов, касающихся работы или бизнеса. Вас внимательно выслушают даже те, кто прежде крайне неохотно шел на контакт. Некоторые Весы найдут очень влиятельных союзников и получат предложения, обещающие скорый рост доходов.",
        Скорпион: "Гороскоп для Скорпиона на завтра: День едва ли принесет какие-то значительные события или большие перемены, однако пройдет довольно приятно. Хорошо проведут время Скорпионы, которые сегодня отправятся в какие-то новые места или на интересные мероприятия. Смена обстановки вдохновит многих представителей знака. Могут появиться новые идеи, за реализацию которых вы возьметесь очень скоро.",
        Стрелец: "Гороскоп для Стрельца на завтра: День будет особенно благоприятным для тех, чья работа связана с общением, требует умения находить подход к разным людям. Вероятны знакомства, которые откроют новые профессиональные перспективы. Хорошо пройдут деловые встречи. Не исключено, что у вас появится возможность неплохо заработать.",
        Козерог: "Гороскоп для Козерога на завтра: Сегодня вам будет особенно легко ладить с людьми. Этим стоит воспользоваться, чтобы провести какие-то важные переговоры, пообщаться с теми, чьей поддержкой вы хотели бы заручиться. Возможны необычные встречи, а также полезные знакомства. Не исключены неожиданные, но очень заманчивые деловые предложения.",
        Водолей: "Гороскоп для Водолея на завтра: Не требуйте слишком многого от окружающих. Возможно, они не сразу смогут оценить по достоинству ваши идеи и предложения. Трудно будет избежать недопонимания, однако в ваших силах не допустить конфликта, сохранить хорошие отношения со всеми. Любые разговоры, касающиеся денег, имущества, будущих покупок, потребуют от вас терпения и самообладания.",
        Рыбы: "Гороскоп для Рыб на завтра: День может оказаться довольно утомительным: вам предстоит заниматься не только своими, но и чужими делами, и не все будет даваться легко. Однако вы найдете способ достичь цели. Следовать чужому примеру не захочется, вы дадите волю фантазии и наверняка придумаете что-то полезное. Некоторые проблемы, прежде огорчавшие вас и заставлявшие волноваться, решатся сами собой."
    },
    dayAfterTomorrow: {
        Овен: "Гороскоп для Овна на послезавтра: Сегодня Овнам рекомендуется использовать боевой настрой для достижения целей. Однако не стоит рисковать. Есть вероятность попасть в неприятную ситуацию из-за своей импульсивности. Гороскоп на сегодня для знака Овна рекомендует заняться домашними делами, чтобы избежать конфликтов. Вторая половина дня будет более благоприятной для общения и встреч с друзьями.",
        Телец: "Гороскоп для Тельца на послезавтра: Сегодня Тельцам стоит быть более внимательными к своим близким и окружающим людям. Есть вероятность, что кто-то из них может оказаться не таким искренним, как кажется. Гороскоп на сегодня для знака Тельца советует быть внимательнее к своему здоровью и избегать переутомления. Также рекомендуется обратить внимание на свои отношения с близкими людьми и постараться найти компромисс в спорных ситуациях.",
        Близнецы: "Гороскоп для Близнецов на послезавтраСегодня Близнецам стоит быть более терпеливыми и спокойными. Не стоит спешить с принятием решений, лучше обдумать все детали и взвесить все за и против. В личной жизни возможны перемены, но они будут положительными. Гороскоп на сегодня для знака Близнецов рекомендует оставаться дома и посвятить время общению с близкими. Внимание к семейным отношениям поможет создать уютную атмосферу и укрепить связи с теми, кто важен для вас...",
        Рак: "Гороскоп для Рака на послезавтра: Сегодня Ракам стоит быть осторожными и не доверять всем подряд. Не стоит делать поспешных выводов и принимать решения, которые могут негативно сказаться на вашей жизни. В личной жизни возможны неожиданные повороты. Будьте готовы к тому, что вам придётся изменить свои планы. Гороскоп на сегодня для Рака рекомендует быть настойчивым и целеустремленным, чтобы добиться успеха..",
        Лев: "Гороскоп для Льва на послезавтра: Сегодня Львам стоит быть осторожнее с финансами, поэтому не стоит делать крупные покупки, брать кредиты и заниматься прочими вопросами. Если вы планируете крупные покупки или важные финансовые решения, будьте особенно внимательны и обдумывайте все возможные последствия. Не забывайте, что ваша финансовая стабильность зависит от вас самих. Гороскоп на сегодня для знака Льва советует делиться своими секретами.",
        Дева: "Гороскоп для Девы на послезавтра: Сегодня Девам лучше не торопиться и тщательно взвесить все свои действия. Если вы собираетесь что-то сделать, то подумайте еще раз над тем, стоит ли совершать это действие. Гороскоп на сегодня для знака Дев не рекомендует принимать спонтанные решения, так как они могут привести к негативным последствиям. Постарайтесь быть более терпеливыми и спокойными, чтобы избежать конфликтов.",
        Весы: "Гороскоп для Весов на послезавтра: Сегодня Весам рекомендуется заняться домашними делами и решить все вопросы, которые накопились у вас дома. Это поможет вам чувствовать себя более уверенно и спокойно. Не забывайте о том, что гармония в доме — это залог гармонии в жизни. Гороскоп на сегодня для знака Весов рекомендует встретиться со своими близкими и друзьями, так как именно они могут поддержать вас в трудную минуту.",
        Скорпион: "Гороскоп для Скорпиона на послезавтра:Сегодня Скорпионам рекомендуется быть более внимательными к своему здоровью и физической форме. Занимайтесь спортом, правильно питайтесь и уделяйте достаточно времени отдыху. Это поможет вам чувствовать себя более энергичными и уверенными в себе. Гороскоп на сегодня для знака Скорпиона советует не забывать, что здоровье — это главное богатство, которое у нас есть.",
        Стрелец: "Гороскоп для Стрельца на послезавтра: Сегодня Стрельцам рекомендуется быть более целеустремленными и настойчивыми в достижении своих целей. Не бойтесь ставить перед собой большие задачи и идти к их решению. Помните, что только те, кто стремятся к успеху, добиваются его. Гороскоп на сегодня для знака Стрельца рекомендует помнить, что каждый день — это новая возможность стать лучше и достичь большего.",
        Козерог: "Гороскоп для Козерога на послезавтра: Сегодня Козерогам рекомендуется быть более общительными и открытыми к новым знакомствам. Не бойтесь выходить из зоны комфорта и знакомиться с новыми людьми. Это поможет вам расширить свой круг общения и найти новых друзей. Гороскоп на сегодня для знака Козерога гласит: не стоит забывать, что общение с другими людьми может принести много пользы и радости в вашу жизнь.",
        Водолей: "Гороскоп для Водолея на послезавтра: Сегодня Водолеям рекомендуется быть более творческими и оригинальными в своих действиях. Не бойтесь экспериментировать и искать новые способы решения задач. Это поможет вам выделиться из толпы и достичь больших высот. Гороскоп на сегодня для знака Водолея гласит: ваша индивидуальность — это ваше главное богатство. Позвольте себе выразить свои уникальные идеи и подходы.",
        Рыбы: "Гороскоп для Рыб на послезавтра: Сегодня Рыбам стоит быть осторожнее и не рисковать без необходимости. Есть вероятность, что кто-то из окружения может оказаться двуличным человеком. Не забывайте, что ваша интуиция работает лучше всего в этот день. Гороскоп на сегодня для знака Рыб советует быть внимательным к деталям и не принимать поспешных решений. Внутренний голос может предостеречь вас от потенциальных проблем."
    }
};

function getZodiacSign(date) {

    const day = date.getDate();
    const month = date.getMonth() + 1;

    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
        return "Овен";
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
        return "Телец";
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
        return "Близнецы";
    } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
        return "Рак";
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
        return "Лев";
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
        return "Дева";
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
        return "Весы";
    } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
        return "Скорпион";
    } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
        return "Стрелец";
    } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
        return "Козерог";
    } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
        return "Водолей";
    } else {
        return "Рыбы";
    }
}

const form = document.querySelector('.form')
const button = document.getElementById('generate')
const p = document.getElementById('horoscope')

button.addEventListener('click', e => {
    let checkedCheckbox = 'today'

    form.day.forEach(checkbox => {
        if (checkbox.checked) {
            checkedCheckbox = checkbox.value
        }
    });

    const dateValue = form.date.value
    let zogiacSign = null

    if (dateValue) {
        zogiacSign = getZodiacSign(new Date(dateValue))
    }
    
    const horoscope = horoscopes[checkedCheckbox][zogiacSign]
    if (horoscope) {
        p.textContent = horoscope
    } else {
        p.textContent = 'По такому запросу гороскопа нет :('
    }
})