function sendDataTechnology(palavra,correta,resposta,nroPalavra,tentativas,venceu){
	var info = {};
    var path;
    if(window.location.hostname == "localhost" ){   // for localhost tests
        path = "/exported-resource/saveStats"
    }else {                                 // for web version in production, electron and crosswalk versions
        path = "http://remar.dc.ufscar.br/exported-resource/saveStats"
	}
	$.getJSON("remar.json", function(json) {
        info.exportedResourceId = json.exportedResourceId;
        info.levelId = 1;
        info.word = palavra;
        info.correctAnswer = correta;
        info.answer = resposta;
        info.challengeId = nroPalavra;
        info.numberTries = tentativas;
        info.win = venceu;
        info.size = 3;
        info.levelName = 'Tecnologia';
        info.gameType = 'shuffleWord';
        $.ajax({
            type: "POST",
            url: path,
            data: info,
            success: function(data) {
            }
        })
	});
	console.log(palavra);
	console.log(correta);
    console.log(resposta);
	console.log(nroPalavra);
	console.log(tentativas);
    console.log(venceu);
}

function sendDataGallery(arrastos,seqInicial,seqSubmetida,seqCorreta,win){
    var info = {};
    var path;
    if(window.location.hostname == "localhost" ){   // for localhost tests
        path = "/exported-resource/saveStats"
    }else {                                 // for web version in production, electron and crosswalk versions
        path = "http://remar.dc.ufscar.br/exported-resource/saveStats"
    }
    $.getJSON("remar.json", function(json) {
        info.exportedResourceId = json.exportedResourceId;
        info.levelId = 2;
	    info.numberDrag = arrastos;
	    info.word = seqInicial;
	    info.answer = seqSubmetida;
	    info.correctAnswer = seqCorreta;
	    info.win = win;
	    info.size = 1;
	    info.challengeId = 0;
	    info.levelName = 'Galeria';
	    info.gameType = 'dragPictures';
        $.ajax({
            type: "POST",
            url: path,
            data: info,
            success: function(data) {
            }
        })
    });
    console.log(arrastos);
    console.log(seqInicial);
    console.log(seqSubmetida);
    console.log(seqCorreta);
    console.log(win);
}

function sendDataFinalLevel(pergunta,correta,nroPergunta,respostas,escolhida,acertou,tamanho,fase,nomeFase){
    var info = {};
    var path;
    if(window.location.hostname == "localhost" ){   // for localhost tests
        path = "/exported-resource/saveStats"
    }else {                                 // for web version in production, electron and crosswalk versions
        path = "http://remar.dc.ufscar.br/exported-resource/saveStats"
    }
    $.getJSON("remar.json", function(json) {
        info.exportedResourceId = json.exportedResourceId;
        info.levelId = fase;
        info.question = pergunta;
        info.correctAnswer = correta;
        info.challengeId = nroPergunta;
        info.choices = respostas;
        info.answer = escolhida;
        info.win = acertou;
        info.size = tamanho;
        info.levelName = nomeFase;
        info.gameType = 'multipleChoice';
        $.ajax({
            type: "POST",
            url: path,
            data: info,
            success: function(data) {
            }
        })
    });
    console.log(pergunta);
    console.log(correta);
    console.log(nroPergunta);
    console.log(respostas);
    console.log(escolhida);
    console.log(acertou);
    console.log(tamanho);
    console.log(fase);
    console.log(nomeFase);
}

function sendPlayDataGallery(terminou,nroDanos){
    var info = {};
    var path;
    if(window.location.hostname == "localhost" ){   // for localhost tests
        path = "/exported-resource/saveDamageStats"
    }else {                                 // for web version in production, electron and crosswalk versions
        path = "http://remar.dc.ufscar.br/exported-resource/saveDamageStats"
    }
    $.getJSON("remar.json", function(json) {
        info.exportedResourceId = json.exportedResourceId;
        info.finish = terminou;
        info.numberDamages = nroDanos;
        info.gameType = 'SantoGrauGallery';
        $.ajax({
            type: "POST",
            url: path,
            data: info,
            success: function(data) {
            }
        })
    });
    console.log(terminou);
    console.log(nroDanos);
}

function sendPlayDataFinalLevel(nroDanos,nivel){
    var info = {};
    var path;
    if(window.location.hostname == "localhost" ){   // for localhost tests
        path = "/exported-resource/saveDamageStats"
    }else {                                 // for web version in production, electron and crosswalk versions
        path = "http://remar.dc.ufscar.br/exported-resource/saveDamageStats"
    }
    $.getJSON("remar.json", function(json) {
        info.exportedResourceId = json.exportedResourceId;
        info.numberDamages = nroDanos;
        info.level = nivel;
        info.gameType = 'SantoGrauFinalLevel';
        $.ajax({
            type: "POST",
            url: path,
            data: info,
            success: function(data) {
            }
        })
    });
    console.log(nroDanos);
    console.log(nivel);
}

function sendRankingData(pontos){
    var info = {};
    var path;
    if(window.location.hostname == "localhost" ){   // for localhost tests
        path = "/exported-resource/saveScore"
    }else {                                 // for web version in production, electron and crosswalk versions
        path = "http://remar.dc.ufscar.br/exported-resource/saveScore"
    }
    $.getJSON("remar.json", function(json) {
        info.exportedResourceId = json.exportedResourceId;
        info.score = pontos;
        $.ajax({
            type: "POST",
            url: path,
            data: info,
            success: function(data) {
            }
        })
    });
    console.log(pontos);
}

function sendPlaytimeData(tempo,tipo,idJogo,idNivel,idDesafio,nomeFase){
    var info = {};
    var path;
    if(window.location.hostname == "localhost" ){   // for localhost tests
        path = "/exported-resource/saveTimeStats"
    }else {                                 // for web version in production, electron and crosswalk versions
        path = "http://remar.dc.ufscar.br/exported-resource/saveTimeStats"
    }
    $.getJSON("remar.json", function(json) {
        info.exportedResourceId = json.exportedResourceId;
        info.time = tempo;
        info.timeType = tipo;
        info.gameId = idJogo;
        if (idNivel != null){
            info.gameLevel = idNivel;
        }
        if (idDesafio != null){
            info.challengeId = idDesafio;
        }
        info.gameType = 'ConclusionTime';
        info.levelName = nomeFase;
        $.ajax({
            type: "POST",
            url: path,
            data: info,
            success: function(data) {
            }
        })
    });
    console.log(tempo);
    console.log(tipo);
    console.log(idJogo);
    if (idNivel != null){
        console.log(idNivel);
    }
    if (idDesafio != null){
        console.log(idDesafio);
    }
    console.log(nomeFase);
}