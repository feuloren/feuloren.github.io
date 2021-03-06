'use strict';
var cvApp = angular.module('CvApp', []);

function CvCtrl($scope) {
    $scope.knownLanguages = [
        {name: {en : 'English',
                fr : 'Anglais'},
         desc: {en : 'Read, writen, spoken - European Level C1',
                fr : 'Lu, écrit, parlé - Niveau européen C1'},
         level: 3},
        {name: {en : 'Spanish',
                fr : 'Espagnol'},
         desc: {en : 'Read, writen, spoken - European Level B2',
                fr : 'Lu, écrit, parlé - Niveau européen B2'},
         level: 2},
        {name: {en : 'German',
                fr : 'Allemand'},
         desc: {en : 'Introduction class (6 mois)',
                fr : 'Initiation (6 mois)'},
         level : 1},
        {name: {en : 'Mandarin',
                fr : 'Mandarin'},
         desc: {en : 'Introduction class (6 mois)',
                fr : 'Initiation (6 mois)'},
         level : 1},
    ];

    $scope.skillsList = [
        {name: {en : 'Python'},
         desc: {en : 'Deep knowledge, used in a lot of projects.',
                fr : 'Très bonne connaissance, utilisé dans de nombreux projets'},
         level: 4},
        {name: {en : 'Php'},
         desc: {en : 'Creation or maintenance of several websites, with or without framework',
                fr : 'Maintenance ou création de plusieurs sites web avec ou sans framework'},
         level: 4},
        {name: {en : 'Javascript'},
         desc: {en : 'Used in several websites, including this CV (Jquery / Angular JS)',
                fr : 'Utilisation pour plusieurs sites web dont ce CV (Jquery / Angular JS)'},
         level: 3},
        {name: {en : 'SQL'},
         desc: {en : 'Lot of projects using Mysql or SQlite. PostgreSQL and Oracle studied in class',
                fr : 'Nombreux projets utilisants Mysql ou SQlite. PostgreSQL et Oracle utilisé en cours'},
         level: 2},
        {name: {en : 'C'},
         desc: {en : 'Studied in class, a few personal projets, patches for GTK+',
                fr : 'Étudié en cours, quelques projets personnels, développement de patchs pour Gtk+'},
         level: 2},
        {name: {en : 'C++'},
         desc: {en : 'Studied in class, used for an open source project',
                fr : 'Étudié en cours, utilisé dans un projet open source'},
         level: 2},
        {name: {en : 'C Arduino'},
         desc: {en : 'Several projects using Arduino libraries, bare metal programming on an Atmel AVR microcontroller',
                fr : 'Plusieurs projet en C-Arduino, programmation directe d\'un µC AVR-Atmel'},
         level: 3},
        {name: {en : 'Java'},
         desc: {en : 'Surface knowledge, used for Android applications.',
                fr : 'Connaissance superficielle, utilisé pour des projets Android'},
         level: 1},
        {name: {en : 'Lisp'},
         desc: {en : 'Studied in class (6 months), used in Emacs',
                fr : 'Étudié en cours (6 mois), utilisation dans Emacs'},
         level: 2},
        {name: {en : 'VHDL, Asm IA32'},
         desc: {en : 'Studied in class (6 months)',
                fr : 'Étudié en cours (6 mois)'},
         level: 1},
        {name: {en : 'Scilab'},
         desc: {en : 'Numerical analysis class (6 months)',
                fr : 'Cours d\'analyse numérique (6 mois)'},
         level: 2},
        {name: {en : 'Linux'},
         desc: {en : 'Daily use since 2008, administration of an ARM Server to play music (MPD) and host websites (Nginx, Apache, Tornado, Mysql)',
                fr : 'Utilisation quotidienne depuis 2008, administration d\'un serveur ARM pour la diffusion de musique (MPD) et l\'hébergement de sites web (Nginx, Apache, Tornado, Mysql)'},
         level: 4},
        {name: {en : 'Git'},
         desc: {en : 'Daily use since 2010',
                fr : 'Utilisation quotidienne depuis 2010'},
         level: 4},];

    $scope.schoolsList = [
        {name: {en : 'Since September 2011',
                fr : 'Depuis Septembre 2011'},
         title: {en : 'Université de Technologie de Compiègne (France) - Computer Science',
                 fr : 'UTC - Génie Informatique'},
         desc: {en : 'Computer Science, Mathematics, Humanities',
                fr : 'Informatique, Mathématique, Sciences Humaines'},
         level: 1},
        {name: {en : '2008 - 2011',
                fr : '2008 à 2011'},
         title: {en : 'High School - France',
                 fr : 'Lycée Émilie de Breteuil'},
         desc: {en : 'French Baccalauréat with honors - Science Stream<br/>Special Spanish section',
                fr : 'Série S - Sciences de l\'ingénieur<br/>Classe européenne Espagnol<br/>Bac Mention Très Bien'},
         level: 1},];

    $scope.experiencesList = [
        {name: {en : 'Since 2012',
                fr : 'Depuis 2012'},
         title: {en : 'Student association \'Le Polar\'',
                 fr : 'Association étudiante Le Polar'},
         desc: {en : 'Information systems manager, treasurer then president<br/>'+
                'Reprography and sale of supplies; management of a 50 persons team.<br/>'+
                'Main IT Projects:<br/><ul>'+
                '  <li>Internal website developement</li>'+
                '  <li>Tickets printing, with barcodes</li>'+
                '</ul>',
                fr : 'Gestion du système informatique, Trésorerie puis Présidence<br/>'+
                'Reprographie et vente de fournitures; gestion d\'une équipe de 50 personnes.<br/>'+
                'Projets informatiques principaux :'+
                '<ul>'+
                '  <li>Développement du site web interne de l\'association</li>'+
                '  <li>Impression de tickets avec code-barre</li>'+
'</ul>'}},
        {name: {en : '2013'},
         title: {en : 'Creation of an online treasury management system for student associations',
                 fr : 'Création d\'un système de trésorerie en ligne pour les associations de l\'UTC'},
         desc: {en : 'Project leader (4 persons) - Web developer (Php, symfony)',
                fr : 'Chef de projet (4 personnes) - développeur Web (Php - symfony)'}},
        {name: {en : '2012 - 2013',
                fr : '2012 à 2013'},
         title: {en : 'Webmaster for the scientific communication service of my university',
                 fr : 'Webmestre de la Fête de la science à l\'UTC'},
         desc: {en : 'Maintenance then full rewrite of the website',
                fr : 'Maintenance puis réécriture complète du site'}},];

    $scope.title = {en : 'Computer Science Student', fr : 'Étudiant Ingénieur en informatique'};
    $scope.subtitle = {en : 'Université de Technologie de Compiègne'};
    $scope.experience = {en : 'Experience', fr : 'Expérience'};
    $scope.education = {en : 'Education', fr : 'Formation'};
    $scope.skills = {en : 'Skills', fr : 'Compétences'};
    $scope.languages = {en : 'Languages', fr : 'Langues'};

    $scope.expanderText = {en : 'Expand', fr : 'Développer'};

    $scope.objective = {en : 'Do my Master degree\'s mid-term internship in an innovative company (From september 2014 to february 2015)', fr : 'Effectuer le stage d\'assistant ingénieur UTC (Septembre 2014 à Février 2015)'};
    $scope.objectiveTitle = {en : 'Objective : ', fr : 'Objectif : '};

    $scope.misc = {en : 'Miscellaneous', fr : 'Autre'};
    $scope.drive = {en : 'Fench driving license, own car', fr : 'Permis B et voiture personnelle'};

    $scope.availableLanguages = [
        {code : 'en', name : 'English'},
        {code : 'fr', name : 'Français'}];
    $scope.pageLanguage = $scope.availableLanguages[0];

    $scope.expandSkills = false;
    $scope.expandExps = false;
}

cvApp.directive('cvItem', function () {
    return {
        restrict:'E',
        replace:true,
        template:'<ul class="list-unstyled"></ul>',
        scope: {items : '=', language : '=', expand : '=?'},
        link:function (scope, element, attrs, ctrl) {

            var recalculate = function() {
                element.html('');
                angular.forEach(scope.items, function(item) {
                    // on détermine le label à partir de level
                    var label_class="label-default";
                    switch (item.level) {
                    case 4:
                        label_class = "label-success"
                        break;
                    case 3:
                        label_class = "label-primary"
                        break;
                    case 2:
                        label_class = "label-info"
                        break;
                    }

                    // puis les attributs en fonction de la langue
                    var name = item.name[scope.language.code] || item.name['en'];
                    var desc = item.desc[scope.language.code] || item.desc['en'];

                    var span = '<span class="label '+label_class+'">'+name+'</span>';
                    if (item.title != undefined) {
                        var title = item.title[scope.language.code] || item.title['en'];
                        span += ' <b>'+ title +'</b><br/>';
                    }

                    // si expand est vrai ou non défini on affiche la description
                    if (scope.expand == true || scope.expand == undefined) {
                        var li = '<li>'+span+' '+desc+'</li>';
                        element.attr('class', 'list-unstyled');
                    } else {
                        var li = '<li>'+span+'</li>';

                        // on transforme la liste en inline à moins qu'il y ait un titre
                        if (item.title == undefined)
                            element.attr('class', 'list-inline');
                        else
                            element.attr('class', 'list-unstyled');
                    }
                    element.append(li);
                });
            }

            scope.$watch('language', function(newl, old) {
                recalculate();
            });
            scope.$watch('expand', function(newe, old) {
                recalculate();
            });
        }
    }
});

cvApp.directive('cvText', function () {
    return {
        restrict:'A',
        scope: {item : '=cvText', language : '='},
        link:function (scope, element, attrs, ctrl) {
            scope.$watch('language', function(language, old) {
                // on détermine le texte en fonction de la langue
                var text = scope.item[language.code];
                if (text == undefined)
                    text = scope.item['en'];
                
                element.html(text);
            });
        }
    }
});

cvApp.directive('cvExpander', function () {
    return {
        restrict:'E',
        template : '<input id="{{id}}" type="checkbox" ng-model="item"/> <label for="{{id}}" cv-text="text" language="language"></label>',
        scope: {item : '=', language : '=', text: '=', id: '@item'}
    }
});
