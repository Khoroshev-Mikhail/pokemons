import React from "react";
import './menu.css'
import MenuList from "./MenuList/MenuList";
import data from './data.js'
/*
const data = {
    "entities":{
        "pages":{
            "top": {
                "id": "top",
                "title": "Meet IntelliJ IDEA",
                "disqus_id": "Meet_the_Product_1",
                "url": "meet-intellij-idea.html",
                "level": 0,
                "pages": [
                    "Install_and_set_up__product_",
                    "Accessibility",
                    "Discover_IntelliJ_IDEA",
                    "topicId986295",
                    "_product_Pro_Tips",
                    "Keep__product__up_to_date",
                    "helponhelp"
                ],
                "tabIndex": 0
            },
        "Install_and_set_up__product_": {
            "id": "Install_and_set_up__product_",
            "title": "Install and set up IntelliJ IDEA",
            "disqus_id": "Install_and_set_up__product__1",
            "url": "install-and-set-up-product.html",
            "parentId":"top",
            "level": 1,
            "anchors": [
                "Install_and_set_up__product_#installation-requirements",
                "Install_and_set_up__product_#install-IntelliJ IDEA",
                "Install_and_set_up__product_#first-run",
                "Install_and_set_up__product_#register-IDEA",
                "Install_and_set_up__product_#update",
                "Install_and_set_up__product_#toolbox-app",
                "Install_and_set_up__product_#silent-install",
                "Install_and_set_up__product_#install-on-linux-with-snaps"
            ],
            "tabIndex": 0
        },
        "Accessibility": {
            "id": "Accessibility",
            "title": "Accessibility",
            "disqus_id": "Accessibility_1",
            "url": "accessibility.html",
            "parentId":"top",
            "level": 1,
            "anchors": [
                "Accessibility#screen_reader",
                "Accessibility#customize_ide"
            ],
        "tabIndex": 1
        },
        "Discover_IntelliJ_IDEA": {
            "id": "Discover_IntelliJ_IDEA",
            "title": "Discover IntelliJ IDEA",
            "disqus_id": "Discover_IntelliJ_IDEA_1",
            "url": "discover-intellij-idea.html",
            "parentId":"top",
            "level": 1,
            "anchors": [
                "Discover_IntelliJ_IDEA#UserInterface",
                "Discover_IntelliJ_IDEA#EditorBasics",
                "Discover_IntelliJ_IDEA#CodeCompletion",
                "Discover_IntelliJ_IDEA#Navigation",
                "Discover_IntelliJ_IDEA#QuickPopups",
                "Discover_IntelliJ_IDEA#RefactoringBasics",
                "Discover_IntelliJ_IDEA#FindingUsages",
                "Discover_IntelliJ_IDEA#Inspections",
                "Discover_IntelliJ_IDEA#CodeStyleFormatting",
                "Discover_IntelliJ_IDEA#VCSBasics",
                "Discover_IntelliJ_IDEA#Make",
                "Discover_IntelliJ_IDEA#RunningDebugging",
                "Discover_IntelliJ_IDEA#ApplicationServers",
                "Discover_IntelliJ_IDEA#BuildTools",
                "Discover_IntelliJ_IDEA#migrate",
                "Discover_IntelliJ_IDEA#whats_next"
            ],
            "tabIndex": 2
        },
    "topicId986295": {
    
    "id": "topicId986295",
    
    "title": "Mastering IntelliJ IDEA keyboard shortcuts",
    "disqus_id": "mastering_keyboard_shortcuts_1",
    "url": "mastering-keyboard-shortcuts.html",
    "parentId":"top",
    "level": 1,
    
        "anchors": [
        
"topicId986295#choose-keymap",
"topicId986295#learn-shortcuts",
"topicId986295#advanced-features"
        ],
    "tabIndex": 3},
    "_product_Pro_Tips": {
    
    "id": "_product_Pro_Tips",
    
    "title": "IntelliJ IDEA Pro Tips",
    "disqus_id": "Pro_Tips_1",
    "url": "pro-tips.html",
    "parentId":"top",
    "level": 1,
    
    "tabIndex": 4},
    "Keep__product__up_to_date": {
    
    "id": "Keep__product__up_to_date",
    
    "title": "Keep IntelliJ IDEA up to date",
    "disqus_id": "Keep__product__up_to_date_1",
    "url": "keep-product-up-to-date.html",
    "parentId":"top",
    "level": 1,
    
        "anchors": [
        
"Keep__product__up_to_date#manage_updates_manually"
        ],
    "tabIndex": 5},
    "helponhelp": {
    
    "id": "helponhelp",
    
    "title": "Getting help",
    "disqus_id": "Getting_Help_1",
    "url": "getting-help.html",
    "parentId":"top",
    "level": 1,
    
        "anchors": [
        
"helponhelp#contact-support",
"helponhelp#report-bug",
"helponhelp#9e15ce4d",
"helponhelp#learn"
        ],
    "tabIndex": 6},
    "procedures.workingwithprojects.config.template": {
    
    "id": "procedures.workingwithprojects.config.template",
    
    "title": "Configuring the IDE",
    "disqus_id": "Configuring_Project_and_IDE_Settings_1",
    "url": "configuring-project-and-ide-settings.html",
    
    "level": 0,
    
        "pages": [
        
            "touroftheUI",
            "topicId828346",
            "reference.settingsdialog.IDE.editor.colors",
            "topicId895399",
            "Configuring_Line_Endings_and_Line_Separators",
            "topicId263198",
            "topicId522328",
            "topicId162730",
            "topicId707635",
            "procedures.populatingmodules.file.register",
            "Configuring_Scopes_and_File_Colors",
            "procedures.tools.use",
            "topicId111884",
            "topicId321869",
            "Switching_Boot_JDK",
            "Increasing_Memory_Heap",
            "Sharing_Your_IDE_Settings",
            "procedures.settings",
            "topicId473736",
            "procedures.plugins.part",
            "working_with_consoles",
            "Touch_Bar_Support",
            "Tuning_product_"
        ],
    
        "anchors": [
        
"procedures.workingwithprojects.config.template#project-level",
"procedures.workingwithprojects.config.template#ide-level",
"procedures.workingwithprojects.config.template#restore-defaults",
"procedures.workingwithprojects.config.template#activity-monitor"
        ],
    "tabIndex": 1},
    "touroftheUI": {
    
    "id": "touroftheUI",
    
    "title": "Guided Tour around the User Interface",
    "disqus_id": "Guided_Tour_Around_the_User_Interface_1",
    "url": "guided-tour-around-the-user-interface.html",
    "parentId":"procedures.workingwithprojects.config.template",
    "level": 1,
    
        "pages": [
        
            "welcome",
            "topicId287958",
            "topicId149996",
            "topicId955468",
            "_product_Viewing_Modes",
            "Setting_Backgroud_Image"
        ],
    
    "tabIndex": 0},
    "welcome": {
    
    "id": "welcome",
    
    "title": "Welcome Screen",
    "disqus_id": "Welcome_Screen_1",
    "url": "welcome-screen.html",
    "parentId":"touroftheUI",
    "level": 2,
    
    "tabIndex": 0},
    "topicId287958": {
    
    "id": "topicId287958",
    
    "title": "Menus and toolbars",
    "disqus_id": "Menus_and_Toolbars_1",
    "url": "menus-and-toolbars.html",
    "parentId":"touroftheUI",
    "level": 2,
    
        "anchors": [
        
"topicId287958#main-concepts-tool-window",
"topicId287958#tips-tricks",
"topicId287958#linux-native-menu"
        ],
    "tabIndex": 1},
    "topicId149996": {
    
    "id": "topicId149996",
    
    "title": "Navigation bar",
    "disqus_id": "Navigation_Bar_1",
    "url": "navigation-bar.html",
    "parentId":"touroftheUI",
    "level": 2,
    
    "tabIndex": 2},
    "topicId955468": {
    
    "id": "topicId955468",
    
    "title": "Status bar",
    "disqus_id": "Status_Bar_1",
    "url": "status-bar.html",
    "parentId":"touroftheUI",
    "level": 2,
    
    "tabIndex": 3},
    "_product_Viewing_Modes": {
    
    "id": "_product_Viewing_Modes",
    
    "title": "IntelliJ IDEA viewing modes",
    "disqus_id": "IDE_Viewing_Modes_1",
    "url": "ide-viewing-modes.html",
    "parentId":"touroftheUI",
    "level": 2,
    
    "tabIndex": 4},
    "Setting_Backgroud_Image": {
    
    "id": "Setting_Backgroud_Image",
    
    "title": "Setting a background image",
    "disqus_id": "Setting_Background_Image_1",
    "url": "setting-background-image.html",
    "parentId":"touroftheUI",
    "level": 2,
    
    "tabIndex": 5},
    "topicId828346": {
    
    "id": "topicId828346",
    
    "title": "Configuring code style",
    "disqus_id": "Configuring_Code_Style_1",
    "url": "configuring-code-style.html",
    "parentId":"procedures.workingwithprojects.config.template",
    "level": 1,
    
    "tabIndex": 1},
    "reference.settingsdialog.IDE.editor.colors": {
    
    "id": "reference.settingsdialog.IDE.editor.colors",
    
    "title": "Configuring colors and fonts",
    "disqus_id": "Configuring_Colors_and_Fonts_1",
    "url": "configuring-colors-and-fonts.html",
    "parentId":"procedures.workingwithprojects.config.template",
    "level": 1,
    
        "anchors": [
        
"reference.settingsdialog.IDE.editor.colors#customize-color-scheme",
"reference.settingsdialog.IDE.editor.colors#semantic-highlighting",
"reference.settingsdialog.IDE.editor.colors#share-color-scheme",
"reference.settingsdialog.IDE.editor.colors#fonts",
"reference.settingsdialog.IDE.editor.colors#8cc60f8d"
        ],
    "tabIndex": 2},
    "topicId895399": {
    
    "id": "topicId895399",
    
    "title": "Configuring keyboard shortcuts",
    "disqus_id": "Configuring_Keyboard_and_Mouse_Shortcuts_1",
    "url": "configuring-keyboard-and-mouse-shortcuts.html",
    "parentId":"procedures.workingwithprojects.config.template",
    "level": 1,
    
    "tabIndex": 3},
    "Configuring_Line_Endings_and_Line_Separators": {
    
    "id": "Configuring_Line_Endings_and_Line_Separators",
    
    "title": "Configuring Line Separators",
    "disqus_id": "Configuring_Line_Endings_and_Line_Separators_1",
    "url": "configuring-line-endings-and-line-separators.html",
    "parentId":"procedures.workingwithprojects.config.template",
    "level": 1,
    
    "tabIndex": 4},
    "topicId263198": {
    
    "id": "topicId263198",
    
    "title": "Configuring Menus and Toolbars",
    "disqus_id": "Configuring_Menus_and_Toolbars_1",
    "url": "configuring-menus-and-toolbars.html",
    "parentId":"procedures.workingwithprojects.config.template",
    "level": 1,
    
    "tabIndex": 5},
    "topicId522328": {
    
    "id": "topicId522328",
    
    "title": "Working with Tool Windows",
    "disqus_id": "Tool_Windows_1",
    "url": "tool-windows.html",
    "parentId":"procedures.workingwithprojects.config.template",
    "level": 1,
    
        "pages": [
        
            "reference.toolWindows.using",
            "reference.toolWindows.viewingModes",
            "procedures.searching.speed",
            "Managing_Your_Project_Favorites"
        ],
    
    "tabIndex": 6},
    "reference.toolWindows.using": {
    
    "id": "reference.toolWindows.using",
    
    "title": "Manipulating Tool Windows",
    "disqus_id": "Manipulating_the_Tool_Windows_1",
    "url": "manipulating-the-tool-windows.html",
    "parentId":"topicId522328",
    "level": 2,
    
        "anchors": [
        
"reference.toolWindows.using#show",
"reference.toolWindows.using#hide",
"reference.toolWindows.using#hiding-tool-windows-along-tool-window-bar",
"reference.toolWindows.using#hiding-all-tool-windows",
"reference.toolWindows.using#switching-to-last-active-tool-window",
"reference.toolWindows.using#show-all",
"reference.toolWindows.using#tw_button",
"reference.toolWindows.using#move",
"reference.toolWindows.using#resize",
"reference.toolWindows.using#increase",
"reference.toolWindows.using#manage"
        ],
    "tabIndex": 0},
    "reference.toolWindows.viewingModes": {
    
    "id": "reference.toolWindows.viewingModes",
    
    "title": "Tool Windows Viewing Modes",
    "disqus_id": "Viewing_Modes_1",
    "url": "viewing-modes.html",
    "parentId":"topicId522328",
    "level": 2,
    
        "anchors": [
        
"reference.toolWindows.viewingModes#ways-to-control",
"reference.toolWindows.viewingModes#docked",
"reference.toolWindows.viewingModes#windowed",
"reference.toolWindows.viewingModes#pinned",
"reference.toolWindows.viewingModes#split",
"reference.toolWindows.viewingModes#tabbed",
"reference.toolWindows.viewingModes#wide"
        ],
    "tabIndex": 1},
    "procedures.searching.speed": {
    
    "id": "procedures.searching.speed",
    
    "title": "Speed Search in Tool Windows",
    "disqus_id": "Speed_Search_in_the_Tool_Windows_1",
    "url": "speed-search-in-the-tool-windows.html",
    "parentId":"topicId522328",
    "level": 2,
    
    "tabIndex": 2},
    "Managing_Your_Project_Favorites": {
    
    "id": "Managing_Your_Project_Favorites",
    
    "title": "Managing Your Project Favorites",
    "disqus_id": "Managing_Your_Project_Favorites_1",
    "url": "managing-your-project-favorites.html",
    "parentId":"topicId522328",
    "level": 2,
    
    "tabIndex": 3},
    "topicId162730": {
    
    "id": "topicId162730",
    
    "title": "Configuring Quick Lists",
    "disqus_id": "Configuring_Quick_Lists_1",
    "url": "configuring-quick-lists.html",
    "parentId":"procedures.workingwithprojects.config.template",
    "level": 1,
    
    "tabIndex": 7},
    "topicId707635": {
    
    "id": "topicId707635",
    
    "title": "Copying Code Style Settings",
    "disqus_id": "Copying_Code_Style_Settings_1",
    "url": "copying-code-style-settings.html",
    "parentId":"procedures.workingwithprojects.config.template",
    "level": 1,
    
    "tabIndex": 8},
    "procedures.populatingmodules.file.register": {
    
    "id": "procedures.populatingmodules.file.register",
    
    "title": "Creating and registering file types",
    "disqus_id": "Creating_and_Registering_File_Types_1",
    "url": "creating-and-registering-file-types.html",
    "parentId":"procedures.workingwithprojects.config.template",
    "level": 1,
    
        "anchors": [
        
"procedures.populatingmodules.file.register#register-new-association",
"procedures.populatingmodules.file.register#change-extension",
"procedures.populatingmodules.file.register#ignore-files-folders"
        ],
    "tabIndex": 9},
    "Configuring_Scopes_and_File_Colors": {
    
    "id": "Configuring_Scopes_and_File_Colors",
    
    "title": "Configuring Scopes and File Colors",
    "disqus_id": "Configuring_Scopes_and_File_Colors_1",
    "url": "configuring-scopes-and-file-colors.html",
    "parentId":"procedures.workingwithprojects.config.template",
    "level": 1,
    
    "tabIndex": 10},
    "procedures.tools.use": {
    
    "id": "procedures.tools.use",
    
    "title": "Configuring Third-Party Tools",
    "disqus_id": "Configuring_Third-Party_Tools_1",
    "url": "configuring-third-party-tools.html",
    "parentId":"procedures.workingwithprojects.config.template",
    "level": 1,
    
    "tabIndex": 11},
    "topicId111884": {
    
    "id": "topicId111884",
    
    "title": "Configuring Individual File Encoding",
    "disqus_id": "Configuring_Individual_File_Encoding_1",
    "url": "configuring-individual-file-encoding.html",
    "parentId":"procedures.workingwithprojects.config.template",
    "level": 1,
    
    "tabIndex": 12},
    "topicId321869": {
    
    "id": "topicId321869",
    
    "title": "Switching Between Schemes",
    "disqus_id": "Switching_Between_Schemes_1",
    "url": "switching-between-schemes.html",
    "parentId":"procedures.workingwithprojects.config.template",
    "level": 1,
    
    "tabIndex": 13},
    "Switching_Boot_JDK": {
    
    "id": "Switching_Boot_JDK",
    
    "title": "Switching Boot JDK",
    "disqus_id": "Switching_Boot_JDK_1",
    "url": "switching-boot-jdk.html",
    "parentId":"procedures.workingwithprojects.config.template",
    "level": 1,
    
    "tabIndex": 14},
    "Increasing_Memory_Heap": {
    
    "id": "Increasing_Memory_Heap",
    
    "title": "Increasing Memory Heap",
    "disqus_id": "Increasing_Memory_Heap_1",
    "url": "increasing-memory-heap.html",
    "parentId":"procedures.workingwithprojects.config.template",
    "level": 1,
    
    "tabIndex": 15},
    "Sharing_Your_IDE_Settings": {
    
    "id": "Sharing_Your_IDE_Settings",
    
    "title": "Sharing Your IDE Settings",
    "disqus_id": "Sharing_Your_IDE_Settings_1",
    "url": "sharing-your-ide-settings.html",
    "parentId":"procedures.workingwithprojects.config.template",
    "level": 1,
    
    "tabIndex": 16},
    "procedures.settings": {
    
    "id": "procedures.settings",
    
    "title": "Exporting and Importing Settings",
    "disqus_id": "Exporting_and_Importing_settings_1",
    "url": "exporting-and-importing-settings.html",
    "parentId":"procedures.workingwithprojects.config.template",
    "level": 1,
    
    "tabIndex": 17},
    "topicId473736": {
    
    "id": "topicId473736",
    
    "title": "Configuring Browsers",
    "disqus_id": "Configuring_Browsers_1",
    "url": "configuring-browsers.html",
    "parentId":"procedures.workingwithprojects.config.template",
    "level": 1,
    
    "tabIndex": 18},
    "procedures.plugins.part": {
    
    "id": "procedures.plugins.part",
    
    "title": "Managing Plugins",
    "disqus_id": "Managing_Plugins_1",
    "url": "managing-plugins.html",
    "parentId":"procedures.workingwithprojects.config.template",
    "level": 1,
    
        "anchors": [
        
"procedures.plugins.part#repos",
"procedures.plugins.part#required-plugins",
"procedures.plugins.part#plugin-dev"
        ],
    "tabIndex": 19},
    "working_with_consoles": {
    
    "id": "working_with_consoles",
    
    "title": "Working with Consoles",
    "disqus_id": "working_with_consoles_1",
    "url": "working-with-consoles.html",
    "parentId":"procedures.workingwithprojects.config.template",
    "level": 1,
    
        "pages": [
        
            "running_console",
            "topicId855505",
            "topicId285995",
            "topicId323250",
            "Working_with_System_Console"
        ],
    
    "tabIndex": 20},
    "running_console": {
    
    "id": "running_console",
    
    "title": "Running Console",
    "disqus_id": "running_console_1",
    "url": "running-console.html",
    "parentId":"working_with_consoles",
    "level": 2,
    
    "tabIndex": 0},
    "topicId855505": {
    
    "id": "topicId855505",
    
    "title": "Configuring Output Encoding",
    "disqus_id": "Configuring_Output_Encoding_1",
    "url": "configuring-output-encoding.html",
    "parentId":"working_with_consoles",
    "level": 2,
    
    "tabIndex": 1},
    "topicId285995": {
    
    "id": "topicId285995",
    
    "title": "Configuring Color Scheme for Consoles",
    "disqus_id": "Configuring_Color_Scheme_for_Consoles_1",
    "url": "configuring-color-scheme-for-consoles.html",
    "parentId":"working_with_consoles",
    "level": 2,
    
    "tabIndex": 2},
    "topicId323250": {
    
    "id": "topicId323250",
    
    "title": "Using Consoles",
    "disqus_id": "Using_Consoles_1",
    "url": "using-consoles.html",
    "parentId":"working_with_consoles",
    "level": 2,
    
    "tabIndex": 3},
    "Working_with_System_Console": {
    
    "id": "Working_with_System_Console",
    
    "title": "Working with Embedded Local Terminal",
    "disqus_id": "Working_with_System_Console_1",
    "url": "working-with-system-console.html",
    "parentId":"working_with_consoles",
    "level": 2,
    
    "tabIndex": 4},
    "Touch_Bar_Support": {
    
    "id": "Touch_Bar_Support",
    
    "title": "Touch Bar Support",
    "disqus_id": "Touch_Bar_Support_1",
    "url": "touch-bar-support.html",
    "parentId":"procedures.workingwithprojects.config.template",
    "level": 1,
    
    "tabIndex": 21},
    "Tuning_product_": {
    
    "id": "Tuning_product_",
    
    "title": "Tuning IntelliJ IDEA",
    "disqus_id": "Tuning_the_IDE_1",
    "url": "tuning-the-ide.html",
    "parentId":"procedures.workingwithprojects.config.template",
    "level": 1,
    
        "pages": [
        
            "Networking_in_product_"
        ],
    
        "anchors": [
        
"Tuning_product_#configure-jvm-options",
"Tuning_product_#configure-platform-properties",
"Tuning_product_#ide-runtime",
"Tuning_product_#default-dirs"
        ],
    "tabIndex": 22},
    "Networking_in_product_": {
    
    "id": "Networking_in_product_",
    
    "title": "Networking in IntelliJ IDEA",
    "disqus_id": "Networking_1",
    "url": "networking.html",
    "parentId":"Tuning_product_",
    "level": 2,
    
    "tabIndex": 0},
    "concepts.module.path": {
    
    "id": "concepts.module.path",
    
    "title": "Configuring projects",
    "disqus_id": "Working_with_projects_1",
    "url": "working-with-projects.html",
    
    "level": 0,
    
        "pages": [
        
            "concepts.project",
            "concepts.module.contents",
            "preferences.jdks",
            "concepts.module.libraries"
        ],
    
        "anchors": [
        
"concepts.module.path#invalidate-cache",
"concepts.module.path#path-variables",
"concepts.module.path#c336babe",
"concepts.module.path#resource-files"
        ],
    "tabIndex": 2},
    "concepts.project": {
    
    "id": "concepts.project",
    
    "title": "Working with projects",
    "disqus_id": "Creating_and_Managing_Projects_1",
    "url": "creating-and-managing-projects.html",
    "parentId":"concepts.module.path",
    "level": 1,
    
        "anchors": [
        
"concepts.project#configure-jdk",
"concepts.project#project-formats",
"concepts.project#importing-project",
"concepts.project#project-settings"
        ],
    "tabIndex": 0},
    "concepts.module.contents": {
    
    "id": "concepts.module.contents",
    
    "title": "Working with modules",
    "disqus_id": "Creating_and_Managing_Modules_1",
    "url": "creating-and-managing-modules.html",
    "parentId":"concepts.module.path",
    "level": 1,
    
        "pages": [
        
            "procedures.workingwithmodules.facet",
            "Unloading_Modules"
        ],
    
        "anchors": [
        
"concepts.module.contents#configuring-content-roots",
"concepts.module.contents#folder-categories",
"concepts.module.contents#project_tool_window",
"concepts.module.contents#exclude-files",
"concepts.module.contents#exclude-files-folders-by-name-patters",
"concepts.module.contents#assign_package_prefix",
"concepts.module.contents#specify_output_path",
"concepts.module.contents#grouping-modules",
"concepts.module.contents#working-with-module-dependencies",
"concepts.module.contents#sort-dependencies"
        ],
    "tabIndex": 1},
    "procedures.workingwithmodules.facet": {
    
    "id": "procedures.workingwithmodules.facet",
    
    "title": "Adding frameworks and technologies",
    "disqus_id": "Adding_support_for_frameworks_and_technologies_1",
    "url": "adding-support-for-frameworks-and-technologies.html",
    "parentId":"concepts.module.contents",
    "level": 2,
    
        "anchors": [
        
"procedures.workingwithmodules.facet#manually-add-facet-to-module",
"procedures.workingwithmodules.facet#disable-framework-auto-detection"
        ],
    "tabIndex": 0},
    "Unloading_Modules": {
    
    "id": "Unloading_Modules",
    
    "title": "Unloading modules",
    "disqus_id": "Unloading_Modules_1",
    "url": "unloading-modules.html",
    "parentId":"concepts.module.contents",
    "level": 2,
    
        "anchors": [
        
"Unloading_Modules#loading-unloading-modules-auto",
"Unloading_Modules#committing-changes-with-unloaded-modules",
"Unloading_Modules#f46637f6"
        ],
    "tabIndex": 1},
    "preferences.jdks": {
    
    "id": "preferences.jdks",
    
    "title": "Working with SDKs",
    "disqus_id": "SDK_1",
    "url": "sdk.html",
    "parentId":"concepts.module.path",
    "level": 1,
    
        "anchors": [
        
"preferences.jdks#define-sdk",
"preferences.jdks#manage_sdks",
"preferences.jdks#change-project-sdk",
"preferences.jdks#change-module-sdk"
        ],
    "tabIndex": 2},
    "concepts.module.libraries": {
    
    "id": "concepts.module.libraries",
    
    "title": "Working with libraries",
    "disqus_id": "Library_1",
    "url": "library.html",
    "parentId":"concepts.module.path",
    "level": 1,
    
        "anchors": [
        
"concepts.module.libraries#define-library",
"concepts.module.libraries#add-library-to-module-dependencies",
"concepts.module.libraries#excluded_lib_items",
"concepts.module.libraries#lib_levels"
        ],
    "tabIndex": 3},
    "Working_with_source_code": {
    
    "id": "Working_with_source_code",
    
    "title": "Working with source code",
    "disqus_id": "Working_with_source_code_1",
    "url": "working-with-source-code.html",
    
    "level": 0,
    
        "pages": [
        
            "ideaInterface.editor",
            "procedures.developingcode.macros",
            "Scratches",
            "Editing_CSV_and_TSV_files",
            "find.todoList",
            "concepts.templates.fileTemplates",
            "concepts.templates.liveTemplates",
            "procedures.developingcode.generate.part",
            "procedures.developingcode.complete.part",
            "topicId594870",
            "concepts.codeinspection",
            "procedures.developingcode.intention.apply",
            "topicId702952",
            "procedures.refactoring",
            "procedures.developingcode.generate.doc.comment",
            "procedures.developingcode.view.deflookup",
            "topicId109964",
            "procedures.navigating",
            "d732e145",
            "d732e155",
            "topicId98082",
            "Internationalization_and_Localization",
            "topicId587345"
        ],
    
    "tabIndex": 3},
    "ideaInterface.editor": {
    
    "id": "ideaInterface.editor",
    
    "title": "Editor basics",
    "disqus_id": "Using_code_editor_1",
    "url": "using-code-editor.html",
    "parentId":"Working_with_source_code",
    "level": 1,
    
        "anchors": [
        
"ideaInterface.editor#editor_basic_usage",
"ideaInterface.editor#editor_navigation",
"ideaInterface.editor#find_line",
"ideaInterface.editor#find_cursor_edit",
"ideaInterface.editor#lens_mode_code",
"ideaInterface.editor#editor_breadcrumbs",
"ideaInterface.editor#manage_tabs",
"ideaInterface.editor#tabs_limits",
"ideaInterface.editor#edit_code",
"ideaInterface.editor#editor_code_selection",
"ideaInterface.editor#add_new",
"ideaInterface.editor#editor_lines_code_blocks",
"ideaInterface.editor#multiple_cursor",
"ideaInterface.editor#editor_statement_select",
"ideaInterface.editor#code_folding",
"ideaInterface.editor#reformat_rearrange_code",
"ideaInterface.editor#quick_popups",
"ideaInterface.editor#spellchecking",
"ideaInterface.editor#file_encoding",
"ideaInterface.editor#editor_settings"
        ],
    "tabIndex": 0},
    "procedures.developingcode.macros": {
    
    "id": "procedures.developingcode.macros",
    
    "title": "Using macros in the editor",
    "disqus_id": "Using_Macros_in_the_Editor_1",
    "url": "using-macros-in-the-editor.html",
    "parentId":"Working_with_source_code",
    "level": 1,
    
        "anchors": [
        
"procedures.developingcode.macros#record-a-macro",
"procedures.developingcode.macros#play-back-a-macro",
"procedures.developingcode.macros#edit-macros",
"procedures.developingcode.macros#bind"
        ],
    "tabIndex": 1},
    "Scratches": {
    
    "id": "Scratches",
    
    "title": "Scratches",
    "disqus_id": "Scratches_1",
    "url": "scratches.html",
    "parentId":"Working_with_source_code",
    "level": 1,
    
    "tabIndex": 2},
    "Editing_CSV_and_TSV_files": {
    
    "id": "Editing_CSV_and_TSV_files",
    
    "title": "Editing CSV and TSV Files as Tables",
    "disqus_id": "Editing_CSV_and_TSV_files_1",
    "url": "editing-csv-and-tsv-files.html",
    "parentId":"Working_with_source_code",
    "level": 1,
    
    "tabIndex": 3},
    "find.todoList": {
    
    "id": "find.todoList",
    
    "title": "TODO comments",
    "disqus_id": "Using_TODO_1",
    "url": "using-todo.html",
    "parentId":"Working_with_source_code",
    "level": 1,
    
    "tabIndex": 4},
    "concepts.templates.fileTemplates": {
    
    "id": "concepts.templates.fileTemplates",
    
    "title": "File and code templates",
    "disqus_id": "Using_File_and_Code_Templates_1",
    "url": "using-file-and-code-templates.html",
    "parentId":"Working_with_source_code",
    "level": 1,
    
        "pages": [
        
            "file_template_variables",
            "parse_directive"
        ],
    
    "tabIndex": 5},
    "file_template_variables": {
    
    "id": "file_template_variables",
    
    "title": "File template variables",
    "disqus_id": "file_template_variables_1",
    "url": "file-template-variables.html",
    "parentId":"concepts.templates.fileTemplates",
    "level": 2,
    
        "anchors": [
        
"file_template_variables#predefined_template_variables",
"file_template_variables#custom_template_variables"
        ],
    "tabIndex": 0},
    "parse_directive": {
    
    "id": "parse_directive",
    
    "title": "Reusable content in templates",
    "disqus_id": "parse_directive_1",
    "url": "parse-directive.html",
    "parentId":"concepts.templates.fileTemplates",
    "level": 2,
    
    "tabIndex": 1},
    "concepts.templates.liveTemplates": {
    
    "id": "concepts.templates.liveTemplates",
    
    "title": "Using live templates",
    "disqus_id": "Using_Live_Templates_1",
    "url": "using-live-templates.html",
    "parentId":"Working_with_source_code",
    "level": 1,
    
        "pages": [
        
            "procedures.livetemplates.create",
            "template_variables",
            "Sharing_Live_Templates"
        ],
    
    "tabIndex": 6},
    "procedures.livetemplates.create": {
    
    "id": "procedures.livetemplates.create",
    
    "title": "Creating Live Templates",
    "disqus_id": "Creating_and_Editing_Live_Templates_1",
    "url": "creating-and-editing-live-templates.html",
    "parentId":"concepts.templates.liveTemplates",
    "level": 2,
    
    "tabIndex": 0},
    "template_variables": {
    
    "id": "template_variables",
    
    "title": "Live Template Variables",
    "disqus_id": "template_variables_1",
    "url": "template-variables.html",
    "parentId":"concepts.templates.liveTemplates",
    "level": 2,
    
        "anchors": [
        
"template_variables#pdtv",
"template_variables#predefined_functions"
        ],
    "tabIndex": 1},
    "Sharing_Live_Templates": {
    
    "id": "Sharing_Live_Templates",
    
    "title": "Sharing Live Templates",
    "disqus_id": "Sharing_Live_Templates_1",
    "url": "sharing-live-templates.html",
    "parentId":"concepts.templates.liveTemplates",
    "level": 2,
    
        "anchors": [
        
"Sharing_Live_Templates#example"
        ],
    "tabIndex": 2},
    "procedures.developingcode.generate.part": {
    
    "id": "procedures.developingcode.generate.part",
    
    "title": "Generating Code",
    "disqus_id": "Generating_Code_1",
    "url": "generating-code.html",
    "parentId":"Working_with_source_code",
    "level": 1,
    
        "pages": [
        
            "generate-custom-code-constructs-using-live-templates",
            "procedures.developingcode.implement",
            "procedures.developingcode.override",
            "procedures.developingcode.enclose",
            "procedures.developingcode.complete.smart.brace"
        ],
    
        "anchors": [
        
"procedures.developingcode.generate.part#generate-constructors",
"procedures.developingcode.generate.part#generate-delegation-methods",
"procedures.developingcode.generate.part#generate-equals-hashcode",
"procedures.developingcode.generate.part#generate-getters-setters",
"procedures.developingcode.generate.part#generate-tostring",
"procedures.developingcode.generate.part#customize-templates"
        ],
    "tabIndex": 7},
    "generate-custom-code-constructs-using-live-templates": {
    
    "id": "generate-custom-code-constructs-using-live-templates",
    
    "title": "Generate Custom Code Constructs Using Live Templates",
    "disqus_id": "generate-custom-code-constructs-using-live-templates_1",
    "url": "generate-custom-code-constructs-using-live-templates.html",
    "parentId":"procedures.developingcode.generate.part",
    "level": 2,
    
    "tabIndex": 0},
    "procedures.developingcode.implement": {
    
    "id": "procedures.developingcode.implement",
    
    "title": "Implement Methods of an Interface or Abstract Class",
    "disqus_id": "Implementing_Methods_of_an_Interface_1",
    "url": "implementing-methods-of-an-interface.html",
    "parentId":"procedures.developingcode.generate.part",
    "level": 2,
    
    "tabIndex": 1},
    "procedures.developingcode.override": {
    
    "id": "procedures.developingcode.override",
    
    "title": "Override Methods of a Superclass",
    "disqus_id": "Overriding_Methods_of_a_Superclass_1",
    "url": "overriding-methods-of-a-superclass.html",
    "parentId":"procedures.developingcode.generate.part",
    "level": 2,
    
    "tabIndex": 2},
    "procedures.developingcode.enclose": {
    
    "id": "procedures.developingcode.enclose",
    
    "title": "Surround Code Fragments with Language-Specific Constructs",
    "disqus_id": "Surrounding_Blocks_of_Code_with_Language_Constructs_1",
    "url": "surrounding-blocks-of-code-with-language-constructs.html",
    "parentId":"procedures.developingcode.generate.part",
    "level": 2,
    
    "tabIndex": 3},
    "procedures.developingcode.complete.smart.brace": {
    
    "id": "procedures.developingcode.complete.smart.brace",
    
    "title": "Complete Paired Characters",
    "disqus_id": "Completing_Punctuation_1",
    "url": "completing-punctuation.html",
    "parentId":"procedures.developingcode.generate.part",
    "level": 2,
    
    "tabIndex": 4},
    "procedures.developingcode.complete.part": {
    
    "id": "procedures.developingcode.complete.part",
    
    "title": "Code completion",
    "disqus_id": "Auto-Completing_Code_1",
    "url": "auto-completing-code.html",
    "parentId":"Working_with_source_code",
    "level": 1,
    
        "anchors": [
        
"procedures.developingcode.complete.part#basic_completion",
"procedures.developingcode.complete.part#smart_completion",
"procedures.developingcode.complete.part#statements_completion",
"procedures.developingcode.complete.part#hippie_completion",
"procedures.developingcode.complete.part#postfix_completion",
"procedures.developingcode.complete.part#tag_names_completion",
"procedures.developingcode.complete.part#configure-code-completion",
"procedures.developingcode.complete.part#completion_tips",
"procedures.developingcode.complete.part#troubleshooting"
        ],
    "tabIndex": 8},
    "topicId594870": {
    
    "id": "topicId594870",
    
    "title": "Using auto import",
    "disqus_id": "Creating_and_Optimizing_Imports_1",
    "url": "creating-and-optimizing-imports.html",
    "parentId":"Working_with_source_code",
    "level": 1,
    
        "anchors": [
        
"topicId594870#automatically-add-import-statements",
"topicId594870#disable-import-popups",
"topicId594870#import-packages-instead-of-single-classes",
"topicId594870#disable-wildcard-imports",
"topicId594870#exclude-classes-and-packages-from-auto-import",
"topicId594870#optimize-imports"
        ],
    "tabIndex": 9},
    "concepts.codeinspection": {
    
    "id": "concepts.codeinspection",
    
    "title": "Code inspection",
    "disqus_id": "Code_Inspection_1",
    "url": "code-inspection.html",
    "parentId":"Working_with_source_code",
    "level": 1,
    
        "pages": [
        
            "topicId701",
            "procedures.inspecting.profiles",
            "topicId865400",
            "topicId613869",
            "procedures.inspecting.running",
            "Running_Inspection_by_Name",
            "Analyzing_Inspection_Results",
            "Applying_Quickfixes_Automatically",
            "procedures.inspecting.quickfixes",
            "procedures.inspecting.suppressing",
            "procedures.inspecting.disabling",
            "procedures.inspecting.export",
            "procedures.inspecting.running.offline",
            "procedures.inspecting.view",
            "topicId304593",
            "procedures.inspecting.owninspections"
        ],
    
    "tabIndex": 10},
    "topicId701": {
    
    "id": "topicId701",
    
    "title": "Accessing Inspection Settings",
    "disqus_id": "Inspection_Settings_1",
    "url": "inspection-settings.html",
    "parentId":"concepts.codeinspection",
    "level": 2,
    
    "tabIndex": 0},
    "procedures.inspecting.profiles": {
    
    "id": "procedures.inspecting.profiles",
    
    "title": "Customizing Profiles",
    "disqus_id": "Customizing_Profiles_1",
    "url": "customizing-profiles.html",
    "parentId":"concepts.codeinspection",
    "level": 2,
    
    "tabIndex": 1},
    "topicId865400": {
    
    "id": "topicId865400",
    
    "title": "Changing the Order of Scopes",
    "disqus_id": "Configuring_Inspection_for_Different_Scopes_1",
    "url": "configuring-inspection-for-different-scopes.html",
    "parentId":"concepts.codeinspection",
    "level": 2,
    
    "tabIndex": 2},
    "topicId613869": {
    
    "id": "topicId613869",
    
    "title": "Configuring Inspection Severities",
    "disqus_id": "Configuring_Inspection_Severities_1",
    "url": "configuring-inspection-severities.html",
    "parentId":"concepts.codeinspection",
    "level": 2,
    
        "anchors": [
        
"topicId613869#severity",
"topicId613869#scope",
"topicId613869#highlight",
"topicId613869#custom"
        ],
    "tabIndex": 3},
    "procedures.inspecting.running": {
    
    "id": "procedures.inspecting.running",
    
    "title": "Running Inspections",
    "disqus_id": "Running_Inspections_1",
    "url": "running-inspections.html",
    "parentId":"concepts.codeinspection",
    "level": 2,
    
    "tabIndex": 4},
    "Running_Inspection_by_Name": {
    
    "id": "Running_Inspection_by_Name",
    
    "title": "Running Inspection by Name",
    "disqus_id": "Running_Inspection_by_Name_1",
    "url": "running-inspection-by-name.html",
    "parentId":"concepts.codeinspection",
    "level": 2,
    
    "tabIndex": 5},
    "Analyzing_Inspection_Results": {
    
    "id": "Analyzing_Inspection_Results",
    
    "title": "Analyzing Inspection Results",
    "disqus_id": "Analyzing_Inspection_Results_1",
    "url": "analyzing-inspection-results.html",
    "parentId":"concepts.codeinspection",
    "level": 2,
    
    "tabIndex": 6},
    "Applying_Quickfixes_Automatically": {
    
    "id": "Applying_Quickfixes_Automatically",
    
    "title": "Applying Quickfixes Automatically",
    "disqus_id": "Applying_Quickfixes_Automatically_1",
    "url": "applying-quickfixes-automatically.html",
    "parentId":"concepts.codeinspection",
    "level": 2,
    
    "tabIndex": 7},
    "procedures.inspecting.quickfixes": {
    
    "id": "procedures.inspecting.quickfixes",
    
    "title": "Resolving Problems",
    "disqus_id": "Resolving_Problems_1",
    "url": "resolving-problems.html",
    "parentId":"concepts.codeinspection",
    "level": 2,
    
    "tabIndex": 8},
    "procedures.inspecting.suppressing": {
    
    "id": "procedures.inspecting.suppressing",
    
    "title": "Suppressing Inspections",
    "disqus_id": "Suppressing_Inspections_1",
    "url": "suppressing-inspections.html",
    "parentId":"concepts.codeinspection",
    "level": 2,
    
    "tabIndex": 9},
    "procedures.inspecting.disabling": {
    
    "id": "procedures.inspecting.disabling",
    
    "title": "Disabling and Enabling Inspections",
    "disqus_id": "Disabling_and_Enabling_Inspections_1",
    "url": "disabling-and-enabling-inspections.html",
    "parentId":"concepts.codeinspection",
    "level": 2,
    
    "tabIndex": 10},
    "procedures.inspecting.export": {
    
    "id": "procedures.inspecting.export",
    
    "title": "Exporting Inspection Results",
    "disqus_id": "Exporting_Inspection_Results_1",
    "url": "exporting-inspection-results.html",
    "parentId":"concepts.codeinspection",
    "level": 2,
    
    "tabIndex": 11},
    "procedures.inspecting.running.offline": {
    
    "id": "procedures.inspecting.running.offline",
    
    "title": "Running Inspections Offline",
    "disqus_id": "Running_Inspections_Offline_1",
    "url": "running-inspections-offline.html",
    "parentId":"concepts.codeinspection",
    "level": 2,
    
    "tabIndex": 12},
    "procedures.inspecting.view": {
    
    "id": "procedures.inspecting.view",
    
    "title": "Viewing Offline Inspections Results",
    "disqus_id": "Viewing_Offline_Inspections_Results_1",
    "url": "viewing-offline-inspections-results.html",
    "parentId":"concepts.codeinspection",
    "level": 2,
    
    "tabIndex": 13},
    "topicId304593": {
    
    "id": "topicId304593",
    
    "title": "Changing Highlighting Level for the Current File",
    "disqus_id": "Changing_Highlighting_Level_for_the_Current_File_1",
    "url": "changing-highlighting-level-for-the-current-file.html",
    "parentId":"concepts.codeinspection",
    "level": 2,
    
    "tabIndex": 14},
    "procedures.inspecting.owninspections": {
    
    "id": "procedures.inspecting.owninspections",
    
    "title": "Creating Custom Inspections",
    "disqus_id": "Creating_Custom_Inspections_1",
    "url": "creating-custom-inspections.html",
    "parentId":"concepts.codeinspection",
    "level": 2,
    
    "tabIndex": 15},
    "procedures.developingcode.intention.apply": {
    
    "id": "procedures.developingcode.intention.apply",
    
    "title": "Intention actions",
    "disqus_id": "Intention_Actions_1",
    "url": "intention-actions.html",
    "parentId":"Working_with_source_code",
    "level": 1,
    
        "anchors": [
        
"procedures.developingcode.intention.apply#apply-intention-actions",
"procedures.developingcode.intention.apply#intention-settings",
"procedures.developingcode.intention.apply#disable-intention"
        ],
    "tabIndex": 11},
    "topicId702952": {
    
    "id": "topicId702952",
    
    "title": "Annotations",
    "disqus_id": "Annotating_Source_Code_1",
    "url": "annotating-source-code.html",
    "parentId":"Working_with_source_code",
    "level": 1,
    
        "pages": [
        
            "procedures.inspecting.examples.annotation.nullable",
            "_Contract_Annotations",
            "_ParametersAreNonnullByDefault_Annotation",
            "Inferring_Nullity",
            "concepts.annotation"
        ],
    
    "tabIndex": 12},
    "procedures.inspecting.examples.annotation.nullable": {
    
    "id": "procedures.inspecting.examples.annotation.nullable",
    
    "title": "@Nullable and @NotNull",
    "disqus_id": "@Nullable_and_@NotNull_Annotations_1",
    "url": "nullable-and-notnull-annotations.html",
    "parentId":"topicId702952",
    "level": 2,
    
    "tabIndex": 0},
    "_Contract_Annotations": {
    
    "id": "_Contract_Annotations",
    
    "title": "@Contract",
    "disqus_id": "@Contract_Annotations_1",
    "url": "contract-annotations.html",
    "parentId":"topicId702952",
    "level": 2,
    
    "tabIndex": 1},
    "_ParametersAreNonnullByDefault_Annotation": {
    
    "id": "_ParametersAreNonnullByDefault_Annotation",
    
    "title": "@ParametersAreNonnullByDefault",
    "disqus_id": "@ParametersAreNonnullByDefault_Annotation_1",
    "url": "parametersarenonnullbydefault-annotation.html",
    "parentId":"topicId702952",
    "level": 2,
    
    "tabIndex": 2},
    "Inferring_Nullity": {
    
    "id": "Inferring_Nullity",
    
    "title": "Infer nullity",
    "disqus_id": "Inferring_Nullity_1",
    "url": "inferring-nullity.html",
    "parentId":"topicId702952",
    "level": 2,
    
        "anchors": [
        
"Inferring_Nullity#d7da3485"
        ],
    "tabIndex": 3},
    "concepts.annotation": {
    
    "id": "concepts.annotation",
    
    "title": "External annotations",
    "disqus_id": "External_Annotations_1",
    "url": "external-annotations.html",
    "parentId":"topicId702952",
    "level": 2,
    
    "tabIndex": 4},
    "procedures.refactoring": {
    
    "id": "procedures.refactoring",
    
    "title": "Refactoring source code",
    "disqus_id": "Refactoring_Source_Code_1",
    "url": "refactoring-source-code.html",
    "parentId":"Working_with_source_code",
    "level": 1,
    
        "pages": [
        
            "procedures.refactoring.changeMethodSignature",
            "procedures.refactoring.convertAnonymousToInner",
            "procedures.refactoring.convertToInstanceMethod",
            "convert.refactorings",
            "procedures.refactoring.encapsulateFields",
            "d732e112",
            "procedures.refactoring.replaceMethodCodeDuplicates",
            "procedures.refactoring.generify",
            "procedures.refactoring.inlineRefactorings",
            "procedures.refactoring.invertBoolean",
            "procedures.refactoring.makeMethodStatic",
            "procedures.refactoring.migrate",
            "procedures.refactoring.moveRefactoring",
            "procedures.refactoring.pullMembersUp",
            "topicId100000038",
            "procedures.refactoring.renameRefactorings",
            "replace_constructor_with_builder",
            "procedures.refactoring.replaceConstructorWithFactoryMethod",
            "procedures.refactoring.replaceInheritanceWithDelegation",
            "procedures.refactoring.replaceTempWithQuery",
            "procedures.refactoring.safeDelete",
            "refactoring.migrateType",
            "procedures.refactoring.useInterfaceWherePossible",
            "topicId100000035"
        ],
    
    "tabIndex": 13},
    "procedures.refactoring.changeMethodSignature": {
    
    "id": "procedures.refactoring.changeMethodSignature",
    
    "title": "Change Signature",
    "disqus_id": "Change_Signature_1",
    "url": "change-signature.html",
    "parentId":"procedures.refactoring",
    "level": 2,
    
        "anchors": [
        
"procedures.refactoring.changeMethodSignature#change_class_signature_refactoring",
"procedures.refactoring.changeMethodSignature#change_method_signature_refactoring"
        ],
    "tabIndex": 0},
    "procedures.refactoring.convertAnonymousToInner": {
    
    "id": "procedures.refactoring.convertAnonymousToInner",
    
    "title": "Convert Anonymous to Inner",
    "disqus_id": "Convert_Anonymous_to_Inner_1",
    "url": "convert-anonymous-to-inner.html",
    "parentId":"procedures.refactoring",
    "level": 2,
    
    "tabIndex": 1},
    "procedures.refactoring.convertToInstanceMethod": {
    
    "id": "procedures.refactoring.convertToInstanceMethod",
    
    "title": "Convert to Instance Method",
    "disqus_id": "Convert_to_Instance_Method_1",
    "url": "convert-to-instance-method.html",
    "parentId":"procedures.refactoring",
    "level": 2,
    
    "tabIndex": 2},
    "convert.refactorings": {
    
    "id": "convert.refactorings",
    
    "title": "Convert to Package and Module",
    "disqus_id": "Refactoring_Convert_1",
    "url": "refactoring-convert.html",
    "parentId":"procedures.refactoring",
    "level": 2,
    
    "tabIndex": 3},
    "procedures.refactoring.encapsulateFields": {
    
    "id": "procedures.refactoring.encapsulateFields",
    
    "title": "Encapsulate Fields",
    "disqus_id": "Encapsulate_Fields_1",
    "url": "encapsulate-fields.html",
    "parentId":"procedures.refactoring",
    "level": 2,
    
    "tabIndex": 4},
    "d732e112": {
    "id": "d732e112",
    "parentId":"procedures.refactoring","selectFirstChildOnClick": true,
    "level": 2,
    
        "pages": [
        
            "refactoring.introduceConstant",
            "procedures.refactoring.introduceField",
            "procedures.refactoring.extractInterface",
            "procedures.refactoring.extractMethod",
            "procedures.refactoring.extractSuperclass",
            "procedures.refactoring.introduceVariable",
            "JavaIntroduce",
            "Extract_into_class_refactorings"
        ],
    
    "title": "Extract refactorings",
    "tabIndex": 5},
    "refactoring.introduceConstant": {
    
    "id": "refactoring.introduceConstant",
    
    "title": "Extract Constant",
    "disqus_id": "Extract_Constant_1",
    "url": "extract-constant.html",
    "parentId":"d732e112",
    "level": 3,
    
    "tabIndex": 0},
    "procedures.refactoring.introduceField": {
    
    "id": "procedures.refactoring.introduceField",
    
    "title": "Extract Field",
    "disqus_id": "Extract_Field_1",
    "url": "extract-field.html",
    "parentId":"d732e112",
    "level": 3,
    
    "tabIndex": 1},
    "procedures.refactoring.extractInterface": {
    
    "id": "procedures.refactoring.extractInterface",
    
    "title": "Extract interface",
    "disqus_id": "Extract_interface__1",
    "url": "extract-interface.html",
    "parentId":"d732e112",
    "level": 3,
    
    "tabIndex": 2},
    "procedures.refactoring.extractMethod": {
    
    "id": "procedures.refactoring.extractMethod",
    
    "title": "Extract method",
    "disqus_id": "Extract_Method_1",
    "url": "extract-method.html",
    "parentId":"d732e112",
    "level": 3,
    
    "tabIndex": 3},
    "procedures.refactoring.extractSuperclass": {
    
    "id": "procedures.refactoring.extractSuperclass",
    
    "title": "Extract Superclass",
    "disqus_id": "Extract_Superclass_1",
    "url": "extract-superclass.html",
    "parentId":"d732e112",
    "level": 3,
    
    "tabIndex": 4},
    "procedures.refactoring.introduceVariable": {
    
    "id": "procedures.refactoring.introduceVariable",
    
    "title": "Extract Variable",
    "disqus_id": "Extract_Variable_1",
    "url": "extract-variable.html",
    "parentId":"d732e112",
    "level": 3,
    
    "tabIndex": 5},
    "JavaIntroduce": {
    
    "id": "JavaIntroduce",
    
    "title": "Extract parameter",
    "disqus_id": "JavaIntroduce_1",
    "url": "javaintroduce.html",
    "parentId":"d732e112",
    "level": 3,
    
    "tabIndex": 6},
    "Extract_into_class_refactorings": {
    
    "id": "Extract_into_class_refactorings",
    
    "title": "Extract into class refactorings",
    "disqus_id": "Extract_into_class_refactorings_1",
    "url": "extract-into-class-refactorings.html",
    "parentId":"d732e112",
    "level": 3,
    
    "tabIndex": 7},
    "procedures.refactoring.replaceMethodCodeDuplicates": {
    
    "id": "procedures.refactoring.replaceMethodCodeDuplicates",
    
    "title": "Find and Replace Code Duplicates",
    "disqus_id": "Find_and_Replace_Code_Duplicates_1",
    "url": "find-and-replace-code-duplicates.html",
    "parentId":"procedures.refactoring",
    "level": 2,
    
    "tabIndex": 6},
    "procedures.refactoring.generify": {
    
    "id": "procedures.refactoring.generify",
    
    "title": "Generify Refactoring",
    "disqus_id": "Generify_Refactoring_1",
    "url": "generify-refactoring.html",
    "parentId":"procedures.refactoring",
    "level": 2,
    
    "tabIndex": 7},
    "procedures.refactoring.inlineRefactorings": {
    
    "id": "procedures.refactoring.inlineRefactorings",
    
    "title": "Inline",
    "disqus_id": "Inline_1",
    "url": "inline.html",
    "parentId":"procedures.refactoring",
    "level": 2,
    
    "tabIndex": 8},
    "procedures.refactoring.invertBoolean": {
    
    "id": "procedures.refactoring.invertBoolean",
    
    "title": "Invert Boolean",
    "disqus_id": "Invert_Boolean_Refactoring_1",
    "url": "invert-boolean-refactoring.html",
    "parentId":"procedures.refactoring",
    "level": 2,
    
    "tabIndex": 9},
    "procedures.refactoring.makeMethodStatic": {
    
    "id": "procedures.refactoring.makeMethodStatic",
    
    "title": "Make Static",
    "disqus_id": "Make_Method_Static_1",
    "url": "make-method-static.html",
    "parentId":"procedures.refactoring",
    "level": 2,
    
    "tabIndex": 10},
    "procedures.refactoring.migrate": {
    
    "id": "procedures.refactoring.migrate",
    
    "title": "Migrate",
    "disqus_id": "Migrate_1",
    "url": "migrate.html",
    "parentId":"procedures.refactoring",
    "level": 2,
    
    "tabIndex": 11},
    "procedures.refactoring.moveRefactoring": {
    
    "id": "procedures.refactoring.moveRefactoring",
    
    "title": "Move and Copy refactorings",
    "disqus_id": "Move_Refactorings_1",
    "url": "move-refactorings.html",
    "parentId":"procedures.refactoring",
    "level": 2,
    
    "tabIndex": 12},
    "procedures.refactoring.pullMembersUp": {
    
    "id": "procedures.refactoring.pullMembersUp",
    
    "title": "Pull Members Up, Push Members Down",
    "disqus_id": "Pull_Members_Up_1",
    "url": "pull-members-up.html",
    "parentId":"procedures.refactoring",
    "level": 2,
    
    "tabIndex": 13},
    "topicId100000038": {
    
    "id": "topicId100000038",
    
    "title": "Remove Middleman",
    "disqus_id": "Remove_Middleman_1",
    "url": "remove-middleman.html",
    "parentId":"procedures.refactoring",
    "level": 2,
    
    "tabIndex": 14},
    "procedures.refactoring.renameRefactorings": {
    
    "id": "procedures.refactoring.renameRefactorings",
    
    "title": "Rename Refactorings",
    "disqus_id": "Rename_Refactorings_1",
    "url": "rename-refactorings.html",
    "parentId":"procedures.refactoring",
    "level": 2,
    
    "tabIndex": 15},
    "replace_constructor_with_builder": {
    
    "id": "replace_constructor_with_builder",
    
    "title": "Replace Constructor with Builder",
    "disqus_id": "replace_constructor_with_builder_1",
    "url": "replace-constructor-with-builder.html",
    "parentId":"procedures.refactoring",
    "level": 2,
    
    "tabIndex": 16},
    "procedures.refactoring.replaceConstructorWithFactoryMethod": {
    
    "id": "procedures.refactoring.replaceConstructorWithFactoryMethod",
    
    "title": "Replace Constructor with Factory Method",
    "disqus_id": "Replace_Constructor_with_Factory_Method_1",
    "url": "replace-constructor-with-factory-method.html",
    "parentId":"procedures.refactoring",
    "level": 2,
    
    "tabIndex": 17},
    "procedures.refactoring.replaceInheritanceWithDelegation": {
    
    "id": "procedures.refactoring.replaceInheritanceWithDelegation",
    
    "title": "Replace Inheritance with Delegation",
    "disqus_id": "Replace_Inheritance_with_Delegation_1",
    "url": "replace-inheritance-with-delegation.html",
    "parentId":"procedures.refactoring",
    "level": 2,
    
    "tabIndex": 18},
    "procedures.refactoring.replaceTempWithQuery": {
    
    "id": "procedures.refactoring.replaceTempWithQuery",
    
    "title": "Replace Temp With Query",
    "disqus_id": "Replace_Temp_With_Query_1",
    "url": "replace-temp-with-query.html",
    "parentId":"procedures.refactoring",
    "level": 2,
    
    "tabIndex": 19},
    "procedures.refactoring.safeDelete": {
    
    "id": "procedures.refactoring.safeDelete",
    
    "title": "Safe Delete",
    "disqus_id": "Safe_Delete_1",
    "url": "safe-delete.html",
    "parentId":"procedures.refactoring",
    "level": 2,
    
    "tabIndex": 20},
    "refactoring.migrateType": {
    
    "id": "refactoring.migrateType",
    
    "title": "Type Migration",
    "disqus_id": "Type_Migration_1",
    "url": "type-migration.html",
    "parentId":"procedures.refactoring",
    "level": 2,
    
    "tabIndex": 21},
    "procedures.refactoring.useInterfaceWherePossible": {
    
    "id": "procedures.refactoring.useInterfaceWherePossible",
    
    "title": "Use Interface Where Possible",
    "disqus_id": "Use_Interface_Where_Possible_1",
    "url": "use-interface-where-possible.html",
    "parentId":"procedures.refactoring",
    "level": 2,
    
    "tabIndex": 22},
    "topicId100000035": {
    
    "id": "topicId100000035",
    
    "title": "Wrap Return Value",
    "disqus_id": "Wrap_Return_Value_1",
    "url": "wrap-return-value.html",
    "parentId":"procedures.refactoring",
    "level": 2,
    
    "tabIndex": 23},
    "procedures.developingcode.generate.doc.comment": {
    
    "id": "procedures.developingcode.generate.doc.comment",
    
    "title": "Code documentation",
    "disqus_id": "Working_with_code_documentation_1",
    "url": "working-with-code-documentation.html",
    "parentId":"Working_with_source_code",
    "level": 1,
    
        "anchors": [
        
"procedures.developingcode.generate.doc.comment#add-javadoc-comments",
"procedures.developingcode.generate.doc.comment#generate-javadoc"
        ],
    "tabIndex": 14},
    "procedures.developingcode.view.deflookup": {
    
    "id": "procedures.developingcode.view.deflookup",
    
    "title": "View code reference info",
    "disqus_id": "Viewing_Reference_Information_1",
    "url": "viewing-reference-information.html",
    "parentId":"Working_with_source_code",
    "level": 1,
    
        "anchors": [
        
"procedures.developingcode.view.deflookup#view-definition-symbols",
"procedures.developingcode.view.deflookup#view-parameter-info",
"procedures.developingcode.view.deflookup#parameter-hints",
"procedures.developingcode.view.deflookup#inline-quick-documentation",
"procedures.developingcode.view.deflookup#external-docs"
        ],
    "tabIndex": 15},
    "topicId109964": {
    
    "id": "topicId109964",
    
    "title": "Language injections",
    "disqus_id": "Using_Language_Injections_1",
    "url": "using-language-injections.html",
    "parentId":"Working_with_source_code",
    "level": 1,
    
        "anchors": [
        
"topicId109964#use-language-injection-comments",
"topicId109964#language_annotation",
"topicId109964#configure-injection-rules",
"topicId109964#cancel-injections"
        ],
    "tabIndex": 16},
    "procedures.navigating": {
    
    "id": "procedures.navigating",
    
    "title": "Navigating through the source code",
    "disqus_id": "Navigating_Through_the_Source_Code_1",
    "url": "navigating-through-the-source-code.html",
    "parentId":"Working_with_source_code",
    "level": 1,
    
        "anchors": [
        
"procedures.navigating#navigate_in_project_view",
"procedures.navigating#scroll_to_from_source",
"procedures.navigating#use_bookmarks",
"procedures.navigating#go_to_declaration",
"procedures.navigating#go_to_implementation",
"procedures.navigating#use_structure_view"
        ],
    "tabIndex": 17},
    "d732e145": {
    "id": "d732e145",
    "parentId":"Working_with_source_code","selectFirstChildOnClick": true,
    "level": 1,
    
        "pages": [
        
            "ixFindText",
            "find.replaceInPath",
            "Replace_the_found_target",
            "Tutorial_Finding_and_Replacing_Text_Using_Regular_Expressions",
            "Tutorial__Finding_usages_of_implemented_and_overridden_PHP_methods",
            "topicId453705",
            "procedures.navigating.goto.class"
        ],
    
    "title": "Searching through the source code",
    "tabIndex": 18},
    "ixFindText": {
    
    "id": "ixFindText",
    
    "title": "Search for a target within a file",
    "disqus_id": "Finding_and_Replacing_Text_in_File_1",
    "url": "finding-and-replacing-text-in-file.html",
    "parentId":"d732e145",
    "level": 2,
    
        "anchors": [
        
"ixFindText#work_with_search_results"
        ],
    "tabIndex": 0},
    "find.replaceInPath": {
    
    "id": "find.replaceInPath",
    
    "title": "Search for a target and usages within a project",
    "disqus_id": "Finding_and_Replacing_Text_in_Project_1",
    "url": "finding-and-replacing-text-in-project.html",
    "parentId":"d732e145",
    "level": 2,
    
        "anchors": [
        
"find.replaceInPath#find_in_project",
"find.replaceInPath#limit_search",
"find.replaceInPath#exclude_type",
"find.replaceInPath#find_usages",
"find.replaceInPath#find_occurrences"
        ],
    "tabIndex": 1},
    "Replace_the_found_target": {
    
    "id": "Replace_the_found_target",
    
    "title": "Replace the found target",
    "disqus_id": "Replace_the_found_target_1",
    "url": "replace-the-found-target.html",
    "parentId":"d732e145",
    "level": 2,
    
        "anchors": [
        
"Replace_the_found_target#replace_search_string",
"Replace_the_found_target#replace_search_string_in_project"
        ],
    "tabIndex": 2},
    "Tutorial_Finding_and_Replacing_Text_Using_Regular_Expressions": {
    
    "id": "Tutorial_Finding_and_Replacing_Text_Using_Regular_Expressions",
    
    "title": "Find and replace a string using regular expressions",
    "disqus_id": "Tutorial_Finding_and_Replacing_Text_Using_Regular_Expressions_1",
    "url": "tutorial-finding-and-replacing-text-using-regular-expressions.html",
    "parentId":"d732e145",
    "level": 2,
    
        "anchors": [
        
"Tutorial_Finding_and_Replacing_Text_Using_Regular_Expressions#capture_groups_and_backreference",
"Tutorial_Finding_and_Replacing_Text_Using_Regular_Expressions#upper_lower_case_switch"
        ],
    "tabIndex": 3},
    "Tutorial__Finding_usages_of_implemented_and_overridden_PHP_methods": {
    
    "id": "Tutorial__Finding_usages_of_implemented_and_overridden_PHP_methods",
    
    "title": "Tutorial: Finding usages of implemented and overridden PHP methods",
    "disqus_id": "Tutorial__Finding_usages_of_implemented_and_overridden_PHP_methods_1",
    "url": "tutorial-finding-usages-of-implemented-and-overridden-php-methods.html",
    "parentId":"d732e145",
    "level": 2,
    
    "tabIndex": 4},
    "topicId453705": {
    
    "id": "topicId453705",
    
    "title": "Structural Search and Replace",
    "disqus_id": "Structural_Search_and_Replace_1",
    "url": "structural-search-and-replace.html",
    "parentId":"d732e145",
    "level": 2,
    
        "pages": [
        
            "concepts.templates.searchTemplates",
            "topicId676534"
        ],
    
    "tabIndex": 5},
    "concepts.templates.searchTemplates": {
    
    "id": "concepts.templates.searchTemplates",
    
    "title": "Search templates, filters, and script constraints",
    "disqus_id": "Search_Templates_1",
    "url": "search-templates.html",
    "parentId":"topicId453705",
    "level": 3,
    
        "anchors": [
        
"concepts.templates.searchTemplates#count_filter",
"concepts.templates.searchTemplates#reference_filter",
"concepts.templates.searchTemplates#type_filter",
"concepts.templates.searchTemplates#text_filter",
"concepts.templates.searchTemplates#script_constraints"
        ],
    "tabIndex": 0},
    "topicId676534": {
    
    "id": "topicId676534",
    
    "title": "Structural Search and Replace Examples",
    "disqus_id": "Structural_Search_and_Replace_Examples_1",
    "url": "structural-search-and-replace-examples.html",
    "parentId":"topicId453705",
    "level": 3,
    
    "tabIndex": 1},
    "procedures.navigating.goto.class": {
    
    "id": "procedures.navigating.goto.class",
    
    "title": "Search for a target by name",
    "disqus_id": "Searching_Everywhere_1",
    "url": "searching-everywhere.html",
    "parentId":"d732e145",
    "level": 2,
    
    "tabIndex": 6},
    "d732e155": {
    "id": "d732e155",
    "parentId":"Working_with_source_code","selectFirstChildOnClick": true,
    "level": 1,
    
        "pages": [
        
            "Project_module_dependencies_diagram",
            "Class_diagram"
        ],
    
    "title": "Working with Diagrams",
    "tabIndex": 19},
    "Project_module_dependencies_diagram": {
    
    "id": "Project_module_dependencies_diagram",
    
    "title": "Module dependencies diagram",
    "disqus_id": "Project_module_dependencies_diagram_1",
    "url": "project-module-dependencies-diagram.html",
    "parentId":"d732e155",
    "level": 2,
    
        "anchors": [
        
"Project_module_dependencies_diagram#view_module_diagram",
"Project_module_dependencies_diagram#analyze_module_diagram",
"Project_module_dependencies_diagram#manage_diagram"
        ],
    "tabIndex": 0},
    "Class_diagram": {
    
    "id": "Class_diagram",
    
    "title": "Class diagram",
    "disqus_id": "Class_diagram_1",
    "url": "class-diagram.html",
    "parentId":"d732e155",
    "level": 2,
    
        "anchors": [
        
"Class_diagram#analyze_class",
"Class_diagram#manage_class_diagram"
        ],
    "tabIndex": 1},
    "topicId98082": {
    
    "id": "topicId98082",
    
    "title": "Comparing files, folders, and text sources",
    "disqus_id": "Comparing_Files_and_Folders_1",
    "url": "comparing-files-and-folders.html",
    "parentId":"Working_with_source_code",
    "level": 1,
    
        "anchors": [
        
"topicId98082#comparing_files",
"topicId98082#comparing_folders",
"topicId98082#90887c2a"
        ],
    "tabIndex": 20},
    "Internationalization_and_Localization": {
    
    "id": "Internationalization_and_Localization",
    
    "title": "Internationalization and Localization",
    "disqus_id": "Internationalization_and_Localization_1",
    "url": "internationalization-and-localization.html",
    "parentId":"Working_with_source_code",
    "level": 1,
    
        "pages": [
        
            "Properties_Files",
            "concepts.file.resourceBundle",
            "hard_coded_string_literals",
            "Text_Direction"
        ],
    
    "tabIndex": 21},
    "Properties_Files": {
    
    "id": "Properties_Files",
    
    "title": "Properties Files",
    "disqus_id": "Properties_Files_1",
    "url": "properties-files.html",
    "parentId":"Internationalization_and_Localization",
    "level": 2,
    
        "anchors": [
        
"Properties_Files#encoding"
        ],
    "tabIndex": 0},
    "concepts.file.resourceBundle": {
    
    "id": "concepts.file.resourceBundle",
    
    "title": "Resource Bundle",
    "disqus_id": "Resource_Bundle_1",
    "url": "resource-bundle.html",
    "parentId":"Internationalization_and_Localization",
    "level": 2,
    
        "anchors": [
        
"concepts.file.resourceBundle#editing"
        ],
    "tabIndex": 1},
    "hard_coded_string_literals": {
    
    "id": "hard_coded_string_literals",
    
    "title": "Hard-Coded String Literals",
    "disqus_id": "hard_coded_string_literals_1",
    "url": "hard-coded-string-literals.html",
    "parentId":"Internationalization_and_Localization",
    "level": 2,
    
        "anchors": [
        
"hard_coded_string_literals#extract",
"hard_coded_string_literals#ignore"
        ],
    "tabIndex": 2},
    "Text_Direction": {
    
    "id": "Text_Direction",
    
    "title": "Text Direction",
    "disqus_id": "Text_Direction_1",
    "url": "text-direction.html",
    "parentId":"Internationalization_and_Localization",
    "level": 2,
    
    "tabIndex": 3},
    "topicId587345": {
    
    "id": "topicId587345",
    
    "title": "Copyright",
    "disqus_id": "Copyright_1",
    "url": "copyright.html",
    "parentId":"Working_with_source_code",
    "level": 1,
    
        "anchors": [
        
"topicId587345#copyright-profile",
"topicId587345#db2437dd",
"topicId587345#paste-copyright",
"topicId587345#update-copyright",
"topicId587345#default"
        ],
    "tabIndex": 22},
    "d732e166": {
    "id": "d732e166",
    "selectFirstChildOnClick": true,
    "level": 0,
    
        "pages": [
        
            "concepts.run.configuration",
            "d732e173",
            "procedures.debugging",
            "d732e207",
            "procedures.compiling",
            "reference.project.structure.artifacts.output",
            "Deploying_Applications",
            "Using_File_Watchers"
        ],
    
    "title": "Building, running, testing and deploying applications",
    "tabIndex": 4},
    "concepts.run.configuration": {
    
    "id": "concepts.run.configuration",
    
    "title": "Working with Run/Debug Configurations",
    "disqus_id": "Run_Debug_Configuration_1",
    "url": "run-debug-configuration.html",
    "parentId":"d732e166",
    "level": 1,
    
        "pages": [
        
            "procedures.running.configuration",
            "Changing_Default_Run_Debug_Configurations",
            "Creating_Compound_Run_Debug_Configuration",
            "procedures.running.configuration.temporary",
            "Creating_Folders_and_Grouping_Run_Debug_Configurations"
        ],
    
    "tabIndex": 0},
    "procedures.running.configuration": {
    
    "id": "procedures.running.configuration",
    
    "title": "Creating and Editing Run/Debug Configurations",
    "disqus_id": "Creating_and_Editing_Run_Debug_Configurations_1",
    "url": "creating-and-editing-run-debug-configurations.html",
    "parentId":"concepts.run.configuration",
    "level": 2,
    
        "anchors": [
        
"procedures.running.configuration#run-dashboard"
        ],
    "tabIndex": 0},
    "Changing_Default_Run_Debug_Configurations": {
    
    "id": "Changing_Default_Run_Debug_Configurations",
    
    "title": "Changing Run/Debug Configuration Templates",
    "disqus_id": "Changing_Default_Run_Debug_Configurations_1",
    "url": "changing-default-run-debug-configurations.html",
    "parentId":"concepts.run.configuration",
    "level": 2,
    
    "tabIndex": 1},
    "Creating_Compound_Run_Debug_Configuration": {
    
    "id": "Creating_Compound_Run_Debug_Configuration",
    
    "title": "Creating Compound Run/Debug Configuration",
    "disqus_id": "Creating_Compound_Run_Debug_Configuration_1",
    "url": "creating-compound-run-debug-configuration.html",
    "parentId":"concepts.run.configuration",
    "level": 2,
    
    "tabIndex": 2},
    "procedures.running.configuration.temporary": {
    
    "id": "procedures.running.configuration.temporary",
    
    "title": "Creating and Saving Temporary Run/Debug Configurations",
    "disqus_id": "Creating_and_Saving_Temporary_Run_Debug_Configurations_1",
    "url": "creating-and-saving-temporary-run-debug-configurations.html",
    "parentId":"concepts.run.configuration",
    "level": 2,
    
    "tabIndex": 3},
    "Creating_Folders_and_Grouping_Run_Debug_Configurations": {
    
    "id": "Creating_Folders_and_Grouping_Run_Debug_Configurations",
    
    "title": "Creating Folders and Grouping Run/Debug Configurations",
    "disqus_id": "Creating_Folders_and_Grouping_Run_Debug_Configurations_1",
    "url": "creating-folders-and-grouping-run-debug-configurations.html",
    "parentId":"concepts.run.configuration",
    "level": 2,
    
    "tabIndex": 4},
    "d732e173": {
    "id": "d732e173",
    "parentId":"d732e166","selectFirstChildOnClick": true,
    "level": 1,
    
        "pages": [
        
            "procedures.running",
            "procedures.running.rerun",
            "procedures.running.review",
            "procedures.running.stop",
            "procedures.running.configuration.conftab",
            "procedures.running.configuration.logstab",
            "Viewing_Running_Processes"
        ],
    
    "title": "Running",
    "tabIndex": 1},
    "procedures.running": {
    
    "id": "procedures.running",
    
    "title": "Running Applications",
    "disqus_id": "Running_Applications_1",
    "url": "running-applications.html",
    "parentId":"d732e173",
    "level": 2,
    
    "tabIndex": 0},
    "procedures.running.rerun": {
    
    "id": "procedures.running.rerun",
    
    "title": "Rerunning Applications",
    "disqus_id": "Rerunning_Applications_1",
    "url": "rerunning-applications.html",
    "parentId":"d732e173",
    "level": 2,
    
    "tabIndex": 1},
    "procedures.running.review": {
    
    "id": "procedures.running.review",
    
    "title": "Reviewing Results",
    "disqus_id": "Reviewing_Results_1",
    "url": "reviewing-results.html",
    "parentId":"d732e173",
    "level": 2,
    
    "tabIndex": 2},
    "procedures.running.stop": {
    
    "id": "procedures.running.stop",
    
    "title": "Stopping and Pausing Applications",
    "disqus_id": "Stopping_and_Pausing_Applications_1",
    "url": "stopping-and-pausing-applications.html",
    "parentId":"d732e173",
    "level": 2,
    
    "tabIndex": 3},
    "procedures.running.configuration.conftab": {
    
    "id": "procedures.running.configuration.conftab",
    
    "title": "Setting Configuration Options",
    "disqus_id": "Setting_Configuration_Options_1",
    "url": "setting-configuration-options.html",
    "parentId":"d732e173",
    "level": 2,
    
    "tabIndex": 4},
    "procedures.running.configuration.logstab": {
    
    "id": "procedures.running.configuration.logstab",
    
    "title": "Setting Log Options",
    "disqus_id": "Setting_Log_Options_1",
    "url": "setting-log-options.html",
    "parentId":"d732e173",
    "level": 2,
    
    "tabIndex": 5},
    "Viewing_Running_Processes": {
    
    "id": "Viewing_Running_Processes",
    
    "title": "Viewing Running Processes",
    "disqus_id": "Viewing_Running_Processes_1",
    "url": "viewing-running-processes.html",
    "parentId":"d732e173",
    "level": 2,
    
    "tabIndex": 6},
    "procedures.debugging": {
    
    "id": "procedures.debugging",
    
    "title": "Debugging",
    "disqus_id": "Debugging_Code_1",
    "url": "debugging-code.html",
    "parentId":"d732e166",
    "level": 1,
    
        "pages": [
        
            "procedures.breakpoints",
            "procedures.debugging.configure",
            "procedures.debugging.startingDebugger",
            "procedures.debugging.pauseResume",
            "topicId949557",
            "topicId56237",
            "topicId297075",
            "topicId185478",
            "topicId962785",
            "topicId815566",
            "Analyze_objects_in_the_JVM_heap",
            "Analyze_Java_Stream_operations",
            "Debug_asynchronous_code",
            "Inline_Debugging",
            "Attaching_to_Local_Process",
            "procedures.debugging.reloadingClasses",
            "Tutorial_Java_Debugging_Deep_Dive"
        ],
    
    "tabIndex": 2},
    "procedures.breakpoints": {
    
    "id": "procedures.breakpoints",
    
    "title": "Breakpoints",
    "disqus_id": "Using_Breakpoints_1",
    "url": "using-breakpoints.html",
    "parentId":"procedures.debugging",
    "level": 2,
    
        "anchors": [
        
"procedures.breakpoints#line-breakpoints",
"procedures.breakpoints#method_breakpoint",
"procedures.breakpoints#exception-breakpoints",
"procedures.breakpoints#field_watchpoint",
"procedures.breakpoints#breakpoint-properties",
"procedures.breakpoints#dc4e19ef"
        ],
    "tabIndex": 0},
    "procedures.debugging.configure": {
    
    "id": "procedures.debugging.configure",
    
    "title": "Configuring Debugger Options",
    "disqus_id": "Configuring_Debugger_Options_1",
    "url": "configuring-debugger-options.html",
    "parentId":"procedures.debugging",
    "level": 2,
    
    "tabIndex": 1},
    "procedures.debugging.startingDebugger": {
    
    "id": "procedures.debugging.startingDebugger",
    
    "title": "Starting the Debugger Session",
    "disqus_id": "Starting_the_Debugger_Session_1",
    "url": "starting-the-debugger-session.html",
    "parentId":"procedures.debugging",
    "level": 2,
    
    "tabIndex": 2},
    "procedures.debugging.pauseResume": {
    
    "id": "procedures.debugging.pauseResume",
    
    "title": "Pausing and Resuming the Debugger Session",
    "disqus_id": "Pausing_and_Resuming_the_Debugger_Session_1",
    "url": "pausing-and-resuming-the-debugger-session.html",
    "parentId":"procedures.debugging",
    "level": 2,
    
    "tabIndex": 3},
    "topicId949557": {
    
    "id": "topicId949557",
    
    "title": "Examining Suspended Program",
    "disqus_id": "Examining_Suspended_Program_1",
    "url": "examining-suspended-program.html",
    "parentId":"procedures.debugging",
    "level": 2,
    
    "tabIndex": 4},
    "topicId56237": {
    
    "id": "topicId56237",
    
    "title": "Exploring Frames",
    "disqus_id": "Exploring_Frames_1",
    "url": "exploring-frames.html",
    "parentId":"procedures.debugging",
    "level": 2,
    
        "pages": [
        
            "debugging.debugMenu.evaluate",
            "topicId570117",
            "topicId3094",
            "topicId747424",
            "topicId430108"
        ],
    
    "tabIndex": 5},
    "debugging.debugMenu.evaluate": {
    
    "id": "debugging.debugMenu.evaluate",
    
    "title": "Evaluating Expressions",
    "disqus_id": "Evaluating_Expressions_1",
    "url": "evaluating-expressions.html",
    "parentId":"topicId56237",
    "level": 3,
    
    "tabIndex": 0},
    "topicId570117": {
    
    "id": "topicId570117",
    
    "title": "Adding, Editing and Removing Watches",
    "disqus_id": "Adding_Editing_and_Removing_Watches_1",
    "url": "adding-editing-and-removing-watches.html",
    "parentId":"topicId56237",
    "level": 3,
    
    "tabIndex": 1},
    "topicId3094": {
    
    "id": "topicId3094",
    
    "title": "Inspecting Watched Items",
    "disqus_id": "Inspecting_Watched_Items_1",
    "url": "inspecting-watched-items.html",
    "parentId":"topicId56237",
    "level": 3,
    
    "tabIndex": 2},
    "topicId747424": {
    
    "id": "topicId747424",
    
    "title": "Setting Labels to Variables, Objects and Watches",
    "disqus_id": "Setting_Labels_to_Variables_Objects_and_Watches_1",
    "url": "setting-labels-to-variables-objects-and-watches.html",
    "parentId":"topicId56237",
    "level": 3,
    
    "tabIndex": 3},
    "topicId430108": {
    
    "id": "topicId430108",
    
    "title": "Navigating to Source Code from the Debug Tool Window",
    "disqus_id": "Navigating_to_Source_Code_from_the_Debug_Tool_Window_1",
    "url": "navigating-to-source-code-from-the-debug-tool-window.html",
    "parentId":"topicId56237",
    "level": 3,
    
    "tabIndex": 4},
    "topicId297075": {
    
    "id": "topicId297075",
    
    "title": "Customizing Views",
    "disqus_id": "Customizing_Views_1",
    "url": "customizing-views.html",
    "parentId":"procedures.debugging",
    "level": 2,
    
    "tabIndex": 6},
    "topicId185478": {
    
    "id": "topicId185478",
    
    "title": "Finding the Current Execution Point",
    "disqus_id": "Finding_the_Current_Execution_Point_1",
    "url": "finding-the-current-execution-point.html",
    "parentId":"procedures.debugging",
    "level": 2,
    
    "tabIndex": 7},
    "topicId962785": {
    
    "id": "topicId962785",
    
    "title": "Stepping Through the Program",
    "disqus_id": "Stepping_Through_the_Program_1",
    "url": "stepping-through-the-program.html",
    "parentId":"procedures.debugging",
    "level": 2,
    
        "pages": [
        
            "topicId989491",
            "procedures.debugging.configureSpeed"
        ],
    
    "tabIndex": 8},
    "topicId989491": {
    
    "id": "topicId989491",
    
    "title": "Choosing a Method to Step Into",
    "disqus_id": "Choosing_a_Method_to_Step_Into_1",
    "url": "choosing-a-method-to-step-into.html",
    "parentId":"topicId962785",
    "level": 3,
    
    "tabIndex": 0},
    "procedures.debugging.configureSpeed": {
    
    "id": "procedures.debugging.configureSpeed",
    
    "title": "Improving Stepping Speed",
    "disqus_id": "Improving_Stepping_Speed_1",
    "url": "improving-stepping-speed.html",
    "parentId":"topicId962785",
    "level": 3,
    
    "tabIndex": 1},
    "topicId815566": {
    
    "id": "topicId815566",
    
    "title": "Monitoring the Debug Information",
    "disqus_id": "Monitoring_the_Debug_Information_1",
    "url": "monitoring-the-debug-information.html",
    "parentId":"procedures.debugging",
    "level": 2,
    
    "tabIndex": 9},
    "Analyze_objects_in_the_JVM_heap": {
    
    "id": "Analyze_objects_in_the_JVM_heap",
    
    "title": "Analyze objects in the JVM heap",
    "disqus_id": "Analyze_objects_in_the_JVM_heap_1",
    "url": "analyze-objects-in-the-jvm-heap.html",
    "parentId":"procedures.debugging",
    "level": 2,
    
    "tabIndex": 10},
    "Analyze_Java_Stream_operations": {
    
    "id": "Analyze_Java_Stream_operations",
    
    "title": "Analyze Java Stream operations",
    "disqus_id": "Analyze_Java_Stream_operations_1",
    "url": "analyze-java-stream-operations.html",
    "parentId":"procedures.debugging",
    "level": 2,
    
    "tabIndex": 11},
    "Debug_asynchronous_code": {
    
    "id": "Debug_asynchronous_code",
    
    "title": "Debug asynchronous code",
    "disqus_id": "Debug_asynchronous_code_1",
    "url": "debug-asynchronous-code.html",
    "parentId":"procedures.debugging",
    "level": 2,
    
        "anchors": [
        
"Debug_asynchronous_code#4381730b",
"Debug_asynchronous_code#e0ac3ca0",
"Debug_asynchronous_code#60d22630"
        ],
    "tabIndex": 12},
    "Inline_Debugging": {
    
    "id": "Inline_Debugging",
    
    "title": "Inline Values View",
    "disqus_id": "Inline_Debugging_1",
    "url": "inline-debugging.html",
    "parentId":"procedures.debugging",
    "level": 2,
    
    "tabIndex": 13},
    "Attaching_to_Local_Process": {
    
    "id": "Attaching_to_Local_Process",
    
    "title": "Attach to Process",
    "disqus_id": "Attaching_to_Local_Process_1",
    "url": "attaching-to-local-process.html",
    "parentId":"procedures.debugging",
    "level": 2,
    
    "tabIndex": 14},
    "procedures.debugging.reloadingClasses": {
    
    "id": "procedures.debugging.reloadingClasses",
    
    "title": "Altering the program's execution flow",
    "disqus_id": "Altering_the_program_s_execution_flow_1",
    "url": "altering-the-program-s-execution-flow.html",
    "parentId":"procedures.debugging",
    "level": 2,
    
    "tabIndex": 15},
    "Tutorial_Java_Debugging_Deep_Dive": {
    
    "id": "Tutorial_Java_Debugging_Deep_Dive",
    
    "title": "Tutorial: Java Debugging Deep Dive",
    "disqus_id": "Tutorial_Java_Debugging_Deep_Dive_1",
    "url": "tutorial-java-debugging-deep-dive.html",
    "parentId":"procedures.debugging",
    "level": 2,
    
        "anchors": [
        
"Tutorial_Java_Debugging_Deep_Dive#46a2ba01",
"Tutorial_Java_Debugging_Deep_Dive#7b2157ba",
"Tutorial_Java_Debugging_Deep_Dive#a95567b2",
"Tutorial_Java_Debugging_Deep_Dive#fd8f187d",
"Tutorial_Java_Debugging_Deep_Dive#b081b391",
"Tutorial_Java_Debugging_Deep_Dive#3972d198",
"Tutorial_Java_Debugging_Deep_Dive#5870ac29",
"Tutorial_Java_Debugging_Deep_Dive#49b7360f",
"Tutorial_Java_Debugging_Deep_Dive#195073b1",
"Tutorial_Java_Debugging_Deep_Dive#f1ba1aa8",
"Tutorial_Java_Debugging_Deep_Dive#async_stacktraces",
"Tutorial_Java_Debugging_Deep_Dive#multithreaded_applications",
"Tutorial_Java_Debugging_Deep_Dive#breakpoint_properties",
"Tutorial_Java_Debugging_Deep_Dive#070cd109",
"Tutorial_Java_Debugging_Deep_Dive#5895321d",
"Tutorial_Java_Debugging_Deep_Dive#ad9fb3c4",
"Tutorial_Java_Debugging_Deep_Dive#5db7790d",
"Tutorial_Java_Debugging_Deep_Dive#9763ff17",
"Tutorial_Java_Debugging_Deep_Dive#6216581a",
"Tutorial_Java_Debugging_Deep_Dive#1de7e099"
        ],
    "tabIndex": 16},
    "d732e207": {
    "id": "d732e207",
    "parentId":"d732e166","selectFirstChildOnClick": true,
    "level": 1,
    
        "pages": [
        
            "procedures.testing",
            "topicId457683",
            "procedures.testing.createRunDebugConfiguration",
            "procedures.testing.performingTests",
            "topicId953965",
            "procedures.testing.monitoringTests",
            "procedures.testing.viewingTestResults",
            "procedures.testing.rerunningTests",
            "procedures.testing.terminatingTests",
            "Code_Coverage",
            "TDD_With_IntelliJ_IDEA"
        ],
    
    "title": "Testing",
    "tabIndex": 3},
    "procedures.testing": {
    
    "id": "procedures.testing",
    
    "title": "Configuring Testing Libraries",
    "disqus_id": "Configuring_Testing_Libraries_1",
    "url": "configuring-testing-libraries.html",
    "parentId":"d732e207",
    "level": 2,
    
    "tabIndex": 0},
    "topicId457683": {
    
    "id": "topicId457683",
    
    "title": "Creating Tests",
    "disqus_id": "Create_Tests_1",
    "url": "create-tests.html",
    "parentId":"d732e207",
    "level": 2,
    
        "anchors": [
        
"topicId457683#create-test-methods",
"topicId457683#naming-pattern"
        ],
    "tabIndex": 1},
    "procedures.testing.createRunDebugConfiguration": {
    
    "id": "procedures.testing.createRunDebugConfiguration",
    
    "title": "Creating Run/Debug Configuration for Tests",
    "disqus_id": "Creating_Run_Debug_Configuration_for_Tests_1",
    "url": "creating-run-debug-configuration-for-tests.html",
    "parentId":"d732e207",
    "level": 2,
    
    "tabIndex": 2},
    "procedures.testing.performingTests": {
    
    "id": "procedures.testing.performingTests",
    
    "title": "Performing Tests",
    "disqus_id": "Performing_Tests_1",
    "url": "performing-tests.html",
    "parentId":"d732e207",
    "level": 2,
    
    "tabIndex": 3},
    "topicId953965": {
    
    "id": "topicId953965",
    
    "title": "Navigating Between Test and Test Subject",
    "disqus_id": "Navigating_Between_Test_and_Test_Subject_1",
    "url": "navigating-between-test-and-test-subject.html",
    "parentId":"d732e207",
    "level": 2,
    
    "tabIndex": 4},
    "procedures.testing.monitoringTests": {
    
    "id": "procedures.testing.monitoringTests",
    
    "title": "Monitoring and Managing Tests",
    "disqus_id": "Monitoring_and_Managing_Tests_1",
    "url": "monitoring-and-managing-tests.html",
    "parentId":"d732e207",
    "level": 2,
    
    "tabIndex": 5},
    "procedures.testing.viewingTestResults": {
    
    "id": "procedures.testing.viewingTestResults",
    
    "title": "Viewing and Exploring Test Results",
    "disqus_id": "Viewing_and_Exploring_Test_Results_1",
    "url": "viewing-and-exploring-test-results.html",
    "parentId":"d732e207",
    "level": 2,
    
    "tabIndex": 6},
    "procedures.testing.rerunningTests": {
    
    "id": "procedures.testing.rerunningTests",
    
    "title": "Rerunning Tests",
    "disqus_id": "Rerunning_Tests_1",
    "url": "rerunning-tests.html",
    "parentId":"d732e207",
    "level": 2,
    
    "tabIndex": 7},
    "procedures.testing.terminatingTests": {
    
    "id": "procedures.testing.terminatingTests",
    
    "title": "Terminating Tests",
    "disqus_id": "Terminating_Tests_1",
    "url": "terminating-tests.html",
    "parentId":"d732e207",
    "level": 2,
    
    "tabIndex": 8},
    "settings.nodejs": {
    
    "id": "settings.nodejs",
    
    "title": "Node.js and NPM",
    "disqus_id": "Node_js_1",
    "url": "node-js.html",
    "parentId":"configurable.group.language.help.topic",
    "level": 3,
    
    "tabIndex": 7},
    "reference.settings.project.osgi.project.settings": {
    
    "id": "reference.settings.project.osgi.project.settings",
    
    "title": "OSGi",
    "disqus_id": "OSGi_Settings_1",
    "url": "osgi-settings.html",
    "parentId":"configurable.group.language.help.topic",
    "level": 3,
    
    "tabIndex": 8},
    "reference.settings.project.osgi.framework.definitions": {
    
    "id": "reference.settings.project.osgi.framework.definitions",
    
    "title": "OSGi Framework Instances",
    "disqus_id": "OSGi_Framework_Instances_1",
    "url": "osgi-framework-instances.html",
    "parentId":"configurable.group.language.help.topic",
    "level": 3,
    
        "pages": [
        
            "reference.settings.project.osgi.new.framework.instance",
            "reference.settings.project.osgi.library.bundling"
        ],
    
    "tabIndex": 9},
    "reference.settings.project.osgi.new.framework.instance": {
    
    "id": "reference.settings.project.osgi.new.framework.instance",
    
    "title": "OSGi Framework Instance Dialog",
    "disqus_id": "OSGI_Framework_Instance_Dialog_1",
    "url": "osgi-framework-instance-dialog.html",
    "parentId":"reference.settings.project.osgi.framework.definitions",
    "level": 4,
    
    "tabIndex": 0},
    "reference.settings.project.osgi.library.bundling": {
    
    "id": "reference.settings.project.osgi.library.bundling",
    
    "title": "Library Bundling",
    "disqus_id": "Library_Bundling_1",
    "url": "library-bundling.html",
    "parentId":"reference.settings.project.osgi.framework.definitions",
    "level": 4,
    
    "tabIndex": 1},
    "Scala_Compile_Server": {
    
    "id": "Scala_Compile_Server",
    
    "title": "Scala Compile Server",
    "disqus_id": "Scala_Compile_Server_1",
    "url": "scala-compile-server.html",
    "parentId":"configurable.group.language.help.topic",
    "level": 3,
    
    "tabIndex": 10},
    "reference.settings.project.sql.dialects": {
    
    "id": "reference.settings.project.sql.dialects",
    
    "title": "SQL Dialects",
    "disqus_id": "Settings_Languages_SQL_Dialects_1",
    "url": "settings-languages-sql-dialects.html",
    "parentId":"configurable.group.language.help.topic",
    "level": 3,
    
    "tabIndex": 11},
    "reference.settings.project.sql.resolve": {
    
    "id": "reference.settings.project.sql.resolve",
    
    "title": "SQL Resolution Scopes",
    "disqus_id": "Settings_Languages_SQL_Resolution_Scopes_1",
    "url": "settings-languages-sql-resolution-scopes.html",
    "parentId":"configurable.group.language.help.topic",
    "level": 3,
    
    "tabIndex": 12},
    "configurable.stylesheets": {
    
    "id": "configurable.stylesheets",
    
    "title": "Style Sheets",
    "disqus_id": "Settings_Languages_Stylesheets_1",
    "url": "settings-languages-stylesheets.html",
    "parentId":"configurable.group.language.help.topic",
    "level": 3,
    
        "pages": [
        
            "Dialects",
            "reference.settings.project.settings.compass.support",
            "configurable.stylesheets.stylelint"
        ],
    
    "tabIndex": 13},
    "Dialects": {
    
    "id": "Dialects",
    
    "title": "Dialects",
    "disqus_id": "Dialects_1",
    "url": "dialects.html",
    "parentId":"configurable.stylesheets",
    "level": 4,
    
    "tabIndex": 0},
    "reference.settings.project.settings.compass.support": {
    
    "id": "reference.settings.project.settings.compass.support",
    
    "title": "Compass",
    "disqus_id": "Settings_Languages_Stylesheets_Compass_1",
    "url": "settings-languages-stylesheets-compass.html",
    "parentId":"configurable.stylesheets",
    "level": 4,
    
    "tabIndex": 1},
    "configurable.stylesheets.stylelint": {
    
    "id": "configurable.stylesheets.stylelint",
    
    "title": "Stylelint",
    "disqus_id": "Settings_Languages_Stylesheets_Stylelint_1",
    "url": "settings-languages-stylesheets-stylelint.html",
    "parentId":"configurable.stylesheets",
    "level": 4,
    
    "tabIndex": 2},
    "Play2_Configuration": {
    
    "id": "Play2_Configuration",
    
    "title": "Play2",
    "disqus_id": "Play2_Configuration_1",
    "url": "play2-configuration.html",
    "parentId":"configurable.group.language.help.topic",
    "level": 3,
    
    "tabIndex": 14},
    "reference.settingsdialog.project.template.languages": {
    
    "id": "reference.settingsdialog.project.template.languages",
    
    "title": "Template Data Languages",
    "disqus_id": "Template_Data_Languages_Settings_1",
    "url": "template-data-languages-settings.html",
    "parentId":"configurable.group.language.help.topic",
    "level": 3,
    
    "tabIndex": 15},
    "reference.settings.typescript": {
    
    "id": "reference.settings.typescript",
    
    "title": "TypeScript",
    "disqus_id": "Settings_Languages_TypeScript_1",
    "url": "settings-languages-typescript.html",
    "parentId":"configurable.group.language.help.topic",
    "level": 3,
    
        "pages": [
        
            "settings.javascript.linters.tslint"
        ],
    
    "tabIndex": 16},
    "settings.javascript.linters.tslint": {
    
    "id": "settings.javascript.linters.tslint",
    
    "title": "TSLint",
    "disqus_id": "TSLint_1",
    "url": "tslint.html",
    "parentId":"reference.settings.typescript",
    "level": 4,
    
    "tabIndex": 0},
    "reference.settings.project.settings.webcontexts": {
    
    "id": "reference.settings.project.settings.webcontexts",
    
    "title": "Web Contexts",
    "disqus_id": "Web_Contexts_1",
    "url": "web-contexts.html",
    "parentId":"configurable.group.language.help.topic",
    "level": 3,
    
    "tabIndex": 17},
    "settings.xslt": {
    
    "id": "settings.xslt",
    
    "title": "XSLT",
    "disqus_id": "XSLT_1",
    "url": "xslt.html",
    "parentId":"configurable.group.language.help.topic",
    "level": 3,
    
    "tabIndex": 18},
    "xslt.associations": {
    
    "id": "xslt.associations",
    
    "title": "XSLT File Associations",
    "disqus_id": "XSLT_File_Associations_1",
    "url": "xslt-file-associations.html",
    "parentId":"configurable.group.language.help.topic",
    "level": 3,
    
    "tabIndex": 19},
    "reference.webide.settings.project.settings.php": {
    
    "id": "reference.webide.settings.project.settings.php",
    
    "title": "PHP",
    "disqus_id": "PHP_1",
    "url": "php.html",
    "parentId":"configurable.group.language.help.topic",
    "level": 3,
    
        "pages": [
        
            "reference.settings.php.interpreters",
            "reference.idesettings.debugger.php",
            "settings.php.debug.servers",
            "settings.php.composer",
            "reference.settings.php.test.frameworks",
            "reference.settings.php.codesniffer",
            "reference.settings.php.frameworks",
            "settings.phing",
            "settings.php.blade",
            "reference.settings.php.gae.for.php",
            "reference.webide.settings.project.settings.smarty"
        ],
    
    "tabIndex": 20},
    "reference.settings.php.interpreters": {
    
    "id": "reference.settings.php.interpreters",
    
    "title": "CLI Interpreters",
    "disqus_id": "PHP_Interpreters_1",
    "url": "php-interpreters.html",
    "parentId":"reference.webide.settings.project.settings.php",
    "level": 4,
    
        "pages": [
        
            "Configure_Remote_language_Interpreter"
        ],
    
    "tabIndex": 0},
    "Configure_Remote_language_Interpreter": {
    
    "id": "Configure_Remote_language_Interpreter",
    
    "title": "Configure PHP Remote Interpreter Dialog",
    "disqus_id": "Configure_Remote_language_Interpreter_1",
    "url": "configure-remote-language-interpreter.html",
    "parentId":"reference.settings.php.interpreters",
    "level": 5,
    
    "tabIndex": 0},
    "reference.idesettings.debugger.php": {
    
    "id": "reference.idesettings.debugger.php",
    
    "title": "Debug",
    "disqus_id": "debug_1",
    "url": "debug.html",
    "parentId":"reference.webide.settings.project.settings.php",
    "level": 4,
    
        "pages": [
        
            "settings.php.debug.skipped.paths",
            "reference.settings.php.debug.xdebug.proxy",
            "Step_Filters"
        ],
    
    "tabIndex": 1},
    "settings.php.debug.skipped.paths": {
    
    "id": "settings.php.debug.skipped.paths",
    
    "title": "Skipped Paths",
    "disqus_id": "Skipped_Paths_1",
    "url": "skipped-paths.html",
    "parentId":"reference.idesettings.debugger.php",
    "level": 5,
    
    "tabIndex": 0},
    "reference.settings.php.debug.xdebug.proxy": {
    
    "id": "reference.settings.php.debug.xdebug.proxy",
    
    "title": "DBGp Proxy",
    "disqus_id": "Xdebug_Proxy_1",
    "url": "xdebug-proxy.html",
    "parentId":"reference.idesettings.debugger.php",
    "level": 5,
    
    "tabIndex": 1},
    "Step_Filters": {
    
    "id": "Step_Filters",
    
    "title": "Step Filters",
    "disqus_id": "Step_Filters_1",
    "url": "step-filters.html",
    "parentId":"reference.idesettings.debugger.php",
    "level": 5,
    
    "tabIndex": 2},
    "settings.php.debug.servers": {
    
    "id": "settings.php.debug.servers",
    
    "title": "Servers",
    "disqus_id": "Servers_1",
    "url": "servers.html",
    "parentId":"reference.webide.settings.project.settings.php",
    "level": 4,
    
        "pages": [
        
            "reference.settings.php.servers.import.from.deployment"
        ],
    
    "tabIndex": 2},
    "reference.settings.php.servers.import.from.deployment": {
    
    "id": "reference.settings.php.servers.import.from.deployment",
    
    "title": "Import from Deployment Configuration Dialog",
    "disqus_id": "Import_From_Deployment_Configuration_1",
    "url": "import-from-deployment-configuration.html",
    "parentId":"settings.php.debug.servers",
    "level": 5,
    
    "tabIndex": 0},
    "settings.php.composer": {
    
    "id": "settings.php.composer",
    
    "title": "Composer",
    "disqus_id": "Composer_Page_1",
    "url": "composer-page.html",
    "parentId":"reference.webide.settings.project.settings.php",
    "level": 4,
    
    "tabIndex": 3},
    "reference.settings.php.test.frameworks": {
    
    "id": "reference.settings.php.test.frameworks",
    
    "title": "Test Frameworks",
    "disqus_id": "PHP_Test_Frameworks_1",
    "url": "php-test-frameworks.html",
    "parentId":"reference.webide.settings.project.settings.php",
    "level": 4,
    
        "anchors": [
        
"reference.settings.php.test.frameworks#PHP_test_frameworks_PHPUnit",
"reference.settings.php.test.frameworks#PHP_test_frameworks_Behat",
"reference.settings.php.test.frameworks#PHP_test_frameworks_Codeception",
"reference.settings.php.test.frameworks#PHP_test_frameworks_PHPSpec"
        ],
    "tabIndex": 4},
    "reference.settings.php.codesniffer": {
    
    "id": "reference.settings.php.codesniffer",
    
    "title": "Quality Tools",
    "disqus_id": "PHP_Quality_Tools_1",
    "url": "php-quality-tools.html",
    "parentId":"reference.webide.settings.project.settings.php",
    "level": 4,
    
        "anchors": [
        
"reference.settings.php.codesniffer#php_quality_tools_code_sniffer",
"reference.settings.php.codesniffer#php_quality_tools_mess_detector",
"reference.settings.php.codesniffer#php_quality_tools_php_cs_fixer"
        ],
    "tabIndex": 5},
    "reference.settings.php.frameworks": {
    
    "id": "reference.settings.php.frameworks",
    
    "title": "Frameworks",
    "disqus_id": "Frameworks_Page_1",
    "url": "frameworks-page.html",
    "parentId":"reference.webide.settings.project.settings.php",
    "level": 4,
    
    "tabIndex": 6},
    "settings.phing": {
    
    "id": "settings.phing",
    
    "title": "Phing",
    "disqus_id": "Phing_1",
    "url": "phing.html",
    "parentId":"reference.webide.settings.project.settings.php",
    "level": 4,
    
    "tabIndex": 7},
    "settings.php.blade": {
    
    "id": "settings.php.blade",
    
    "title": "Blade",
    "disqus_id": "Blade_Page_1",
    "url": "blade-page.html",
    "parentId":"reference.webide.settings.project.settings.php",
    "level": 4,
    
    "tabIndex": 8},
    "reference.settings.php.gae.for.php": {
    
    "id": "reference.settings.php.gae.for.php",
    
    "title": "Google App Engine for PHP",
    "disqus_id": "settings_google_app_engine_for_php_1",
    "url": "settings-google-app-engine-for-php.html",
    "parentId":"reference.webide.settings.project.settings.php",
    "level": 4,
    
    "tabIndex": 9},
    "reference.webide.settings.project.settings.smarty": {
    
    "id": "reference.webide.settings.project.settings.smarty",
    
    "title": "Smarty",
    "disqus_id": "smarty_1",
    "url": "smarty.html",
    "parentId":"reference.webide.settings.project.settings.php",
    "level": 4,
    
    "tabIndex": 10},
    "settings.dart.settings": {
    
    "id": "settings.dart.settings",
    
    "title": "Dart",
    "disqus_id": "Dart_Settings_Dialog_1",
    "url": "dart-settings-dialog.html",
    "parentId":"configurable.group.language.help.topic",
    "level": 3,
    
    "tabIndex": 21},
    "configurable.group.tools.help.topic": {
    
    "id": "configurable.group.tools.help.topic",
    
    "title": "Tools",
    "disqus_id": "Settings_Tools_1",
    "url": "settings-tools.html",
    "parentId":"topicId2177",
    "level": 2,
    
        "pages": [
        
            "reference.settings.ide.settings.web.browsers",
            "settings.project.settings.file.watchers",
            "preferences.externalTools",
            "reference.settings.terminal",
            "preferences.database",
            "reference.settings.ssh.terminal",
            "reference.settings.command.line.tool.support",
            "reference.settings.ide.settings.uml",
            "diff.base",
            "preferences.ExternalDocumentation",
            "reference-python-integrated-tools",
            "reference.settings.remote.ssh.ext.tools",
            "reference.idesettings.server.certificates",
            "reference.settings.ics",
            "reference.settings.startup.tasks",
            "reference.settingsdialog.project.vagrant",
            "Vim_Emulation",
            "xpath.settings",
            "reference.settings.ide.settings.webservices"
        ],
    
    "tabIndex": 7},
    "reference.settings.ide.settings.web.browsers": {
    
    "id": "reference.settings.ide.settings.web.browsers",
    
    "title": "Web Browsers",
    "disqus_id": "Settings_Tools_Web_Browsers_1",
    "url": "settings-tools-web-browsers.html",
    "parentId":"configurable.group.tools.help.topic",
    "level": 3,
    
    "tabIndex": 0},
    "settings.project.settings.file.watchers": {
    
    "id": "settings.project.settings.file.watchers",
    
    "title": "File Watchers",
    "disqus_id": "Settings_Tools_File_Watchers_1",
    "url": "settings-tools-file-watchers.html",
    "parentId":"configurable.group.tools.help.topic",
    "level": 3,
    
        "pages": [
        
            "settings.project.settings.file.watchers.new.watcher"
        ],
    
    "tabIndex": 1},
    "settings.project.settings.file.watchers.new.watcher": {
    
    "id": "settings.project.settings.file.watchers.new.watcher",
    
    "title": "New Watcher Dialog",
    "disqus_id": "New_Watcher_Dialog_1",
    "url": "new-watcher-dialog.html",
    "parentId":"settings.project.settings.file.watchers",
    "level": 4,
    
        "anchors": [
        
"settings.project.settings.file.watchers.new.watcher#ws_file_watcher_dialog_name",
"settings.project.settings.file.watchers.new.watcher#ws_file_watcher_dialog_files_to_watch",
"settings.project.settings.file.watchers.new.watcher#ws_file_watcher_dialog_tool_to_run_on_changes",
"settings.project.settings.file.watchers.new.watcher#ws_file_watcher_dialog_working_directory_and_environment_variables",
"settings.project.settings.file.watchers.new.watcher#ws_file_watcher_dialog_advanced_options"
        ],
    "tabIndex": 0},
    "preferences.externalTools": {
    
    "id": "preferences.externalTools",
    
    "title": "External Tools",
    "disqus_id": "Settings_Tools_External_Tools_1",
    "url": "settings-tools-external-tools.html",
    "parentId":"configurable.group.tools.help.topic",
    "level": 3,
    
        "pages": [
        
            "preferences.externalToolsEdit",
            "reference.settings.ide.settings.external.tools.macros"
        ],
    
    "tabIndex": 2},
    "preferences.externalToolsEdit": {
    
    "id": "preferences.externalToolsEdit",
    
    "title": "Create/Edit/Copy Tool Dialog",
    "disqus_id": "Settings_Tools_Create_Edit_Copy_Tool_Dialog_1",
    "url": "settings-tools-create-edit-copy-tool-dialog.html",
    "parentId":"preferences.externalTools",
    "level": 4,
    
    "tabIndex": 0},
    "reference.settings.ide.settings.external.tools.macros": {
    
    "id": "reference.settings.ide.settings.external.tools.macros",
    
    "title": "Macros Dialog",
    "disqus_id": "Settings_Tools_Macros_Dialog_1",
    "url": "settings-tools-macros-dialog.html",
    "parentId":"preferences.externalTools",
    "level": 4,
    
    "tabIndex": 1},
    "reference.settings.terminal": {
    
    "id": "reference.settings.terminal",
    
    "title": "Terminal",
    "disqus_id": "Settings_Tools_Terminal_1",
    "url": "settings-tools-terminal.html",
    "parentId":"configurable.group.tools.help.topic",
    "level": 3,
    
    "tabIndex": 3},
    "preferences.database": {
    
    "id": "preferences.database",
    
    "title": "Database",
    "disqus_id": "Settings_Tools_Database_1",
    "url": "settings-tools-database.html",
    "parentId":"configurable.group.tools.help.topic",
    "level": 3,
    
        "pages": [
        
            "preferences.database.dataViews",
            "preferences.database.userParameters",
            "preferences.database.csvFormats"
        ],
    
    "tabIndex": 4},
    "preferences.database.dataViews": {
    
    "id": "preferences.database.dataViews",
    
    "title": "Data Views",
    "disqus_id": "Settings_Tools_Database_Data_Views_1",
    "url": "settings-tools-database-data-views.html",
    "parentId":"preferences.database",
    "level": 4,
    
    "tabIndex": 0},
    "preferences.database.userParameters": {
    
    "id": "preferences.database.userParameters",
    
    "title": "User Parameters",
    "disqus_id": "Settings_Tools_Database_User_Parameters_1",
    "url": "settings-tools-database-user-parameters.html",
    "parentId":"preferences.database",
    "level": 4,
    
    "tabIndex": 1},
    "preferences.database.csvFormats": {
    
    "id": "preferences.database.csvFormats",
    
    "title": "CSV Formats",
    "disqus_id": "Settings_Tools_Database_CSV_Formats_1",
    "url": "settings-tools-database-csv-formats.html",
    "parentId":"preferences.database",
    "level": 4,
    
    "tabIndex": 2},
    "reference.settings.ssh.terminal": {
    
    "id": "reference.settings.ssh.terminal",
    
    "title": "SSH Terminal",
    "disqus_id": "Settings_Tools_SSH_Terminal_1",
    "url": "settings-tools-ssh-terminal.html",
    "parentId":"configurable.group.tools.help.topic",
    "level": 3,
    
    "tabIndex": 5},
    "reference.settings.command.line.tool.support": {
    
    "id": "reference.settings.command.line.tool.support",
    
    "title": "Command Line Tool Support",
    "disqus_id": "Command_Line_Tool_Support_1",
    "url": "command-line-tool-support.html",
    "parentId":"configurable.group.tools.help.topic",
    "level": 3,
    
        "pages": [
        
            "reference.settings.symfony",
            "reference.settings.zf1tool",
            "settings.composer",
            "reference.settings.custom.framework",
            "reference.settings.drush",
            "reference.settings.zf2tool",
            "WP-CLI_Dialog"
        ],
    
    "tabIndex": 6},
    "reference.settings.symfony": {
    
    "id": "reference.settings.symfony",
    
    "title": "Command Line Tool Support: Symfony",
    "disqus_id": "Symfony_1",
    "url": "symfony.html",
    "parentId":"reference.settings.command.line.tool.support",
    "level": 4,
    
    "tabIndex": 0},
    "reference.settings.zf1tool": {
    
    "id": "reference.settings.zf1tool",
    
    "title": "Command Line Tool Support: Zend Framework 1",
    "disqus_id": "Zend_Framework_1",
    "url": "zend-framework.html",
    "parentId":"reference.settings.command.line.tool.support",
    "level": 4,
    
    "tabIndex": 1},
    "settings.composer": {
    
    "id": "settings.composer",
    
    "title": "Command Line Tool Support: Composer",
    "disqus_id": "Composer_1",
    "url": "composer.html",
    "parentId":"reference.settings.command.line.tool.support",
    "level": 4,
    
    "tabIndex": 2},
    "reference.settings.custom.framework": {
    
    "id": "reference.settings.custom.framework",
    
    "title": "Command Line Tool Support: Tool Settings",
    "disqus_id": "Framework_Settings_1",
    "url": "framework-settings.html",
    "parentId":"reference.settings.command.line.tool.support",
    "level": 4,
    
    "tabIndex": 3},
    "reference.settings.drush": {
    
    "id": "reference.settings.drush",
    
    "title": "Command Line Tool Support: Drush",
    "disqus_id": "Drush_1",
    "url": "drush.html",
    "parentId":"reference.settings.command.line.tool.support",
    "level": 4,
    
    "tabIndex": 4},
    "reference.settings.zf2tool": {
    
    "id": "reference.settings.zf2tool",
    
    "title": "Command Line Tool Support: Zend Framework 2",
    "disqus_id": "Zend_Framework_2_Tool_1",
    "url": "zend-framework-2-tool.html",
    "parentId":"reference.settings.command.line.tool.support",
    "level": 4,
    
    "tabIndex": 5},
    "WP-CLI_Dialog": {
    
    "id": "WP-CLI_Dialog",
    
    "title": "Command Line Tool Support: WP-CLI",
    "disqus_id": "WP-CLI_Dialog_1",
    "url": "wp-cli-dialog.html",
    "parentId":"reference.settings.command.line.tool.support",
    "level": 4,
    
    "tabIndex": 6},
    "reference.settings.ide.settings.uml": {
    
    "id": "reference.settings.ide.settings.uml",
    
    "title": "Diagrams",
    "disqus_id": "Diagrams_1",
    "url": "diagrams.html",
    "parentId":"configurable.group.tools.help.topic",
    "level": 3,
    
    "tabIndex": 7},
    "diff.base": {
    
    "id": "diff.base",
    
    "title": "Diff & Merge",
    "disqus_id": "Settings_Tools_Diff_and_Merge_1",
    "url": "settings-tools-diff-and-merge.html",
    "parentId":"configurable.group.tools.help.topic",
    "level": 3,
    
        "pages": [
        
            "diff.external"
        ],
    
    "tabIndex": 8},
    "diff.external": {
    
    "id": "diff.external",
    
    "title": "External Diff Tools",
    "disqus_id": "Settings_Tools_External_Diff_Tools_1",
    "url": "settings-tools-external-diff-tools.html",
    "parentId":"diff.base",
    "level": 4,
    
    "tabIndex": 0},
    "preferences.ExternalDocumentation": {
    
    "id": "preferences.ExternalDocumentation",
    
    "title": "Python External Documentation",
    "disqus_id": "Settings_Tools_Python_External_Documentation_1",
    "url": "settings-tools-python-external-documentation.html",
    "parentId":"configurable.group.tools.help.topic",
    "level": 3,
    
    "tabIndex": 9},
    "reference-python-integrated-tools": {
    
    "id": "reference-python-integrated-tools",
    
    "title": "Python Integrated Tools",
    "disqus_id": "Settings_Tools_Python_Integrated_Tools_1",
    "url": "settings-tools-python-integrated-tools.html",
    "parentId":"configurable.group.tools.help.topic",
    "level": 3,
    
    "tabIndex": 10},
    "reference.settings.remote.ssh.ext.tools": {
    
    "id": "reference.settings.remote.ssh.ext.tools",
    
    "title": "Remote SSH External Tools",
    "disqus_id": "Settings_Tools_Remote_SSH_External_Tools_1",
    "url": "settings-tools-remote-ssh-external-tools.html",
    "parentId":"configurable.group.tools.help.topic",
    "level": 3,
    
        "pages": [
        
            "reference.settings.remote.ssh.ext.tools.create.tool"
        ],
    
    "tabIndex": 11},
    "reference.settings.remote.ssh.ext.tools.create.tool": {
    
    "id": "reference.settings.remote.ssh.ext.tools.create.tool",
    
    "title": "Create/Edit/Copy Tool Dialog (Remote SSH External Tools)",
    "disqus_id": "Create_Tool_Dialog_Remote_SSH_External_Tools__1",
    "url": "create-tool-dialog-remote-ssh-external-tools.html",
    "parentId":"reference.settings.remote.ssh.ext.tools",
    "level": 4,
    
    "tabIndex": 0},
    "reference.idesettings.server.certificates": {
    
    "id": "reference.idesettings.server.certificates",
    
    "title": "Server Certificates",
    "disqus_id": "Settings_Tools_Server_Certificates_1",
    "url": "settings-tools-server-certificates.html",
    "parentId":"configurable.group.tools.help.topic",
    "level": 3,
    
    "tabIndex": 12},
    "reference.settings.ics": {
    
    "id": "reference.settings.ics",
    
    "title": "Settings Repository",
    "disqus_id": "Settings_Tools_Settings_Repository_1",
    "url": "settings-tools-settings-repository.html",
    "parentId":"configurable.group.tools.help.topic",
    "level": 3,
    
    "tabIndex": 13},
    "reference.settings.startup.tasks": {
    
    "id": "reference.settings.startup.tasks",
    
    "title": "Startup Tasks",
    "disqus_id": "Settings_Tools_Startup_Tasks_1",
    "url": "settings-tools-startup-tasks.html",
    "parentId":"configurable.group.tools.help.topic",
    "level": 3,
    
    "tabIndex": 14},
    "reference.settingsdialog.project.vagrant": {
    
    "id": "reference.settingsdialog.project.vagrant",
    
    "title": "Vagrant",
    "disqus_id": "Vagrant_1",
    "url": "vagrant.html",
    "parentId":"configurable.group.tools.help.topic",
    "level": 3,
    
    "tabIndex": 15},
    "Vim_Emulation": {
    
    "id": "Vim_Emulation",
    
    "title": "Vim Emulation",
    "disqus_id": "Vim_Emulation_1",
    "url": "vim-emulation.html",
    "parentId":"configurable.group.tools.help.topic",
    "level": 3,
    
    "tabIndex": 16},
    "xpath.settings": {
    
    "id": "xpath.settings",
    
    "title": "XPath Viewer",
    "disqus_id": "XPath_Viewer_1",
    "url": "xpath-viewer.html",
    "parentId":"configurable.group.tools.help.topic",
    "level": 3,
    
    "tabIndex": 17},
    "reference.settings.ide.settings.webservices": {
    
    "id": "reference.settings.ide.settings.webservices",
    
    "title": "Web Services",
    "disqus_id": "Web_Services_Settings_1",
    "url": "web-services-settings.html",
    "parentId":"configurable.group.tools.help.topic",
    "level": 3,
    
    "tabIndex": 18},
    "topicId2264": {
    
    "id": "topicId2264",
    
    "title": "Project Structure Dialog",
    "disqus_id": "Project_Structure_Dialog_1",
    "url": "project-structure-dialog.html",
    "parentId":"d732e1069",
    "level": 1,
    
        "pages": [
        
            "reference.settingsdialog.project.structure.general",
            "reference.settingsdialog.project.structure.module",
            "Libraries_and_Global_Libraries",
            "topicId620947"
        ],
    
    "tabIndex": 7},
    "reference.settingsdialog.project.structure.general": {
    
    "id": "reference.settingsdialog.project.structure.general",
    
    "title": "Project Page",
    "disqus_id": "Project_Page_1",
    "url": "project-page.html",
    "parentId":"topicId2264",
    "level": 2,
    
    "tabIndex": 0},
    "reference.settingsdialog.project.structure.module": {
    
    "id": "reference.settingsdialog.project.structure.module",
    
    "title": "Modules",
    "disqus_id": "Modules_1",
    "url": "modules.html",
    "parentId":"topicId2264",
    "level": 2,
    
        "pages": [
        
            "Module_Page",
            "topicId740906",
            "projectStructure.modules.flex",
            "BuildConfigurationPage"
        ],
    
    "tabIndex": 1},
    "Module_Page": {
    
    "id": "Module_Page",
    
    "title": "Module Page",
    "disqus_id": "Module_Page_1",
    "url": "module-page.html",
    "parentId":"reference.settingsdialog.project.structure.module",
    "level": 3,
    
        "pages": [
        
            "projectStructure.modules.sources",
            "projectStructure.modules.paths",
            "projectStructure.modules.dependencies",
            "topicId146859",
            "j2me.support.mobile.module.settings",
            "j2me.moduleJ2ME"
        ],
    
    "tabIndex": 0},
    "projectStructure.modules.sources": {
    
    "id": "projectStructure.modules.sources",
    
    "title": "Sources Tab",
    "disqus_id": "Sources_Tab_1",
    "url": "sources-tab.html",
    "parentId":"Module_Page",
    "level": 4,
    
    "tabIndex": 0},
    "projectStructure.modules.paths": {
    
    "id": "projectStructure.modules.paths",
    
    "title": "Paths Tab",
    "disqus_id": "Paths_Tab_1",
    "url": "paths-tab.html",
    "parentId":"Module_Page",
    "level": 4,
    
    "tabIndex": 1},
    "projectStructure.modules.dependencies": {
    
    "id": "projectStructure.modules.dependencies",
    
    "title": "Dependencies Tab",
    "disqus_id": "Dependencies_1",
    "url": "dependencies.html",
    "parentId":"Module_Page",
    "level": 4,
    
    "tabIndex": 2},
    "topicId146859": {
    
    "id": "topicId146859",
    
    "title": "Plugin Deployment Tab",
    "disqus_id": "Plugin_Deployment_Tab_1",
    "url": "plugin-deployment-tab.html",
    "parentId":"Module_Page",
    "level": 4,
    
    "tabIndex": 3},
    "j2me.support.mobile.module.settings": {
    
    "id": "j2me.support.mobile.module.settings",
    
    "title": "Mobile Module Settings Tab",
    "disqus_id": "Mobile_Module_Settings_Tab_1",
    "url": "mobile-module-settings-tab.html",
    "parentId":"Module_Page",
    "level": 4,
    
        "pages": [
        
            "Optional_MIDP_Settings"
        ],
    
    "tabIndex": 4},
    "Optional_MIDP_Settings": {
    
    "id": "Optional_MIDP_Settings",
    
    "title": "Optional MIDP Settings Dialog",
    "disqus_id": "Optional_MIDP_Settings_1",
    "url": "optional-midp-settings.html",
    "parentId":"j2me.support.mobile.module.settings",
    "level": 5,
    
    "tabIndex": 0},
    "j2me.moduleJ2ME": {
    
    "id": "j2me.moduleJ2ME",
    
    "title": "Mobile Build Settings Tab",
    "disqus_id": "Mobile_Build_Settings_Tab_1",
    "url": "mobile-build-settings-tab.html",
    "parentId":"Module_Page",
    "level": 4,
    
    "tabIndex": 5},
    "topicId740906": {
    
    "id": "topicId740906",
    
    "title": "Facet Page",
    "disqus_id": "Facet_Page_1",
    "url": "facet-page.html",
    "parentId":"reference.settingsdialog.project.structure.module",
    "level": 3,
    
        "pages": [
        
            "reference.settings.project.modules.android.facet",
            "AspectJ_Facet",
            "Android-Gradle_Facet_Page",
            "facet.ejb.settings",
            "Google_App_Engine_Facet",
            "reference.settings.project.modules.gwt.facet",
            "reference.settings.module.facet.hibernate.jpa",
            "facet.javaeeapp.settings",
            "projectSettings.facets.jsf",
            "reference.settings.module.facet.osgi",
            "topicId769191",
            "reference.settings.project.structure.facets.struts.facet",
            "reference.settings.project.structure.facets.struts2.facet",
            "Tapestry_Facet",
            "facet.web.settings",
            "reference.settings.project.modules.web.services.facet",
            "reference.settings.project.modules.web.services.client.facet"
        ],
    
    "tabIndex": 1},
    "reference.settings.project.modules.android.facet": {
    
    "id": "reference.settings.project.modules.android.facet",
    
    "title": "Android Facet Page",
    "disqus_id": "Android_Facet_Page_1",
    "url": "android-facet-page.html",
    "parentId":"topicId740906",
    "level": 4,
    
    "tabIndex": 0},
    "AspectJ_Facet": {
    
    "id": "AspectJ_Facet",
    
    "title": "AspectJ Facet Page",
    "disqus_id": "AspectJ_Facet_1",
    "url": "aspectj-facet.html",
    "parentId":"topicId740906",
    "level": 4,
    
    "tabIndex": 1},
    "Android-Gradle_Facet_Page": {
    
    "id": "Android-Gradle_Facet_Page",
    
    "title": "Android-Gradle Facet Page",
    "disqus_id": "Android-Gradle_Facet_Page_1",
    "url": "android-gradle-facet-page.html",
    "parentId":"topicId740906",
    "level": 4,
    
    "tabIndex": 2},
    "facet.ejb.settings": {
    
    "id": "facet.ejb.settings",
    
    "title": "EJB facet page",
    "disqus_id": "EJB_facet_page_1",
    "url": "ejb-facet-page.html",
    "parentId":"topicId740906",
    "level": 4,
    
    "tabIndex": 3},
    "Google_App_Engine_Facet": {
    
    "id": "Google_App_Engine_Facet",
    
    "title": "Google App Engine Facet Page",
    "disqus_id": "Google_App_Engine_Facet_1",
    "url": "google-app-engine-facet.html",
    "parentId":"topicId740906",
    "level": 4,
    
    "tabIndex": 4},
    "reference.settings.project.modules.gwt.facet": {
    
    "id": "reference.settings.project.modules.gwt.facet",
    
    "title": "GWT Facet Page",
    "disqus_id": "GWT_Facet_Page_1",
    "url": "gwt-facet-page.html",
    "parentId":"topicId740906",
    "level": 4,
    
    "tabIndex": 5},
    "reference.settings.module.facet.hibernate.jpa": {
    
    "id": "reference.settings.module.facet.hibernate.jpa",
    
    "title": "Hibernate and JPA Facet Pages",
    "disqus_id": "Hibernate_and_JPA_Facet_Pages_1",
    "url": "hibernate-and-jpa-facet-pages.html",
    "parentId":"topicId740906",
    "level": 4,
    
    "tabIndex": 6},
    "facet.javaeeapp.settings": {
    
    "id": "facet.javaeeapp.settings",
    
    "title": "Java EE Application facet page",
    "disqus_id": "Java_EE_Application_facet_page_1",
    "url": "java-ee-application-facet-page.html",
    "parentId":"topicId740906",
    "level": 4,
    
    "tabIndex": 7},
    "projectSettings.facets.jsf": {
    
    "id": "projectSettings.facets.jsf",
    
    "title": "JSF Facet Page",
    "disqus_id": "JSF_Facet_Page_1",
    "url": "jsf-facet-page.html",
    "parentId":"topicId740906",
    "level": 4,
    
    "tabIndex": 8},
    "reference.settings.module.facet.osgi": {
    
    "id": "reference.settings.module.facet.osgi",
    
    "title": "OSGi Facet Page",
    "disqus_id": "OSGi_Facet_Page_1",
    "url": "osgi-facet-page.html",
    "parentId":"topicId740906",
    "level": 4,
    
    "tabIndex": 9},
    "topicId769191": {
    
    "id": "topicId769191",
    
    "title": "Seam Facet Page",
    "disqus_id": "Seam_Facet_Page_1",
    "url": "seam-facet-page.html",
    "parentId":"topicId740906",
    "level": 4,
    
    "tabIndex": 10},
    "reference.settings.project.structure.facets.struts.facet": {
    
    "id": "reference.settings.project.structure.facets.struts.facet",
    
    "title": "Struts Facet Page",
    "disqus_id": "Struts_Facet_Page_1",
    "url": "struts-facet-page.html",
    "parentId":"topicId740906",
    "level": 4,
    
    "tabIndex": 11},
    "reference.settings.project.structure.facets.struts2.facet": {
    
    "id": "reference.settings.project.structure.facets.struts2.facet",
    
    "title": "Struts 2 Facet Page",
    "disqus_id": "Struts_2_Facet_Page_1",
    "url": "struts-2-facet-page.html",
    "parentId":"topicId740906",
    "level": 4,
    
    "tabIndex": 12},
    "Tapestry_Facet": {
    
    "id": "Tapestry_Facet",
    
    "title": "Tapestry Facet Page",
    "disqus_id": "Tapestry_Facet_1",
    "url": "tapestry-facet.html",
    "parentId":"topicId740906",
    "level": 4,
    
    "tabIndex": 13},
    "facet.web.settings": {
    
    "id": "facet.web.settings",
    
    "title": "Web facet page",
    "disqus_id": "Web_facet_page_1",
    "url": "web-facet-page.html",
    "parentId":"topicId740906",
    "level": 4,
    
        "pages": [
        
            "project.creatingModules.resourceWeb"
        ],
    
    "tabIndex": 14},
    "project.creatingModules.resourceWeb": {
    
    "id": "project.creatingModules.resourceWeb",
    
    "title": "Web Resource Directory Path Dialog",
    "disqus_id": "Web_Resource_Directory_Path_Dialog_1",
    "url": "web-resource-directory-path-dialog.html",
    "parentId":"facet.web.settings",
    "level": 5,
    
    "tabIndex": 0},
    "reference.settings.project.modules.web.services.facet": {
    
    "id": "reference.settings.project.modules.web.services.facet",
    
    "title": "Web Services Facet Page",
    "disqus_id": "Web_Services_Facet_Page_1",
    "url": "web-services-facet-page.html",
    "parentId":"topicId740906",
    "level": 4,
    
    "tabIndex": 15},
    "reference.settings.project.modules.web.services.client.facet": {
    
    "id": "reference.settings.project.modules.web.services.client.facet",
    
    "title": "Web Services Client Facet Page",
    "disqus_id": "web_services_client_facet_1",
    "url": "web-services-client-facet.html",
    "parentId":"topicId740906",
    "level": 4,
    
    "tabIndex": 16},
    "projectStructure.modules.flex": {
    
    "id": "projectStructure.modules.flex",
    
    "title": "Module Page for a Flash Module",
    "disqus_id": "Module_Page_for_a_Flex_Module_1",
    "url": "module-page-for-a-flex-module.html",
    "parentId":"reference.settingsdialog.project.structure.module",
    "level": 3,
    
    "tabIndex": 2},
    "BuildConfigurationPage": {
    
    "id": "BuildConfigurationPage",
    
    "title": "Build Configuration Page for a Flash Module",
    "disqus_id": "Build_Configuration_page_1",
    "url": "build-configuration-page.html",
    "parentId":"reference.settingsdialog.project.structure.module",
    "level": 3,
    
        "pages": [
        
            "BuildConfigurationPage.General",
            "BuildConfigurationPage.Dependencies",
            "BuildConfigurationPage.CompilerOptions",
            "BuildConfigurationPage.AIRPackage",
            "BuildConfigurationPage.Android",
            "BuildConfigurationPage.iOS"
        ],
    
    "tabIndex": 3},
    "BuildConfigurationPage.General": {
    
    "id": "BuildConfigurationPage.General",
    
    "title": "General tab",
    "disqus_id": "General_tab_1",
    "url": "general-tab.html",
    "parentId":"BuildConfigurationPage",
    "level": 4,
    
    "tabIndex": 0},
    "BuildConfigurationPage.Dependencies": {
    
    "id": "BuildConfigurationPage.Dependencies",
    
    "title": "Dependencies tab",
    "disqus_id": "Dependencies_tab_1",
    "url": "dependencies-tab.html",
    "parentId":"BuildConfigurationPage",
    "level": 4,
    
    "tabIndex": 1},
    "BuildConfigurationPage.CompilerOptions": {
    
    "id": "BuildConfigurationPage.CompilerOptions",
    
    "title": "Compiler Options tab",
    "disqus_id": "Compiler_Options_tab_1",
    "url": "compiler-options-tab.html",
    "parentId":"BuildConfigurationPage",
    "level": 4,
    
    "tabIndex": 2},
    "BuildConfigurationPage.AIRPackage": {
    
    "id": "BuildConfigurationPage.AIRPackage",
    
    "title": "AIR Package tab",
    "disqus_id": "AIR_Package_tab_1",
    "url": "air-package-tab.html",
    "parentId":"BuildConfigurationPage",
    "level": 4,
    
    "tabIndex": 3},
    "BuildConfigurationPage.Android": {
    
    "id": "BuildConfigurationPage.Android",
    
    "title": "Android tab",
    "disqus_id": "Android_tab_1",
    "url": "android-tab.html",
    "parentId":"BuildConfigurationPage",
    "level": 4,
    
    "tabIndex": 4},
    "BuildConfigurationPage.iOS": {
    
    "id": "BuildConfigurationPage.iOS",
    
    "title": "iOS tab",
    "disqus_id": "iOS_tab_1",
    "url": "ios-tab.html",
    "parentId":"BuildConfigurationPage",
    "level": 4,
    
    "tabIndex": 5},
    "Libraries_and_Global_Libraries": {
    
    "id": "Libraries_and_Global_Libraries",
    
    "title": "Libraries and Global Libraries",
    "disqus_id": "Libraries_and_Global_Libraries_1",
    "url": "libraries-and-global-libraries.html",
    "parentId":"topicId2264",
    "level": 2,
    
        "pages": [
        
            "reference.settingsdialog.project.structure.library"
        ],
    
    "tabIndex": 2},
    "reference.settingsdialog.project.structure.library": {
    
    "id": "reference.settingsdialog.project.structure.library",
    
    "title": "Project Library and Global Library Pages",
    "disqus_id": "Project_Library_and_Global_Library_Pages_1",
    "url": "project-library-and-global-library-pages.html",
    "parentId":"Libraries_and_Global_Libraries",
    "level": 3,
    
    "tabIndex": 0},
    "topicId620947": {
    
    "id": "topicId620947",
    
    "title": "Artifacts",
    "disqus_id": "Artifacts_1",
    "url": "artifacts.html",
    "parentId":"topicId2264",
    "level": 2,
    
        "pages": [
        
            "General_settings_(Name_Type_etc.).xml",
            "topicId731150",
            "topicId48098",
            "topicId949488",
            "topicId650701",
            "Project_Structure_Artifacts_Android_Tab",
            "Project_Structure_Artifacts_Java_FX_tab"
        ],
    
    "tabIndex": 3},
    "General_settings_(Name_Type_etc.).xml": {
    
    "id": "General_settings_(Name_Type_etc.).xml",
    
    "title": "General settings (Name, Type, etc.)",
    "disqus_id": "General_settings_(Name_Type_etc.).xml_1",
    "url": "general-settings-name-type-etc.html",
    "parentId":"topicId620947",
    "level": 3,
    
    "tabIndex": 0},
    "topicId731150": {
    
    "id": "topicId731150",
    
    "title": "Output Layout Tab",
    "disqus_id": "Output_Layout_Tab_1",
    "url": "output-layout-tab.html",
    "parentId":"topicId620947",
    "level": 3,
    
    "tabIndex": 1},
    "topicId48098": {
    
    "id": "topicId48098",
    
    "title": "Validation Tab",
    "disqus_id": "Validation_Tab_1",
    "url": "validation-tab.html",
    "parentId":"topicId620947",
    "level": 3,
    
    "tabIndex": 2},
    "topicId949488": {
    
    "id": "topicId949488",
    
    "title": "Pre-Processing Tab",
    "disqus_id": "Pre-Processing_Tab_1",
    "url": "pre-processing-tab.html",
    "parentId":"topicId620947",
    "level": 3,
    
    "tabIndex": 3},
    "topicId650701": {
    
    "id": "topicId650701",
    
    "title": "Post-Processing Tab",
    "disqus_id": "Post-Processing_Tab_1",
    "url": "post-processing-tab.html",
    "parentId":"topicId620947",
    "level": 3,
    
    "tabIndex": 4},
    "Project_Structure_Artifacts_Android_Tab": {
    
    "id": "Project_Structure_Artifacts_Android_Tab",
    
    "title": "Android Tab",
    "disqus_id": "Project_Structure_Artifacts_Android_Tab_1",
    "url": "project-structure-artifacts-android-tab.html",
    "parentId":"topicId620947",
    "level": 3,
    
    "tabIndex": 5},
    "Project_Structure_Artifacts_Java_FX_tab": {
    
    "id": "Project_Structure_Artifacts_Java_FX_tab",
    
    "title": "Java FX tab",
    "disqus_id": "Project_Structure_Artifacts_Java_FX_tab_1",
    "url": "project-structure-artifacts-java-fx-tab.html",
    "parentId":"topicId620947",
    "level": 3,
    
    "tabIndex": 6},
    "reference.versionControl": {
    
    "id": "reference.versionControl",
    
    "title": "Version Control Reference",
    "disqus_id": "Version_Control_Reference_1",
    "url": "version-control-reference.html",
    "parentId":"d732e1069",
    "level": 1,
    
        "pages": [
        
            "reference.versionControl.cvs.part",
            "topicId678498",
            "Mercurial_Reference",
            "topicId783574",
            "topicId963180",
            "Checkout_from_TFS_Wizard",
            "reference.dialogs.vcs.patch.apply",
            "reference.dialogs.vcs.patch.create",
            "reference.dialogs.vcs.commit",
            "configureIgnoredFilesDialog",
            "reference.version.control.enable.version.control.integration",
            "reference.versionControl.highlight",
            "new_changelist_dialog",
            "reference.dialogs.PatchFileSettings",
            "Vcs.Push.Dialog",
            "reference.dialogs.vcs.revert",
            "reference.dialogs.vcs.select.changelist",
            "reference.dialogs.vcs.shelve",
            "topicId2593",
            "reference.dialogs.localHistory.show.folder",
            "reference.dialogs.vcs.unshelve"
        ],
    
    "tabIndex": 8},
    "reference.versionControl.cvs.part": {
    
    "id": "reference.versionControl.cvs.part",
    
    "title": "CVS Reference",
    "disqus_id": "CVS_Reference_1",
    "url": "cvs-reference.html",
    "parentId":"reference.versionControl",
    "level": 2,
    
        "pages": [
        
            "reference.versioncontrol.cvs.roots",
            "cvs.browse",
            "cvs.import",
            "cvs.checkOutPrj",
            "topicId222301",
            "reference.versionControl.rollback.filestatus",
            "reference.versionControl.cvs.options"
        ],
    
    "tabIndex": 0},
    "reference.versioncontrol.cvs.roots": {
    
    "id": "reference.versioncontrol.cvs.roots",
    
    "title": "CVS Roots Dialog",
    "disqus_id": "CVS_Roots_Dialog_1",
    "url": "cvs-roots-dialog.html",
    "parentId":"reference.versionControl.cvs.part",
    "level": 3,
    
    "tabIndex": 0},
    "cvs.browse": {
    
    "id": "cvs.browse",
    
    "title": "CVS Tool Window",
    "disqus_id": "CVS_Tool_Window_1",
    "url": "cvs-tool-window.html",
    "parentId":"reference.versionControl.cvs.part",
    "level": 3,
    
    "tabIndex": 1},
    "cvs.import": {
    
    "id": "cvs.import",
    
    "title": "Import into CVS",
    "disqus_id": "Import_into_CVS_1",
    "url": "import-into-cvs.html",
    "parentId":"reference.versionControl.cvs.part",
    "level": 3,
    
    "tabIndex": 2},
    "cvs.checkOutPrj": {
    
    "id": "cvs.checkOutPrj",
    
    "title": "Check Out From CVS Dialog",
    "disqus_id": "Check_Out_From_CVS_Dialog_1",
    "url": "check-out-from-cvs-dialog.html",
    "parentId":"reference.versionControl.cvs.part",
    "level": 3,
    
    "tabIndex": 3},
    "topicId222301": {
    
    "id": "topicId222301",
    
    "title": "Configure CVS Root Field by Field Dialog",
    "disqus_id": "Configure_CVS_Root_Field_by_Field_Dialog_1",
    "url": "configure-cvs-root-field-by-field-dialog.html",
    "parentId":"reference.versionControl.cvs.part",
    "level": 3,
    
    "tabIndex": 4},
    "reference.versionControl.rollback.filestatus": {
    
    "id": "reference.versionControl.rollback.filestatus",
    
    "title": "Rollback Actions With Regards to File Status",
    "disqus_id": "Rollback_Actions_With_Regards_to_File_Status_1",
    "url": "rollback-actions-with-regards-to-file-status.html",
    "parentId":"reference.versionControl.cvs.part",
    "level": 3,
    
    "tabIndex": 5},
    "reference.versionControl.cvs.options": {
    
    "id": "reference.versionControl.cvs.options",
    
    "title": "Update Directory / Update File Dialog (CVS)",
    "disqus_id": "Update_Directory_Dialog_(CVS)_1",
    "url": "update-directory-dialog-cvs.html",
    "parentId":"reference.versionControl.cvs.part",
    "level": 3,
    
    "tabIndex": 6},
    "topicId678498": {
    
    "id": "topicId678498",
    
    "title": "Git Reference",
    "disqus_id": "Git_Reference_1",
    "url": "git-reference.html",
    "parentId":"reference.versionControl",
    "level": 2,
    
        "pages": [
        
            "reference.VersionControl.Git.MergeBranches",
            "reference.VersionControl.Git.Rebase"
        ],
    
    "tabIndex": 1},
    "reference.VersionControl.Git.MergeBranches": {
    
    "id": "reference.VersionControl.Git.MergeBranches",
    
    "title": "Merge Branches Dialog",
    "disqus_id": "Merge_Branches_Dialog_1",
    "url": "merge-branches-dialog.html",
    "parentId":"topicId678498",
    "level": 3,
    
    "tabIndex": 0},
    "reference.VersionControl.Git.Rebase": {
    
    "id": "reference.VersionControl.Git.Rebase",
    
    "title": "Rebase Branches Dialog",
    "disqus_id": "Rebase_Branches_Dialog_1",
    "url": "rebase-branches-dialog.html",
    "parentId":"topicId678498",
    "level": 3,
    
    "tabIndex": 1},
    "Mercurial_Reference": {
    
    "id": "Mercurial_Reference",
    
    "title": "Mercurial Reference",
    "disqus_id": "Mercurial_Reference_1",
    "url": "mercurial-reference.html",
    "parentId":"reference.versionControl",
    "level": 2,
    
        "pages": [
        
            "reference.mercurial.clone.mercurial.repository",
            "reference.mercurial.create.mercurial.repository",
            "reference.mercurial.merge.dialog",
            "reference.mercurial.create.bookmark",
            "reference.mercurial.pull.dialog",
            "reference.mercurial.switch.working.directory",
            "Tag_Dialog_Mercurial_",
            "reference.VersionControl.Mercurial.UpdateProject"
        ],
    
    "tabIndex": 2},
    "reference.mercurial.clone.mercurial.repository": {
    
    "id": "reference.mercurial.clone.mercurial.repository",
    
    "title": "Clone Mercurial Repository Dialog",
    "disqus_id": "Clone_Mercurial_Repository_Dialog_1",
    "url": "clone-mercurial-repository-dialog.html",
    "parentId":"Mercurial_Reference",
    "level": 3,
    
    "tabIndex": 0},
    "reference.mercurial.create.mercurial.repository": {
    
    "id": "reference.mercurial.create.mercurial.repository",
    
    "title": "Create Mercurial Repository Dialog",
    "disqus_id": "Create_Mercurial_Repository_Dialog_1",
    "url": "create-mercurial-repository-dialog.html",
    "parentId":"Mercurial_Reference",
    "level": 3,
    
    "tabIndex": 1},
    "reference.mercurial.merge.dialog": {
    
    "id": "reference.mercurial.merge.dialog",
    
    "title": "Merge Dialog (Mercurial)",
    "disqus_id": "Merge_Dialog_Mercurial__1",
    "url": "merge-dialog-mercurial.html",
    "parentId":"Mercurial_Reference",
    "level": 3,
    
    "tabIndex": 2},
    "reference.mercurial.create.bookmark": {
    
    "id": "reference.mercurial.create.bookmark",
    
    "title": "New Bookmark Dialog",
    "disqus_id": "New_Bookmark_dialog_1",
    "url": "new-bookmark-dialog.html",
    "parentId":"Mercurial_Reference",
    "level": 3,
    
    "tabIndex": 3},
    "reference.mercurial.pull.dialog": {
    
    "id": "reference.mercurial.pull.dialog",
    
    "title": "Pull Dialog",
    "disqus_id": "Pull_Dialog_1",
    "url": "pull-dialog.html",
    "parentId":"Mercurial_Reference",
    "level": 3,
    
    "tabIndex": 4},
    "reference.mercurial.switch.working.directory": {
    
    "id": "reference.mercurial.switch.working.directory",
    
    "title": "Switch Working Directory Dialog",
    "disqus_id": "Switch_Working_Directory_Dialog_1",
    "url": "switch-working-directory-dialog.html",
    "parentId":"Mercurial_Reference",
    "level": 3,
    
    "tabIndex": 5},
    "Tag_Dialog_Mercurial_": {
    
    "id": "Tag_Dialog_Mercurial_",
    
    "title": "Tag Dialog (Mercurial)",
    "disqus_id": "Tag_Dialog_Mercurial__1",
    "url": "tag-dialog-mercurial.html",
    "parentId":"Mercurial_Reference",
    "level": 3,
    
    "tabIndex": 6},
    "reference.VersionControl.Mercurial.UpdateProject": {
    
    "id": "reference.VersionControl.Mercurial.UpdateProject",
    
    "title": "Update Project Dialog (Mercurial)",
    "disqus_id": "Update_Project_Dialog_Mercurial__1",
    "url": "update-project-dialog-mercurial.html",
    "parentId":"Mercurial_Reference",
    "level": 3,
    
    "tabIndex": 7},
    "topicId783574": {
    
    "id": "topicId783574",
    
    "title": "Perforce Reference",
    "disqus_id": "Perforce_Reference_1",
    "url": "perforce-reference.html",
    "parentId":"reference.versionControl",
    "level": 2,
    
        "pages": [
        
            "topicId22818",
            "reference.dialogs.versionControl.integrate.project.perforce",
            "reference.vcs.perforce.searchJob",
            "reference.versionControl.perforce.options",
            "reference.vcs.update.project.perforce"
        ],
    
    "tabIndex": 3},
    "topicId22818": {
    
    "id": "topicId22818",
    
    "title": "Edit Jobs Linked to Changelist Dialog",
    "disqus_id": "Edit_Jobs_Linked_to_Changelist_Dialog_1",
    "url": "edit-jobs-linked-to-changelist-dialog.html",
    "parentId":"topicId783574",
    "level": 3,
    
    "tabIndex": 0},
    "reference.dialogs.versionControl.integrate.project.perforce": {
    
    "id": "reference.dialogs.versionControl.integrate.project.perforce",
    
    "title": "Integrate File Dialog (Perforce)",
    "disqus_id": "Integrate_File_Dialog_(Perforce)_1",
    "url": "integrate-file-dialog-perforce.html",
    "parentId":"topicId783574",
    "level": 3,
    
    "tabIndex": 1},
    "reference.vcs.perforce.searchJob": {
    
    "id": "reference.vcs.perforce.searchJob",
    
    "title": "Link Job to Changelist Dialog",
    "disqus_id": "Link_Job_to_Changelist_Dialog_1",
    "url": "link-job-to-changelist-dialog.html",
    "parentId":"topicId783574",
    "level": 3,
    
    "tabIndex": 2},
    "reference.versionControl.perforce.options": {
    
    "id": "reference.versionControl.perforce.options",
    
    "title": "Perforce Options Dialog",
    "disqus_id": "Perforce_Options_Dialog_1",
    "url": "perforce-options-dialog.html",
    "parentId":"topicId783574",
    "level": 3,
    
    "tabIndex": 3},
    "reference.vcs.update.project.perforce": {
    
    "id": "reference.vcs.update.project.perforce",
    
    "title": "Update Project Dialog (Perforce)",
    "disqus_id": "Update_Project_Dialog_Perforce_1",
    "url": "update-project-dialog-perforce.html",
    "parentId":"topicId783574",
    "level": 3,
    
    "tabIndex": 4},
    "topicId963180": {
    
    "id": "topicId963180",
    
    "title": "Subversion Reference",
    "disqus_id": "Subversion_Reference_1",
    "url": "subversion-reference.html",
    "parentId":"reference.versionControl",
    "level": 2,
    
        "pages": [
        
            "vcs.subversion.authentication",
            "topicId224934",
            "vcs.subversion.browseSVN",
            "vcs.subversion.configure.branches",
            "vcs.subversion.branch",
            "vcs.subversion.import",
            "reference.dialogs.versionControl.integrate.project.subversion",
            "topicId855631",
            "reference.VCS.subversion.lockFile",
            "vcs.subversion.resolve",
            "topicId472239",
            "vcs.subversion.common",
            "vcs.subversion.property",
            "reference.versionControl.subversion.options",
            "reference.vcs.svn.working.copies.information",
            "reference.svn.repository",
            "vcs.subversion.updateProject"
        ],
    
    "tabIndex": 4},
    "vcs.subversion.authentication": {
    
    "id": "vcs.subversion.authentication",
    
    "title": "Authentication Required",
    "disqus_id": "Authentication_Required_1",
    "url": "authentication-required.html",
    "parentId":"topicId963180",
    "level": 3,
    
    "tabIndex": 0},
    "topicId224934": {
    
    "id": "topicId224934",
    
    "title": "Changes Browser",
    "disqus_id": "Changes_Browser_1",
    "url": "changes-browser.html",
    "parentId":"topicId963180",
    "level": 3,
    
    "tabIndex": 1},
    "vcs.subversion.browseSVN": {
    
    "id": "vcs.subversion.browseSVN",
    
    "title": "Check Out From Subversion Dialog",
    "disqus_id": "Check_Out_From_Subversion_Dialog_1",
    "url": "check-out-from-subversion-dialog.html",
    "parentId":"topicId963180",
    "level": 3,
    
        "pages": [
        
            "reference.vcs.svn.checkout.options"
        ],
    
    "tabIndex": 2},
    "reference.vcs.svn.checkout.options": {
    
    "id": "reference.vcs.svn.checkout.options",
    
    "title": "SVN Checkout Options Dialog",
    "disqus_id": "SVN_Checkout_Options_Dialog_1",
    "url": "svn-checkout-options-dialog.html",
    "parentId":"vcs.subversion.browseSVN",
    "level": 4,
    
    "tabIndex": 0},
    "vcs.subversion.configure.branches": {
    
    "id": "vcs.subversion.configure.branches",
    
    "title": "Configure Subversion Branches",
    "disqus_id": "Configure_Subversion_Branches_1",
    "url": "configure-subversion-branches.html",
    "parentId":"topicId963180",
    "level": 3,
    
    "tabIndex": 3},
    "vcs.subversion.branch": {
    
    "id": "vcs.subversion.branch",
    
    "title": "Create Branch or Tag Dialog (Subversion)",
    "disqus_id": "Create_Branch_or_Tag_Dialog_(Subversion)_1",
    "url": "create-branch-or-tag-dialog-subversion.html",
    "parentId":"topicId963180",
    "level": 3,
    
    "tabIndex": 4},
    "vcs.subversion.import": {
    
    "id": "vcs.subversion.import",
    
    "title": "Import into Subversion",
    "disqus_id": "Import_into_Subversion_1",
    "url": "import-into-subversion.html",
    "parentId":"topicId963180",
    "level": 3,
    
    "tabIndex": 5},
    "reference.dialogs.versionControl.integrate.project.subversion": {
    
    "id": "reference.dialogs.versionControl.integrate.project.subversion",
    
    "title": "Integrate Project Dialog (Subversion)",
    "disqus_id": "Integrate_Project_Dialog_(Subversion)_1",
    "url": "integrate-project-dialog-subversion.html",
    "parentId":"topicId963180",
    "level": 3,
    
    "tabIndex": 6},
    "topicId855631": {
    
    "id": "topicId855631",
    
    "title": "Integrate to Branch",
    "disqus_id": "Integrate_to_Branch_1",
    "url": "integrate-to-branch.html",
    "parentId":"topicId963180",
    "level": 3,
    
    "tabIndex": 7},
    "reference.VCS.subversion.lockFile": {
    
    "id": "reference.VCS.subversion.lockFile",
    
    "title": "Lock File Dialog (Subversion)",
    "disqus_id": "Lock_File_Dialog_(Subversion)_1",
    "url": "lock-file-dialog-subversion.html",
    "parentId":"topicId963180",
    "level": 3,
    
    "tabIndex": 8},
    "vcs.subversion.resolve": {
    
    "id": "vcs.subversion.resolve",
    
    "title": "Mark Resolved Dialog (Subversion)",
    "disqus_id": "Mark_Resolved_Dialog_Subversion_1",
    "url": "mark-resolved-dialog-subversion.html",
    "parentId":"topicId963180",
    "level": 3,
    
    "tabIndex": 9},
    "topicId472239": {
    
    "id": "topicId472239",
    
    "title": "Select Branch",
    "disqus_id": "Select_Branch_1",
    "url": "select-branch.html",
    "parentId":"topicId963180",
    "level": 3,
    
    "tabIndex": 10},
    "vcs.subversion.common": {
    
    "id": "vcs.subversion.common",
    
    "title": "Select Repository Location Dialog (Subversion)",
    "disqus_id": "Select_Repository_Location_Dialog_(Subversion)_1",
    "url": "select-repository-location-dialog-subversion.html",
    "parentId":"topicId963180",
    "level": 3,
    
    "tabIndex": 11},
    "vcs.subversion.property": {
    
    "id": "vcs.subversion.property",
    
    "title": "Set Property Dialog (Subversion)",
    "disqus_id": "Set_Property_Dialog_(Subversion)_1",
    "url": "set-property-dialog-subversion.html",
    "parentId":"topicId963180",
    "level": 3,
    
    "tabIndex": 12},
    "reference.versionControl.subversion.options": {
    
    "id": "reference.versionControl.subversion.options",
    
    "title": "Subversion Options Dialog",
    "disqus_id": "Subversion_Options_Dialog_1",
    "url": "subversion-options-dialog.html",
    "parentId":"topicId963180",
    "level": 3,
    
    "tabIndex": 13},
    "reference.vcs.svn.working.copies.information": {
    
    "id": "reference.vcs.svn.working.copies.information",
    
    "title": "Subversion Working Copies Information Tab",
    "disqus_id": "Subversion_Working_Copies_Information_Tab_1",
    "url": "subversion-working-copies-information-tab.html",
    "parentId":"topicId963180",
    "level": 3,
    
    "tabIndex": 14},
    "reference.svn.repository": {
    
    "id": "reference.svn.repository",
    
    "title": "SVN Repositories",
    "disqus_id": "SVN_Repositories_1",
    "url": "svn-repositories.html",
    "parentId":"topicId963180",
    "level": 3,
    
    "tabIndex": 15},
    "vcs.subversion.updateProject": {
    
    "id": "vcs.subversion.updateProject",
    
    "title": "Update Project Dialog (Subversion)",
    "disqus_id": "Update_Project_Dialog_(Subversion)_1",
    "url": "update-project-dialog-subversion.html",
    "parentId":"topicId963180",
    "level": 3,
    
    "tabIndex": 16},
    "Checkout_from_TFS_Wizard": {
    
    "id": "Checkout_from_TFS_Wizard",
    
    "title": "Checkout from TFS Wizard",
    "disqus_id": "Checkout_from_TFS_Wizard_1",
    "url": "checkout-from-tfs-wizard.html",
    "parentId":"reference.versionControl",
    "level": 2,
    
        "pages": [
        
            "reference.checkoutTFS.checkoutmode",
            "reference.checkoutTFS.sourceserver",
            "reference.checkoutTFS.choosepaths",
            "reference.checkoutTFS.sourceworkspace",
            "reference.checkoutTFS.sourcepath",
            "reference.checkoutTFS.summary"
        ],
    
    "tabIndex": 5},
    "reference.checkoutTFS.checkoutmode": {
    
    "id": "reference.checkoutTFS.checkoutmode",
    
    "title": "Checkout from TFS Wizard: Checkout Mode",
    "disqus_id": "Checkout_from_TFS_Wizard_Checkout_Mode_1",
    "url": "checkout-from-tfs-wizard-checkout-mode.html",
    "parentId":"Checkout_from_TFS_Wizard",
    "level": 3,
    
    "tabIndex": 0},
    "reference.checkoutTFS.sourceserver": {
    
    "id": "reference.checkoutTFS.sourceserver",
    
    "title": "Checkout from TFS Wizard: Source Server",
    "disqus_id": "Checkout_from_TFS_Wizard_Source_Server_1",
    "url": "checkout-from-tfs-wizard-source-server.html",
    "parentId":"Checkout_from_TFS_Wizard",
    "level": 3,
    
    "tabIndex": 1},
    "reference.checkoutTFS.choosepaths": {
    
    "id": "reference.checkoutTFS.choosepaths",
    
    "title": "Checkout from TFS Wizard: Choose Source and Destination Paths",
    "disqus_id": "Checkout_from_TFS_Wizard_choose_Source_and_Destination_Paths_1",
    "url": "checkout-from-tfs-wizard-choose-source-and-destination-paths.html",
    "parentId":"Checkout_from_TFS_Wizard",
    "level": 3,
    
    "tabIndex": 2},
    "reference.checkoutTFS.sourceworkspace": {
    
    "id": "reference.checkoutTFS.sourceworkspace",
    
    "title": "Checkout from TFS Wizard: Source Workspace",
    "disqus_id": "Checkout_from_TFS_Wizard_Source_Workspace_1",
    "url": "checkout-from-tfs-wizard-source-workspace.html",
    "parentId":"Checkout_from_TFS_Wizard",
    "level": 3,
    
    "tabIndex": 3},
    "reference.checkoutTFS.sourcepath": {
    
    "id": "reference.checkoutTFS.sourcepath",
    
    "title": "Checkout from TFS Wizard: Choose Source Path",
    "disqus_id": "Checkout_from_TFS_Wizard_Choose_Source_Path_1",
    "url": "checkout-from-tfs-wizard-choose-source-path.html",
    "parentId":"Checkout_from_TFS_Wizard",
    "level": 3,
    
    "tabIndex": 4},
    "reference.checkoutTFS.summary": {
    
    "id": "reference.checkoutTFS.summary",
    
    "title": "Checkout from TFS Wizard: Summary",
    "disqus_id": "Checkout_from_TFS_Wizard_Summary_1",
    "url": "checkout-from-tfs-wizard-summary.html",
    "parentId":"Checkout_from_TFS_Wizard",
    "level": 3,
    
    "tabIndex": 5},
    "reference.dialogs.vcs.patch.apply": {
    
    "id": "reference.dialogs.vcs.patch.apply",
    
    "title": "Apply Patch Dialog",
    "disqus_id": "Apply_Patch_Dialog_1",
    "url": "apply-patch-dialog.html",
    "parentId":"reference.versionControl",
    "level": 2,
    
    "tabIndex": 6},
    "reference.dialogs.vcs.patch.create": {
    
    "id": "reference.dialogs.vcs.patch.create",
    
    "title": "Create Patch Dialog",
    "disqus_id": "Create_Patch_1",
    "url": "create-patch.html",
    "parentId":"reference.versionControl",
    "level": 2,
    
    "tabIndex": 7},
    "reference.dialogs.vcs.commit": {
    
    "id": "reference.dialogs.vcs.commit",
    
    "title": "Commit Changes Dialog",
    "disqus_id": "Commit_Changes_Dialog_1",
    "url": "commit-changes-dialog.html",
    "parentId":"reference.versionControl",
    "level": 2,
    
    "tabIndex": 8},
    "configureIgnoredFilesDialog": {
    
    "id": "configureIgnoredFilesDialog",
    
    "title": "Configure Ignored Files Dialog",
    "disqus_id": "configureIgnoredFilesDialog_1",
    "url": "configureignoredfilesdialog.html",
    "parentId":"reference.versionControl",
    "level": 2,
    
    "tabIndex": 9},
    "reference.version.control.enable.version.control.integration": {
    
    "id": "reference.version.control.enable.version.control.integration",
    
    "title": "Enable Version Control Integration Dialog",
    "disqus_id": "Enable_Version_Control_Integration_Dialog_1",
    "url": "enable-version-control-integration-dialog.html",
    "parentId":"reference.versionControl",
    "level": 2,
    
    "tabIndex": 10},
    "reference.versionControl.highlight": {
    
    "id": "reference.versionControl.highlight",
    
    "title": "File Status Highlights",
    "disqus_id": "File_Status_Highlights_1",
    "url": "file-status-highlights.html",
    "parentId":"reference.versionControl",
    "level": 2,
    
    "tabIndex": 11},
    "new_changelist_dialog": {
    
    "id": "new_changelist_dialog",
    
    "title": "New Changelist Dialog",
    "disqus_id": "new_changelist_dialog_1",
    "url": "new-changelist-dialog.html",
    "parentId":"reference.versionControl",
    "level": 2,
    
    "tabIndex": 12},
    "reference.dialogs.PatchFileSettings": {
    
    "id": "reference.dialogs.PatchFileSettings",
    
    "title": "Patch File Settings Dialog",
    "disqus_id": "Create_Patch_Dialog_1",
    "url": "create-patch-dialog.html",
    "parentId":"reference.versionControl",
    "level": 2,
    
    "tabIndex": 13},
    "Vcs.Push.Dialog": {
    
    "id": "Vcs.Push.Dialog",
    
    "title": "Push Dialog (Mercurial, Git)",
    "disqus_id": "Push_Dialog_(Mercurial_Git)_1",
    "url": "push-dialog-mercurial-git.html",
    "parentId":"reference.versionControl",
    "level": 2,
    
    "tabIndex": 14},
    "reference.dialogs.vcs.revert": {
    
    "id": "reference.dialogs.vcs.revert",
    
    "title": "Revert Changes Dialog",
    "disqus_id": "Revert_Changes_Dialog_1",
    "url": "revert-changes-dialog.html",
    "parentId":"reference.versionControl",
    "level": 2,
    
    "tabIndex": 15},
    "reference.dialogs.vcs.select.changelist": {
    
    "id": "reference.dialogs.vcs.select.changelist",
    
    "title": "Select Target Changelist Dialog",
    "disqus_id": "Select_Target_Changelist_Dialog_1",
    "url": "select-target-changelist-dialog.html",
    "parentId":"reference.versionControl",
    "level": 2,
    
    "tabIndex": 16},
    "reference.dialogs.vcs.shelve": {
    
    "id": "reference.dialogs.vcs.shelve",
    
    "title": "Shelve Changes Dialog",
    "disqus_id": "Shelve_Changes_Dialog_1",
    "url": "shelve-changes-dialog.html",
    "parentId":"reference.versionControl",
    "level": 2,
    
    "tabIndex": 17},
    "topicId2593": {
    
    "id": "topicId2593",
    
    "title": "Show History for File / Selection Dialog",
    "disqus_id": "Show_History_for_File_Selection_Dialog_1",
    "url": "show-history-for-file-selection-dialog.html",
    "parentId":"reference.versionControl",
    "level": 2,
    
    "tabIndex": 18},
    "reference.dialogs.localHistory.show.folder": {
    
    "id": "reference.dialogs.localHistory.show.folder",
    
    "title": "Show History for Folder Dialog",
    "disqus_id": "Show_History_for_Folder_Dialog_1",
    "url": "show-history-for-folder-dialog.html",
    "parentId":"reference.versionControl",
    "level": 2,
    
    "tabIndex": 19},
    "reference.dialogs.vcs.unshelve": {
    
    "id": "reference.dialogs.vcs.unshelve",
    
    "title": "Unshelve Changes Dialog",
    "disqus_id": "Unshelve_Changes_Dialog_1",
    "url": "unshelve-changes-dialog.html",
    "parentId":"reference.versionControl",
    "level": 2,
    
    "tabIndex": 20},
    "d732e1941": {
    "id": "d732e1941",
    "parentId":"d732e1069","selectFirstChildOnClick": true,
    "level": 1,
    
        "pages": [
        
            "topicId885451",
            "reference.javaee.change-ejb-classes",
            "topicId541878",
            "j2ee.cmp.field",
            "topicId820954",
            "reference.settings.project.modules.struts2.facet.file.sets.edit.file.set",
            "topicId909220",
            "newEJBedit_module_rel",
            "topicId368990",
            "Generate_GWT_Compile_Report_Dialog",
            "newEJBmap_to_datasource",
            "newEJBbean_create_main",
            "j2ee.jsp.webModuleEditor.servlet",
            "j2ee.jsp.webModuleEditor.filter",
            "j2ee.jsp.webModuleEditor.listener",
            "reference.javaee.rename.entity.bean",
            "j2ee.unknown",
            "topicId451666",
            "topicId683783"
        ],
    
    "title": "Java EE reference",
    "tabIndex": 9},
    "topicId885451": {
    
    "id": "topicId885451",
    
    "title": "Apply EJB 3.0 Style",
    "disqus_id": "Apply_EJB_3.0_Style.xml_1",
    "url": "apply-ejb-3-0-style.html",
    "parentId":"d732e1941",
    "level": 2,
    
    "tabIndex": 0},
    "reference.javaee.change-ejb-classes": {
    
    "id": "reference.javaee.change-ejb-classes",
    
    "title": "Change EJB Classes Dialog",
    "disqus_id": "Change_EJB_Classes_Dialog_1",
    "url": "change-ejb-classes-dialog.html",
    "parentId":"d732e1941",
    "level": 2,
    
    "tabIndex": 1},
    "topicId541878": {
    
    "id": "topicId541878",
    
    "title": "Choose Servlet Class",
    "disqus_id": "Choose_Servlet_Class_1",
    "url": "choose-servlet-class.html",
    "parentId":"d732e1941",
    "level": 2,
    
    "tabIndex": 2},
    "j2ee.cmp.field": {
    
    "id": "j2ee.cmp.field",
    
    "title": "Create CMP Field",
    "disqus_id": "Create_CMP_Field_1",
    "url": "create-cmp-field.html",
    "parentId":"d732e1941",
    "level": 2,
    
    "tabIndex": 3},
    "topicId820954": {
    
    "id": "topicId820954",
    
    "title": "Create / Edit Relationship",
    "disqus_id": "Create_Edit_Relationship_1",
    "url": "create-edit-relationship.html",
    "parentId":"d732e1941",
    "level": 2,
    
    "tabIndex": 4},
    "reference.settings.project.modules.struts2.facet.file.sets.edit.file.set": {
    
    "id": "reference.settings.project.modules.struts2.facet.file.sets.edit.file.set",
    
    "title": "Edit File Set",
    "disqus_id": "Edit_File_Set_Dialog_1",
    "url": "edit-file-set-dialog.html",
    "parentId":"d732e1941",
    "level": 2,
    
    "tabIndex": 5},
    "topicId909220": {
    
    "id": "topicId909220",
    
    "title": "EJB Editor",
    "disqus_id": "EJB_Editor_1",
    "url": "ejb-editor.html",
    "parentId":"d732e1941",
    "level": 2,
    
        "pages": [
        
            "newEJBedit_entity",
            "newEJBedit_message",
            "newEJBedit_session",
            "EJBedit_assembly_descriptor",
            "newEJBedit_assembly",
            "newEJBedit_beans"
        ],
    
    "tabIndex": 6},
    "newEJBedit_entity": {
    
    "id": "newEJBedit_entity",
    
    "title": "EJB Editor - General Tab - Entity Bean",
    "disqus_id": "EJB_Editor_-_General_Tab_-_Entity_Bean_1",
    "url": "ejb-editor-general-tab-entity-bean.html",
    "parentId":"topicId909220",
    "level": 3,
    
    "tabIndex": 0},
    "newEJBedit_message": {
    
    "id": "newEJBedit_message",
    
    "title": "EJB Editor - General Tab - Message Bean",
    "disqus_id": "EJB_Editor_-_General_Tab_-_Message_Bean_1",
    "url": "ejb-editor-general-tab-message-bean.html",
    "parentId":"topicId909220",
    "level": 3,
    
    "tabIndex": 1},
    "newEJBedit_session": {
    
    "id": "newEJBedit_session",
    
    "title": "EJB Editor - General Tab - Session Bean",
    "disqus_id": "EJB_Editor_-_General_Tab_-_Session_Bean_1",
    "url": "ejb-editor-general-tab-session-bean.html",
    "parentId":"topicId909220",
    "level": 3,
    
    "tabIndex": 2},
    "EJBedit_assembly_descriptor": {
    
    "id": "EJBedit_assembly_descriptor",
    
    "title": "EJB Editor - Assembly Descriptor",
    "disqus_id": "EJB_Editor_-_Assembly_Descriptor_1",
    "url": "ejb-editor-assembly-descriptor.html",
    "parentId":"topicId909220",
    "level": 3,
    
    "tabIndex": 3},
    "newEJBedit_assembly": {
    
    "id": "newEJBedit_assembly",
    
    "title": "Assembly Descriptor Dialogs",
    "disqus_id": "Assembly_Descriptor_Dialogs_1",
    "url": "assembly-descriptor-dialogs.html",
    "parentId":"topicId909220",
    "level": 3,
    
    "tabIndex": 4},
    "newEJBedit_beans": {
    
    "id": "newEJBedit_beans",
    
    "title": "EJB Editor General Tab - Common",
    "disqus_id": "EJB_Editor_General_Tab_-_Common_1",
    "url": "ejb-editor-general-tab-common.html",
    "parentId":"topicId909220",
    "level": 3,
    
    "tabIndex": 5},
    "newEJBedit_module_rel": {
    
    "id": "newEJBedit_module_rel",
    
    "title": "EJB ER diagram",
    "disqus_id": "EJB_Module_Editor_-_EJB_Relationships_1",
    "url": "ejb-module-editor-ejb-relationships.html",
    "parentId":"d732e1941",
    "level": 2,
    
        "pages": [
        
            "EjbRelationshipPropertiesDialog"
        ],
    
    "tabIndex": 7},
    "EjbRelationshipPropertiesDialog": {
    
    "id": "EjbRelationshipPropertiesDialog",
    
    "title": "EJB Relationship Properties dialog",
    "disqus_id": "EJB_Relationship_Properties_1",
    "url": "ejb-relationship-properties.html",
    "parentId":"newEJBedit_module_rel",
    "level": 3,
    
    "tabIndex": 0},
    "topicId368990": {
    
    "id": "topicId368990",
    
    "title": "EJB Module Editor",
    "disqus_id": "EJB_Module_Editor_1",
    "url": "ejb-module-editor.html",
    "parentId":"d732e1941",
    "level": 2,
    
        "pages": [
        
            "newEJBedit_module_main",
            "newEJBedit_module_method",
            "newEJBedit_module_attr"
        ],
    
    "tabIndex": 8},
    "newEJBedit_module_main": {
    
    "id": "newEJBedit_module_main",
    
    "title": "EJB Module Editor - General",
    "disqus_id": "EJB_Module_Editor_-_General_1",
    "url": "ejb-module-editor-general.html",
    "parentId":"topicId368990",
    "level": 3,
    
    "tabIndex": 0},
    "newEJBedit_module_method": {
    
    "id": "newEJBedit_module_method",
    
    "title": "EJB Module Editor - Method Permissions",
    "disqus_id": "EJB_Module_Editor_-_Method_Permissions_1",
    "url": "ejb-module-editor-method-permissions.html",
    "parentId":"topicId368990",
    "level": 3,
    
    "tabIndex": 1},
    "newEJBedit_module_attr": {
    
    "id": "newEJBedit_module_attr",
    
    "title": "EJB Module Editor - Transaction Attributes",
    "disqus_id": "EJB_Module_Editor_-_Transaction_Attributes_1",
    "url": "ejb-module-editor-transaction-attributes.html",
    "parentId":"topicId368990",
    "level": 3,
    
    "tabIndex": 2},
    "Generate_GWT_Compile_Report_Dialog": {
    
    "id": "Generate_GWT_Compile_Report_Dialog",
    
    "title": "Generate GWT Compile Report Dialog",
    "disqus_id": "Generate_GWT_Compile_Report_Dialog_1",
    "url": "generate-gwt-compile-report-dialog.html",
    "parentId":"d732e1941",
    "level": 2,
    
    "tabIndex": 9},
    "newEJBmap_to_datasource": {
    
    "id": "newEJBmap_to_datasource",
    
    "title": "Generate Persistence Mapping - Import dialogs",
    "disqus_id": "Generate_Persistence_Mapping_-_Import_dialogs_1",
    "url": "generate-persistence-mapping-import-dialogs.html",
    "parentId":"d732e1941",
    "level": 2,
    
        "pages": [
        
            "reference.importDatabaseSchema.addRelationship"
        ],
    
    "tabIndex": 10},
    "reference.importDatabaseSchema.addRelationship": {
    
    "id": "reference.importDatabaseSchema.addRelationship",
    
    "title": "Add / Edit Relationship",
    "disqus_id": "Add___Edit_Relationship_1",
    "url": "add-edit-relationship.html",
    "parentId":"newEJBmap_to_datasource",
    "level": 3,
    
    "tabIndex": 0},
    "newEJBbean_create_main": {
    
    "id": "newEJBbean_create_main",
    
    "title": "New Bean Dialogs",
    "disqus_id": "New_Bean_Dialogs_1",
    "url": "new-bean-dialogs.html",
    "parentId":"d732e1941",
    "level": 2,
    
        "pages": [
        
            "reference.javaee.new-session-bean",
            "reference.javaee.new-message-bean",
            "reference.javaee.new-bmp-bean",
            "reference.javaee.new-cmp-bean"
        ],
    
    "tabIndex": 11},
    "reference.javaee.new-session-bean": {
    
    "id": "reference.javaee.new-session-bean",
    
    "title": "New Session Bean Dialog",
    "disqus_id": "New_Session_Bean_Dialog_1",
    "url": "new-session-bean-dialog.html",
    "parentId":"newEJBbean_create_main",
    "level": 3,
    
    "tabIndex": 0},
    "reference.javaee.new-message-bean": {
    
    "id": "reference.javaee.new-message-bean",
    
    "title": "New Message Bean Dialog",
    "disqus_id": "New_Message_Bean_Dialog_1",
    "url": "new-message-bean-dialog.html",
    "parentId":"newEJBbean_create_main",
    "level": 3,
    
    "tabIndex": 1},
    "reference.javaee.new-bmp-bean": {
    
    "id": "reference.javaee.new-bmp-bean",
    
    "title": "New BMP Entity Bean Dialog",
    "disqus_id": "New_BMP_Entity_Bean_Dialog_1",
    "url": "new-bmp-entity-bean-dialog.html",
    "parentId":"newEJBbean_create_main",
    "level": 3,
    
    "tabIndex": 2},
    "reference.javaee.new-cmp-bean": {
    
    "id": "reference.javaee.new-cmp-bean",
    
    "title": "New CMP Entity Bean Dialog",
    "disqus_id": "New_CMP_Entity_Bean_Dialog_1",
    "url": "new-cmp-entity-bean-dialog.html",
    "parentId":"newEJBbean_create_main",
    "level": 3,
    
    "tabIndex": 3},
    "j2ee.jsp.webModuleEditor.servlet": {
    
    "id": "j2ee.jsp.webModuleEditor.servlet",
    
    "title": "New Servlet Dialog",
    "disqus_id": "New_Servlet_Dialog_1",
    "url": "new-servlet-dialog.html",
    "parentId":"d732e1941",
    "level": 2,
    
        "pages": [
        
            "topicId797770"
        ],
    
    "tabIndex": 12},
    "topicId797770": {
    
    "id": "topicId797770",
    
    "title": "Choose Servlet Package",
    "disqus_id": "Choose_Servlet_Package_1",
    "url": "choose-servlet-package.html",
    "parentId":"j2ee.jsp.webModuleEditor.servlet",
    "level": 3,
    
    "tabIndex": 0},
    "j2ee.jsp.webModuleEditor.filter": {
    
    "id": "j2ee.jsp.webModuleEditor.filter",
    
    "title": "New Filter Dialog",
    "disqus_id": "New_Filter_1",
    "url": "new-filter.html",
    "parentId":"d732e1941",
    "level": 2,
    
    "tabIndex": 13},
    "j2ee.jsp.webModuleEditor.listener": {
    
    "id": "j2ee.jsp.webModuleEditor.listener",
    
    "title": "New Listener Dialog",
    "disqus_id": "New_Listener_Dialog_1",
    "url": "new-listener-dialog.html",
    "parentId":"d732e1941",
    "level": 2,
    
    "tabIndex": 14},
    "reference.javaee.rename.entity.bean": {
    
    "id": "reference.javaee.rename.entity.bean",
    
    "title": "Rename Entity Bean",
    "disqus_id": "Rename_Entity_Bean_1",
    "url": "rename-entity-bean.html",
    "parentId":"d732e1941",
    "level": 2,
    
    "tabIndex": 15},
    "j2ee.unknown": {
    
    "id": "j2ee.unknown",
    
    "title": "Select Accessor Fields to Include in Transfer Object",
    "disqus_id": "Select_Accessor_Fields_to_Include_in_Transfer_Object_1",
    "url": "select-accessor-fields-to-include-in-transfer-object.html",
    "parentId":"d732e1941",
    "level": 2,
    
    "tabIndex": 16},
    "topicId451666": {
    
    "id": "topicId451666",
    
    "title": "Web Services Reference",
    "disqus_id": "Web_Services_Reference_1",
    "url": "web-services-reference.html",
    "parentId":"d732e1941",
    "level": 2,
    
        "pages": [
        
            "webservices.DeployWebServices",
            "webservices.GenerateWsdlFromJava",
            "webservices.GenerateJavaFromWSDL",
            "webservices.MonitorSoapMessages",
            "webservices.ShowDeployedWebServices"
        ],
    
    "tabIndex": 17},
    "webservices.DeployWebServices": {
    
    "id": "webservices.DeployWebServices",
    
    "title": "Expose Class As Web Service Dialog",
    "disqus_id": "Expose_Class_As_Web_Service_Dialog_1",
    "url": "expose-class-as-web-service-dialog.html",
    "parentId":"topicId451666",
    "level": 3,
    
    "tabIndex": 0},
    "webservices.GenerateWsdlFromJava": {
    
    "id": "webservices.GenerateWsdlFromJava",
    
    "title": "Generate WSDL from Java Dialog",
    "disqus_id": "Generate_WSDL_from_Java_Dialog_1",
    "url": "generate-wsdl-from-java-dialog.html",
    "parentId":"topicId451666",
    "level": 3,
    
    "tabIndex": 1},
    "webservices.GenerateJavaFromWSDL": {
    
    "id": "webservices.GenerateJavaFromWSDL",
    
    "title": "Generate Java Code from WSDL or WADL Dialog",
    "disqus_id": "Generate_Java_Code_from_WSDL_or_WADL_Dialog_1",
    "url": "generate-java-code-from-wsdl-or-wadl-dialog.html",
    "parentId":"topicId451666",
    "level": 3,
    
    "tabIndex": 2},
    "webservices.MonitorSoapMessages": {
    
    "id": "webservices.MonitorSoapMessages",
    
    "title": "Monitor SOAP Messages Dialog",
    "disqus_id": "Monitor_SOAP_Messages_Dialog_1",
    "url": "monitor-soap-messages-dialog.html",
    "parentId":"topicId451666",
    "level": 3,
    
    "tabIndex": 3},
    "webservices.ShowDeployedWebServices": {
    
    "id": "webservices.ShowDeployedWebServices",
    
    "title": "Show Deployed Web Services Dialog",
    "disqus_id": "show_deployed_web_services_dialog_1",
    "url": "show-deployed-web-services-dialog.html",
    "parentId":"topicId451666",
    "level": 3,
    
    "tabIndex": 4},
    "topicId683783": {
    
    "id": "topicId683783",
    
    "title": "XML-Java Binding Reference",
    "disqus_id": "XML-Java_Binding_Reference_1",
    "url": "xml-java-binding-reference.html",
    "parentId":"d732e1941",
    "level": 2,
    
        "pages": [
        
            "webservices.GenerateJavaFromJAXBSchemas",
            "webservices.GenerateJAXBSchemasFromJava",
            "webservices.GenerateJavaFromXmlBeansSchemas",
            "webservices.GenerateInstanceDocumentFromSchema",
            "webservices.GenerateSchemaFromInstanceDocument"
        ],
    
    "tabIndex": 18},
    "webservices.GenerateJavaFromJAXBSchemas": {
    
    "id": "webservices.GenerateJavaFromJAXBSchemas",
    
    "title": "Generate Java from Xml Schema using JAXB Dialog",
    "disqus_id": "Generate_Java_from_Xml_Schema_using_JAXB_Dialog_1",
    "url": "generate-java-from-xml-schema-using-jaxb-dialog.html",
    "parentId":"topicId683783",
    "level": 3,
    
    "tabIndex": 0},
    "webservices.GenerateJAXBSchemasFromJava": {
    
    "id": "webservices.GenerateJAXBSchemasFromJava",
    
    "title": "Generate XML Schema From Java Using JAXB Dialog",
    "disqus_id": "Generate_XML_Schema_From_Java_Using_JAXB_Dialog_1",
    "url": "generate-xml-schema-from-java-using-jaxb-dialog.html",
    "parentId":"topicId683783",
    "level": 3,
    
    "tabIndex": 1},
    "webservices.GenerateJavaFromXmlBeansSchemas": {
    
    "id": "webservices.GenerateJavaFromXmlBeansSchemas",
    
    "title": "Generate Java Code from XML Schema using XmlBeans Dialog",
    "disqus_id": "Generate_Java_Code_from_XML_Schema_using_XmlBeans_Dialog_1",
    "url": "generate-java-code-from-xml-schema-using-xmlbeans-dialog.html",
    "parentId":"topicId683783",
    "level": 3,
    
    "tabIndex": 2},
    "webservices.GenerateInstanceDocumentFromSchema": {
    
    "id": "webservices.GenerateInstanceDocumentFromSchema",
    
    "title": "Generate Instance Document from Schema Dialog",
    "disqus_id": "Generate_Instance_Document_from_Schema_Dialog_1",
    "url": "generate-instance-document-from-schema-dialog.html",
    "parentId":"topicId683783",
    "level": 3,
    
    "tabIndex": 3},
    "webservices.GenerateSchemaFromInstanceDocument": {
    
    "id": "webservices.GenerateSchemaFromInstanceDocument",
    
    "title": "Generate Schema from Instance Document Dialog",
    "disqus_id": "Generate_Schema_from_Instance_Document_Dialog_1",
    "url": "generate-schema-from-instance-document-dialog.html",
    "parentId":"topicId683783",
    "level": 3,
    
    "tabIndex": 4},
    "reference.table.editor": {
    
    "id": "reference.table.editor",
    
    "title": "Data editor",
    "disqus_id": "Table_Editor_1",
    "url": "table-editor.html",
    "parentId":"d732e1069",
    "level": 1,
    
        "anchors": [
        
"reference.table.editor#overview",
"reference.table.editor#bc7dec71",
"reference.table.editor#header_row",
"reference.table.editor#24dda959",
"reference.table.editor#b54ad64b"
        ],
    "tabIndex": 10},
    "d732e1990": {
    "id": "d732e1990",
    "parentId":"d732e1069","selectFirstChildOnClick": true,
    "level": 1,
    
        "pages": [
        
            "topicId178354",
            "reference.android.chooseDevice",
            "Asset_Studio",
            "reference.android.createAVD",
            "reference.android.createLayout",
            "Designer_Tool_WIndow",
            "reference.android.reference.extract.signed.package",
            "Inline_Android_Style_Dialog",
            "reference.new.android.component",
            "reference.new.resource.directory",
            "reference.new.resource.file"
        ],
    
    "title": "Android reference",
    "tabIndex": 11},
    "topicId178354": {
    
    "id": "topicId178354",
    
    "title": "Android Layout Preview Tool Window",
    "disqus_id": "Android_Layout_Preview_Tool_Window_1",
    "url": "android-layout-preview-tool-window.html",
    "parentId":"d732e1990",
    "level": 2,
    
    "tabIndex": 0},
    "reference.android.chooseDevice": {
    
    "id": "reference.android.chooseDevice",
    
    "title": "Choose Device Dialog",
    "disqus_id": "Choose_Device_Dialog_1",
    "url": "choose-device-dialog.html",
    "parentId":"d732e1990",
    "level": 2,
    
    "tabIndex": 1},
    "Asset_Studio": {
    
    "id": "Asset_Studio",
    
    "title": "Asset Studio",
    "disqus_id": "Asset_Studio_1",
    "url": "asset-studio.html",
    "parentId":"d732e1990",
    "level": 2,
    
        "pages": [
        
            "Asset_Studio_Page_1",
            "Asset_Studio_Page_2"
        ],
    
    "tabIndex": 2},
    "Asset_Studio_Page_1": {
    
    "id": "Asset_Studio_Page_1",
    
    "title": "Asset Studio. Page 1",
    "disqus_id": "Asset_Studio_Page_1_1",
    "url": "asset-studio-page-1.html",
    "parentId":"Asset_Studio",
    "level": 3,
    
    "tabIndex": 0},
    "Asset_Studio_Page_2": {
    
    "id": "Asset_Studio_Page_2",
    
    "title": "Asset Studio. Page 2",
    "disqus_id": "Asset_Studio_Page_2_1",
    "url": "asset-studio-page-2.html",
    "parentId":"Asset_Studio",
    "level": 3,
    
    "tabIndex": 1},
    "reference.android.createAVD": {
    
    "id": "reference.android.createAVD",
    
    "title": "Create Android Virtual Device Dialog",
    "disqus_id": "Create_Android_Virtual_Device_Dialog_1",
    "url": "create-android-virtual-device-dialog.html",
    "parentId":"d732e1990",
    "level": 2,
    
    "tabIndex": 3},
    "reference.android.createLayout": {
    
    "id": "reference.android.createLayout",
    
    "title": "Create Layout Dialog",
    "disqus_id": "Create_Layout_Dialog_1",
    "url": "create-layout-dialog.html",
    "parentId":"d732e1990",
    "level": 2,
    
    "tabIndex": 4},
    "Designer_Tool_WIndow": {
    
    "id": "Designer_Tool_WIndow",
    
    "title": "Designer Tool Window",
    "disqus_id": "Designer_Tool_WIndow_1",
    "url": "designer-tool-window.html",
    "parentId":"d732e1990",
    "level": 2,
    
    "tabIndex": 5},
    "reference.android.reference.extract.signed.package": {
    
    "id": "reference.android.reference.extract.signed.package",
    
    "title": "Generate Signed APK Wizard",
    "disqus_id": "Extract_Signed_Android_Package_Wizard_1",
    "url": "extract-signed-android-package-wizard.html",
    "parentId":"d732e1990",
    "level": 2,
    
        "pages": [
        
            "reference.android.reference.extract.signed.package.specify.keystore",
            "reference.android.reference.extract.signed.package.create.key",
            "reference.android.reference.extract.signed.package.specify.apk.location"
        ],
    
    "tabIndex": 6},
    "reference.android.reference.extract.signed.package.specify.keystore": {
    
    "id": "reference.android.reference.extract.signed.package.specify.keystore",
    
    "title": "Generate Signed APK Wizard. Specify Key and Keystore",
    "disqus_id": "Extract_Signed_Android_Wizard_Speicify_Keystore_1",
    "url": "extract-signed-android-wizard-speicify-keystore.html",
    "parentId":"reference.android.reference.extract.signed.package",
    "level": 3,
    
    "tabIndex": 0},
    "reference.android.reference.extract.signed.package.create.key": {
    
    "id": "reference.android.reference.extract.signed.package.create.key",
    
    "title": "New Key Store Dialog",
    "disqus_id": "Extract_Signed_Android_Wizard_Create_Keystore_1",
    "url": "extract-signed-android-wizard-create-keystore.html",
    "parentId":"reference.android.reference.extract.signed.package",
    "level": 3,
    
    "tabIndex": 1},
    "reference.android.reference.extract.signed.package.specify.apk.location": {
    
    "id": "reference.android.reference.extract.signed.package.specify.apk.location",
    
    "title": "Generate Signed APK Wizard. Specify APK Location",
    "disqus_id": "Extract_Signed_Android_Wizard_Specify_APK_Location_1",
    "url": "extract-signed-android-wizard-specify-apk-location.html",
    "parentId":"reference.android.reference.extract.signed.package",
    "level": 3,
    
    "tabIndex": 2},
    "Inline_Android_Style_Dialog": {
    
    "id": "Inline_Android_Style_Dialog",
    
    "title": "Inline Android Style Dialog",
    "disqus_id": "Inline_Android_Style_Dialog_1",
    "url": "inline-android-style-dialog.html",
    "parentId":"d732e1990",
    "level": 2,
    
    "tabIndex": 7},
    "reference.new.android.component": {
    
    "id": "reference.new.android.component",
    
    "title": "New Android Component Dialog",
    "disqus_id": "New_Android_Component_Dialog_1",
    "url": "new-android-component-dialog.html",
    "parentId":"d732e1990",
    "level": 2,
    
    "tabIndex": 8},
    "reference.new.resource.directory": {
    
    "id": "reference.new.resource.directory",
    
    "title": "New Resource Directory Dialog",
    "disqus_id": "New_Resource_Directory_Dialog_1",
    "url": "new-resource-directory-dialog.html",
    "parentId":"d732e1990",
    "level": 2,
    
    "tabIndex": 9},
    "reference.new.resource.file": {
    
    "id": "reference.new.resource.file",
    
    "title": "New Resource File Dialog",
    "disqus_id": "New_Resource_File_Dialog_1",
    "url": "new-resource-file-dialog.html",
    "parentId":"d732e1990",
    "level": 2,
    
    "tabIndex": 10},
    "d732e2007": {
    "id": "d732e2007",
    "parentId":"d732e1069","selectFirstChildOnClick": true,
    "level": 1,
    
        "pages": [
        
            "reference.flex.create.air.application.descriptor",
            "reference.flex.create.html.wrapper",
            "New_ActionScript_Class_dialog",
            "New_MXML_Component_dialog",
            "reference.flex.package.air.application",
            "Runtime-Loaded_Modules_dialog"
        ],
    
    "title": "Flex reference",
    "tabIndex": 12},
    "reference.flex.create.air.application.descriptor": {
    
    "id": "reference.flex.create.air.application.descriptor",
    
    "title": "Create AIR Descriptor Template Dialog",
    "disqus_id": "flex_reference_create_air_application_descriptor_1",
    "url": "flex-reference-create-air-application-descriptor.html",
    "parentId":"d732e2007",
    "level": 2,
    
    "tabIndex": 0},
    "reference.flex.create.html.wrapper": {
    
    "id": "reference.flex.create.html.wrapper",
    
    "title": "Create HTML Wrapper Template Dialog",
    "disqus_id": "flex_reference_create_html_wrapper_1",
    "url": "flex-reference-create-html-wrapper.html",
    "parentId":"d732e2007",
    "level": 2,
    
    "tabIndex": 1},
    "New_ActionScript_Class_dialog": {
    
    "id": "New_ActionScript_Class_dialog",
    
    "title": "New ActionScript Class dialog",
    "disqus_id": "New_ActionScript_Class_dialog_1",
    "url": "new-actionscript-class-dialog.html",
    "parentId":"d732e2007",
    "level": 2,
    
    "tabIndex": 2},
    "New_MXML_Component_dialog": {
    
    "id": "New_MXML_Component_dialog",
    
    "title": "New MXML Component dialog",
    "disqus_id": "New_MXML_Component_dialog_1",
    "url": "new-mxml-component-dialog.html",
    "parentId":"d732e2007",
    "level": 2,
    
    "tabIndex": 3},
    "reference.flex.package.air.application": {
    
    "id": "reference.flex.package.air.application",
    
    "title": "Package AIR Application Dialog",
    "disqus_id": "Package_AIR_Application_Dialog_1",
    "url": "package-air-application-dialog.html",
    "parentId":"d732e2007",
    "level": 2,
    
    "tabIndex": 4},
    "Runtime-Loaded_Modules_dialog": {
    
    "id": "Runtime-Loaded_Modules_dialog",
    
    "title": "Runtime-Loaded Modules dialog",
    "disqus_id": "Runtime-Loaded_Modules_dialog_1",
    "url": "runtime-loaded-modules-dialog.html",
    "parentId":"d732e2007",
    "level": 2,
    
    "tabIndex": 5},
    "d732e2014": {
    "id": "d732e2014",
    "parentId":"d732e1069","selectFirstChildOnClick": true,
    "level": 1,
    
        "pages": [
        
            "reference.persistencediagram",
            "topicId6293",
            "topicId296491",
            "reference.uml.class.diagram"
        ],
    
    "title": "Diagram reference",
    "tabIndex": 13},
    "reference.persistencediagram": {
    
    "id": "reference.persistencediagram",
    
    "title": "Diagram Toolbar and Context Menu",
    "disqus_id": "Diagram_Toolbar_and_Context_Menu_1",
    "url": "diagram-toolbar-and-context-menu.html",
    "parentId":"d732e2014",
    "level": 2,
    
    "tabIndex": 0},
    "topicId6293": {
    
    "id": "topicId6293",
    
    "title": "Diagram Preview",
    "disqus_id": "Diagram_Preview_1",
    "url": "diagram-preview.html",
    "parentId":"d732e2014",
    "level": 2,
    
    "tabIndex": 1},
    "topicId296491": {
    
    "id": "topicId296491",
    
    "title": "General Techniques of Using Diagrams",
    "disqus_id": "General_Techniques_of_Using_Diagrams_1",
    "url": "general-techniques-of-using-diagrams.html",
    "parentId":"d732e2014",
    "level": 2,
    
    "tabIndex": 2},
    "reference.uml.class.diagram": {
    
    "id": "reference.uml.class.diagram",
    
    "title": "Class Diagram Toolbar, Context Menu and Legend",
    "disqus_id": "Class_Diagram_Toolbar_and_Context_Menu_1",
    "url": "class-diagram-toolbar-and-context-menu.html",
    "parentId":"d732e2014",
    "level": 2,
    
    "tabIndex": 3},
    "d732e2019": {
    "id": "d732e2019",
    "parentId":"d732e1069","selectFirstChildOnClick": true,
    "level": 1,
    
        "pages": [
        
            "reference.guid",
            "reference.guid.inspector.properties",
            "reference.guid.componentTreeview",
            "guiDesigner.formCode.dataBind",
            "reference.guid.formWorkspace",
            "reference.guid.inspector",
            "reference.guid.componentPalette",
            "reference.dialogs.addEditPaletteComponent"
        ],
    
    "title": "GUI Designer reference",
    "tabIndex": 14},
    "reference.guid": {
    
    "id": "reference.guid",
    
    "title": "Components of the GUI Designer",
    "disqus_id": "Components_of_the_GUI_Designer_1",
    "url": "components-of-the-gui-designer.html",
    "parentId":"d732e2019",
    "level": 2,
    
    "tabIndex": 0},
    "reference.guid.inspector.properties": {
    
    "id": "reference.guid.inspector.properties",
    
    "title": "Components Properties",
    "disqus_id": "Components_Properties_1",
    "url": "components-properties.html",
    "parentId":"d732e2019",
    "level": 2,
    
    "tabIndex": 1},
    "reference.guid.componentTreeview": {
    
    "id": "reference.guid.componentTreeview",
    
    "title": "Components Treeview",
    "disqus_id": "Components_Treeview_1",
    "url": "components-treeview.html",
    "parentId":"d732e2019",
    "level": 2,
    
    "tabIndex": 2},
    "guiDesigner.formCode.dataBind": {
    
    "id": "guiDesigner.formCode.dataBind",
    
    "title": "Data Binding Wizard",
    "disqus_id": "Data_Binding_Wizard_1",
    "url": "data-binding-wizard.html",
    "parentId":"d732e2019",
    "level": 2,
    
    "tabIndex": 3},
    "reference.guid.formWorkspace": {
    
    "id": "reference.guid.formWorkspace",
    
    "title": "Form Workspace",
    "disqus_id": "Form_Workspace_1",
    "url": "form-workspace.html",
    "parentId":"d732e2019",
    "level": 2,
    
    "tabIndex": 4},
    "reference.guid.inspector": {
    
    "id": "reference.guid.inspector",
    
    "title": "Inspector",
    "disqus_id": "Inspector_1",
    "url": "inspector.html",
    "parentId":"d732e2019",
    "level": 2,
    
    "tabIndex": 5},
    "reference.guid.componentPalette": {
    
    "id": "reference.guid.componentPalette",
    
    "title": "Palette",
    "disqus_id": "Palette_1",
    "url": "palette.html",
    "parentId":"d732e2019",
    "level": 2,
    
    "tabIndex": 6},
    "reference.dialogs.addEditPaletteComponent": {
    
    "id": "reference.dialogs.addEditPaletteComponent",
    
    "title": "Add/Edit Palette Component",
    "disqus_id": "Add_Edit_Palette_Component_1",
    "url": "add-edit-palette-component.html",
    "parentId":"d732e2019",
    "level": 2,
    
    "tabIndex": 7},
    "topicId1000000121": {
    
    "id": "topicId1000000121",
    
    "title": "Icon reference",
    "disqus_id": "Symbols_1",
    "url": "symbols.html",
    "parentId":"d732e1069",
    "level": 1,
    
    "tabIndex": 15},
    "reference.regexp.syntax": {
    
    "id": "reference.regexp.syntax",
    
    "title": "Regular Expression Syntax Reference",
    "disqus_id": "Regular_Expression_Syntax_Reference_1",
    "url": "regular-expression-syntax-reference.html",
    "parentId":"d732e1069",
    "level": 1,
    
    "tabIndex": 16},
    "reference.scope.syntax": {
    
    "id": "reference.scope.syntax",
    
    "title": "Scope Language Syntax Reference",
    "disqus_id": "Scope_Language_Syntax_Reference_1",
    "url": "scope-language-syntax-reference.html",
    "parentId":"d732e1069",
    "level": 1,
    
        "anchors": [
        
"reference.scope.syntax#sets-of-classes",
"reference.scope.syntax#sets-of-files",
"reference.scope.syntax#modifiers",
"reference.scope.syntax#logical-operators",
"reference.scope.syntax#create-scope-from-existing-scopes",
"reference.scope.syntax#examples"
        ],
    "tabIndex": 17},
    "Working_with_product_from_the_Command_Line": {
    
    "id": "Working_with_product_from_the_Command_Line",
    
    "title": "Working with IntelliJ IDEA Features from Command Line",
    "disqus_id": "Working_with_the_IDE_Features_from_Command_Line_1",
    "url": "working-with-the-ide-features-from-command-line.html",
    "parentId":"d732e1069",
    "level": 1,
    
        "pages": [
        
            "Opening_Files_from_Command_Line",
            "Command_Line_Formatter",
            "Command_Line_Code_Inspector",
            "Command_Line_Differences_Viewer",
            "Running_product_as_a_Diff_or_Merge_Command_Line_Tool"
        ],
    
    "tabIndex": 18},
    "Opening_Files_from_Command_Line": {
    
    "id": "Opening_Files_from_Command_Line",
    
    "title": "Opening Files from Command Line",
    "disqus_id": "Opening_Files_from_Command_Line_1",
    "url": "opening-files-from-command-line.html",
    "parentId":"Working_with_product_from_the_Command_Line",
    "level": 2,
    
    "tabIndex": 0},
    "Command_Line_Formatter": {
    
    "id": "Command_Line_Formatter",
    
    "title": "Formatting Files from Command Line",
    "disqus_id": "Command_Line_Formatter_1",
    "url": "command-line-formatter.html",
    "parentId":"Working_with_product_from_the_Command_Line",
    "level": 2,
    
    "tabIndex": 1},
    "Command_Line_Code_Inspector": {
    
    "id": "Command_Line_Code_Inspector",
    
    "title": "Launching Code Inspection from Command Line",
    "disqus_id": "Command_Line_Code_Inspector_1",
    "url": "command-line-code-inspector.html",
    "parentId":"Working_with_product_from_the_Command_Line",
    "level": 2,
    
    "tabIndex": 2},
    "Command_Line_Differences_Viewer": {
    
    "id": "Command_Line_Differences_Viewer",
    
    "title": "Viewing Difference Between Files from Command Line",
    "disqus_id": "Command_Line_Differences_Viewer_1",
    "url": "command-line-differences-viewer.html",
    "parentId":"Working_with_product_from_the_Command_Line",
    "level": 2,
    
    "tabIndex": 3},
    "Running_product_as_a_Diff_or_Merge_Command_Line_Tool": {
    
    "id": "Running_product_as_a_Diff_or_Merge_Command_Line_Tool",
    
    "title": "Merging Files from Command Line",
    "disqus_id": "Command_Line_Merge_Tool_1",
    "url": "command-line-merge-tool.html",
    "parentId":"Working_with_product_from_the_Command_Line",
    "level": 2,
    
    "tabIndex": 4},
    "feedback.mainpage": {
    
    "id": "feedback.mainpage",
    
    "title": "Sending Feedback",
    "disqus_id": "Sending_Feedback_1",
    "url": "sending-feedback.html",
    
    "level": 0,
    
    "tabIndex": 12}},
"anchors": {

"Install_and_set_up__product_#installation-requirements": {"parentId": "Install_and_set_up__product_","level": 0,"id": "Install_and_set_up__product_#installation-requirements","title": "Installation requirements","disqus_id": "d2","anchor":"#installation-requirements","url": "install-and-set-up-product.html"},
"Install_and_set_up__product_#install-IntelliJ IDEA": {"parentId": "Install_and_set_up__product_","level": 0,"id": "Install_and_set_up__product_#install-IntelliJ IDEA","title": "Download and install IntelliJ IDEA","disqus_id": "d2","anchor":"#install-IntelliJ IDEA","url": "install-and-set-up-product.html"},
"Install_and_set_up__product_#first-run": {"parentId": "Install_and_set_up__product_","level": 0,"id": "Install_and_set_up__product_#first-run","title": "Run IntelliJ IDEA for the first time","disqus_id": "d2","anchor":"#first-run","url": "install-and-set-up-product.html"},
"Install_and_set_up__product_#register-IDEA": {"parentId": "Install_and_set_up__product_","level": 0,"id": "Install_and_set_up__product_#register-IDEA","title": "Register IntelliJ IDEA","disqus_id": "d2","anchor":"#register-IDEA","url": "install-and-set-up-product.html"},
"Install_and_set_up__product_#update": {"parentId": "Install_and_set_up__product_","level": 0,"id": "Install_and_set_up__product_#update","title": "Update IntelliJ IDEA","disqus_id": "d2","anchor":"#update","url": "install-and-set-up-product.html"},
"Install_and_set_up__product_#toolbox-app": {"parentId": "Install_and_set_up__product_","level": 0,"id": "Install_and_set_up__product_#toolbox-app","title": "Manage IntelliJ IDEA through Toolbox App","disqus_id": "d2","anchor":"#toolbox-app","url": "install-and-set-up-product.html"},
"Install_and_set_up__product_#silent-install": {"parentId": "Install_and_set_up__product_","level": 0,"id": "Install_and_set_up__product_#silent-install","title": "Perform silent installation on Windows","disqus_id": "d2","anchor":"#silent-install","url": "install-and-set-up-product.html"},
"Install_and_set_up__product_#install-on-linux-with-snaps": {"parentId": "Install_and_set_up__product_","level": 0,"id": "Install_and_set_up__product_#install-on-linux-with-snaps","title": "Install IntelliJ IDEA as a snap package on Linux","disqus_id": "d2","anchor":"#install-on-linux-with-snaps","url": "install-and-set-up-product.html"},
"Accessibility#screen_reader": {"parentId": "Accessibility","level": 0,"id": "Accessibility#screen_reader","title": "Set up a screen reader","disqus_id": "d2","anchor":"#screen_reader","url": "accessibility.html"},
"Accessibility#customize_ide": {"parentId": "Accessibility","level": 0,"id": "Accessibility#customize_ide","title": "Customize the IDE","disqus_id": "d2","anchor":"#customize_ide","url": "accessibility.html"},
"Discover_IntelliJ_IDEA#UserInterface": {"parentId": "Discover_IntelliJ_IDEA","level": 0,"id": "Discover_IntelliJ_IDEA#UserInterface","title": "User interface","disqus_id": "d2","anchor":"#UserInterface","url": "discover-intellij-idea.html"},
"Discover_IntelliJ_IDEA#EditorBasics": {"parentId": "Discover_IntelliJ_IDEA","level": 0,"id": "Discover_IntelliJ_IDEA#EditorBasics","title": "Editor basics","disqus_id": "d2","anchor":"#EditorBasics","url": "discover-intellij-idea.html"},
"Discover_IntelliJ_IDEA#CodeCompletion": {"parentId": "Discover_IntelliJ_IDEA","level": 0,"id": "Discover_IntelliJ_IDEA#CodeCompletion","title": "Code completion","disqus_id": "d2","anchor":"#CodeCompletion","url": "discover-intellij-idea.html"},
"Discover_IntelliJ_IDEA#Navigation": {"parentId": "Discover_IntelliJ_IDEA","level": 0,"id": "Discover_IntelliJ_IDEA#Navigation","title": "Navigation","disqus_id": "d2","anchor":"#Navigation","url": "discover-intellij-idea.html"},
"Discover_IntelliJ_IDEA#QuickPopups": {"parentId": "Discover_IntelliJ_IDEA","level": 0,"id": "Discover_IntelliJ_IDEA#QuickPopups","title": "Quick pop-ups","disqus_id": "d2","anchor":"#QuickPopups","url": "discover-intellij-idea.html"},
"Discover_IntelliJ_IDEA#RefactoringBasics": {"parentId": "Discover_IntelliJ_IDEA","level": 0,"id": "Discover_IntelliJ_IDEA#RefactoringBasics","title": "Refactoring basics","disqus_id": "d2","anchor":"#RefactoringBasics","url": "discover-intellij-idea.html"},
"Discover_IntelliJ_IDEA#FindingUsages": {"parentId": "Discover_IntelliJ_IDEA","level": 0,"id": "Discover_IntelliJ_IDEA#FindingUsages","title": "Finding usages","disqus_id": "d2","anchor":"#FindingUsages","url": "discover-intellij-idea.html"},
"Discover_IntelliJ_IDEA#Inspections": {"parentId": "Discover_IntelliJ_IDEA","level": 0,"id": "Discover_IntelliJ_IDEA#Inspections","title": "Inspections","disqus_id": "d2","anchor":"#Inspections","url": "discover-intellij-idea.html"},
"Discover_IntelliJ_IDEA#CodeStyleFormatting": {"parentId": "Discover_IntelliJ_IDEA","level": 0,"id": "Discover_IntelliJ_IDEA#CodeStyleFormatting","title": "Code style and formatting","disqus_id": "d2","anchor":"#CodeStyleFormatting","url": "discover-intellij-idea.html"},
"Discover_IntelliJ_IDEA#VCSBasics": {"parentId": "Discover_IntelliJ_IDEA","level": 0,"id": "Discover_IntelliJ_IDEA#VCSBasics","title": "Version control basics","disqus_id": "d2","anchor":"#VCSBasics","url": "discover-intellij-idea.html"},
"Discover_IntelliJ_IDEA#Make": {"parentId": "Discover_IntelliJ_IDEA","level": 0,"id": "Discover_IntelliJ_IDEA#Make","title": "Make","disqus_id": "d2","anchor":"#Make","url": "discover-intellij-idea.html"},
"Discover_IntelliJ_IDEA#RunningDebugging": {"parentId": "Discover_IntelliJ_IDEA","level": 0,"id": "Discover_IntelliJ_IDEA#RunningDebugging","title": "Running and debugging","disqus_id": "d2","anchor":"#RunningDebugging","url": "discover-intellij-idea.html"},
"Discover_IntelliJ_IDEA#ApplicationServers": {"parentId": "Discover_IntelliJ_IDEA","level": 0,"id": "Discover_IntelliJ_IDEA#ApplicationServers","title": "Application servers","disqus_id": "d2","anchor":"#ApplicationServers","url": "discover-intellij-idea.html"},
"Discover_IntelliJ_IDEA#BuildTools": {"parentId": "Discover_IntelliJ_IDEA","level": 0,"id": "Discover_IntelliJ_IDEA#BuildTools","title": "Working with build tools (Maven/Gradle)","disqus_id": "d2","anchor":"#BuildTools","url": "discover-intellij-idea.html"},
"Discover_IntelliJ_IDEA#migrate": {"parentId": "Discover_IntelliJ_IDEA","level": 0,"id": "Discover_IntelliJ_IDEA#migrate","title": "Migrating from Eclipse or NetBeans","disqus_id": "d2","anchor":"#migrate","url": "discover-intellij-idea.html"},
"Discover_IntelliJ_IDEA#whats_next": {"parentId": "Discover_IntelliJ_IDEA","level": 0,"id": "Discover_IntelliJ_IDEA#whats_next","title": "What's next","disqus_id": "d2","anchor":"#whats_next","url": "discover-intellij-idea.html"},
"topicId986295#choose-keymap": {"parentId": "topicId986295","level": 0,"id": "topicId986295#choose-keymap","title": "Choose the right keymap","disqus_id": "d2","anchor":"#choose-keymap","url": "mastering-keyboard-shortcuts.html"},
"topicId986295#learn-shortcuts": {"parentId": "topicId986295","level": 0,"id": "topicId986295#learn-shortcuts","title": "Learn shortcuts as you work","disqus_id": "d2","anchor":"#learn-shortcuts","url": "mastering-keyboard-shortcuts.html"},
"topicId986295#advanced-features": {"parentId": "topicId986295","level": 0,"id": "topicId986295#advanced-features","title": "Use advanced features","disqus_id": "d2","anchor":"#advanced-features","url": "mastering-keyboard-shortcuts.html"},
"Keep__product__up_to_date#manage_updates_manually": {"parentId": "Keep__product__up_to_date","level": 0,"id": "Keep__product__up_to_date#manage_updates_manually","title": "Manage updates manually","disqus_id": "d2","anchor":"#manage_updates_manually","url": "keep-product-up-to-date.html"},
"helponhelp#contact-support": {"parentId": "helponhelp","level": 0,"id": "helponhelp#contact-support","title": "Contact support","disqus_id": "d2","anchor":"#contact-support","url": "getting-help.html"},
"helponhelp#report-bug": {"parentId": "helponhelp","level": 0,"id": "helponhelp#report-bug","title": "Report bugs","disqus_id": "d2","anchor":"#report-bug","url": "getting-help.html"},
"helponhelp#9e15ce4d": {"parentId": "helponhelp","level": 0,"id": "helponhelp#9e15ce4d","title": "Share feedback","disqus_id": "d2","anchor":"#9e15ce4d","url": "getting-help.html"},
"helponhelp#learn": {"parentId": "helponhelp","level": 0,"id": "helponhelp#learn","title": "Learn more","disqus_id": "d2","anchor":"#learn","url": "getting-help.html"},
"procedures.workingwithprojects.config.template#project-level": {"parentId": "procedures.workingwithprojects.config.template","level": 0,"id": "procedures.workingwithprojects.config.template#project-level","title": "Project-level settings and structure","disqus_id": "d2","anchor":"#project-level","url": "configuring-project-and-ide-settings.html"},
"procedures.workingwithprojects.config.template#ide-level": {"parentId": "procedures.workingwithprojects.config.template","level": 0,"id": "procedures.workingwithprojects.config.template#ide-level","title": "IDE-level (global) settings and structure","disqus_id": "d2","anchor":"#ide-level","url": "configuring-project-and-ide-settings.html"},
"procedures.workingwithprojects.config.template#restore-defaults": {"parentId": "procedures.workingwithprojects.config.template","level": 0,"id": "procedures.workingwithprojects.config.template#restore-defaults","title": "Restore the default settings","disqus_id": "d2","anchor":"#restore-defaults","url": "configuring-project-and-ide-settings.html"},
"procedures.workingwithprojects.config.template#activity-monitor": {"parentId": "procedures.workingwithprojects.config.template","level": 0,"id": "procedures.workingwithprojects.config.template#activity-monitor","title": "Monitor the IDE performance","disqus_id": "d2","anchor":"#activity-monitor","url": "configuring-project-and-ide-settings.html"},
"topicId287958#main-concepts-tool-window": {"parentId": "topicId287958","level": 0,"id": "topicId287958#main-concepts-tool-window","title": "Main elements of IntelliJ IDEA window","disqus_id": "d2","anchor":"#main-concepts-tool-window","url": "menus-and-toolbars.html"},
"topicId287958#tips-tricks": {"parentId": "topicId287958","level": 0,"id": "topicId287958#tips-tricks","title": "Tips and tricks","disqus_id": "d2","anchor":"#tips-tricks","url": "menus-and-toolbars.html"},
"topicId287958#linux-native-menu": {"parentId": "topicId287958","level": 0,"id": "topicId287958#linux-native-menu","title": "The Linux native menu","disqus_id": "d2","anchor":"#linux-native-menu","url": "menus-and-toolbars.html"},
"reference.settingsdialog.IDE.editor.colors#customize-color-scheme": {"parentId": "reference.settingsdialog.IDE.editor.colors","level": 0,"id": "reference.settingsdialog.IDE.editor.colors#customize-color-scheme","title": "Customize a color scheme","disqus_id": "d2","anchor":"#customize-color-scheme","url": "configuring-colors-and-fonts.html"},
"reference.settingsdialog.IDE.editor.colors#semantic-highlighting": {"parentId": "reference.settingsdialog.IDE.editor.colors","level": 0,"id": "reference.settingsdialog.IDE.editor.colors#semantic-highlighting","title": "Semantic highlighting","disqus_id": "d2","anchor":"#semantic-highlighting","url": "configuring-colors-and-fonts.html"},
"reference.settingsdialog.IDE.editor.colors#share-color-scheme": {"parentId": "reference.settingsdialog.IDE.editor.colors","level": 0,"id": "reference.settingsdialog.IDE.editor.colors#share-color-scheme","title": "Share color schemes","disqus_id": "d2","anchor":"#share-color-scheme","url": "configuring-colors-and-fonts.html"},
"reference.settingsdialog.IDE.editor.colors#fonts": {"parentId": "reference.settingsdialog.IDE.editor.colors","level": 0,"id": "reference.settingsdialog.IDE.editor.colors#fonts","title": "Fonts","disqus_id": "d2","anchor":"#fonts","url": "configuring-colors-and-fonts.html"},
"reference.settingsdialog.IDE.editor.colors#8cc60f8d": {"parentId": "reference.settingsdialog.IDE.editor.colors","level": 0,"id": "reference.settingsdialog.IDE.editor.colors#8cc60f8d","title": "Productivity tips","disqus_id": "d2","anchor":"#8cc60f8d","url": "configuring-colors-and-fonts.html"},
"reference.toolWindows.using#show": {"parentId": "reference.toolWindows.using","level": 0,"id": "reference.toolWindows.using#show","title": "Showing a tool window","disqus_id": "d2","anchor":"#show","url": "manipulating-the-tool-windows.html"},
"reference.toolWindows.using#hide": {"parentId": "reference.toolWindows.using","level": 0,"id": "reference.toolWindows.using#hide","title": "Hiding an individual tool window","disqus_id": "d2","anchor":"#hide","url": "manipulating-the-tool-windows.html"},
"reference.toolWindows.using#hiding-tool-windows-along-tool-window-bar": {"parentId": "reference.toolWindows.using","level": 0,"id": "reference.toolWindows.using#hiding-tool-windows-along-tool-window-bar","title": "Hiding all tool windows attached to the same tool window bar","disqus_id": "d2","anchor":"#hiding-tool-windows-along-tool-window-bar","url": "manipulating-the-tool-windows.html"},
"reference.toolWindows.using#hiding-all-tool-windows": {"parentId": "reference.toolWindows.using","level": 0,"id": "reference.toolWindows.using#hiding-all-tool-windows","title": "Hiding all tool windows","disqus_id": "d2","anchor":"#hiding-all-tool-windows","url": "manipulating-the-tool-windows.html"},
"reference.toolWindows.using#switching-to-last-active-tool-window": {"parentId": "reference.toolWindows.using","level": 0,"id": "reference.toolWindows.using#switching-to-last-active-tool-window","title": "Switching to the last active tool window","disqus_id": "d2","anchor":"#switching-to-last-active-tool-window","url": "manipulating-the-tool-windows.html"},
"reference.toolWindows.using#show-all": {"parentId": "reference.toolWindows.using","level": 0,"id": "reference.toolWindows.using#show-all","title": "Hiding or showing the tool window bars","disqus_id": "d2","anchor":"#show-all","url": "manipulating-the-tool-windows.html"},
"reference.toolWindows.using#tw_button": {"parentId": "reference.toolWindows.using","level": 0,"id": "reference.toolWindows.using#tw_button","title": "Hiding tool window buttons","disqus_id": "d2","anchor":"#tw_button","url": "manipulating-the-tool-windows.html"},
"reference.toolWindows.using#move": {"parentId": "reference.toolWindows.using","level": 0,"id": "reference.toolWindows.using#move","title": "Attaching a tool window to a different tool window bar","disqus_id": "d2","anchor":"#move","url": "manipulating-the-tool-windows.html"},
"reference.toolWindows.using#resize": {"parentId": "reference.toolWindows.using","level": 0,"id": "reference.toolWindows.using#resize","title": "Resizing a tool window","disqus_id": "d2","anchor":"#resize","url": "manipulating-the-tool-windows.html"},
"reference.toolWindows.using#increase": {"parentId": "reference.toolWindows.using","level": 0,"id": "reference.toolWindows.using#increase","title": "Increasing the number of tool windows shown at a time","disqus_id": "d2","anchor":"#increase","url": "manipulating-the-tool-windows.html"},
"reference.toolWindows.using#manage": {"parentId": "reference.toolWindows.using","level": 0,"id": "reference.toolWindows.using#manage","title": "Saving and restoring the arrangement of the tool windows","disqus_id": "d2","anchor":"#manage","url": "manipulating-the-tool-windows.html"},
"reference.toolWindows.viewingModes#ways-to-control": {"parentId": "reference.toolWindows.viewingModes","level": 0,"id": "reference.toolWindows.viewingModes#ways-to-control","title": "Ways to control the viewing modes","disqus_id": "d2","anchor":"#ways-to-control","url": "viewing-modes.html"},
"reference.toolWindows.viewingModes#docked": {"parentId": "reference.toolWindows.viewingModes","level": 0,"id": "reference.toolWindows.viewingModes#docked","title": "Docked / undocked mode","disqus_id": "d2","anchor":"#docked","url": "viewing-modes.html"},
"reference.toolWindows.viewingModes#windowed": {"parentId": "reference.toolWindows.viewingModes","level": 0,"id": "reference.toolWindows.viewingModes#windowed","title": "Fixed / floating / windowed mode","disqus_id": "d2","anchor":"#windowed","url": "viewing-modes.html"},
"reference.toolWindows.viewingModes#pinned": {"parentId": "reference.toolWindows.viewingModes","level": 0,"id": "reference.toolWindows.viewingModes#pinned","title": "Pinned / unpinned mode","disqus_id": "d2","anchor":"#pinned","url": "viewing-modes.html"},
"reference.toolWindows.viewingModes#split": {"parentId": "reference.toolWindows.viewingModes","level": 0,"id": "reference.toolWindows.viewingModes#split","title": "Split mode","disqus_id": "d2","anchor":"#split","url": "viewing-modes.html"},
"reference.toolWindows.viewingModes#tabbed": {"parentId": "reference.toolWindows.viewingModes","level": 0,"id": "reference.toolWindows.viewingModes#tabbed","title": "Group Tabs option","disqus_id": "d2","anchor":"#tabbed","url": "viewing-modes.html"},
"reference.toolWindows.viewingModes#wide": {"parentId": "reference.toolWindows.viewingModes","level": 0,"id": "reference.toolWindows.viewingModes#wide","title": "Wide screen support","disqus_id": "d2","anchor":"#wide","url": "viewing-modes.html"},
"procedures.populatingmodules.file.register#register-new-association": {"parentId": "procedures.populatingmodules.file.register","level": 0,"id": "procedures.populatingmodules.file.register#register-new-association","title": "Register a new file type association","disqus_id": "d2","anchor":"#register-new-association","url": "creating-and-registering-file-types.html"},
"procedures.populatingmodules.file.register#change-extension": {"parentId": "procedures.populatingmodules.file.register","level": 0,"id": "procedures.populatingmodules.file.register#change-extension","title": "Change a file type association","disqus_id": "d2","anchor":"#change-extension","url": "creating-and-registering-file-types.html"},
"procedures.populatingmodules.file.register#ignore-files-folders": {"parentId": "procedures.populatingmodules.file.register","level": 0,"id": "procedures.populatingmodules.file.register#ignore-files-folders","title": "Ignore files and folders","disqus_id": "d2","anchor":"#ignore-files-folders","url": "creating-and-registering-file-types.html"},
"procedures.plugins.part#repos": {"parentId": "procedures.plugins.part","level": 0,"id": "procedures.plugins.part#repos","title": "Custom plugin repositories","disqus_id": "d2","anchor":"#repos","url": "managing-plugins.html"},
"procedures.plugins.part#required-plugins": {"parentId": "procedures.plugins.part","level": 0,"id": "procedures.plugins.part#required-plugins","title": "Required plugins","disqus_id": "d2","anchor":"#required-plugins","url": "managing-plugins.html"},
"procedures.plugins.part#plugin-dev": {"parentId": "procedures.plugins.part","level": 0,"id": "procedures.plugins.part#plugin-dev","title": "Develop you own plugins","disqus_id": "d2","anchor":"#plugin-dev","url": "managing-plugins.html"},
"Tuning_product_#configure-jvm-options": {"parentId": "Tuning_product_","level": 0,"id": "Tuning_product_#configure-jvm-options","title": "Configuring JVM options","disqus_id": "d2","anchor":"#configure-jvm-options","url": "tuning-the-ide.html"},
"Tuning_product_#configure-platform-properties": {"parentId": "Tuning_product_","level": 0,"id": "Tuning_product_#configure-platform-properties","title": "Configuring platform properties","disqus_id": "d2","anchor":"#configure-platform-properties","url": "tuning-the-ide.html"},
"Tuning_product_#ide-runtime": {"parentId": "Tuning_product_","level": 0,"id": "Tuning_product_#ide-runtime","title": "Selecting the Java runtime for IntelliJ IDEA","disqus_id": "d2","anchor":"#ide-runtime","url": "tuning-the-ide.html"},
"Tuning_product_#default-dirs": {"parentId": "Tuning_product_","level": 0,"id": "Tuning_product_#default-dirs","title": "Default IDE directories","disqus_id": "d2","anchor":"#default-dirs","url": "tuning-the-ide.html"},
"concepts.module.path#invalidate-cache": {"parentId": "concepts.module.path","level": 0,"id": "concepts.module.path#invalidate-cache","title": "Invalidate caches","disqus_id": "d2","anchor":"#invalidate-cache","url": "working-with-projects.html"},
"concepts.module.path#path-variables": {"parentId": "concepts.module.path","level": 0,"id": "concepts.module.path#path-variables","title": "Path variables","disqus_id": "d2","anchor":"#path-variables","url": "working-with-projects.html"},
"concepts.module.path#c336babe": {"parentId": "concepts.module.path","level": 1,"id": "concepts.module.path#c336babe","title": "Ignore path variables","disqus_id": "d2","anchor":"#c336babe","url": "working-with-projects.html"},
"concepts.module.path#resource-files": {"parentId": "concepts.module.path","level": 0,"id": "concepts.module.path#resource-files","title": "Resource files","disqus_id": "d2","anchor":"#resource-files","url": "working-with-projects.html"},
"concepts.project#configure-jdk": {"parentId": "concepts.project","level": 0,"id": "concepts.project#configure-jdk","title": "Configure the JDK when creating a project","disqus_id": "d2","anchor":"#configure-jdk","url": "creating-and-managing-projects.html"},
"concepts.project#project-formats": {"parentId": "concepts.project","level": 0,"id": "concepts.project#project-formats","title": "Project formats","disqus_id": "d2","anchor":"#project-formats","url": "creating-and-managing-projects.html"},
"concepts.project#importing-project": {"parentId": "concepts.project","level": 0,"id": "concepts.project#importing-project","title": "Import a project","disqus_id": "d2","anchor":"#importing-project","url": "creating-and-managing-projects.html"},
"concepts.project#project-settings": {"parentId": "concepts.project","level": 0,"id": "concepts.project#project-settings","title": "Project settings","disqus_id": "d2","anchor":"#project-settings","url": "creating-and-managing-projects.html"},
"concepts.module.contents#configuring-content-roots": {"parentId": "concepts.module.contents","level": 0,"id": "concepts.module.contents#configuring-content-roots","title": "Configure content roots","disqus_id": "d2","anchor":"#configuring-content-roots","url": "creating-and-managing-modules.html"},
"concepts.module.contents#folder-categories": {"parentId": "concepts.module.contents","level": 1,"id": "concepts.module.contents#folder-categories","title": "Folder categories","disqus_id": "d2","anchor":"#folder-categories","url": "creating-and-managing-modules.html"},
"concepts.module.contents#project_tool_window": {"parentId": "concepts.module.contents","level": 1,"id": "concepts.module.contents#project_tool_window","title": "Configure folder categories","disqus_id": "d2","anchor":"#project_tool_window","url": "creating-and-managing-modules.html"},
"concepts.module.contents#exclude-files": {"parentId": "concepts.module.contents","level": 1,"id": "concepts.module.contents#exclude-files","title": "Exclude files","disqus_id": "d2","anchor":"#exclude-files","url": "creating-and-managing-modules.html"},
"concepts.module.contents#exclude-files-folders-by-name-patters": {"parentId": "concepts.module.contents","level": 1,"id": "concepts.module.contents#exclude-files-folders-by-name-patters","title": "Exclude files and folders by name patterns","disqus_id": "d2","anchor":"#exclude-files-folders-by-name-patters","url": "creating-and-managing-modules.html"},
"concepts.module.contents#assign_package_prefix": {"parentId": "concepts.module.contents","level": 1,"id": "concepts.module.contents#assign_package_prefix","title": "Assign a package prefix to Java sources","disqus_id": "d2","anchor":"#assign_package_prefix","url": "creating-and-managing-modules.html"},
"concepts.module.contents#specify_output_path": {"parentId": "concepts.module.contents","level": 1,"id": "concepts.module.contents#specify_output_path","title": "Change the output path for resources","disqus_id": "d2","anchor":"#specify_output_path","url": "creating-and-managing-modules.html"},
"concepts.module.contents#grouping-modules": {"parentId": "concepts.module.contents","level": 0,"id": "concepts.module.contents#grouping-modules","title": "Group modules","disqus_id": "d2","anchor":"#grouping-modules","url": "creating-and-managing-modules.html"},
"concepts.module.contents#working-with-module-dependencies": {"parentId": "concepts.module.contents","level": 0,"id": "concepts.module.contents#working-with-module-dependencies","title": "Module dependencies","disqus_id": "d2","anchor":"#working-with-module-dependencies","url": "creating-and-managing-modules.html"},
"concepts.module.contents#sort-dependencies": {"parentId": "concepts.module.contents","level": 1,"id": "concepts.module.contents#sort-dependencies","title": "Sort dependencies","disqus_id": "d2","anchor":"#sort-dependencies","url": "creating-and-managing-modules.html"},
"procedures.workingwithmodules.facet#manually-add-facet-to-module": {"parentId": "procedures.workingwithmodules.facet","level": 0,"id": "procedures.workingwithmodules.facet#manually-add-facet-to-module","title": "Manually add a facet to a module","disqus_id": "d2","anchor":"#manually-add-facet-to-module","url": "adding-support-for-frameworks-and-technologies.html"},
"procedures.workingwithmodules.facet#disable-framework-auto-detection": {"parentId": "procedures.workingwithmodules.facet","level": 0,"id": "procedures.workingwithmodules.facet#disable-framework-auto-detection","title": "Disable framework auto-detection","disqus_id": "d2","anchor":"#disable-framework-auto-detection","url": "adding-support-for-frameworks-and-technologies.html"},
"Unloading_Modules#loading-unloading-modules-auto": {"parentId": "Unloading_Modules","level": 0,"id": "Unloading_Modules#loading-unloading-modules-auto","title": "Automatically load and unload new modules","disqus_id": "d2","anchor":"#loading-unloading-modules-auto","url": "unloading-modules.html"},
"Unloading_Modules#committing-changes-with-unloaded-modules": {"parentId": "Unloading_Modules","level": 0,"id": "Unloading_Modules#committing-changes-with-unloaded-modules","title": "Commit changes with unloaded modules","disqus_id": "d2","anchor":"#committing-changes-with-unloaded-modules","url": "unloading-modules.html"},
"Unloading_Modules#f46637f6": {"parentId": "Unloading_Modules","level": 0,"id": "Unloading_Modules#f46637f6","title": "Troubleshooting","disqus_id": "d2","anchor":"#f46637f6","url": "unloading-modules.html"},
"preferences.jdks#define-sdk": {"parentId": "preferences.jdks","level": 0,"id": "preferences.jdks#define-sdk","title": "Define an SDK","disqus_id": "d2","anchor":"#define-sdk","url": "sdk.html"},
"preferences.jdks#manage_sdks": {"parentId": "preferences.jdks","level": 1,"id": "preferences.jdks#manage_sdks","title": "Manage global SDKs","disqus_id": "d2","anchor":"#manage_sdks","url": "sdk.html"},
"preferences.jdks#change-project-sdk": {"parentId": "preferences.jdks","level": 1,"id": "preferences.jdks#change-project-sdk","title": "Change project SDK","disqus_id": "d2","anchor":"#change-project-sdk","url": "sdk.html"},
"preferences.jdks#change-module-sdk": {"parentId": "preferences.jdks","level": 1,"id": "preferences.jdks#change-module-sdk","title": "Change module SDK","disqus_id": "d2","anchor":"#change-module-sdk","url": "sdk.html"},
"concepts.module.libraries#define-library": {"parentId": "concepts.module.libraries","level": 0,"id": "concepts.module.libraries#define-library","title": "Define a library","disqus_id": "d2","anchor":"#define-library","url": "library.html"},
"concepts.module.libraries#add-library-to-module-dependencies": {"parentId": "concepts.module.libraries","level": 0,"id": "concepts.module.libraries#add-library-to-module-dependencies","title": "Add a library to module dependencies","disqus_id": "d2","anchor":"#add-library-to-module-dependencies","url": "library.html"},
"concepts.module.libraries#excluded_lib_items": {"parentId": "concepts.module.libraries","level": 0,"id": "concepts.module.libraries#excluded_lib_items","title": "Exclude library items","disqus_id": "d2","anchor":"#excluded_lib_items","url": "library.html"},
"concepts.module.libraries#lib_levels": {"parentId": "concepts.module.libraries","level": 0,"id": "concepts.module.libraries#lib_levels","title": "Change library level","disqus_id": "d2","anchor":"#lib_levels","url": "library.html"},
"ideaInterface.editor#editor_basic_usage": {"parentId": "ideaInterface.editor","level": 0,"id": "ideaInterface.editor#editor_basic_usage","title": "Navigate between editor and other tool windows","disqus_id": "d2","anchor":"#editor_basic_usage","url": "using-code-editor.html"},
"ideaInterface.editor#editor_navigation": {"parentId": "ideaInterface.editor","level": 0,"id": "ideaInterface.editor#editor_navigation","title": "Navigate inside the editor","disqus_id": "d2","anchor":"#editor_navigation","url": "using-code-editor.html"},
"ideaInterface.editor#find_line": {"parentId": "ideaInterface.editor","level": 1,"id": "ideaInterface.editor#find_line","title": "Find a line or a column","disqus_id": "d2","anchor":"#find_line","url": "using-code-editor.html"},
"ideaInterface.editor#find_cursor_edit": {"parentId": "ideaInterface.editor","level": 1,"id": "ideaInterface.editor#find_cursor_edit","title": "Find your caret, edited line, or a file","disqus_id": "d2","anchor":"#find_cursor_edit","url": "using-code-editor.html"},
"ideaInterface.editor#lens_mode_code": {"parentId": "ideaInterface.editor","level": 1,"id": "ideaInterface.editor#lens_mode_code","title": "Lens mode","disqus_id": "d2","anchor":"#lens_mode_code","url": "using-code-editor.html"},
"ideaInterface.editor#editor_breadcrumbs": {"parentId": "ideaInterface.editor","level": 1,"id": "ideaInterface.editor#editor_breadcrumbs","title": "Breadcrumbs","disqus_id": "d2","anchor":"#editor_breadcrumbs","url": "using-code-editor.html"},
"ideaInterface.editor#manage_tabs": {"parentId": "ideaInterface.editor","level": 0,"id": "ideaInterface.editor#manage_tabs","title": "Manage editor tabs","disqus_id": "d2","anchor":"#manage_tabs","url": "using-code-editor.html"},
"ideaInterface.editor#tabs_limits": {"parentId": "ideaInterface.editor","level": 1,"id": "ideaInterface.editor#tabs_limits","title": "Tabs limits","disqus_id": "d2","anchor":"#tabs_limits","url": "using-code-editor.html"},
"ideaInterface.editor#edit_code": {"parentId": "ideaInterface.editor","level": 0,"id": "ideaInterface.editor#edit_code","title": "Edit code","disqus_id": "d2","anchor":"#edit_code","url": "using-code-editor.html"},
"ideaInterface.editor#editor_code_selection": {"parentId": "ideaInterface.editor","level": 1,"id": "ideaInterface.editor#editor_code_selection","title": "Select, move, copy code","disqus_id": "d2","anchor":"#editor_code_selection","url": "using-code-editor.html"},
"ideaInterface.editor#add_new": {"parentId": "ideaInterface.editor","level": 1,"id": "ideaInterface.editor#add_new","title": "Add a new class, file, or package","disqus_id": "d2","anchor":"#add_new","url": "using-code-editor.html"},
"ideaInterface.editor#editor_lines_code_blocks": {"parentId": "ideaInterface.editor","level": 1,"id": "ideaInterface.editor#editor_lines_code_blocks","title": "Add, move, remove, copy lines and code blocks","disqus_id": "d2","anchor":"#editor_lines_code_blocks","url": "using-code-editor.html"},
"ideaInterface.editor#multiple_cursor": {"parentId": "ideaInterface.editor","level": 1,"id": "ideaInterface.editor#multiple_cursor","title": "Multiple carets","disqus_id": "d2","anchor":"#multiple_cursor","url": "using-code-editor.html"},
"ideaInterface.editor#editor_statement_select": {"parentId": "ideaInterface.editor","level": 1,"id": "ideaInterface.editor#editor_statement_select","title": "Move, unwrap, and remove statements","disqus_id": "d2","anchor":"#editor_statement_select","url": "using-code-editor.html"},
"ideaInterface.editor#code_folding": {"parentId": "ideaInterface.editor","level": 1,"id": "ideaInterface.editor#code_folding","title": "Fold code elements","disqus_id": "d2","anchor":"#code_folding","url": "using-code-editor.html"},
"ideaInterface.editor#reformat_rearrange_code": {"parentId": "ideaInterface.editor","level": 0,"id": "ideaInterface.editor#reformat_rearrange_code","title": "Reformat and rearrange code","disqus_id": "d2","anchor":"#reformat_rearrange_code","url": "using-code-editor.html"},
"ideaInterface.editor#quick_popups": {"parentId": "ideaInterface.editor","level": 0,"id": "ideaInterface.editor#quick_popups","title": "Use quick pop-ups","disqus_id": "d2","anchor":"#quick_popups","url": "using-code-editor.html"},
"ideaInterface.editor#spellchecking": {"parentId": "ideaInterface.editor","level": 0,"id": "ideaInterface.editor#spellchecking","title": "Spellchecking","disqus_id": "d2","anchor":"#spellchecking","url": "using-code-editor.html"},
"ideaInterface.editor#file_encoding": {"parentId": "ideaInterface.editor","level": 0,"id": "ideaInterface.editor#file_encoding","title": "Configure file encodings","disqus_id": "d2","anchor":"#file_encoding","url": "using-code-editor.html"},
"ideaInterface.editor#editor_settings": {"parentId": "ideaInterface.editor","level": 0,"id": "ideaInterface.editor#editor_settings","title": "Editor settings","disqus_id": "d2","anchor":"#editor_settings","url": "using-code-editor.html"},
"procedures.developingcode.macros#record-a-macro": {"parentId": "procedures.developingcode.macros","level": 0,"id": "procedures.developingcode.macros#record-a-macro","title": "Record a macro","disqus_id": "d2","anchor":"#record-a-macro","url": "using-macros-in-the-editor.html"},
"procedures.developingcode.macros#play-back-a-macro": {"parentId": "procedures.developingcode.macros","level": 0,"id": "procedures.developingcode.macros#play-back-a-macro","title": "Play back a macro","disqus_id": "d2","anchor":"#play-back-a-macro","url": "using-macros-in-the-editor.html"},
"procedures.developingcode.macros#edit-macros": {"parentId": "procedures.developingcode.macros","level": 0,"id": "procedures.developingcode.macros#edit-macros","title": "Edit macros","disqus_id": "d2","anchor":"#edit-macros","url": "using-macros-in-the-editor.html"},
"procedures.developingcode.macros#bind": {"parentId": "procedures.developingcode.macros","level": 0,"id": "procedures.developingcode.macros#bind","title": "Bind a keyboard shortcut to a macro","disqus_id": "d2","anchor":"#bind","url": "using-macros-in-the-editor.html"},
"file_template_variables#predefined_template_variables": {"parentId": "file_template_variables","level": 0,"id": "file_template_variables#predefined_template_variables","title": "Predefined template variables","disqus_id": "d2","anchor":"#predefined_template_variables","url": "file-template-variables.html"},
"file_template_variables#custom_template_variables": {"parentId": "file_template_variables","level": 0,"id": "file_template_variables#custom_template_variables","title": "Custom template variables","disqus_id": "d2","anchor":"#custom_template_variables","url": "file-template-variables.html"},
"template_variables#pdtv": {"parentId": "template_variables","level": 0,"id": "template_variables#pdtv","title": "Predefined template variables","disqus_id": "d2","anchor":"#pdtv","url": "template-variables.html"},
"template_variables#predefined_functions": {"parentId": "template_variables","level": 0,"id": "template_variables#predefined_functions","title": "Predefined functions used in live template variables","disqus_id": "d2","anchor":"#predefined_functions","url": "template-variables.html"},
"Sharing_Live_Templates#example": {"parentId": "Sharing_Live_Templates","level": 0,"id": "Sharing_Live_Templates#example","title": "Example of sharing templates between different IDEs","disqus_id": "d2","anchor":"#example","url": "sharing-live-templates.html"},
"procedures.developingcode.generate.part#generate-constructors": {"parentId": "procedures.developingcode.generate.part","level": 0,"id": "procedures.developingcode.generate.part#generate-constructors","title": "Generate constructors","disqus_id": "d2","anchor":"#generate-constructors","url": "generating-code.html"},
"procedures.developingcode.generate.part#generate-delegation-methods": {"parentId": "procedures.developingcode.generate.part","level": 0,"id": "procedures.developingcode.generate.part#generate-delegation-methods","title": "Generate delegation methods","disqus_id": "d2","anchor":"#generate-delegation-methods","url": "generating-code.html"},
"procedures.developingcode.generate.part#generate-equals-hashcode": {"parentId": "procedures.developingcode.generate.part","level": 0,"id": "procedures.developingcode.generate.part#generate-equals-hashcode","title": "Generate equals() and hashCode() methods","disqus_id": "d2","anchor":"#generate-equals-hashcode","url": "generating-code.html"},
"procedures.developingcode.generate.part#generate-getters-setters": {"parentId": "procedures.developingcode.generate.part","level": 0,"id": "procedures.developingcode.generate.part#generate-getters-setters","title": "Generate getters and setters","disqus_id": "d2","anchor":"#generate-getters-setters","url": "generating-code.html"},
"procedures.developingcode.generate.part#generate-tostring": {"parentId": "procedures.developingcode.generate.part","level": 0,"id": "procedures.developingcode.generate.part#generate-tostring","title": "Generate toString()","disqus_id": "d2","anchor":"#generate-tostring","url": "generating-code.html"},
"procedures.developingcode.generate.part#customize-templates": {"parentId": "procedures.developingcode.generate.part","level": 0,"id": "procedures.developingcode.generate.part#customize-templates","title": "Custom code generation templates","disqus_id": "d2","anchor":"#customize-templates","url": "generating-code.html"},
"procedures.developingcode.complete.part#basic_completion": {"parentId": "procedures.developingcode.complete.part","level": 0,"id": "procedures.developingcode.complete.part#basic_completion","title": "Basic completion","disqus_id": "d2","anchor":"#basic_completion","url": "auto-completing-code.html"},
"procedures.developingcode.complete.part#smart_completion": {"parentId": "procedures.developingcode.complete.part","level": 0,"id": "procedures.developingcode.complete.part#smart_completion","title": "Smart completion","disqus_id": "d2","anchor":"#smart_completion","url": "auto-completing-code.html"},
"procedures.developingcode.complete.part#statements_completion": {"parentId": "procedures.developingcode.complete.part","level": 0,"id": "procedures.developingcode.complete.part#statements_completion","title": "Statement completion","disqus_id": "d2","anchor":"#statements_completion","url": "auto-completing-code.html"},
"procedures.developingcode.complete.part#hippie_completion": {"parentId": "procedures.developingcode.complete.part","level": 0,"id": "procedures.developingcode.complete.part#hippie_completion","title": "Hippie completion","disqus_id": "d2","anchor":"#hippie_completion","url": "auto-completing-code.html"},
"procedures.developingcode.complete.part#postfix_completion": {"parentId": "procedures.developingcode.complete.part","level": 0,"id": "procedures.developingcode.complete.part#postfix_completion","title": "Postfix code completion","disqus_id": "d2","anchor":"#postfix_completion","url": "auto-completing-code.html"},
"procedures.developingcode.complete.part#tag_names_completion": {"parentId": "procedures.developingcode.complete.part","level": 0,"id": "procedures.developingcode.complete.part#tag_names_completion","title": "Completion of tags and attributes","disqus_id": "d2","anchor":"#tag_names_completion","url": "auto-completing-code.html"},
"procedures.developingcode.complete.part#configure-code-completion": {"parentId": "procedures.developingcode.complete.part","level": 0,"id": "procedures.developingcode.complete.part#configure-code-completion","title": "Configure code completion settings","disqus_id": "d2","anchor":"#configure-code-completion","url": "auto-completing-code.html"},
"procedures.developingcode.complete.part#completion_tips": {"parentId": "procedures.developingcode.complete.part","level": 0,"id": "procedures.developingcode.complete.part#completion_tips","title": "Completion tips and tricks","disqus_id": "d2","anchor":"#completion_tips","url": "auto-completing-code.html"},
"procedures.developingcode.complete.part#troubleshooting": {"parentId": "procedures.developingcode.complete.part","level": 0,"id": "procedures.developingcode.complete.part#troubleshooting","title": "Troubleshooting","disqus_id": "d2","anchor":"#troubleshooting","url": "auto-completing-code.html"},
"topicId594870#automatically-add-import-statements": {"parentId": "topicId594870","level": 0,"id": "topicId594870#automatically-add-import-statements","title": "Automatically add import statements","disqus_id": "d2","anchor":"#automatically-add-import-statements","url": "creating-and-optimizing-imports.html"},
"topicId594870#disable-import-popups": {"parentId": "topicId594870","level": 0,"id": "topicId594870#disable-import-popups","title": "Disable import popups","disqus_id": "d2","anchor":"#disable-import-popups","url": "creating-and-optimizing-imports.html"},
"topicId594870#import-packages-instead-of-single-classes": {"parentId": "topicId594870","level": 0,"id": "topicId594870#import-packages-instead-of-single-classes","title": "Import packages instead of single classes","disqus_id": "d2","anchor":"#import-packages-instead-of-single-classes","url": "creating-and-optimizing-imports.html"},
"topicId594870#disable-wildcard-imports": {"parentId": "topicId594870","level": 0,"id": "topicId594870#disable-wildcard-imports","title": "Disable wildcard imports","disqus_id": "d2","anchor":"#disable-wildcard-imports","url": "creating-and-optimizing-imports.html"},
"topicId594870#exclude-classes-and-packages-from-auto-import": {"parentId": "topicId594870","level": 0,"id": "topicId594870#exclude-classes-and-packages-from-auto-import","title": "Exclude classes and packages from auto import","disqus_id": "d2","anchor":"#exclude-classes-and-packages-from-auto-import","url": "creating-and-optimizing-imports.html"},
"topicId594870#optimize-imports": {"parentId": "topicId594870","level": 0,"id": "topicId594870#optimize-imports","title": "Optimize imports","disqus_id": "d2","anchor":"#optimize-imports","url": "creating-and-optimizing-imports.html"},
"topicId613869#severity": {"parentId": "topicId613869","level": 0,"id": "topicId613869#severity","title": "Change severity of an inspection","disqus_id": "d2","anchor":"#severity","url": "configuring-inspection-severities.html"},
"topicId613869#scope": {"parentId": "topicId613869","level": 0,"id": "topicId613869#scope","title": "Change severity of an inspection for different scopes","disqus_id": "d2","anchor":"#scope","url": "configuring-inspection-severities.html"},
"topicId613869#highlight": {"parentId": "topicId613869","level": 0,"id": "topicId613869#highlight","title": "Change the highlighting style for a specific severity level","disqus_id": "d2","anchor":"#highlight","url": "configuring-inspection-severities.html"},
"topicId613869#custom": {"parentId": "topicId613869","level": 0,"id": "topicId613869#custom","title": "Define a custom severity level","disqus_id": "d2","anchor":"#custom","url": "configuring-inspection-severities.html"},
"procedures.developingcode.intention.apply#apply-intention-actions": {"parentId": "procedures.developingcode.intention.apply","level": 0,"id": "procedures.developingcode.intention.apply#apply-intention-actions","title": "Apply intention actions","disqus_id": "d2","anchor":"#apply-intention-actions","url": "intention-actions.html"},
"procedures.developingcode.intention.apply#intention-settings": {"parentId": "procedures.developingcode.intention.apply","level": 0,"id": "procedures.developingcode.intention.apply#intention-settings","title": "View all intention actions","disqus_id": "d2","anchor":"#intention-settings","url": "intention-actions.html"},
"procedures.developingcode.intention.apply#disable-intention": {"parentId": "procedures.developingcode.intention.apply","level": 0,"id": "procedures.developingcode.intention.apply#disable-intention","title": "Disable intention actions on the fly","disqus_id": "d2","anchor":"#disable-intention","url": "intention-actions.html"},
"Inferring_Nullity#d7da3485": {"parentId": "Inferring_Nullity","level": 0,"id": "Inferring_Nullity#d7da3485","title": "Inferred annotations","disqus_id": "d2","anchor":"#d7da3485","url": "inferring-nullity.html"},
"procedures.refactoring.changeMethodSignature#change_class_signature_refactoring": {"parentId": "procedures.refactoring.changeMethodSignature","level": 0,"id": "procedures.refactoring.changeMethodSignature#change_class_signature_refactoring","title": "Change Class Signature example","disqus_id": "d2","anchor":"#change_class_signature_refactoring","url": "change-signature.html"},
"procedures.refactoring.changeMethodSignature#change_method_signature_refactoring": {"parentId": "procedures.refactoring.changeMethodSignature","level": 0,"id": "procedures.refactoring.changeMethodSignature#change_method_signature_refactoring","title": "Change Method Signature example","disqus_id": "d2","anchor":"#change_method_signature_refactoring","url": "change-signature.html"},
"procedures.developingcode.generate.doc.comment#add-javadoc-comments": {"parentId": "procedures.developingcode.generate.doc.comment","level": 0,"id": "procedures.developingcode.generate.doc.comment#add-javadoc-comments","title": "Add Javadoc comments","disqus_id": "d2","anchor":"#add-javadoc-comments","url": "working-with-code-documentation.html"},
"procedures.developingcode.generate.doc.comment#generate-javadoc": {"parentId": "procedures.developingcode.generate.doc.comment","level": 0,"id": "procedures.developingcode.generate.doc.comment#generate-javadoc","title": "Generate a Javadoc reference","disqus_id": "d2","anchor":"#generate-javadoc","url": "working-with-code-documentation.html"},
"procedures.developingcode.view.deflookup#view-definition-symbols": {"parentId": "procedures.developingcode.view.deflookup","level": 0,"id": "procedures.developingcode.view.deflookup#view-definition-symbols","title": "Definitions","disqus_id": "d2","anchor":"#view-definition-symbols","url": "viewing-reference-information.html"},
"procedures.developingcode.view.deflookup#view-parameter-info": {"parentId": "procedures.developingcode.view.deflookup","level": 0,"id": "procedures.developingcode.view.deflookup#view-parameter-info","title": "Parameter info","disqus_id": "d2","anchor":"#view-parameter-info","url": "viewing-reference-information.html"},
"procedures.developingcode.view.deflookup#parameter-hints": {"parentId": "procedures.developingcode.view.deflookup","level": 0,"id": "procedures.developingcode.view.deflookup#parameter-hints","title": "Parameter hints","disqus_id": "d2","anchor":"#parameter-hints","url": "viewing-reference-information.html"},
"procedures.developingcode.view.deflookup#inline-quick-documentation": {"parentId": "procedures.developingcode.view.deflookup","level": 0,"id": "procedures.developingcode.view.deflookup#inline-quick-documentation","title": "Quick documentation","disqus_id": "d2","anchor":"#inline-quick-documentation","url": "viewing-reference-information.html"},
"procedures.developingcode.view.deflookup#external-docs": {"parentId": "procedures.developingcode.view.deflookup","level": 0,"id": "procedures.developingcode.view.deflookup#external-docs","title": "External documentation","disqus_id": "d2","anchor":"#external-docs","url": "viewing-reference-information.html"},
"topicId109964#use-language-injection-comments": {"parentId": "topicId109964","level": 0,"id": "topicId109964#use-language-injection-comments","title": "Use language injection comments","disqus_id": "d2","anchor":"#use-language-injection-comments","url": "using-language-injections.html"},
"topicId109964#language_annotation": {"parentId": "topicId109964","level": 0,"id": "topicId109964#language_annotation","title": "Use the @Language annotation","disqus_id": "d2","anchor":"#language_annotation","url": "using-language-injections.html"},
"topicId109964#configure-injection-rules": {"parentId": "topicId109964","level": 0,"id": "topicId109964#configure-injection-rules","title": "Configure injection rules","disqus_id": "d2","anchor":"#configure-injection-rules","url": "using-language-injections.html"},
"topicId109964#cancel-injections": {"parentId": "topicId109964","level": 0,"id": "topicId109964#cancel-injections","title": "Cancel injections","disqus_id": "d2","anchor":"#cancel-injections","url": "using-language-injections.html"},
"procedures.navigating#navigate_in_project_view": {"parentId": "procedures.navigating","level": 0,"id": "procedures.navigating#navigate_in_project_view","title": "Navigate with Select In to a target in the Project view","disqus_id": "d2","anchor":"#navigate_in_project_view","url": "navigating-through-the-source-code.html"},
"procedures.navigating#scroll_to_from_source": {"parentId": "procedures.navigating","level": 0,"id": "procedures.navigating#scroll_to_from_source","title": "Use Autoscroll to locate a file","disqus_id": "d2","anchor":"#scroll_to_from_source","url": "navigating-through-the-source-code.html"},
"procedures.navigating#use_bookmarks": {"parentId": "procedures.navigating","level": 0,"id": "procedures.navigating#use_bookmarks","title": "Use bookmarks for navigation","disqus_id": "d2","anchor":"#use_bookmarks","url": "navigating-through-the-source-code.html"},
"procedures.navigating#go_to_declaration": {"parentId": "procedures.navigating","level": 0,"id": "procedures.navigating#go_to_declaration","title": "Go to declaration and its type","disqus_id": "d2","anchor":"#go_to_declaration","url": "navigating-through-the-source-code.html"},
"procedures.navigating#go_to_implementation": {"parentId": "procedures.navigating","level": 0,"id": "procedures.navigating#go_to_implementation","title": "Go to Implementation","disqus_id": "d2","anchor":"#go_to_implementation","url": "navigating-through-the-source-code.html"},
"procedures.navigating#use_structure_view": {"parentId": "procedures.navigating","level": 0,"id": "procedures.navigating#use_structure_view","title": "Locate the source code element with Structure view","disqus_id": "d2","anchor":"#use_structure_view","url": "navigating-through-the-source-code.html"},
"ixFindText#work_with_search_results": {"parentId": "ixFindText","level": 0,"id": "ixFindText#work_with_search_results","title": "Manage your search","disqus_id": "d2","anchor":"#work_with_search_results","url": "finding-and-replacing-text-in-file.html"},
"find.replaceInPath#find_in_project": {"parentId": "find.replaceInPath","level": 0,"id": "find.replaceInPath#find_in_project","title": "Find your target in a project","disqus_id": "d2","anchor":"#find_in_project","url": "finding-and-replacing-text-in-project.html"},
"find.replaceInPath#limit_search": {"parentId": "find.replaceInPath","level": 0,"id": "find.replaceInPath#limit_search","title": "Narrow your search","disqus_id": "d2","anchor":"#limit_search","url": "finding-and-replacing-text-in-project.html"},
"find.replaceInPath#exclude_type": {"parentId": "find.replaceInPath","level": 0,"id": "find.replaceInPath#exclude_type","title": "Search in the specific file types","disqus_id": "d2","anchor":"#exclude_type","url": "finding-and-replacing-text-in-project.html"},
"find.replaceInPath#find_usages": {"parentId": "find.replaceInPath","level": 0,"id": "find.replaceInPath#find_usages","title": "Search for usages in a project","disqus_id": "d2","anchor":"#find_usages","url": "finding-and-replacing-text-in-project.html"},
"find.replaceInPath#find_occurrences": {"parentId": "find.replaceInPath","level": 0,"id": "find.replaceInPath#find_occurrences","title": "Search for occurrences","disqus_id": "d2","anchor":"#find_occurrences","url": "finding-and-replacing-text-in-project.html"},
"Replace_the_found_target#replace_search_string": {"parentId": "Replace_the_found_target","level": 0,"id": "Replace_the_found_target#replace_search_string","title": "Replace the search string in a file","disqus_id": "d2","anchor":"#replace_search_string","url": "replace-the-found-target.html"},
"Replace_the_found_target#replace_search_string_in_project": {"parentId": "Replace_the_found_target","level": 0,"id": "Replace_the_found_target#replace_search_string_in_project","title": "Replace the search string in a project","disqus_id": "d2","anchor":"#replace_search_string_in_project","url": "replace-the-found-target.html"},
"Tutorial_Finding_and_Replacing_Text_Using_Regular_Expressions#capture_groups_and_backreference": {"parentId": "Tutorial_Finding_and_Replacing_Text_Using_Regular_Expressions","level": 0,"id": "Tutorial_Finding_and_Replacing_Text_Using_Regular_Expressions#capture_groups_and_backreference","title": "Use regex capturing groups and backreferences","disqus_id": "d2","anchor":"#capture_groups_and_backreference","url": "tutorial-finding-and-replacing-text-using-regular-expressions.html"},
"Tutorial_Finding_and_Replacing_Text_Using_Regular_Expressions#upper_lower_case_switch": {"parentId": "Tutorial_Finding_and_Replacing_Text_Using_Regular_Expressions","level": 0,"id": "Tutorial_Finding_and_Replacing_Text_Using_Regular_Expressions#upper_lower_case_switch","title": "Switch the character case","disqus_id": "d2","anchor":"#upper_lower_case_switch","url": "tutorial-finding-and-replacing-text-using-regular-expressions.html"},
"concepts.templates.searchTemplates#count_filter": {"parentId": "concepts.templates.searchTemplates","level": 0,"id": "concepts.templates.searchTemplates#count_filter","title": "Count filter","disqus_id": "d2","anchor":"#count_filter","url": "search-templates.html"},
"concepts.templates.searchTemplates#reference_filter": {"parentId": "concepts.templates.searchTemplates","level": 0,"id": "concepts.templates.searchTemplates#reference_filter","title": "Reference filter","disqus_id": "d2","anchor":"#reference_filter","url": "search-templates.html"},
"concepts.templates.searchTemplates#type_filter": {"parentId": "concepts.templates.searchTemplates","level": 0,"id": "concepts.templates.searchTemplates#type_filter","title": "Type filter","disqus_id": "d2","anchor":"#type_filter","url": "search-templates.html"},
"concepts.templates.searchTemplates#text_filter": {"parentId": "concepts.templates.searchTemplates","level": 0,"id": "concepts.templates.searchTemplates#text_filter","title": "Text filter","disqus_id": "d2","anchor":"#text_filter","url": "search-templates.html"},
"concepts.templates.searchTemplates#script_constraints": {"parentId": "concepts.templates.searchTemplates","level": 0,"id": "concepts.templates.searchTemplates#script_constraints","title": "Script constraints","disqus_id": "d2","anchor":"#script_constraints","url": "search-templates.html"},
"Project_module_dependencies_diagram#view_module_diagram": {"parentId": "Project_module_dependencies_diagram","level": 0,"id": "Project_module_dependencies_diagram#view_module_diagram","title": "View module dependencies diagram","disqus_id": "d2","anchor":"#view_module_diagram","url": "project-module-dependencies-diagram.html"},
"Project_module_dependencies_diagram#analyze_module_diagram": {"parentId": "Project_module_dependencies_diagram","level": 0,"id": "Project_module_dependencies_diagram#analyze_module_diagram","title": "Analyze module diagrams","disqus_id": "d2","anchor":"#analyze_module_diagram","url": "project-module-dependencies-diagram.html"},
"Project_module_dependencies_diagram#manage_diagram": {"parentId": "Project_module_dependencies_diagram","level": 0,"id": "Project_module_dependencies_diagram#manage_diagram","title": "Manage module dependencies diagram","disqus_id": "d2","anchor":"#manage_diagram","url": "project-module-dependencies-diagram.html"},
"Class_diagram#analyze_class": {"parentId": "Class_diagram","level": 0,"id": "Class_diagram#analyze_class","title": "Analyze class diagram","disqus_id": "d2","anchor":"#analyze_class","url": "class-diagram.html"},
"Class_diagram#manage_class_diagram": {"parentId": "Class_diagram","level": 0,"id": "Class_diagram#manage_class_diagram","title": "Manage class diagram","disqus_id": "d2","anchor":"#manage_class_diagram","url": "class-diagram.html"},
"topicId98082#comparing_files": {"parentId": "topicId98082","level": 0,"id": "topicId98082#comparing_files","title": "Compare files","disqus_id": "d2","anchor":"#comparing_files","url": "comparing-files-and-folders.html"},
"topicId98082#comparing_folders": {"parentId": "topicId98082","level": 0,"id": "topicId98082#comparing_folders","title": "Compare folders","disqus_id": "d2","anchor":"#comparing_folders","url": "comparing-files-and-folders.html"},
"topicId98082#90887c2a": {"parentId": "topicId98082","level": 0,"id": "topicId98082#90887c2a","title": "Compare any text sources","disqus_id": "d2","anchor":"#90887c2a","url": "comparing-files-and-folders.html"},
"Properties_Files#encoding": {"parentId": "Properties_Files","level": 0,"id": "Properties_Files#encoding","title": "Encoding of properties files","disqus_id": "d2","anchor":"#encoding","url": "properties-files.html"},
"concepts.file.resourceBundle#editing": {"parentId": "concepts.file.resourceBundle","level": 0,"id": "concepts.file.resourceBundle#editing","title": "Editing resource bundles","disqus_id": "d2","anchor":"#editing","url": "resource-bundle.html"},
"hard_coded_string_literals#extract": {"parentId": "hard_coded_string_literals","level": 0,"id": "hard_coded_string_literals#extract","title": "Extracting hard-coded string literals","disqus_id": "d2","anchor":"#extract","url": "hard-coded-string-literals.html"},
"hard_coded_string_literals#ignore": {"parentId": "hard_coded_string_literals","level": 0,"id": "hard_coded_string_literals#ignore","title": "Ignoring hard-coded string literals","disqus_id": "d2","anchor":"#ignore","url": "hard-coded-string-literals.html"},
"topicId587345#copyright-profile": {"parentId": "topicId587345","level": 0,"id": "topicId587345#copyright-profile","title": "Configure a new copyright profile","disqus_id": "d2","anchor":"#copyright-profile","url": "copyright.html"},
"topicId587345#db2437dd": {"parentId": "topicId587345","level": 0,"id": "topicId587345#db2437dd","title": "Assign a profile to a scope of files","disqus_id": "d2","anchor":"#db2437dd","url": "copyright.html"},
"topicId587345#paste-copyright": {"parentId": "topicId587345","level": 0,"id": "topicId587345#paste-copyright","title": "Insert copyright text into files","disqus_id": "d2","anchor":"#paste-copyright","url": "copyright.html"},
"topicId587345#update-copyright": {"parentId": "topicId587345","level": 0,"id": "topicId587345#update-copyright","title": "Update copyright text","disqus_id": "d2","anchor":"#update-copyright","url": "copyright.html"},
"topicId587345#default": {"parentId": "topicId587345","level": 0,"id": "topicId587345#default","title": "Set the default copyright profile","disqus_id": "d2","anchor":"#default","url": "copyright.html"},
"procedures.running.configuration#run-dashboard": {"parentId": "procedures.running.configuration","level": 0,"id": "procedures.running.configuration#run-dashboard","title": "Manage multiple run configurations using the Run Dashboard","disqus_id": "d2","anchor":"#run-dashboard","url": "creating-and-editing-run-debug-configurations.html"},
"procedures.breakpoints#line-breakpoints": {"parentId": "procedures.breakpoints","level": 0,"id": "procedures.breakpoints#line-breakpoints","title": "Line breakpoints","disqus_id": "d2","anchor":"#line-breakpoints","url": "using-breakpoints.html"},
"procedures.breakpoints#method_breakpoint": {"parentId": "procedures.breakpoints","level": 0,"id": "procedures.breakpoints#method_breakpoint","title": "Method breakpoints","disqus_id": "d2","anchor":"#method_breakpoint","url": "using-breakpoints.html"},
"procedures.breakpoints#exception-breakpoints": {"parentId": "procedures.breakpoints","level": 0,"id": "procedures.breakpoints#exception-breakpoints","title": "Exception breakpoints","disqus_id": "d2","anchor":"#exception-breakpoints","url": "using-breakpoints.html"},
"procedures.breakpoints#field_watchpoint": {"parentId": "procedures.breakpoints","level": 0,"id": "procedures.breakpoints#field_watchpoint","title": "Field watchpoints","disqus_id": "d2","anchor":"#field_watchpoint","url": "using-breakpoints.html"},
"procedures.breakpoints#breakpoint-properties": {"parentId": "procedures.breakpoints","level": 0,"id": "procedures.breakpoints#breakpoint-properties","title": "Breakpoints properties","disqus_id": "d2","anchor":"#breakpoint-properties","url": "using-breakpoints.html"},
"procedures.breakpoints#dc4e19ef": {"parentId": "procedures.breakpoints","level": 0,"id": "procedures.breakpoints#dc4e19ef","title": "Productivity tips","disqus_id": "d2","anchor":"#dc4e19ef","url": "using-breakpoints.html"},
"Debug_asynchronous_code#4381730b": {"parentId": "Debug_asynchronous_code","level": 0,"id": "Debug_asynchronous_code#4381730b","title": "Use async annotations","disqus_id": "d2","anchor":"#4381730b","url": "debug-asynchronous-code.html"},
"Debug_asynchronous_code#e0ac3ca0": {"parentId": "Debug_asynchronous_code","level": 0,"id": "Debug_asynchronous_code#e0ac3ca0","title": "Configure capture points manually","disqus_id": "d2","anchor":"#e0ac3ca0","url": "debug-asynchronous-code.html"},
"Debug_asynchronous_code#60d22630": {"parentId": "Debug_asynchronous_code","level": 0,"id": "Debug_asynchronous_code#60d22630","title": "View Async Stack Traces in remote JVMs","disqus_id": "d2","anchor":"#60d22630","url": "debug-asynchronous-code.html"},
"Tutorial_Java_Debugging_Deep_Dive#46a2ba01": {"parentId": "Tutorial_Java_Debugging_Deep_Dive","level": 0,"id": "Tutorial_Java_Debugging_Deep_Dive#46a2ba01","title": "Overview","disqus_id": "d2","anchor":"#46a2ba01","url": "tutorial-java-debugging-deep-dive.html"},
"Tutorial_Java_Debugging_Deep_Dive#7b2157ba": {"parentId": "Tutorial_Java_Debugging_Deep_Dive","level": 0,"id": "Tutorial_Java_Debugging_Deep_Dive#7b2157ba","title": "Debugging code that was compiled without the debug flag","disqus_id": "d2","anchor":"#7b2157ba","url": "tutorial-java-debugging-deep-dive.html"},
"Tutorial_Java_Debugging_Deep_Dive#a95567b2": {"parentId": "Tutorial_Java_Debugging_Deep_Dive","level": 0,"id": "Tutorial_Java_Debugging_Deep_Dive#a95567b2","title": "Debugging without source code","disqus_id": "d2","anchor":"#a95567b2","url": "tutorial-java-debugging-deep-dive.html"},
"Tutorial_Java_Debugging_Deep_Dive#fd8f187d": {"parentId": "Tutorial_Java_Debugging_Deep_Dive","level": 0,"id": "Tutorial_Java_Debugging_Deep_Dive#fd8f187d","title": "Detecting unexpected state or flow","disqus_id": "d2","anchor":"#fd8f187d","url": "tutorial-java-debugging-deep-dive.html"},
"Tutorial_Java_Debugging_Deep_Dive#b081b391": {"parentId": "Tutorial_Java_Debugging_Deep_Dive","level": 1,"id": "Tutorial_Java_Debugging_Deep_Dive#b081b391","title": "Exploring the call frames","disqus_id": "d2","anchor":"#b081b391","url": "tutorial-java-debugging-deep-dive.html"},
"Tutorial_Java_Debugging_Deep_Dive#3972d198": {"parentId": "Tutorial_Java_Debugging_Deep_Dive","level": 1,"id": "Tutorial_Java_Debugging_Deep_Dive#3972d198","title": "Drop frames","disqus_id": "d2","anchor":"#3972d198","url": "tutorial-java-debugging-deep-dive.html"},
"Tutorial_Java_Debugging_Deep_Dive#5870ac29": {"parentId": "Tutorial_Java_Debugging_Deep_Dive","level": 1,"id": "Tutorial_Java_Debugging_Deep_Dive#5870ac29","title": "Detecting unexpected flow by method","disqus_id": "d2","anchor":"#5870ac29","url": "tutorial-java-debugging-deep-dive.html"},
"Tutorial_Java_Debugging_Deep_Dive#49b7360f": {"parentId": "Tutorial_Java_Debugging_Deep_Dive","level": 1,"id": "Tutorial_Java_Debugging_Deep_Dive#49b7360f","title": "Detecting unexpected object state","disqus_id": "d2","anchor":"#49b7360f","url": "tutorial-java-debugging-deep-dive.html"},
"Tutorial_Java_Debugging_Deep_Dive#195073b1": {"parentId": "Tutorial_Java_Debugging_Deep_Dive","level": 1,"id": "Tutorial_Java_Debugging_Deep_Dive#195073b1","title": "Detecting unexpected exception thrown","disqus_id": "d2","anchor":"#195073b1","url": "tutorial-java-debugging-deep-dive.html"},
"Tutorial_Java_Debugging_Deep_Dive#f1ba1aa8": {"parentId": "Tutorial_Java_Debugging_Deep_Dive","level": 0,"id": "Tutorial_Java_Debugging_Deep_Dive#f1ba1aa8","title": "Debugging Asynchronous flow","disqus_id": "d2","anchor":"#f1ba1aa8","url": "tutorial-java-debugging-deep-dive.html"},
"Tutorial_Java_Debugging_Deep_Dive#async_stacktraces": {"parentId": "Tutorial_Java_Debugging_Deep_Dive","level": 1,"id": "Tutorial_Java_Debugging_Deep_Dive#async_stacktraces","title": "Async Stacktraces","disqus_id": "d2","anchor":"#async_stacktraces","url": "tutorial-java-debugging-deep-dive.html"},
"Tutorial_Java_Debugging_Deep_Dive#multithreaded_applications": {"parentId": "Tutorial_Java_Debugging_Deep_Dive","level": 0,"id": "Tutorial_Java_Debugging_Deep_Dive#multithreaded_applications","title": "Debugging multithreaded applications","disqus_id": "d2","anchor":"#multithreaded_applications","url": "tutorial-java-debugging-deep-dive.html"},
"Tutorial_Java_Debugging_Deep_Dive#breakpoint_properties": {"parentId": "Tutorial_Java_Debugging_Deep_Dive","level": 1,"id": "Tutorial_Java_Debugging_Deep_Dive#breakpoint_properties","title": "Controlling a breakpoint","disqus_id": "d2","anchor":"#breakpoint_properties","url": "tutorial-java-debugging-deep-dive.html"},
"Tutorial_Java_Debugging_Deep_Dive#070cd109": {"parentId": "Tutorial_Java_Debugging_Deep_Dive","level": 0,"id": "Tutorial_Java_Debugging_Deep_Dive#070cd109","title": "Debugging long running scenarios","disqus_id": "d2","anchor":"#070cd109","url": "tutorial-java-debugging-deep-dive.html"},
"Tutorial_Java_Debugging_Deep_Dive#5895321d": {"parentId": "Tutorial_Java_Debugging_Deep_Dive","level": 0,"id": "Tutorial_Java_Debugging_Deep_Dive#5895321d","title": "Looking for a race condition","disqus_id": "d2","anchor":"#5895321d","url": "tutorial-java-debugging-deep-dive.html"},
"Tutorial_Java_Debugging_Deep_Dive#ad9fb3c4": {"parentId": "Tutorial_Java_Debugging_Deep_Dive","level": 1,"id": "Tutorial_Java_Debugging_Deep_Dive#ad9fb3c4","title": "Detecting race condition resulting in a corrupted state","disqus_id": "d2","anchor":"#ad9fb3c4","url": "tutorial-java-debugging-deep-dive.html"},
"Tutorial_Java_Debugging_Deep_Dive#5db7790d": {"parentId": "Tutorial_Java_Debugging_Deep_Dive","level": 1,"id": "Tutorial_Java_Debugging_Deep_Dive#5db7790d","title": "Avoiding debugger overhead","disqus_id": "d2","anchor":"#5db7790d","url": "tutorial-java-debugging-deep-dive.html"},
"Tutorial_Java_Debugging_Deep_Dive#9763ff17": {"parentId": "Tutorial_Java_Debugging_Deep_Dive","level": 1,"id": "Tutorial_Java_Debugging_Deep_Dive#9763ff17","title": "Detecting a race condition resulting in unexpected flow control","disqus_id": "d2","anchor":"#9763ff17","url": "tutorial-java-debugging-deep-dive.html"},
"Tutorial_Java_Debugging_Deep_Dive#6216581a": {"parentId": "Tutorial_Java_Debugging_Deep_Dive","level": 0,"id": "Tutorial_Java_Debugging_Deep_Dive#6216581a","title": "Detecting a deadlock","disqus_id": "d2","anchor":"#6216581a","url": "tutorial-java-debugging-deep-dive.html"},
"Tutorial_Java_Debugging_Deep_Dive#1de7e099": {"parentId": "Tutorial_Java_Debugging_Deep_Dive","level": 0,"id": "Tutorial_Java_Debugging_Deep_Dive#1de7e099","title": "Detecting a livelock","disqus_id": "d2","anchor":"#1de7e099","url": "tutorial-java-debugging-deep-dive.html"},
"topicId457683#create-test-methods": {"parentId": "topicId457683","level": 0,"id": "topicId457683#create-test-methods","title": "Create test methods","disqus_id": "d2","anchor":"#create-test-methods","url": "create-tests.html"},
"topicId457683#naming-pattern": {"parentId": "topicId457683","level": 0,"id": "topicId457683#naming-pattern","title": "Configure naming pattern for generated test classes","disqus_id": "d2","anchor":"#naming-pattern","url": "create-tests.html"},
"defining_mappings#example1": {"parentId": "defining_mappings","level": 0,"id": "defining_mappings#example1","title": "Example of specifying a server configuration root","disqus_id": "d2","anchor":"#example1","url": "creating-local-server-configuration.html"},
"defining_mappings#example2": {"parentId": "defining_mappings","level": 0,"id": "defining_mappings#example2","title": "Example of mapping project folders with folders on the server","disqus_id": "d2","anchor":"#example2","url": "creating-local-server-configuration.html"},
"Creating_a_Remote_Server_Configuration#overload": {"parentId": "Creating_a_Remote_Server_Configuration","level": 0,"id": "Creating_a_Remote_Server_Configuration#overload","title": "Overloading the deployment destination by configuring nested mappings","disqus_id": "d2","anchor":"#overload","url": "creating-a-remote-server-configuration.html"},
"Excluding_Files_and_Folders_from_Deployment#exclude-after-creation": {"parentId": "Excluding_Files_and_Folders_from_Deployment","level": 0,"id": "Excluding_Files_and_Folders_from_Deployment#exclude-after-creation","title": "Excluding a folder on server from upload/download after project creation","disqus_id": "d2","anchor":"#exclude-after-creation","url": "excluding-files-and-folders-from-deployment.html"},
"Excluding_Files_and_Folders_from_Deployment#exclude-local-folder": {"parentId": "Excluding_Files_and_Folders_from_Deployment","level": 0,"id": "Excluding_Files_and_Folders_from_Deployment#exclude-local-folder","title": "Excluding a local folder from upload/download","disqus_id": "d2","anchor":"#exclude-local-folder","url": "excluding-files-and-folders-from-deployment.html"},
"Excluding_Files_and_Folders_from_Deployment#exclude_by_name": {"parentId": "Excluding_Files_and_Folders_from_Deployment","level": 0,"id": "Excluding_Files_and_Folders_from_Deployment#exclude_by_name","title": "Excluding files and folders from upload/download by name","disqus_id": "d2","anchor":"#exclude_by_name","url": "excluding-files-and-folders-from-deployment.html"},
"Excluding_Files_and_Folders_from_Deployment#remove-exclusion": {"parentId": "Excluding_Files_and_Folders_from_Deployment","level": 0,"id": "Excluding_Files_and_Folders_from_Deployment#remove-exclusion","title": "Removing the exclusion mark","disqus_id": "d2","anchor":"#remove-exclusion","url": "excluding-files-and-folders-from-deployment.html"},
"Uploading_and_Downloading_Files#upload": {"parentId": "Uploading_and_Downloading_Files","level": 0,"id": "Uploading_and_Downloading_Files#upload","title": "Uploading files and folders","disqus_id": "d2","anchor":"#upload","url": "uploading-and-downloading-files.html"},
"Uploading_and_Downloading_Files#download": {"parentId": "Uploading_and_Downloading_Files","level": 0,"id": "Uploading_and_Downloading_Files#download","title": "Downloading files and folders","disqus_id": "d2","anchor":"#download","url": "uploading-and-downloading-files.html"},
"Comparing_Deployed_Files_and_Folders_with_Their_Local_Versions#compare": {"parentId": "Comparing_Deployed_Files_and_Folders_with_Their_Local_Versions","level": 0,"id": "Comparing_Deployed_Files_and_Folders_with_Their_Local_Versions#compare","title": "Comparing files and folders on the server with their local versions","disqus_id": "d2","anchor":"#compare","url": "comparing-deployed-files-and-folders-with-their-local-versions.html"},
"Comparing_Deployed_Files_and_Folders_with_Their_Local_Versions#compare-local": {"parentId": "Comparing_Deployed_Files_and_Folders_with_Their_Local_Versions","level": 0,"id": "Comparing_Deployed_Files_and_Folders_with_Their_Local_Versions#compare-local","title": "Comparing local files and folders with their versions on the server","disqus_id": "d2","anchor":"#compare-local","url": "comparing-deployed-files-and-folders-with-their-local-versions.html"},
"Comparing_Deployed_Files_and_Folders_with_Their_Local_Versions#compare_folders": {"parentId": "Comparing_Deployed_Files_and_Folders_with_Their_Local_Versions","level": 0,"id": "Comparing_Deployed_Files_and_Folders_with_Their_Local_Versions#compare_folders","title": "Comparing and synchronizing two folders in the Difference Viewer","disqus_id": "d2","anchor":"#compare_folders","url": "comparing-deployed-files-and-folders-with-their-local-versions.html"},
"Using_File_Watchers#22d8c133": {"parentId": "Using_File_Watchers","level": 0,"id": "Using_File_Watchers#22d8c133","title": "Creating a File Watcher","disqus_id": "d2","anchor":"#22d8c133","url": "using-file-watchers.html"},
"Using_File_Watchers#ws_filewatcher_type_and_location_of_input_files": {"parentId": "Using_File_Watchers","level": 0,"id": "Using_File_Watchers#ws_filewatcher_type_and_location_of_input_files","title": "Configuring the expected type and location of input files","disqus_id": "d2","anchor":"#ws_filewatcher_type_and_location_of_input_files","url": "using-file-watchers.html"},
"Using_File_Watchers#transpilerBehaviour": {"parentId": "Using_File_Watchers","level": 0,"id": "Using_File_Watchers#transpilerBehaviour","title": "Configuring interaction with the external tool","disqus_id": "d2","anchor":"#transpilerBehaviour","url": "using-file-watchers.html"},
"Using_File_Watchers#ws_filewatcher_advanced_options": {"parentId": "Using_File_Watchers","level": 0,"id": "Using_File_Watchers#ws_filewatcher_advanced_options","title": "Configuring advanced options","disqus_id": "d2","anchor":"#ws_filewatcher_advanced_options","url": "using-file-watchers.html"},
"Using_File_Watchers#showFileWatcherInfoInEditor": {"parentId": "Using_File_Watchers","level": 0,"id": "Using_File_Watchers#showFileWatcherInfoInEditor","title": "Showing information reported by File Watcher in the editor","disqus_id": "d2","anchor":"#showFileWatcherInfoInEditor","url": "using-file-watchers.html"},
"Using_File_Watchers#enableFileWatcher": {"parentId": "Using_File_Watchers","level": 0,"id": "Using_File_Watchers#enableFileWatcher","title": "Saving, enabling and disabling File Watchers","disqus_id": "d2","anchor":"#enableFileWatcher","url": "using-file-watchers.html"},
"Using_File_Watchers#ws_filewatcher_examples": {"parentId": "Using_File_Watchers","level": 0,"id": "Using_File_Watchers#ws_filewatcher_examples","title": "Examples of customizing the behaviour of an external tool in a File Watcher","disqus_id": "d2","anchor":"#ws_filewatcher_examples","url": "using-file-watchers.html"},
"Using_File_Watchers#troubleshoointgFileWatchers": {"parentId": "Using_File_Watchers","level": 0,"id": "Using_File_Watchers#troubleshoointgFileWatchers","title": "Troubleshooting File Watchers","disqus_id": "d2","anchor":"#troubleshoointgFileWatchers","url": "using-file-watchers.html"},
"CPU_Profiler#UsingTheProfiler": {"parentId": "CPU_Profiler","level": 0,"id": "CPU_Profiler#UsingTheProfiler","title": "Using the profiler","disqus_id": "d2","anchor":"#UsingTheProfiler","url": "cpu-profiler.html"},
"CPU_Profiler#InterpretingTheResults": {"parentId": "CPU_Profiler","level": 0,"id": "CPU_Profiler#InterpretingTheResults","title": "Interpreting the results","disqus_id": "d2","anchor":"#InterpretingTheResults","url": "cpu-profiler.html"},
"concepts.analysis.dsm#run-dsm": {"parentId": "concepts.analysis.dsm","level": 0,"id": "concepts.analysis.dsm#run-dsm","title": "Analyze dependency matrix","disqus_id": "d2","anchor":"#run-dsm","url": "dsm-analysis.html"},
"concepts.analysis.dsm#dsm-explore-dependencies": {"parentId": "concepts.analysis.dsm","level": 0,"id": "concepts.analysis.dsm#dsm-explore-dependencies","title": "Explore dependencies","disqus_id": "d2","anchor":"#dsm-explore-dependencies","url": "dsm-analysis.html"},
"concepts.analysis.dsm#dsm-find-usages": {"parentId": "concepts.analysis.dsm","level": 0,"id": "concepts.analysis.dsm#dsm-find-usages","title": "Find usages for dependencies","disqus_id": "d2","anchor":"#dsm-find-usages","url": "dsm-analysis.html"},
"concepts.analysis.dsm#dsm-limit-scope": {"parentId": "concepts.analysis.dsm","level": 0,"id": "concepts.analysis.dsm#dsm-limit-scope","title": "Limit the DSM scope","disqus_id": "d2","anchor":"#dsm-limit-scope","url": "dsm-analysis.html"},
"topicId866#8bf1a32e": {"parentId": "topicId866","level": 0,"id": "topicId866#8bf1a32e","title": "Configuring General VCS Settings","disqus_id": "d2","anchor":"#8bf1a32e","url": "configuring-version-control-options.html"},
"topicId866#72a4a300": {"parentId": "topicId866","level": 0,"id": "topicId866#72a4a300","title": "Configuring VCS-specific settings","disqus_id": "d2","anchor":"#72a4a300","url": "configuring-version-control-options.html"},
"procedures.vcWithIDEA.commonVcsOps.addFiles#031f09e4": {"parentId": "procedures.vcWithIDEA.commonVcsOps.addFiles","level": 0,"id": "procedures.vcWithIDEA.commonVcsOps.addFiles#031f09e4","title": "Add files to VCS","disqus_id": "d2","anchor":"#031f09e4","url": "adding-files-to-version-control.html"},
"procedures.vcWithIDEA.commonVcsOps.addFiles#14717620": {"parentId": "procedures.vcWithIDEA.commonVcsOps.addFiles","level": 0,"id": "procedures.vcWithIDEA.commonVcsOps.addFiles#14717620","title": "Check project files status","disqus_id": "d2","anchor":"#14717620","url": "adding-files-to-version-control.html"},
"procedures.vcWithIDEA.commonVcsOps.addFiles#7315b99f": {"parentId": "procedures.vcWithIDEA.commonVcsOps.addFiles","level": 0,"id": "procedures.vcWithIDEA.commonVcsOps.addFiles#7315b99f","title": "Delete files from the repository","disqus_id": "d2","anchor":"#7315b99f","url": "adding-files-to-version-control.html"},
"procedures.vcWithIDEA.commonVcsOps.viewChanges#project_history": {"parentId": "procedures.vcWithIDEA.commonVcsOps.viewChanges","level": 0,"id": "procedures.vcWithIDEA.commonVcsOps.viewChanges#project_history","title": "Review project history","disqus_id": "d2","anchor":"#project_history","url": "viewing-changes-information.html"},
"procedures.vcWithIDEA.commonVcsOps.viewChanges#local_changes": {"parentId": "procedures.vcWithIDEA.commonVcsOps.viewChanges","level": 0,"id": "procedures.vcWithIDEA.commonVcsOps.viewChanges#local_changes","title": "Tracking changes to a file in the editor","disqus_id": "d2","anchor":"#local_changes","url": "viewing-changes-information.html"},
"procedures.vcWithIDEA.commonVcsOps.viewChanges#comparing_local_changes": {"parentId": "procedures.vcWithIDEA.commonVcsOps.viewChanges","level": 0,"id": "procedures.vcWithIDEA.commonVcsOps.viewChanges#comparing_local_changes","title": "Comparing local changes with the repository version","disqus_id": "d2","anchor":"#comparing_local_changes","url": "viewing-changes-information.html"},
"procedures.vcWithIDEA.commonVcsOps.viewChanges#changes_history": {"parentId": "procedures.vcWithIDEA.commonVcsOps.viewChanges","level": 0,"id": "procedures.vcWithIDEA.commonVcsOps.viewChanges#changes_history","title": "Viewing changes history for a file or selection","disqus_id": "d2","anchor":"#changes_history","url": "viewing-changes-information.html"},
"procedures.vcWithIDEA.commonVcsOps.viewChanges#file_status": {"parentId": "procedures.vcWithIDEA.commonVcsOps.viewChanges","level": 0,"id": "procedures.vcWithIDEA.commonVcsOps.viewChanges#file_status","title": "Checking file status","disqus_id": "d2","anchor":"#file_status","url": "viewing-changes-information.html"},
"procedures.vcWithIDEA.commonVcsOps.viewChanges#annotations": {"parentId": "procedures.vcWithIDEA.commonVcsOps.viewChanges","level": 0,"id": "procedures.vcWithIDEA.commonVcsOps.viewChanges#annotations","title": "Using annotations","disqus_id": "d2","anchor":"#annotations","url": "viewing-changes-information.html"},
"Set_up_a_Git_repository#clone-repo": {"parentId": "Set_up_a_Git_repository","level": 0,"id": "Set_up_a_Git_repository#clone-repo","title": "Check out a project from a remote host (clone)","disqus_id": "d2","anchor":"#clone-repo","url": "set-up-a-git-repository.html"},
"Set_up_a_Git_repository#put-existing-project-under-Git": {"parentId": "Set_up_a_Git_repository","level": 0,"id": "Set_up_a_Git_repository#put-existing-project-under-Git","title": "Put an existing project under Git version control","disqus_id": "d2","anchor":"#put-existing-project-under-Git","url": "set-up-a-git-repository.html"},
"Set_up_a_Git_repository#ignore-files": {"parentId": "Set_up_a_Git_repository","level": 0,"id": "Set_up_a_Git_repository#ignore-files","title": "Exclude files from version control (ignore)","disqus_id": "d2","anchor":"#ignore-files","url": "set-up-a-git-repository.html"},
"Set_up_a_Git_repository#check_project_status": {"parentId": "Set_up_a_Git_repository","level": 0,"id": "Set_up_a_Git_repository#check_project_status","title": "Check project status","disqus_id": "d2","anchor":"#check_project_status","url": "set-up-a-git-repository.html"},
"Set_up_a_Git_repository#add-remote": {"parentId": "Set_up_a_Git_repository","level": 0,"id": "Set_up_a_Git_repository#add-remote","title": "Add a remote repository","disqus_id": "d2","anchor":"#add-remote","url": "set-up-a-git-repository.html"},
"Sync_with_a_remote_repository#fetch": {"parentId": "Sync_with_a_remote_repository","level": 0,"id": "Sync_with_a_remote_repository#fetch","title": "Fetch changes","disqus_id": "d2","anchor":"#fetch","url": "sync-with-a-remote-repository.html"},
"Sync_with_a_remote_repository#pull": {"parentId": "Sync_with_a_remote_repository","level": 0,"id": "Sync_with_a_remote_repository#pull","title": "Pull changes","disqus_id": "d2","anchor":"#pull","url": "sync-with-a-remote-repository.html"},
"Sync_with_a_remote_repository#update": {"parentId": "Sync_with_a_remote_repository","level": 0,"id": "Sync_with_a_remote_repository#update","title": "Update your project","disqus_id": "d2","anchor":"#update","url": "sync-with-a-remote-repository.html"},
"Commit and push changes#commit": {"parentId": "Commit and push changes","level": 0,"id": "Commit and push changes#commit","title": "Commit changes locally","disqus_id": "d2","anchor":"#commit","url": "commit-and-push-changes.html"},
"Commit and push changes#push": {"parentId": "Commit and push changes","level": 0,"id": "Commit and push changes#push","title": "Push changes to a remote repository","disqus_id": "d2","anchor":"#push","url": "commit-and-push-changes.html"},
"Investigate_changes#commits-history": {"parentId": "Investigate_changes","level": 0,"id": "Investigate_changes#commits-history","title": "Review project history","disqus_id": "d2","anchor":"#commits-history","url": "investigate-changes.html"},
"Investigate_changes#00eda7b5": {"parentId": "Investigate_changes","level": 0,"id": "Investigate_changes#00eda7b5","title": "Review a project's snapshot at a specific revision","disqus_id": "d2","anchor":"#00eda7b5","url": "investigate-changes.html"},
"Investigate_changes#file-history": {"parentId": "Investigate_changes","level": 0,"id": "Investigate_changes#file-history","title": "Review file history","disqus_id": "d2","anchor":"#file-history","url": "investigate-changes.html"},
"Investigate_changes#view-diff": {"parentId": "Investigate_changes","level": 0,"id": "Investigate_changes#view-diff","title": "Review the differences between the local and a committed version","disqus_id": "d2","anchor":"#view-diff","url": "investigate-changes.html"},
"Investigate_changes#review_merge_commit": {"parentId": "Investigate_changes","level": 0,"id": "Investigate_changes#review_merge_commit","title": "Review how changes were merged","disqus_id": "d2","anchor":"#review_merge_commit","url": "investigate-changes.html"},
"Investigate_changes#annotate": {"parentId": "Investigate_changes","level": 0,"id": "Investigate_changes#annotate","title": "Locate code author (annotate/blame)","disqus_id": "d2","anchor":"#annotate","url": "investigate-changes.html"},
"concepts.versionControl.patch#create-patch": {"parentId": "concepts.versionControl.patch","level": 0,"id": "concepts.versionControl.patch#create-patch","title": "Create a patch","disqus_id": "d2","anchor":"#create-patch","url": "use-patches.html"},
"concepts.versionControl.patch#apply-patch": {"parentId": "concepts.versionControl.patch","level": 0,"id": "concepts.versionControl.patch#apply-patch","title": "Apply a patch","disqus_id": "d2","anchor":"#apply-patch","url": "use-patches.html"},
"Apply_changes_from_one_branch_to_another#merge": {"parentId": "Apply_changes_from_one_branch_to_another","level": 0,"id": "Apply_changes_from_one_branch_to_another#merge","title": "Merge branches","disqus_id": "d2","anchor":"#merge","url": "apply-changes-from-one-branch-to-another.html"},
"Apply_changes_from_one_branch_to_another#rebase-branch": {"parentId": "Apply_changes_from_one_branch_to_another","level": 0,"id": "Apply_changes_from_one_branch_to_another#rebase-branch","title": "Rebase branches","disqus_id": "d2","anchor":"#rebase-branch","url": "apply-changes-from-one-branch-to-another.html"},
"Apply_changes_from_one_branch_to_another#cherry-pick": {"parentId": "Apply_changes_from_one_branch_to_another","level": 0,"id": "Apply_changes_from_one_branch_to_another#cherry-pick","title": "Cherry-pick separate commits","disqus_id": "d2","anchor":"#cherry-pick","url": "apply-changes-from-one-branch-to-another.html"},
"Resolve_conflicts#CRLF_warning": {"parentId": "Resolve_conflicts","level": 0,"id": "Resolve_conflicts#CRLF_warning","title": "Handle conflicts related to LF and CRLF line endings","disqus_id": "d2","anchor":"#CRLF_warning","url": "resolve-conflicts.html"},
"Work_on_several_features_simultaneously#shelve": {"parentId": "Work_on_several_features_simultaneously","level": 0,"id": "Work_on_several_features_simultaneously#shelve","title": "Shelve changes","disqus_id": "d2","anchor":"#shelve","url": "work-on-several-features-simultaneously.html"},
"Work_on_several_features_simultaneously#stash": {"parentId": "Work_on_several_features_simultaneously","level": 0,"id": "Work_on_several_features_simultaneously#stash","title": "Stash changes","disqus_id": "d2","anchor":"#stash","url": "work-on-several-features-simultaneously.html"},
"Work_on_several_features_simultaneously#changelists": {"parentId": "Work_on_several_features_simultaneously","level": 0,"id": "Work_on_several_features_simultaneously#changelists","title": "Group changes into different changelists","disqus_id": "d2","anchor":"#changelists","url": "work-on-several-features-simultaneously.html"},
"Work_on_several_features_simultaneously#feature-branches": {"parentId": "Work_on_several_features_simultaneously","level": 0,"id": "Work_on_several_features_simultaneously#feature-branches","title": "Use feature branches","disqus_id": "d2","anchor":"#feature-branches","url": "work-on-several-features-simultaneously.html"},
"Undo_changes#revert-local-changes": {"parentId": "Undo_changes","level": 0,"id": "Undo_changes#revert-local-changes","title": "Revert uncommitted changes","disqus_id": "d2","anchor":"#revert-local-changes","url": "undo-changes.html"},
"Undo_changes#revert-last-commit": {"parentId": "Undo_changes","level": 0,"id": "Undo_changes#revert-last-commit","title": "Undo the last commit","disqus_id": "d2","anchor":"#revert-last-commit","url": "undo-changes.html"},
"Undo_changes#revert-commit": {"parentId": "Undo_changes","level": 0,"id": "Undo_changes#revert-commit","title": "Revert a pushed commit","disqus_id": "d2","anchor":"#revert-commit","url": "undo-changes.html"},
"Undo_changes#reset-HEAD": {"parentId": "Undo_changes","level": 0,"id": "Undo_changes#reset-HEAD","title": "Reset a branch to a specific commit","disqus_id": "d2","anchor":"#reset-HEAD","url": "undo-changes.html"},
"Undo_changes#revert-single-file": {"parentId": "Undo_changes","level": 0,"id": "Undo_changes#revert-single-file","title": "Get a previous revision of a file","disqus_id": "d2","anchor":"#revert-single-file","url": "undo-changes.html"},
"Edit_project_history#amend-commit": {"parentId": "Edit_project_history","level": 0,"id": "Edit_project_history#amend-commit","title": "Combine staged changes with the previous commit (amend commit)","disqus_id": "d2","anchor":"#amend-commit","url": "edit-project-history.html"},
"Edit_project_history#reword-commit": {"parentId": "Edit_project_history","level": 0,"id": "Edit_project_history#reword-commit","title": "Edit a commit message","disqus_id": "d2","anchor":"#reword-commit","url": "edit-project-history.html"},
"Edit_project_history#interactive-rebase": {"parentId": "Edit_project_history","level": 0,"id": "Edit_project_history#interactive-rebase","title": "Edit project history by performing interactive rebase","disqus_id": "d2","anchor":"#interactive-rebase","url": "edit-project-history.html"},
"Manage_projects_hosted_on_GitHub#clone-from-GitHub": {"parentId": "Manage_projects_hosted_on_GitHub","level": 0,"id": "Manage_projects_hosted_on_GitHub#clone-from-GitHub","title": "Check out a project (clone)","disqus_id": "d2","anchor":"#clone-from-GitHub","url": "manage-projects-hosted-on-github.html"},
"Manage_projects_hosted_on_GitHub#share-on-GitHub": {"parentId": "Manage_projects_hosted_on_GitHub","level": 0,"id": "Manage_projects_hosted_on_GitHub#share-on-GitHub","title": "Share a project on GitHub","disqus_id": "d2","anchor":"#share-on-GitHub","url": "manage-projects-hosted-on-github.html"},
"Manage_projects_hosted_on_GitHub#jump_to_github_version": {"parentId": "Manage_projects_hosted_on_GitHub","level": 0,"id": "Manage_projects_hosted_on_GitHub#jump_to_github_version","title": "Jump to the GitHub version of a file","disqus_id": "d2","anchor":"#jump_to_github_version","url": "manage-projects-hosted-on-github.html"},
"Contribute_to_projects#fork": {"parentId": "Contribute_to_projects","level": 0,"id": "Contribute_to_projects#fork","title": "Fork a project","disqus_id": "d2","anchor":"#fork","url": "contribute-to-projects.html"},
"Contribute_to_projects#create-pull-request": {"parentId": "Contribute_to_projects","level": 0,"id": "Contribute_to_projects#create-pull-request","title": "Create a pull request","disqus_id": "d2","anchor":"#create-pull-request","url": "contribute-to-projects.html"},
"Contribute_to_projects#incoming_pull_requests": {"parentId": "Contribute_to_projects","level": 0,"id": "Contribute_to_projects#incoming_pull_requests","title": "Manage incoming pull requests","disqus_id": "d2","anchor":"#incoming_pull_requests","url": "contribute-to-projects.html"},
"concepts.versionControl.localHistory#source": {"parentId": "concepts.versionControl.localHistory","level": 0,"id": "concepts.versionControl.localHistory#source","title": "Viewing Local History for source code elements","disqus_id": "d2","anchor":"#source","url": "local-history.html"},
"concepts.versionControl.localHistory#labels": {"parentId": "concepts.versionControl.localHistory","level": 0,"id": "concepts.versionControl.localHistory#labels","title": "Adding labels to Local History","disqus_id": "d2","anchor":"#labels","url": "local-history.html"},
"concepts.versionControl.localHistory#share": {"parentId": "concepts.versionControl.localHistory","level": 0,"id": "concepts.versionControl.localHistory#share","title": "Sharing Local History","disqus_id": "d2","anchor":"#share","url": "local-history.html"},
"concepts.versionControl.localHistory#recent-changes": {"parentId": "concepts.versionControl.localHistory","level": 0,"id": "concepts.versionControl.localHistory#recent-changes","title": "Viewing recent changes","disqus_id": "d2","anchor":"#recent-changes","url": "local-history.html"},
"concepts.versionControl.localHistory#retention": {"parentId": "concepts.versionControl.localHistory","level": 0,"id": "concepts.versionControl.localHistory#retention","title": "Retention period for Local History","disqus_id": "d2","anchor":"#retention","url": "local-history.html"},
"concepts.versionControl.localHistory#location": {"parentId": "concepts.versionControl.localHistory","level": 0,"id": "concepts.versionControl.localHistory#location","title": "Location of Local History files","disqus_id": "d2","anchor":"#location","url": "local-history.html"},
"managing_tasks_and_context#issue_tracker_integration": {"parentId": "managing_tasks_and_context","level": 0,"id": "managing_tasks_and_context#issue_tracker_integration","title": "Configuring integration with issue trackers","disqus_id": "d2","anchor":"#issue_tracker_integration","url": "managing-tasks-and-context.html"},
"managing_tasks_and_context#fc610803": {"parentId": "managing_tasks_and_context","level": 1,"id": "managing_tasks_and_context#fc610803","title": "Connect the IDE to your tracker","disqus_id": "d2","anchor":"#fc610803","url": "managing-tasks-and-context.html"},
"managing_tasks_and_context#40f0c3f1": {"parentId": "managing_tasks_and_context","level": 1,"id": "managing_tasks_and_context#40f0c3f1","title": "Specify additional integration options","disqus_id": "d2","anchor":"#40f0c3f1","url": "managing-tasks-and-context.html"},
"managing_tasks_and_context#work-with-tasks": {"parentId": "managing_tasks_and_context","level": 0,"id": "managing_tasks_and_context#work-with-tasks","title": "Working with tasks","disqus_id": "d2","anchor":"#work-with-tasks","url": "managing-tasks-and-context.html"},
"managing_tasks_and_context#open-tracker-tasks": {"parentId": "managing_tasks_and_context","level": 1,"id": "managing_tasks_and_context#open-tracker-tasks","title": "Open tracker tasks","disqus_id": "d2","anchor":"#open-tracker-tasks","url": "managing-tasks-and-context.html"},
"managing_tasks_and_context#create-local-tasks": {"parentId": "managing_tasks_and_context","level": 1,"id": "managing_tasks_and_context#create-local-tasks","title": "Create local tasks","disqus_id": "d2","anchor":"#create-local-tasks","url": "managing-tasks-and-context.html"},
"managing_tasks_and_context#view-task-description": {"parentId": "managing_tasks_and_context","level": 1,"id": "managing_tasks_and_context#view-task-description","title": "View task description","disqus_id": "d2","anchor":"#view-task-description","url": "managing-tasks-and-context.html"},
"managing_tasks_and_context#view-closed-tasks": {"parentId": "managing_tasks_and_context","level": 1,"id": "managing_tasks_and_context#view-closed-tasks","title": "View closed tasks","disqus_id": "d2","anchor":"#view-closed-tasks","url": "managing-tasks-and-context.html"},
"managing_tasks_and_context#close_delete_tasks": {"parentId": "managing_tasks_and_context","level": 1,"id": "managing_tasks_and_context#close_delete_tasks","title": "Close tasks","disqus_id": "d2","anchor":"#close_delete_tasks","url": "managing-tasks-and-context.html"},
"managing_tasks_and_context#ea142e45": {"parentId": "managing_tasks_and_context","level": 1,"id": "managing_tasks_and_context#ea142e45","title": "Delete tasks","disqus_id": "d2","anchor":"#ea142e45","url": "managing-tasks-and-context.html"},
"managing_tasks_and_context#work-with-context": {"parentId": "managing_tasks_and_context","level": 0,"id": "managing_tasks_and_context#work-with-context","title": "Working with contexts","disqus_id": "d2","anchor":"#work-with-context","url": "managing-tasks-and-context.html"},
"managing_tasks_and_context#save-context": {"parentId": "managing_tasks_and_context","level": 1,"id": "managing_tasks_and_context#save-context","title": "Save a context","disqus_id": "d2","anchor":"#save-context","url": "managing-tasks-and-context.html"},
"managing_tasks_and_context#switch-contexts": {"parentId": "managing_tasks_and_context","level": 1,"id": "managing_tasks_and_context#switch-contexts","title": "Switch between contexts","disqus_id": "d2","anchor":"#switch-contexts","url": "managing-tasks-and-context.html"},
"managing_tasks_and_context#clear-delete-context": {"parentId": "managing_tasks_and_context","level": 1,"id": "managing_tasks_and_context#clear-delete-context","title": "Clear a context","disqus_id": "d2","anchor":"#clear-delete-context","url": "managing-tasks-and-context.html"},
"managing_tasks_and_context#23fae609": {"parentId": "managing_tasks_and_context","level": 1,"id": "managing_tasks_and_context#23fae609","title": "Delete a context","disqus_id": "d2","anchor":"#23fae609","url": "managing-tasks-and-context.html"},
"Migrating_from_Eclipse_to_IntelliJ_IDEA#96238eea": {"parentId": "Migrating_from_Eclipse_to_IntelliJ_IDEA","level": 0,"id": "Migrating_from_Eclipse_to_IntelliJ_IDEA#96238eea","title": "Overview","disqus_id": "d2","anchor":"#96238eea","url": "migrating-from-eclipse-to-intellij-idea.html"},
"Migrating_from_Eclipse_to_IntelliJ_IDEA#user_interface": {"parentId": "Migrating_from_Eclipse_to_IntelliJ_IDEA","level": 0,"id": "Migrating_from_Eclipse_to_IntelliJ_IDEA#user_interface","title": "User Interface","disqus_id": "d2","anchor":"#user_interface","url": "migrating-from-eclipse-to-intellij-idea.html"},
"Migrating_from_Eclipse_to_IntelliJ_IDEA#workflows": {"parentId": "Migrating_from_Eclipse_to_IntelliJ_IDEA","level": 0,"id": "Migrating_from_Eclipse_to_IntelliJ_IDEA#workflows","title": "General workflows","disqus_id": "d2","anchor":"#workflows","url": "migrating-from-eclipse-to-intellij-idea.html"},
"Migrating_from_Eclipse_to_IntelliJ_IDEA#Shortcuts": {"parentId": "Migrating_from_Eclipse_to_IntelliJ_IDEA","level": 0,"id": "Migrating_from_Eclipse_to_IntelliJ_IDEA#Shortcuts","title": "Shortcuts","disqus_id": "d2","anchor":"#Shortcuts","url": "migrating-from-eclipse-to-intellij-idea.html"},
"Migrating_from_Eclipse_to_IntelliJ_IDEA#CodingAssistance": {"parentId": "Migrating_from_Eclipse_to_IntelliJ_IDEA","level": 0,"id": "Migrating_from_Eclipse_to_IntelliJ_IDEA#CodingAssistance","title": "Coding assistance","disqus_id": "d2","anchor":"#CodingAssistance","url": "migrating-from-eclipse-to-intellij-idea.html"},
"Migrating_from_Eclipse_to_IntelliJ_IDEA#CodeFormatting": {"parentId": "Migrating_from_Eclipse_to_IntelliJ_IDEA","level": 0,"id": "Migrating_from_Eclipse_to_IntelliJ_IDEA#CodeFormatting","title": "Code formatting","disqus_id": "d2","anchor":"#CodeFormatting","url": "migrating-from-eclipse-to-intellij-idea.html"},
"Migrating_from_Eclipse_to_IntelliJ_IDEA#RunningReloadingChanges": {"parentId": "Migrating_from_Eclipse_to_IntelliJ_IDEA","level": 0,"id": "Migrating_from_Eclipse_to_IntelliJ_IDEA#RunningReloadingChanges","title": "Running and reloading changes","disqus_id": "d2","anchor":"#RunningReloadingChanges","url": "migrating-from-eclipse-to-intellij-idea.html"},
"Migrating_from_Eclipse_to_IntelliJ_IDEA#Debugging": {"parentId": "Migrating_from_Eclipse_to_IntelliJ_IDEA","level": 0,"id": "Migrating_from_Eclipse_to_IntelliJ_IDEA#Debugging","title": "Debugging","disqus_id": "d2","anchor":"#Debugging","url": "migrating-from-eclipse-to-intellij-idea.html"},
"Migrating_from_Eclipse_to_IntelliJ_IDEA#ApplicationServers": {"parentId": "Migrating_from_Eclipse_to_IntelliJ_IDEA","level": 0,"id": "Migrating_from_Eclipse_to_IntelliJ_IDEA#ApplicationServers","title": "Working with Application Servers (Tomcat/TomEE, JBoss EAP, Glassfish, WebLogic, WebSphere)","disqus_id": "d2","anchor":"#ApplicationServers","url": "migrating-from-eclipse-to-intellij-idea.html"},
"Migrating_from_Eclipse_to_IntelliJ_IDEA#BuildTools": {"parentId": "Migrating_from_Eclipse_to_IntelliJ_IDEA","level": 0,"id": "Migrating_from_Eclipse_to_IntelliJ_IDEA#BuildTools","title": "Working with Build Tools (Maven/Gradle)","disqus_id": "d2","anchor":"#BuildTools","url": "migrating-from-eclipse-to-intellij-idea.html"},
"Migrating_from_Eclipse_to_IntelliJ_IDEA#VCS": {"parentId": "Migrating_from_Eclipse_to_IntelliJ_IDEA","level": 0,"id": "Migrating_from_Eclipse_to_IntelliJ_IDEA#VCS","title": "Working with VCS (Git, Mercurial, Subversion, Perforce)","disqus_id": "d2","anchor":"#VCS","url": "migrating-from-eclipse-to-intellij-idea.html"},
"Migrating_from_Eclipse_to_IntelliJ_IDEA#migratingEclipseProject": {"parentId": "Migrating_from_Eclipse_to_IntelliJ_IDEA","level": 0,"id": "Migrating_from_Eclipse_to_IntelliJ_IDEA#migratingEclipseProject","title": "Importing an Eclipse project to IntelliJ IDEA","disqus_id": "d2","anchor":"#migratingEclipseProject","url": "migrating-from-eclipse-to-intellij-idea.html"},
"Gradle#project_create_gradle": {"parentId": "Gradle","level": 0,"id": "Gradle#project_create_gradle","title": "Creating a new Gradle project","disqus_id": "d2","anchor":"#project_create_gradle","url": "gradle.html"},
"Gradle#gradle_version_install": {"parentId": "Gradle","level": 0,"id": "Gradle#gradle_version_install","title": "Configuring a Gradle version for a project","disqus_id": "d2","anchor":"#gradle_version_install","url": "gradle.html"},
"Gradle#gradle_add_module": {"parentId": "Gradle","level": 0,"id": "Gradle#gradle_add_module","title": "Adding a new Gradle module to an existing project","disqus_id": "d2","anchor":"#gradle_add_module","url": "gradle.html"},
"Gradle#gradle_import": {"parentId": "Gradle","level": 0,"id": "Gradle#gradle_import","title": "Importing a project from a Gradle model","disqus_id": "d2","anchor":"#gradle_import","url": "gradle.html"},
"Gradle#import_gradle_module": {"parentId": "Gradle","level": 0,"id": "Gradle#import_gradle_module","title": "Importing a Gradle module","disqus_id": "d2","anchor":"#import_gradle_module","url": "gradle.html"},
"Gradle#638f77d9": {"parentId": "Gradle","level": 0,"id": "Gradle#638f77d9","title": "Working with Gradle projects","disqus_id": "d2","anchor":"#638f77d9","url": "gradle.html"},
"Gradle#link_gradle_project": {"parentId": "Gradle","level": 1,"id": "Gradle#link_gradle_project","title": "Linking a Gradle project to the IntelliJ IDEA project","disqus_id": "d2","anchor":"#link_gradle_project","url": "gradle.html"},
"Gradle#navigate_build_file": {"parentId": "Gradle","level": 1,"id": "Gradle#navigate_build_file","title": "Navigating to the build.gradle file","disqus_id": "d2","anchor":"#navigate_build_file","url": "gradle.html"},
"Gradle#ignore_detach_gradle_project": {"parentId": "Gradle","level": 1,"id": "Gradle#ignore_detach_gradle_project","title": "Detaching or ignoring a linked Gradle project","disqus_id": "d2","anchor":"#ignore_detach_gradle_project","url": "gradle.html"},
"Gradle#gradle_refresh_project": {"parentId": "Gradle","level": 1,"id": "Gradle#gradle_refresh_project","title": "Refreshing a linked Gradle project","disqus_id": "d2","anchor":"#gradle_refresh_project","url": "gradle.html"},
"Gradle#gradle_composite_build": {"parentId": "Gradle","level": 1,"id": "Gradle#gradle_composite_build","title": "Configuring Gradle Composite Build","disqus_id": "d2","anchor":"#gradle_composite_build","url": "gradle.html"},
"Gradle#gradle_source_sets": {"parentId": "Gradle","level": 1,"id": "Gradle#gradle_source_sets","title": "Using Gradle source sets","disqus_id": "d2","anchor":"#gradle_source_sets","url": "gradle.html"},
"Gradle#buildSrc": {"parentId": "Gradle","level": 1,"id": "Gradle#buildSrc","title": "Using buildSrc","disqus_id": "d2","anchor":"#buildSrc","url": "gradle.html"},
"Gradle#delegate_build_gradle": {"parentId": "Gradle","level": 1,"id": "Gradle#delegate_build_gradle","title": "Delegating build and run actions to Gradle","disqus_id": "d2","anchor":"#delegate_build_gradle","url": "gradle.html"},
"Gradle#configure_gradle_test_runner": {"parentId": "Gradle","level": 1,"id": "Gradle#configure_gradle_test_runner","title": "Configuring and using a Gradle test runner","disqus_id": "d2","anchor":"#configure_gradle_test_runner","url": "gradle.html"},
"Gradle#gradle_testSuites": {"parentId": "Gradle","level": 1,"id": "Gradle#gradle_testSuites","title": "Running internal Gradle test suits","disqus_id": "d2","anchor":"#gradle_testSuites","url": "gradle.html"},
"Gradle#gradle_tasks": {"parentId": "Gradle","level": 0,"id": "Gradle#gradle_tasks","title": "Working with Gradle tasks","disqus_id": "d2","anchor":"#gradle_tasks","url": "gradle.html"},
"Gradle#b1eab635": {"parentId": "Gradle","level": 1,"id": "Gradle#b1eab635","title": "Running Gradle tasks","disqus_id": "d2","anchor":"#b1eab635","url": "gradle.html"},
"Gradle#gradle_tool_bar": {"parentId": "Gradle","level": 2,"id": "Gradle#gradle_tool_bar","title": "Running a Gradle task from the Gradle toolbar","disqus_id": "d2","anchor":"#gradle_tool_bar","url": "gradle.html"},
"Gradle#gradle_run_config": {"parentId": "Gradle","level": 2,"id": "Gradle#gradle_run_config","title": "Running a Gradle task via Run Configurations","disqus_id": "d2","anchor":"#gradle_run_config","url": "gradle.html"},
"Gradle#gradle_context_menu": {"parentId": "Gradle","level": 2,"id": "Gradle#gradle_context_menu","title": "Running a Gradle task from the context menu","disqus_id": "d2","anchor":"#gradle_context_menu","url": "gradle.html"},
"Gradle#gradle_run_several_tasks": {"parentId": "Gradle","level": 2,"id": "Gradle#gradle_run_several_tasks","title": "Running several Gradle tasks with one Run/Debug configuration","disqus_id": "d2","anchor":"#gradle_run_several_tasks","url": "gradle.html"},
"Gradle#debug_gradle": {"parentId": "Gradle","level": 1,"id": "Gradle#debug_gradle","title": "Debugging Gradle tasks and scripts","disqus_id": "d2","anchor":"#debug_gradle","url": "gradle.html"},
"Gradle#gradle_task_shortcut": {"parentId": "Gradle","level": 1,"id": "Gradle#gradle_task_shortcut","title": "Assigning a shortcut to a Gradle task","disqus_id": "d2","anchor":"#gradle_task_shortcut","url": "gradle.html"},
"Gradle#config_triggers_gradle": {"parentId": "Gradle","level": 1,"id": "Gradle#config_triggers_gradle","title": "Configuring running triggers for Gradle tasks","disqus_id": "d2","anchor":"#config_triggers_gradle","url": "gradle.html"},
"concepts.builder.maven#maven_create_project": {"parentId": "concepts.builder.maven","level": 0,"id": "concepts.builder.maven#maven_create_project","title": "Creating a new Maven project","disqus_id": "d2","anchor":"#maven_create_project","url": "maven-support.html"},
"concepts.builder.maven#maven_import_project_start": {"parentId": "concepts.builder.maven","level": 0,"id": "concepts.builder.maven#maven_import_project_start","title": "Importing a Maven project","disqus_id": "d2","anchor":"#maven_import_project_start","url": "maven-support.html"},
"concepts.builder.maven#maven_add_module": {"parentId": "concepts.builder.maven","level": 0,"id": "concepts.builder.maven#maven_add_module","title": "Adding a new Maven module to an existing project","disqus_id": "d2","anchor":"#maven_add_module","url": "maven-support.html"},
"concepts.builder.maven#maven_multi_module": {"parentId": "concepts.builder.maven","level": 0,"id": "concepts.builder.maven#maven_multi_module","title": "Configuring a multi-module Maven project","disqus_id": "d2","anchor":"#maven_multi_module","url": "maven-support.html"},
"concepts.builder.maven#convert_project_to_maven": {"parentId": "concepts.builder.maven","level": 0,"id": "concepts.builder.maven#convert_project_to_maven","title": "Converting a regular project into a Maven project","disqus_id": "d2","anchor":"#convert_project_to_maven","url": "maven-support.html"},
"concepts.builder.maven#delegate_to_maven": {"parentId": "concepts.builder.maven","level": 0,"id": "concepts.builder.maven#delegate_to_maven","title": "Delegating build and run actions to Maven","disqus_id": "d2","anchor":"#delegate_to_maven","url": "maven-support.html"},
"concepts.builder.maven#maven_dependencies": {"parentId": "concepts.builder.maven","level": 0,"id": "concepts.builder.maven#maven_dependencies","title": "Working with Maven dependencies","disqus_id": "d2","anchor":"#maven_dependencies","url": "maven-support.html"},
"concepts.builder.maven#generate_maven_dependency": {"parentId": "concepts.builder.maven","level": 1,"id": "concepts.builder.maven#generate_maven_dependency","title": "Adding a Maven dependency","disqus_id": "d2","anchor":"#generate_maven_dependency","url": "maven-support.html"},
"concepts.builder.maven#maven_dependency_multi_module": {"parentId": "concepts.builder.maven","level": 1,"id": "concepts.builder.maven#maven_dependency_multi_module","title": "Centralizing dependency information","disqus_id": "d2","anchor":"#maven_dependency_multi_module","url": "maven-support.html"},
"concepts.builder.maven#add_scope_maven_dependency": {"parentId": "concepts.builder.maven","level": 1,"id": "concepts.builder.maven#add_scope_maven_dependency","title": "Adding a scope for the Maven dependency","disqus_id": "d2","anchor":"#add_scope_maven_dependency","url": "maven-support.html"},
"concepts.builder.maven#view_transitive_dependency_maven": {"parentId": "concepts.builder.maven","level": 1,"id": "concepts.builder.maven#view_transitive_dependency_maven","title": "Working with Maven transitive dependencies","disqus_id": "d2","anchor":"#view_transitive_dependency_maven","url": "maven-support.html"},
"concepts.builder.maven#maven_import_dependency": {"parentId": "concepts.builder.maven","level": 1,"id": "concepts.builder.maven#maven_import_dependency","title": "Importing Maven dependencies","disqus_id": "d2","anchor":"#maven_import_dependency","url": "maven-support.html"},
"concepts.builder.maven#maven_dependency_diagram": {"parentId": "concepts.builder.maven","level": 1,"id": "concepts.builder.maven#maven_dependency_diagram","title": "Viewing Maven dependencies as a diagram","disqus_id": "d2","anchor":"#maven_dependency_diagram","url": "maven-support.html"},
"concepts.builder.maven#maven_goals": {"parentId": "concepts.builder.maven","level": 0,"id": "concepts.builder.maven#maven_goals","title": "Working with Maven goals","disqus_id": "d2","anchor":"#maven_goals","url": "maven-support.html"},
"concepts.builder.maven#run_goal": {"parentId": "concepts.builder.maven","level": 1,"id": "concepts.builder.maven#run_goal","title": "Running Maven goals","disqus_id": "d2","anchor":"#run_goal","url": "maven-support.html"},
"concepts.builder.maven#run_maven_command_line": {"parentId": "concepts.builder.maven","level": 2,"id": "concepts.builder.maven#run_maven_command_line","title": "Running a Maven goal from the command line","disqus_id": "d2","anchor":"#run_maven_command_line","url": "maven-support.html"},
"concepts.builder.maven#run_maven_goal_context_menu": {"parentId": "concepts.builder.maven","level": 2,"id": "concepts.builder.maven#run_maven_goal_context_menu","title": "Running a Maven goal from the context menu","disqus_id": "d2","anchor":"#run_maven_goal_context_menu","url": "maven-support.html"},
"concepts.builder.maven#run_maven_goal_run_config": {"parentId": "concepts.builder.maven","level": 2,"id": "concepts.builder.maven#run_maven_goal_run_config","title": "Running a Maven goal or a set of goals via Run configuration","disqus_id": "d2","anchor":"#run_maven_goal_run_config","url": "maven-support.html"},
"concepts.builder.maven#trigger_goal": {"parentId": "concepts.builder.maven","level": 1,"id": "concepts.builder.maven#trigger_goal","title": "Configuring triggers for Maven goals","disqus_id": "d2","anchor":"#trigger_goal","url": "maven-support.html"},
"concepts.builder.maven#goal_shortcut": {"parentId": "concepts.builder.maven","level": 1,"id": "concepts.builder.maven#goal_shortcut","title": "Associating Maven goals with keyboard shortcuts","disqus_id": "d2","anchor":"#goal_shortcut","url": "maven-support.html"},
"concepts.builder.maven#debug_goal": {"parentId": "concepts.builder.maven","level": 1,"id": "concepts.builder.maven#debug_goal","title": "Debugging Maven goals","disqus_id": "d2","anchor":"#debug_goal","url": "maven-support.html"},
"concepts.builder.maven#maven_project_test": {"parentId": "concepts.builder.maven","level": 1,"id": "concepts.builder.maven#maven_project_test","title": "Running tests in Maven projects","disqus_id": "d2","anchor":"#maven_project_test","url": "maven-support.html"},
"concepts.builder.maven#use_profiles_maven": {"parentId": "concepts.builder.maven","level": 0,"id": "concepts.builder.maven#use_profiles_maven","title": "Working with Maven profiles","disqus_id": "d2","anchor":"#use_profiles_maven","url": "maven-support.html"},
"concepts.builder.maven#declare_maven_profiles": {"parentId": "concepts.builder.maven","level": 1,"id": "concepts.builder.maven#declare_maven_profiles","title": "Declaring Maven profiles","disqus_id": "d2","anchor":"#declare_maven_profiles","url": "maven-support.html"},
"concepts.builder.maven#activate_maven_profiles": {"parentId": "concepts.builder.maven","level": 1,"id": "concepts.builder.maven#activate_maven_profiles","title": "Activating Maven profiles","disqus_id": "d2","anchor":"#activate_maven_profiles","url": "maven-support.html"},
"CoffeeScript#ws_coffee_before_you_start": {"parentId": "CoffeeScript","level": 0,"id": "CoffeeScript#ws_coffee_before_you_start","title": "Before you start","disqus_id": "d2","anchor":"#ws_coffee_before_you_start","url": "coffeescript.html"},
"CoffeeScript#ws_coffee_compilation": {"parentId": "CoffeeScript","level": 0,"id": "CoffeeScript#ws_coffee_compilation","title": "Compiling CoffeeScript into JavaScript","disqus_id": "d2","anchor":"#ws_coffee_compilation","url": "coffeescript.html"},
"CoffeeScript#ws_coffee_running": {"parentId": "CoffeeScript","level": 0,"id": "CoffeeScript#ws_coffee_running","title": "Running CoffeeScript","disqus_id": "d2","anchor":"#ws_coffee_running","url": "coffeescript.html"},
"CoffeeScript#601b7146": {"parentId": "CoffeeScript","level": 0,"id": "CoffeeScript#601b7146","title": "Debugging CoffeeScript","disqus_id": "d2","anchor":"#601b7146","url": "coffeescript.html"},
"Context_and_Dependency_Injection_CDI#check-cdi-plugin": {"parentId": "Context_and_Dependency_Injection_CDI","level": 0,"id": "Context_and_Dependency_Injection_CDI#check-cdi-plugin","title": "Make sure that the CDI plugin is enabled","disqus_id": "d2","anchor":"#check-cdi-plugin","url": "context-and-dependency-injection-cdi.html"},
"Context_and_Dependency_Injection_CDI#enable-cdi-new-project": {"parentId": "Context_and_Dependency_Injection_CDI","level": 0,"id": "Context_and_Dependency_Injection_CDI#enable-cdi-new-project","title": "Enable CDI support when creating a project or module","disqus_id": "d2","anchor":"#enable-cdi-new-project","url": "context-and-dependency-injection-cdi.html"},
"Context_and_Dependency_Injection_CDI#add-cdi-support": {"parentId": "Context_and_Dependency_Injection_CDI","level": 0,"id": "Context_and_Dependency_Injection_CDI#add-cdi-support","title": "Adding CDI support for an existing module","disqus_id": "d2","anchor":"#add-cdi-support","url": "context-and-dependency-injection-cdi.html"},
"Context_and_Dependency_Injection_CDI#change-cdi-version": {"parentId": "Context_and_Dependency_Injection_CDI","level": 0,"id": "Context_and_Dependency_Injection_CDI#change-cdi-version","title": "Change the CDI version","disqus_id": "d2","anchor":"#change-cdi-version","url": "context-and-dependency-injection-cdi.html"},
"Connecting_to_a_database#configuring-connections": {"parentId": "Connecting_to_a_database","level": 0,"id": "Connecting_to_a_database#configuring-connections","title": "Configuring data source connections","disqus_id": "d2","anchor":"#configuring-connections","url": "connecting-to-a-database.html"},
"Managing_data_sources#Create a data source": {"parentId": "Managing_data_sources","level": 0,"id": "Managing_data_sources#Create a data source","title": "Create a data source","disqus_id": "d2","anchor":"#Create a data source","url": "managing-data-sources.html"},
"Managing_data_sources#a6ade351": {"parentId": "Managing_data_sources","level": 0,"id": "Managing_data_sources#a6ade351","title": "Customizing data sources","disqus_id": "d2","anchor":"#a6ade351","url": "managing-data-sources.html"},
"Managing_data_sources#remove_ds": {"parentId": "Managing_data_sources","level": 0,"id": "Managing_data_sources#remove_ds","title": "Remove data sources","disqus_id": "d2","anchor":"#remove_ds","url": "managing-data-sources.html"},
"Working_with_the_Database_tool_window#overview": {"parentId": "Working_with_the_Database_tool_window","level": 0,"id": "Working_with_the_Database_tool_window#overview","title": "Overview","disqus_id": "d2","anchor":"#overview","url": "working-with-the-database-tool-window.html"},
"Working_with_the_Database_tool_window#open_db_tool_window": {"parentId": "Working_with_the_Database_tool_window","level": 0,"id": "Working_with_the_Database_tool_window#open_db_tool_window","title": "Opening the Database tool window","disqus_id": "d2","anchor":"#open_db_tool_window","url": "working-with-the-database-tool-window.html"},
"Working_with_the_Database_tool_window#create_data_source": {"parentId": "Working_with_the_Database_tool_window","level": 0,"id": "Working_with_the_Database_tool_window#create_data_source","title": "Creating a data source","disqus_id": "d2","anchor":"#create_data_source","url": "working-with-the-database-tool-window.html"},
"Working_with_the_Database_tool_window#synch": {"parentId": "Working_with_the_Database_tool_window","level": 0,"id": "Working_with_the_Database_tool_window#synch","title": "Synchronizing the view of a DB data source","disqus_id": "d2","anchor":"#synch","url": "working-with-the-database-tool-window.html"},
"Working_with_the_Database_tool_window#db_resolve_problems": {"parentId": "Working_with_the_Database_tool_window","level": 0,"id": "Working_with_the_Database_tool_window#db_resolve_problems","title": "Resolve visualization problems","disqus_id": "d2","anchor":"#db_resolve_problems","url": "working-with-the-database-tool-window.html"},
"Working_with_the_Database_tool_window#db_adjust_view_by_options": {"parentId": "Working_with_the_Database_tool_window","level": 0,"id": "Working_with_the_Database_tool_window#db_adjust_view_by_options","title": "Adjusting the view by means of view options","disqus_id": "d2","anchor":"#db_adjust_view_by_options","url": "working-with-the-database-tool-window.html"},
"Working_with_the_Database_tool_window#db_adjust_view_by_filters": {"parentId": "Working_with_the_Database_tool_window","level": 0,"id": "Working_with_the_Database_tool_window#db_adjust_view_by_filters","title": "Adjusting the view by means of object filters","disqus_id": "d2","anchor":"#db_adjust_view_by_filters","url": "working-with-the-database-tool-window.html"},
"Working_with_the_Database_tool_window#show_hide_schemas": {"parentId": "Working_with_the_Database_tool_window","level": 0,"id": "Working_with_the_Database_tool_window#show_hide_schemas","title": "Showing and hiding schemas","disqus_id": "d2","anchor":"#show_hide_schemas","url": "working-with-the-database-tool-window.html"},
"Working_with_the_Database_tool_window#db_find_items": {"parentId": "Working_with_the_Database_tool_window","level": 0,"id": "Working_with_the_Database_tool_window#db_find_items","title": "Finding items","disqus_id": "d2","anchor":"#db_find_items","url": "working-with-the-database-tool-window.html"},
"Working_with_the_Database_tool_window#db_find_usages": {"parentId": "Working_with_the_Database_tool_window","level": 0,"id": "Working_with_the_Database_tool_window#db_find_usages","title": "Finding usages of database objects","disqus_id": "d2","anchor":"#db_find_usages","url": "working-with-the-database-tool-window.html"},
"Working_with_the_Database_tool_window#db_copy": {"parentId": "Working_with_the_Database_tool_window","level": 0,"id": "Working_with_the_Database_tool_window#db_copy","title": "Creating a copy of a data source","disqus_id": "d2","anchor":"#db_copy","url": "working-with-the-database-tool-window.html"},
"Working_with_the_Database_tool_window#create_db_or_schema": {"parentId": "Working_with_the_Database_tool_window","level": 0,"id": "Working_with_the_Database_tool_window#create_db_or_schema","title": "Creating a database or schema","disqus_id": "d2","anchor":"#create_db_or_schema","url": "working-with-the-database-tool-window.html"},
"Working_with_the_Database_tool_window#create_table_column_etc": {"parentId": "Working_with_the_Database_tool_window","level": 0,"id": "Working_with_the_Database_tool_window#create_table_column_etc","title": "Creating a table, a column, an index, or a primary or foreign key","disqus_id": "d2","anchor":"#create_table_column_etc","url": "working-with-the-database-tool-window.html"},
"Working_with_the_Database_tool_window#modify_name_generation_templates": {"parentId": "Working_with_the_Database_tool_window","level": 0,"id": "Working_with_the_Database_tool_window#modify_name_generation_templates","title": "Modifying templates for generated index and key names","disqus_id": "d2","anchor":"#modify_name_generation_templates","url": "working-with-the-database-tool-window.html"},
"Working_with_the_Database_tool_window#viewing_quick_doc": {"parentId": "Working_with_the_Database_tool_window","level": 0,"id": "Working_with_the_Database_tool_window#viewing_quick_doc","title": "View quick documentation","disqus_id": "d2","anchor":"#viewing_quick_doc","url": "working-with-the-database-tool-window.html"},
"Working_with_the_Database_tool_window#rename_table_or_column": {"parentId": "Working_with_the_Database_tool_window","level": 0,"id": "Working_with_the_Database_tool_window#rename_table_or_column","title": "Renaming items","disqus_id": "d2","anchor":"#rename_table_or_column","url": "working-with-the-database-tool-window.html"},
"Working_with_the_Database_tool_window#preview": {"parentId": "Working_with_the_Database_tool_window","level": 0,"id": "Working_with_the_Database_tool_window#preview","title": "Previewing changes","disqus_id": "d2","anchor":"#preview","url": "working-with-the-database-tool-window.html"},
"Working_with_the_Database_tool_window#modify_definition": {"parentId": "Working_with_the_Database_tool_window","level": 0,"id": "Working_with_the_Database_tool_window#modify_definition","title": "Modifying the definition of a table, column, index, or a primary or foreign key","disqus_id": "d2","anchor":"#modify_definition","url": "working-with-the-database-tool-window.html"},
"Working_with_the_Database_tool_window#open_db_object_definition": {"parentId": "Working_with_the_Database_tool_window","level": 0,"id": "Working_with_the_Database_tool_window#open_db_object_definition","title": "Opening DDL definitions of database objects in the editor","disqus_id": "d2","anchor":"#open_db_object_definition","url": "working-with-the-database-tool-window.html"},
"Working_with_the_Database_tool_window#generate_ddl": {"parentId": "Working_with_the_Database_tool_window","level": 0,"id": "Working_with_the_Database_tool_window#generate_ddl","title": "Generating DDL definitions","disqus_id": "d2","anchor":"#generate_ddl","url": "working-with-the-database-tool-window.html"},
"Working_with_the_Database_tool_window#db_open_ddl": {"parentId": "Working_with_the_Database_tool_window","level": 0,"id": "Working_with_the_Database_tool_window#db_open_ddl","title": "Opening DDL definitions in a database console","disqus_id": "d2","anchor":"#db_open_ddl","url": "working-with-the-database-tool-window.html"},
"Working_with_the_Database_tool_window#db_generate_ddl": {"parentId": "Working_with_the_Database_tool_window","level": 0,"id": "Working_with_the_Database_tool_window#db_generate_ddl","title": "Generating DDL definitions on the clipboard","disqus_id": "d2","anchor":"#db_generate_ddl","url": "working-with-the-database-tool-window.html"},
"Working_with_the_Database_tool_window#compare_ddls": {"parentId": "Working_with_the_Database_tool_window","level": 0,"id": "Working_with_the_Database_tool_window#compare_ddls","title": "Comparing table structures","disqus_id": "d2","anchor":"#compare_ddls","url": "working-with-the-database-tool-window.html"},
"Working_with_the_Database_tool_window#db_diagrams": {"parentId": "Working_with_the_Database_tool_window","level": 0,"id": "Working_with_the_Database_tool_window#db_diagrams","title": "Viewing diagrams","disqus_id": "d2","anchor":"#db_diagrams","url": "working-with-the-database-tool-window.html"},
"Working_with_the_Database_tool_window#copy_table": {"parentId": "Working_with_the_Database_tool_window","level": 0,"id": "Working_with_the_Database_tool_window#copy_table","title": "Copying a table to another database or schema","disqus_id": "d2","anchor":"#copy_table","url": "working-with-the-database-tool-window.html"},
"Working_with_the_Database_tool_window#import_csv": {"parentId": "Working_with_the_Database_tool_window","level": 0,"id": "Working_with_the_Database_tool_window#import_csv","title": "Importing delimiter-separated values into a database","disqus_id": "d2","anchor":"#import_csv","url": "working-with-the-database-tool-window.html"},
"Working_with_the_Database_tool_window#open_table_editor": {"parentId": "Working_with_the_Database_tool_window","level": 0,"id": "Working_with_the_Database_tool_window#open_table_editor","title": "Opening the data editor","disqus_id": "d2","anchor":"#open_table_editor","url": "working-with-the-database-tool-window.html"},
"Working_with_the_Database_tool_window#copy_data_to_other_table": {"parentId": "Working_with_the_Database_tool_window","level": 0,"id": "Working_with_the_Database_tool_window#copy_data_to_other_table","title": "Copying data from one table to another one","disqus_id": "d2","anchor":"#copy_data_to_other_table","url": "working-with-the-database-tool-window.html"},
"Working_with_the_Database_tool_window#saving_data_in_files": {"parentId": "Working_with_the_Database_tool_window","level": 0,"id": "Working_with_the_Database_tool_window#saving_data_in_files","title": "Saving data in files in various forms and formats","disqus_id": "d2","anchor":"#saving_data_in_files","url": "working-with-the-database-tool-window.html"},
"Working_with_the_Database_tool_window#specifying_output_options": {"parentId": "Working_with_the_Database_tool_window","level": 0,"id": "Working_with_the_Database_tool_window#specifying_output_options","title": "Configuring data output formats and options","disqus_id": "d2","anchor":"#specifying_output_options","url": "working-with-the-database-tool-window.html"},
"Working_with_the_Database_tool_window#dump_with_mysqldump": {"parentId": "Working_with_the_Database_tool_window","level": 0,"id": "Working_with_the_Database_tool_window#dump_with_mysqldump","title": "Creating database backups with mysqldump or pg_dump","disqus_id": "d2","anchor":"#dump_with_mysqldump","url": "working-with-the-database-tool-window.html"},
"Working_with_the_Database_tool_window#restore_dump_with_mysql": {"parentId": "Working_with_the_Database_tool_window","level": 0,"id": "Working_with_the_Database_tool_window#restore_dump_with_mysql","title": "Restoring data dumps with mysql, pg_restore or psql","disqus_id": "d2","anchor":"#restore_dump_with_mysql","url": "working-with-the-database-tool-window.html"},
"Working_with_the_Database_tool_window#db_open_default_console": {"parentId": "Working_with_the_Database_tool_window","level": 0,"id": "Working_with_the_Database_tool_window#db_open_default_console","title": "Opening a default database console","disqus_id": "d2","anchor":"#db_open_default_console","url": "working-with-the-database-tool-window.html"},
"Working_with_the_Database_tool_window#create_and_open_console": {"parentId": "Working_with_the_Database_tool_window","level": 0,"id": "Working_with_the_Database_tool_window#create_and_open_console","title": "Creating and opening a new database console","disqus_id": "d2","anchor":"#create_and_open_console","url": "working-with-the-database-tool-window.html"},
"Working_with_the_Database_tool_window#generating_java_entities": {"parentId": "Working_with_the_Database_tool_window","level": 0,"id": "Working_with_the_Database_tool_window#generating_java_entities","title": "Generating Java entity classes for tables and views","disqus_id": "d2","anchor":"#generating_java_entities","url": "working-with-the-database-tool-window.html"},
"Working_with_the_Database_tool_window#db_close_connections": {"parentId": "Working_with_the_Database_tool_window","level": 0,"id": "Working_with_the_Database_tool_window#db_close_connections","title": "Closing database connections","disqus_id": "d2","anchor":"#db_close_connections","url": "working-with-the-database-tool-window.html"},
"Working_with_the_Database_tool_window#remove_items": {"parentId": "Working_with_the_Database_tool_window","level": 0,"id": "Working_with_the_Database_tool_window#remove_items","title": "Removing items","disqus_id": "d2","anchor":"#remove_items","url": "working-with-the-database-tool-window.html"},
"topicId211604#closing": {"parentId": "topicId211604","level": 0,"id": "topicId211604#closing","title": "Closing a console","disqus_id": "d2","anchor":"#closing","url": "working-with-database-consoles.html"},
"topicId211604#manage_consoles": {"parentId": "topicId211604","level": 0,"id": "topicId211604#manage_consoles","title": "Managing database consoles","disqus_id": "d2","anchor":"#manage_consoles","url": "working-with-database-consoles.html"},
"Writing_and_Executing_SQL_Commands#selecting_schema": {"parentId": "Writing_and_Executing_SQL_Commands","level": 0,"id": "Writing_and_Executing_SQL_Commands#selecting_schema","title": "Selecting the default schema or database","disqus_id": "d2","anchor":"#selecting_schema","url": "writing-and-executing-sql-commands.html"},
"Writing_and_Executing_SQL_Commands#controlling_search_path": {"parentId": "Writing_and_Executing_SQL_Commands","level": 0,"id": "Writing_and_Executing_SQL_Commands#controlling_search_path","title": "Controlling the schema search path for PostgreSQL and Redshift","disqus_id": "d2","anchor":"#controlling_search_path","url": "writing-and-executing-sql-commands.html"},
"Writing_and_Executing_SQL_Commands#compose_statement": {"parentId": "Writing_and_Executing_SQL_Commands","level": 0,"id": "Writing_and_Executing_SQL_Commands#compose_statement","title": "Composing SQL statements","disqus_id": "d2","anchor":"#compose_statement","url": "writing-and-executing-sql-commands.html"},
"Writing_and_Executing_SQL_Commands#edit_data_for_insert": {"parentId": "Writing_and_Executing_SQL_Commands","level": 0,"id": "Writing_and_Executing_SQL_Commands#edit_data_for_insert","title": "Editing data for INSERT statements in table format","disqus_id": "d2","anchor":"#edit_data_for_insert","url": "writing-and-executing-sql-commands.html"},
"Writing_and_Executing_SQL_Commands#nav_to_db_tool_window": {"parentId": "Writing_and_Executing_SQL_Commands","level": 0,"id": "Writing_and_Executing_SQL_Commands#nav_to_db_tool_window","title": "Navigating to a table or column view in the Database tool window","disqus_id": "d2","anchor":"#nav_to_db_tool_window","url": "writing-and-executing-sql-commands.html"},
"Writing_and_Executing_SQL_Commands#configure_execute": {"parentId": "Writing_and_Executing_SQL_Commands","level": 0,"id": "Writing_and_Executing_SQL_Commands#configure_execute","title": "Configuring the Execute command","disqus_id": "d2","anchor":"#configure_execute","url": "writing-and-executing-sql-commands.html"},
"Writing_and_Executing_SQL_Commands#execute_statement": {"parentId": "Writing_and_Executing_SQL_Commands","level": 0,"id": "Writing_and_Executing_SQL_Commands#execute_statement","title": "Executing SQL statements","disqus_id": "d2","anchor":"#execute_statement","url": "writing-and-executing-sql-commands.html"},
"Writing_and_Executing_SQL_Commands#executing_parameterized_statements": {"parentId": "Writing_and_Executing_SQL_Commands","level": 0,"id": "Writing_and_Executing_SQL_Commands#executing_parameterized_statements","title": "Executing parameterized statements","disqus_id": "d2","anchor":"#executing_parameterized_statements","url": "writing-and-executing-sql-commands.html"},
"Writing_and_Executing_SQL_Commands#executing_group_of_statements": {"parentId": "Writing_and_Executing_SQL_Commands","level": 0,"id": "Writing_and_Executing_SQL_Commands#executing_group_of_statements","title": "Executing a group of statements","disqus_id": "d2","anchor":"#executing_group_of_statements","url": "writing-and-executing-sql-commands.html"},
"Writing_and_Executing_SQL_Commands#executing_part_of_statement": {"parentId": "Writing_and_Executing_SQL_Commands","level": 0,"id": "Writing_and_Executing_SQL_Commands#executing_part_of_statement","title": "Executing a part of a statement (e.g. a subquery)","disqus_id": "d2","anchor":"#executing_part_of_statement","url": "writing-and-executing-sql-commands.html"},
"Writing_and_Executing_SQL_Commands#executing_memorized_statements": {"parentId": "Writing_and_Executing_SQL_Commands","level": 0,"id": "Writing_and_Executing_SQL_Commands#executing_memorized_statements","title": "Executing auto-memorized statements","disqus_id": "d2","anchor":"#executing_memorized_statements","url": "writing-and-executing-sql-commands.html"},
"Writing_and_Executing_SQL_Commands#outputting_the_result_of_select_statement_into_file": {"parentId": "Writing_and_Executing_SQL_Commands","level": 0,"id": "Writing_and_Executing_SQL_Commands#outputting_the_result_of_select_statement_into_file","title": "Outputting the result of a SELECT statement into a file","disqus_id": "d2","anchor":"#outputting_the_result_of_select_statement_into_file","url": "writing-and-executing-sql-commands.html"},
"Writing_and_Executing_SQL_Commands#using_error_notification_bar": {"parentId": "Writing_and_Executing_SQL_Commands","level": 0,"id": "Writing_and_Executing_SQL_Commands#using_error_notification_bar","title": "Using the error notification bar","disqus_id": "d2","anchor":"#using_error_notification_bar","url": "writing-and-executing-sql-commands.html"},
"Writing_and_Executing_SQL_Commands#disconnecting": {"parentId": "Writing_and_Executing_SQL_Commands","level": 0,"id": "Writing_and_Executing_SQL_Commands#disconnecting","title": "Canceling running statements","disqus_id": "d2","anchor":"#disconnecting","url": "writing-and-executing-sql-commands.html"},
"Writing_and_Executing_SQL_Commands#managing_database_transactions": {"parentId": "Writing_and_Executing_SQL_Commands","level": 0,"id": "Writing_and_Executing_SQL_Commands#managing_database_transactions","title": "Managing database transactions","disqus_id": "d2","anchor":"#managing_database_transactions","url": "writing-and-executing-sql-commands.html"},
"Writing_and_Executing_SQL_Commands#run_migrations": {"parentId": "Writing_and_Executing_SQL_Commands","level": 0,"id": "Writing_and_Executing_SQL_Commands#run_migrations","title": "Run migrations","disqus_id": "d2","anchor":"#run_migrations","url": "writing-and-executing-sql-commands.html"},
"Writing_and_Executing_SQL_Commands#run-stored-procedures": {"parentId": "Writing_and_Executing_SQL_Commands","level": 0,"id": "Writing_and_Executing_SQL_Commands#run-stored-procedures","title": "Run stored procedures","disqus_id": "d2","anchor":"#run-stored-procedures","url": "writing-and-executing-sql-commands.html"},
"Writing_and_Executing_SQL_Commands#showing_execution_plans": {"parentId": "Writing_and_Executing_SQL_Commands","level": 0,"id": "Writing_and_Executing_SQL_Commands#showing_execution_plans","title": "Showing execution plans","disqus_id": "d2","anchor":"#showing_execution_plans","url": "writing-and-executing-sql-commands.html"},
"Writing_and_Executing_SQL_Commands#showing_dbms_output_for_oracle": {"parentId": "Writing_and_Executing_SQL_Commands","level": 0,"id": "Writing_and_Executing_SQL_Commands#showing_dbms_output_for_oracle","title": "Showing DBMS_OUTPUT for Oracle","disqus_id": "d2","anchor":"#showing_dbms_output_for_oracle","url": "writing-and-executing-sql-commands.html"},
"Viewing_Query_Results#dc6791c4": {"parentId": "Viewing_Query_Results","level": 0,"id": "Viewing_Query_Results#dc6791c4","title": "Hiding or showing the toolbar","disqus_id": "d2","anchor":"#dc6791c4","url": "viewing-query-results.html"},
"Viewing_Query_Results#pin_result_tab": {"parentId": "Viewing_Query_Results","level": 0,"id": "Viewing_Query_Results#pin_result_tab","title": "Pinning the Result tab","disqus_id": "d2","anchor":"#pin_result_tab","url": "viewing-query-results.html"},
"Viewing_Query_Results#making_all_rows_visible": {"parentId": "Viewing_Query_Results","level": 0,"id": "Viewing_Query_Results#making_all_rows_visible","title": "Making all rows visible simultaneously","disqus_id": "d2","anchor":"#making_all_rows_visible","url": "viewing-query-results.html"},
"Viewing_Query_Results#sorting-data": {"parentId": "Viewing_Query_Results","level": 0,"id": "Viewing_Query_Results#sorting-data","title": "Sorting data","disqus_id": "d2","anchor":"#sorting-data","url": "viewing-query-results.html"},
"Viewing_Query_Results#f160046f": {"parentId": "Viewing_Query_Results","level": 0,"id": "Viewing_Query_Results#f160046f","title": "Reordering columns","disqus_id": "d2","anchor":"#f160046f","url": "viewing-query-results.html"},
"Viewing_Query_Results#hiding_showing_columns": {"parentId": "Viewing_Query_Results","level": 0,"id": "Viewing_Query_Results#hiding_showing_columns","title": "Hiding and showing columns","disqus_id": "d2","anchor":"#hiding_showing_columns","url": "viewing-query-results.html"},
"Viewing_Query_Results#restoring_initial_view": {"parentId": "Viewing_Query_Results","level": 0,"id": "Viewing_Query_Results#restoring_initial_view","title": "Restoring the initial table view","disqus_id": "d2","anchor":"#restoring_initial_view","url": "viewing-query-results.html"},
"Viewing_Query_Results#using_structure_view": {"parentId": "Viewing_Query_Results","level": 0,"id": "Viewing_Query_Results#using_structure_view","title": "Using the Structure view to sort data, and hide and show columns","disqus_id": "d2","anchor":"#using_structure_view","url": "viewing-query-results.html"},
"Viewing_Query_Results#using_unobvious_selection_techniques": {"parentId": "Viewing_Query_Results","level": 0,"id": "Viewing_Query_Results#using_unobvious_selection_techniques","title": "Selecting cells and ranges: using unobvious techniques","disqus_id": "d2","anchor":"#using_unobvious_selection_techniques","url": "viewing-query-results.html"},
"Viewing_Query_Results#manage_db_transactions": {"parentId": "Viewing_Query_Results","level": 0,"id": "Viewing_Query_Results#manage_db_transactions","title": "Managing database transactions","disqus_id": "d2","anchor":"#manage_db_transactions","url": "viewing-query-results.html"},
"Viewing_Query_Results#export_data_to_database": {"parentId": "Viewing_Query_Results","level": 0,"id": "Viewing_Query_Results#export_data_to_database","title": "Exporting the data to another table, schema or database","disqus_id": "d2","anchor":"#export_data_to_database","url": "viewing-query-results.html"},
"Operations_with_tables#create-a-table": {"parentId": "Operations_with_tables","level": 0,"id": "Operations_with_tables#create-a-table","title": "Create a table","disqus_id": "d2","anchor":"#create-a-table","url": "operations-with-tables.html"},
"Operations_with_tables#delete-a-table": {"parentId": "Operations_with_tables","level": 0,"id": "Operations_with_tables#delete-a-table","title": "Delete a table","disqus_id": "d2","anchor":"#delete-a-table","url": "operations-with-tables.html"},
"Operations_with_tables#b07ae4a4": {"parentId": "Operations_with_tables","level": 0,"id": "Operations_with_tables#b07ae4a4","title": "View table data","disqus_id": "d2","anchor":"#b07ae4a4","url": "operations-with-tables.html"},
"Operations_with_tables#making_table_readonly": {"parentId": "Operations_with_tables","level": 0,"id": "Operations_with_tables#making_table_readonly","title": "Enable the read-only mode for a table","disqus_id": "d2","anchor":"#making_table_readonly","url": "operations-with-tables.html"},
"Operations_with_tables#filtering_data": {"parentId": "Operations_with_tables","level": 0,"id": "Operations_with_tables#filtering_data","title": "Filter table data with a query","disqus_id": "d2","anchor":"#filtering_data","url": "operations-with-tables.html"},
"Operations_with_tables#using-quick-filtering-options": {"parentId": "Operations_with_tables","level": 0,"id": "Operations_with_tables#using-quick-filtering-options","title": "Use quick filtering options","disqus_id": "d2","anchor":"#using-quick-filtering-options","url": "operations-with-tables.html"},
"Operations_with_tables#filter-rows-when-you-run-a-search": {"parentId": "Operations_with_tables","level": 0,"id": "Operations_with_tables#filter-rows-when-you-run-a-search","title": "Filter rows when you run a search","disqus_id": "d2","anchor":"#filter-rows-when-you-run-a-search","url": "operations-with-tables.html"},
"Operations_with_tables#comparing_tables": {"parentId": "Operations_with_tables","level": 0,"id": "Operations_with_tables#comparing_tables","title": "Compare tables","disqus_id": "d2","anchor":"#comparing_tables","url": "operations-with-tables.html"},
"Operations_with_tables#transposing_table": {"parentId": "Operations_with_tables","level": 0,"id": "Operations_with_tables#transposing_table","title": "Transpose a table","disqus_id": "d2","anchor":"#transposing_table","url": "operations-with-tables.html"},
"Operations_with_tables#copying_saving_table_data": {"parentId": "Operations_with_tables","level": 0,"id": "Operations_with_tables#copying_saving_table_data","title": "Export a table to a file","disqus_id": "d2","anchor":"#copying_saving_table_data","url": "operations-with-tables.html"},
"Operations_with_tables#copying_saving_table_data_clipboard": {"parentId": "Operations_with_tables","level": 0,"id": "Operations_with_tables#copying_saving_table_data_clipboard","title": "Export a table to a clipboard","disqus_id": "d2","anchor":"#copying_saving_table_data_clipboard","url": "operations-with-tables.html"},
"Operations_with_tables#changing_output_format": {"parentId": "Operations_with_tables","level": 0,"id": "Operations_with_tables#changing_output_format","title": "Configure a data output format and options","disqus_id": "d2","anchor":"#changing_output_format","url": "operations-with-tables.html"},
"Operations_with_tables#export-data": {"parentId": "Operations_with_tables","level": 0,"id": "Operations_with_tables#export-data","title": "Export data to a database","disqus_id": "d2","anchor":"#export-data","url": "operations-with-tables.html"},
"Operations_with_tables#copying_pasting_converting": {"parentId": "Operations_with_tables","level": 0,"id": "Operations_with_tables#copying_pasting_converting","title": "Copy and paste cells between tables","disqus_id": "d2","anchor":"#copying_pasting_converting","url": "operations-with-tables.html"},
"Operations_with_tables#copy-a-table-to-another-scheme": {"parentId": "Operations_with_tables","level": 0,"id": "Operations_with_tables#copy-a-table-to-another-scheme","title": "Copy a table to another schema","disqus_id": "d2","anchor":"#copy-a-table-to-another-scheme","url": "operations-with-tables.html"},
"Operations_with_tables#updating_table_view": {"parentId": "Operations_with_tables","level": 0,"id": "Operations_with_tables#updating_table_view","title": "Update the table view","disqus_id": "d2","anchor":"#updating_table_view","url": "operations-with-tables.html"},
"Operations_with_tables#restoring_initial_view": {"parentId": "Operations_with_tables","level": 0,"id": "Operations_with_tables#restoring_initial_view","title": "Reset the initial table view","disqus_id": "d2","anchor":"#restoring_initial_view","url": "operations-with-tables.html"},
"Operations_with_tables#9c6b8291": {"parentId": "Operations_with_tables","level": 0,"id": "Operations_with_tables#9c6b8291","title": "View the query that generated the table","disqus_id": "d2","anchor":"#9c6b8291","url": "operations-with-tables.html"},
"Columns#add-a-column": {"parentId": "Columns","level": 0,"id": "Columns#add-a-column","title": "Add a column","disqus_id": "d2","anchor":"#add-a-column","url": "columns.html"},
"Columns#delete-a-column": {"parentId": "Columns","level": 0,"id": "Columns#delete-a-column","title": "Delete a column","disqus_id": "d2","anchor":"#delete-a-column","url": "columns.html"},
"Columns#af817333": {"parentId": "Columns","level": 0,"id": "Columns#af817333","title": "Reorder columns","disqus_id": "d2","anchor":"#af817333","url": "columns.html"},
"Columns#hiding_columns": {"parentId": "Columns","level": 0,"id": "Columns#hiding_columns","title": "Hide columns","disqus_id": "d2","anchor":"#hiding_columns","url": "columns.html"},
"Columns#showing_columns": {"parentId": "Columns","level": 0,"id": "Columns#showing_columns","title": "Show columns","disqus_id": "d2","anchor":"#showing_columns","url": "columns.html"},
"Columns#sorting_data_overview": {"parentId": "Columns","level": 0,"id": "Columns#sorting_data_overview","title": "Sort data","disqus_id": "d2","anchor":"#sorting_data_overview","url": "columns.html"},
"Columns#enabling_coding_assistance_for_column": {"parentId": "Columns","level": 0,"id": "Columns#enabling_coding_assistance_for_column","title": "Inject a language for a column","disqus_id": "d2","anchor":"#enabling_coding_assistance_for_column","url": "columns.html"},
"Rows#adding_row": {"parentId": "Rows","level": 0,"id": "Rows#adding_row","title": "Add a row","disqus_id": "d2","anchor":"#adding_row","url": "rows.html"},
"Rows#7bf5b497": {"parentId": "Rows","level": 0,"id": "Rows#7bf5b497","title": "Delete a row","disqus_id": "d2","anchor":"#7bf5b497","url": "rows.html"},
"Rows#a4907453": {"parentId": "Rows","level": 0,"id": "Rows#a4907453","title": "Clone a row","disqus_id": "d2","anchor":"#a4907453","url": "rows.html"},
"Rows#navigate-between-subsets-of-rows": {"parentId": "Rows","level": 0,"id": "Rows#navigate-between-subsets-of-rows","title": "Navigate between subsets of rows","disqus_id": "d2","anchor":"#navigate-between-subsets-of-rows","url": "rows.html"},
"Rows#go-to-a-specified-row": {"parentId": "Rows","level": 0,"id": "Rows#go-to-a-specified-row","title": "Go to the specified row","disqus_id": "d2","anchor":"#go-to-a-specified-row","url": "rows.html"},
"Rows#4cfb1936": {"parentId": "Rows","level": 0,"id": "Rows#4cfb1936","title": "Navigate to a related object","disqus_id": "d2","anchor":"#4cfb1936","url": "rows.html"},
"Rows#go-to-a-field-declaration": {"parentId": "Rows","level": 0,"id": "Rows#go-to-a-field-declaration","title": "Navigate between related data","disqus_id": "d2","anchor":"#go-to-a-field-declaration","url": "rows.html"},
"Cells#modifying_cell_contents": {"parentId": "Cells","level": 0,"id": "Cells#modifying_cell_contents","title": "Basic operations with cells","disqus_id": "d2","anchor":"#modifying_cell_contents","url": "cells.html"},
"Cells#set-default-values-for-a-cell": {"parentId": "Cells","level": 0,"id": "Cells#set-default-values-for-a-cell","title": "Set default values for a cell","disqus_id": "d2","anchor":"#set-default-values-for-a-cell","url": "cells.html"},
"Cells#using_value_and_transpose_row_views": {"parentId": "Cells","level": 0,"id": "Cells#using_value_and_transpose_row_views","title": "Using the quick documentation view","disqus_id": "d2","anchor":"#using_value_and_transpose_row_views","url": "cells.html"},
"Cells#modifying_multiple_cells": {"parentId": "Cells","level": 0,"id": "Cells#modifying_multiple_cells","title": "Edit multiple cell values simultaneously","disqus_id": "d2","anchor":"#modifying_multiple_cells","url": "cells.html"},
"Cells#e83b868f": {"parentId": "Cells","level": 0,"id": "Cells#e83b868f","title": "Saving a LOB in a file","disqus_id": "d2","anchor":"#e83b868f","url": "cells.html"},
"Submitting_and_reverting_changes#submit_revert": {"parentId": "Submitting_and_reverting_changes","level": 0,"id": "Submitting_and_reverting_changes#submit_revert","title": "Submit changes manually","disqus_id": "d2","anchor":"#submit_revert","url": "submitting-and-reverting-changes.html"},
"Submitting_and_reverting_changes#submit-changes-immediately": {"parentId": "Submitting_and_reverting_changes","level": 0,"id": "Submitting_and_reverting_changes#submit-changes-immediately","title": "Submit changes automatically","disqus_id": "d2","anchor":"#submit-changes-immediately","url": "submitting-and-reverting-changes.html"},
"Submitting_and_reverting_changes#manage_db_transactions": {"parentId": "Submitting_and_reverting_changes","level": 0,"id": "Submitting_and_reverting_changes#manage_db_transactions","title": "Submit changes by using database transactions","disqus_id": "d2","anchor":"#manage_db_transactions","url": "submitting-and-reverting-changes.html"},
"Submitting_and_reverting_changes#revert-changes": {"parentId": "Submitting_and_reverting_changes","level": 0,"id": "Submitting_and_reverting_changes#revert-changes","title": "Revert changes","disqus_id": "d2","anchor":"#revert-changes","url": "submitting-and-reverting-changes.html"},
"settings.dart#ws_dart_before_you_start": {"parentId": "settings.dart","level": 0,"id": "settings.dart#ws_dart_before_you_start","title": "Before you start","disqus_id": "d2","anchor":"#ws_dart_before_you_start","url": "dart.html"},
"settings.dart#download_dart_tools": {"parentId": "settings.dart","level": 0,"id": "settings.dart#download_dart_tools","title": "Downloading the Dart tools","disqus_id": "d2","anchor":"#download_dart_tools","url": "dart.html"},
"settings.dart#dart_create_new_application": {"parentId": "settings.dart","level": 0,"id": "settings.dart#dart_create_new_application","title": "Creating a new Dart application","disqus_id": "d2","anchor":"#dart_create_new_application","url": "dart.html"},
"settings.dart#dart_add_support_in_existing_project": {"parentId": "settings.dart","level": 0,"id": "settings.dart#dart_add_support_in_existing_project","title": "Starting with an existing Dart application","disqus_id": "d2","anchor":"#dart_add_support_in_existing_project","url": "dart.html"},
"settings.dart#working_with_multiple_dart_packages_in_project": {"parentId": "settings.dart","level": 0,"id": "settings.dart#working_with_multiple_dart_packages_in_project","title": "Working with several Dart projects (packages) in one IntelliJ IDEA project","disqus_id": "d2","anchor":"#working_with_multiple_dart_packages_in_project","url": "dart.html"},
"settings.dart#manage_dart_dependencies_with_pub_tool": {"parentId": "settings.dart","level": 0,"id": "settings.dart#manage_dart_dependencies_with_pub_tool","title": "Managing Dart dependencies","disqus_id": "d2","anchor":"#manage_dart_dependencies_with_pub_tool","url": "dart.html"},
"settings.dart#build_dart_application": {"parentId": "settings.dart","level": 0,"id": "settings.dart#build_dart_application","title": "Building a Dart application","disqus_id": "d2","anchor":"#build_dart_application","url": "dart.html"},
"settings.dart#dart_run_debug_command_line_application": {"parentId": "settings.dart","level": 0,"id": "settings.dart#dart_run_debug_command_line_application","title": "Running and debugging Dart command-line applications","disqus_id": "d2","anchor":"#dart_run_debug_command_line_application","url": "dart.html"},
"settings.dart#dart_run_debug_web_application": {"parentId": "settings.dart","level": 0,"id": "settings.dart#dart_run_debug_web_application","title": "Running and debugging Dart web applications","disqus_id": "d2","anchor":"#dart_run_debug_web_application","url": "dart.html"},
"settings.dart#dart_testing_applications": {"parentId": "settings.dart","level": 0,"id": "settings.dart#dart_testing_applications","title": "Testing Dart applications","disqus_id": "d2","anchor":"#dart_testing_applications","url": "dart.html"},
"Docker_ps#managing-images": {"parentId": "Docker_ps","level": 0,"id": "Docker_ps#managing-images","title": "Managing images","disqus_id": "d2","anchor":"#managing-images","url": "docker.html"},
"Docker_ps#run-containers": {"parentId": "Docker_ps","level": 0,"id": "Docker_ps#run-containers","title": "Running containers","disqus_id": "d2","anchor":"#run-containers","url": "docker.html"},
"Docker_ps#command-line-options": {"parentId": "Docker_ps","level": 1,"id": "Docker_ps#command-line-options","title": "Command-line options","disqus_id": "d2","anchor":"#command-line-options","url": "docker.html"},
"Docker_ps#volume_bindings": {"parentId": "Docker_ps","level": 1,"id": "Docker_ps#volume_bindings","title": "Bind mounts","disqus_id": "d2","anchor":"#volume_bindings","url": "docker.html"},
"Docker_ps#port_bindings": {"parentId": "Docker_ps","level": 1,"id": "Docker_ps#port_bindings","title": "Bind ports","disqus_id": "d2","anchor":"#port_bindings","url": "docker.html"},
"Docker_ps#using_env_vars": {"parentId": "Docker_ps","level": 1,"id": "Docker_ps#using_env_vars","title": "Environment variables","disqus_id": "d2","anchor":"#using_env_vars","url": "docker.html"},
"Docker_ps#using_build_args": {"parentId": "Docker_ps","level": 1,"id": "Docker_ps#using_build_args","title": "Build-time arguments","disqus_id": "d2","anchor":"#using_build_args","url": "docker.html"},
"Docker_ps#interacting-with-containers": {"parentId": "Docker_ps","level": 1,"id": "Docker_ps#interacting-with-containers","title": "Interacting with containers","disqus_id": "d2","anchor":"#interacting-with-containers","url": "docker.html"},
"Docker_ps#using-docker-compose": {"parentId": "Docker_ps","level": 0,"id": "Docker_ps#using-docker-compose","title": "Docker Compose","disqus_id": "d2","anchor":"#using-docker-compose","url": "docker.html"},
"Docker_ps#docker_troubleshooting": {"parentId": "Docker_ps","level": 0,"id": "Docker_ps#docker_troubleshooting","title": "Troubleshooting","disqus_id": "d2","anchor":"#docker_troubleshooting","url": "docker.html"},
"Docker_ps#docker_unable_to_connect": {"parentId": "Docker_ps","level": 1,"id": "Docker_ps#docker_unable_to_connect","title": "Unable to connect to Docker","disqus_id": "d2","anchor":"#docker_unable_to_connect","url": "docker.html"},
"Docker_ps#docker_compose_unable_to_use": {"parentId": "Docker_ps","level": 1,"id": "Docker_ps#docker_compose_unable_to_use","title": "Unable to use Docker Compose","disqus_id": "d2","anchor":"#docker_compose_unable_to_use","url": "docker.html"},
"Docker_ps#port_bindings_unable_to_use": {"parentId": "Docker_ps","level": 1,"id": "Docker_ps#port_bindings_unable_to_use","title": "Unable to use port bindings","disqus_id": "d2","anchor":"#port_bindings_unable_to_use","url": "docker.html"},
"Docker_ps#associate-files": {"parentId": "Docker_ps","level": 1,"id": "Docker_ps#associate-files","title": "Unable to associate existing Dockerfiles or Docker Compose files with relevant types","disqus_id": "d2","anchor":"#associate-files","url": "docker.html"},
"Docker_ps#docker_limitations": {"parentId": "Docker_ps","level": 0,"id": "Docker_ps#docker_limitations","title": "Limitations","disqus_id": "d2","anchor":"#docker_limitations","url": "docker.html"},
"Running_a_DBMS_image#29ad447a": {"parentId": "Running_a_DBMS_image","level": 0,"id": "Running_a_DBMS_image#29ad447a","title": "Pull a PostgreSQL server image","disqus_id": "d2","anchor":"#29ad447a","url": "running-a-dbms-image.html"},
"Running_a_DBMS_image#38fdbb79": {"parentId": "Running_a_DBMS_image","level": 0,"id": "Running_a_DBMS_image#38fdbb79","title": "Run a container from the PostgreSQL server image","disqus_id": "d2","anchor":"#38fdbb79","url": "running-a-dbms-image.html"},
"Running_a_DBMS_image#99d607a6": {"parentId": "Running_a_DBMS_image","level": 0,"id": "Running_a_DBMS_image#99d607a6","title": "Connect to the PostgreSQL server","disqus_id": "d2","anchor":"#99d607a6","url": "running-a-dbms-image.html"},
"Running_a_Java_app_in_a_container#345b86cc": {"parentId": "Running_a_Java_app_in_a_container","level": 0,"id": "Running_a_Java_app_in_a_container#345b86cc","title": "Run the Java application in a container","disqus_id": "d2","anchor":"#345b86cc","url": "running-a-java-app-in-a-container.html"},
"Running_a_Java_app_in_a_container#c042f4b3": {"parentId": "Running_a_Java_app_in_a_container","level": 0,"id": "Running_a_Java_app_in_a_container#c042f4b3","title": "Share your Java application as a Docker image","disqus_id": "d2","anchor":"#c042f4b3","url": "running-a-java-app-in-a-container.html"},
"Deploying_a_web_app_into_an_app_server_container#66ff04a1": {"parentId": "Deploying_a_web_app_into_an_app_server_container","level": 0,"id": "Deploying_a_web_app_into_an_app_server_container#66ff04a1","title": "Create a Java web application","disqus_id": "d2","anchor":"#66ff04a1","url": "deploying-a-web-app-into-an-app-server-container.html"},
"Deploying_a_web_app_into_an_app_server_container#86633d3b": {"parentId": "Deploying_a_web_app_into_an_app_server_container","level": 0,"id": "Deploying_a_web_app_into_an_app_server_container#86633d3b","title": "Build a WAR artifact","disqus_id": "d2","anchor":"#86633d3b","url": "deploying-a-web-app-into-an-app-server-container.html"},
"Deploying_a_web_app_into_an_app_server_container#5e70442b": {"parentId": "Deploying_a_web_app_into_an_app_server_container","level": 0,"id": "Deploying_a_web_app_into_an_app_server_container#5e70442b","title": "Deploy your application inside a Tomcat server","disqus_id": "d2","anchor":"#5e70442b","url": "deploying-a-web-app-into-an-app-server-container.html"},
"Deploying_a_web_app_into_Wildfly_container#ed728cd2": {"parentId": "Deploying_a_web_app_into_Wildfly_container","level": 0,"id": "Deploying_a_web_app_into_Wildfly_container#ed728cd2","title": "Create a Java web application","disqus_id": "d2","anchor":"#ed728cd2","url": "deploying-a-web-app-into-wildfly-container.html"},
"Deploying_a_web_app_into_Wildfly_container#3a5650fa": {"parentId": "Deploying_a_web_app_into_Wildfly_container","level": 0,"id": "Deploying_a_web_app_into_Wildfly_container#3a5650fa","title": "Build a WAR artifact","disqus_id": "d2","anchor":"#3a5650fa","url": "deploying-a-web-app-into-wildfly-container.html"},
"Deploying_a_web_app_into_Wildfly_container#bdd3f038": {"parentId": "Deploying_a_web_app_into_Wildfly_container","level": 0,"id": "Deploying_a_web_app_into_Wildfly_container#bdd3f038","title": "Run a Wildfly server container from a Dockerfile","disqus_id": "d2","anchor":"#bdd3f038","url": "deploying-a-web-app-into-wildfly-container.html"},
"procedure.developingcode.xmlhtml#create_file": {"parentId": "procedure.developingcode.xmlhtml","level": 0,"id": "procedure.developingcode.xmlhtml#create_file","title": "Creating an HTML file","disqus_id": "d2","anchor":"#create_file","url": "editing-html-files.html"},
"procedure.developingcode.xmlhtml#ws_html_generate_reference": {"parentId": "procedure.developingcode.xmlhtml","level": 0,"id": "procedure.developingcode.xmlhtml#ws_html_generate_reference","title": "Generating references in an HTML file","disqus_id": "d2","anchor":"#ws_html_generate_reference","url": "editing-html-files.html"},
"procedure.developingcode.xmlhtml#ws_html_preview_output": {"parentId": "procedure.developingcode.xmlhtml","level": 0,"id": "procedure.developingcode.xmlhtml#ws_html_preview_output","title": "Previewing output of an HTML file in a browser","disqus_id": "d2","anchor":"#ws_html_preview_output","url": "editing-html-files.html"},
"procedure.developingcode.xmlhtml#ws_html_view_page_source_in_editor": {"parentId": "procedure.developingcode.xmlhtml","level": 0,"id": "procedure.developingcode.xmlhtml#ws_html_view_page_source_in_editor","title": "Viewing HTML source code of a web page in the editor","disqus_id": "d2","anchor":"#ws_html_view_page_source_in_editor","url": "editing-html-files.html"},
"procedure.developingcode.xmlhtml#ws_html_view_embedded_images": {"parentId": "procedure.developingcode.xmlhtml","level": 0,"id": "procedure.developingcode.xmlhtml#ws_html_view_embedded_images","title": "Viewing embedded images","disqus_id": "d2","anchor":"#ws_html_view_embedded_images","url": "editing-html-files.html"},
"procedure.developingcode.xmlhtml#javascript_extract_include_file": {"parentId": "procedure.developingcode.xmlhtml","level": 0,"id": "procedure.developingcode.xmlhtml#javascript_extract_include_file","title": "Extracting an include file","disqus_id": "d2","anchor":"#javascript_extract_include_file","url": "editing-html-files.html"},
"Java_SE#move_source_files_into_subfolder": {"parentId": "Java_SE","level": 0,"id": "Java_SE#move_source_files_into_subfolder","title": "Moving source files into a subfolder","disqus_id": "d2","anchor":"#move_source_files_into_subfolder","url": "java-se.html"},
"Java_SE#enable_java_coding_assistance": {"parentId": "Java_SE","level": 0,"id": "Java_SE#enable_java_coding_assistance","title": "Enabling coding assistance for .java files","disqus_id": "d2","anchor":"#enable_java_coding_assistance","url": "java-se.html"},
"Java_SE#make_java_api_accessible": {"parentId": "Java_SE","level": 0,"id": "Java_SE#make_java_api_accessible","title": "Making the Java API accessible to your code","disqus_id": "d2","anchor":"#make_java_api_accessible","url": "java-se.html"},
"Java_SE#package_structure_or_prefix": {"parentId": "Java_SE","level": 0,"id": "Java_SE#package_structure_or_prefix","title": "Creating a folder structure for your package or specifying a package prefix","disqus_id": "d2","anchor":"#package_structure_or_prefix","url": "java-se.html"},
"Java_SE#reuse_jar_classes": {"parentId": "Java_SE","level": 0,"id": "Java_SE#reuse_jar_classes","title": "Making classes in a JAR accessible to your app","disqus_id": "d2","anchor":"#reuse_jar_classes","url": "java-se.html"},
"Java_SE#compile_java_file": {"parentId": "Java_SE","level": 0,"id": "Java_SE#compile_java_file","title": "Compiling .java files","disqus_id": "d2","anchor":"#compile_java_file","url": "java-se.html"},
"Java_SE#run_app": {"parentId": "Java_SE","level": 0,"id": "Java_SE#run_app","title": "Running your app","disqus_id": "d2","anchor":"#run_app","url": "java-se.html"},
"Java_SE#package_app": {"parentId": "Java_SE","level": 0,"id": "Java_SE#package_app","title": "Packaging your app in a JAR","disqus_id": "d2","anchor":"#package_app","url": "java-se.html"},
"topicId1000000103#ws_creating_js_app": {"parentId": "topicId1000000103","level": 0,"id": "topicId1000000103#ws_creating_js_app","title": "Creating a new application","disqus_id": "d2","anchor":"#ws_creating_js_app","url": "javascript-specific-guidelines.html"},
"topicId1000000103#ws_js_start_existing_app": {"parentId": "topicId1000000103","level": 0,"id": "topicId1000000103#ws_js_start_existing_app","title": "Starting with an existing JavaScript application","disqus_id": "d2","anchor":"#ws_js_start_existing_app","url": "javascript-specific-guidelines.html"},
"topicId1000000103#ws_js_choose_language_version": {"parentId": "topicId1000000103","level": 0,"id": "topicId1000000103#ws_js_choose_language_version","title": "Choosing the JavaScript language version","disqus_id": "d2","anchor":"#ws_js_choose_language_version","url": "javascript-specific-guidelines.html"},
"topicId1000000103#ws_js_choose_language_version_multiple_versions": {"parentId": "topicId1000000103","level": 1,"id": "topicId1000000103#ws_js_choose_language_version_multiple_versions","title": "Using multiple JavaScript versions","disqus_id": "d2","anchor":"#ws_js_choose_language_version_multiple_versions","url": "javascript-specific-guidelines.html"},
"topicId1000000103#ws_js_download_npm_dependencies": {"parentId": "topicId1000000103","level": 0,"id": "topicId1000000103#ws_js_download_npm_dependencies","title": "Downloading npm dependencies","disqus_id": "d2","anchor":"#ws_js_download_npm_dependencies","url": "javascript-specific-guidelines.html"},
"topicId1000000103#ws_js_libraries": {"parentId": "topicId1000000103","level": 0,"id": "topicId1000000103#ws_js_libraries","title": "Configuring code completion for project dependencies","disqus_id": "d2","anchor":"#ws_js_libraries","url": "javascript-specific-guidelines.html"},
"topicId1000000103#ws_js_parameter_hints": {"parentId": "topicId1000000103","level": 0,"id": "topicId1000000103#ws_js_parameter_hints","title": "Viewing parameter hints","disqus_id": "d2","anchor":"#ws_js_parameter_hints","url": "javascript-specific-guidelines.html"},
"topicId1000000103#ws_js_auto_import": {"parentId": "topicId1000000103","level": 0,"id": "topicId1000000103#ws_js_auto_import","title": "Auto import in JavaScript","disqus_id": "d2","anchor":"#ws_js_auto_import","url": "javascript-specific-guidelines.html"},
"topicId1000000103#open_html": {"parentId": "topicId1000000103","level": 0,"id": "topicId1000000103#open_html","title": "Running JavaScript in browser","disqus_id": "d2","anchor":"#open_html","url": "javascript-specific-guidelines.html"},
"topicId1000000103#ws_js_debugging_overview": {"parentId": "topicId1000000103","level": 0,"id": "topicId1000000103#ws_js_debugging_overview","title": "Debugging JavaScript","disqus_id": "d2","anchor":"#ws_js_debugging_overview","url": "javascript-specific-guidelines.html"},
"Using_Angular_CLI#angular_cli_before_you_start": {"parentId": "Using_Angular_CLI","level": 0,"id": "Using_Angular_CLI#angular_cli_before_you_start","title": "Before you start","disqus_id": "d2","anchor":"#angular_cli_before_you_start","url": "angular.html"},
"Using_Angular_CLI#create_new_angular_app": {"parentId": "Using_Angular_CLI","level": 0,"id": "Using_Angular_CLI#create_new_angular_app","title": "Creating a new Angular application","disqus_id": "d2","anchor":"#create_new_angular_app","url": "angular.html"},
"Using_Angular_CLI#angular_cli_open_existing_application": {"parentId": "Using_Angular_CLI","level": 0,"id": "Using_Angular_CLI#angular_cli_open_existing_application","title": "Starting with an existing Angular application","disqus_id": "d2","anchor":"#angular_cli_open_existing_application","url": "angular.html"},
"Using_Angular_CLI#angular_ng_add": {"parentId": "Using_Angular_CLI","level": 0,"id": "Using_Angular_CLI#angular_ng_add","title": "Adding new features to an Angular application using ng add","disqus_id": "d2","anchor":"#angular_ng_add","url": "angular.html"},
"Using_Angular_CLI#generate_angular_structures": {"parentId": "Using_Angular_CLI","level": 0,"id": "Using_Angular_CLI#generate_angular_structures","title": "Generating code with Angular Schematics","disqus_id": "d2","anchor":"#generate_angular_structures","url": "angular.html"},
"Using_Angular_CLI#use_angular_language_service": {"parentId": "Using_Angular_CLI","level": 0,"id": "Using_Angular_CLI#use_angular_language_service","title": "Using Angular language service","disqus_id": "d2","anchor":"#use_angular_language_service","url": "angular.html"},
"Using_Angular_CLI#angular_material_design_components": {"parentId": "Using_Angular_CLI","level": 0,"id": "Using_Angular_CLI#angular_material_design_components","title": "Using Angular Material Design components","disqus_id": "d2","anchor":"#angular_material_design_components","url": "angular.html"},
"Using_AngularJS#ws_angularjs_create_new_app": {"parentId": "Using_AngularJS","level": 0,"id": "Using_AngularJS#ws_angularjs_create_new_app","title": "Creating a new AngularJS application","disqus_id": "d2","anchor":"#ws_angularjs_create_new_app","url": "angularjs.html"},
"Using_AngularJS#ws_angularjs_start_with_existing_app": {"parentId": "Using_AngularJS","level": 0,"id": "Using_AngularJS#ws_angularjs_start_with_existing_app","title": "Starting with an existing AngularJS application","disqus_id": "d2","anchor":"#ws_angularjs_start_with_existing_app","url": "angularjs.html"},
"Using_AngularJS#16ddedbc": {"parentId": "Using_AngularJS","level": 0,"id": "Using_AngularJS#16ddedbc","title": "Using AngularJS Router state diagrams","disqus_id": "d2","anchor":"#16ddedbc","url": "angularjs.html"},
"Using_Bower_Package_Manager#ws_bower_install_and_configure": {"parentId": "Using_Bower_Package_Manager","level": 0,"id": "Using_Bower_Package_Manager#ws_bower_install_and_configure","title": "Installing and configuring Bower","disqus_id": "d2","anchor":"#ws_bower_install_and_configure","url": "using-bower-package-manager.html"},
"Using_Bower_Package_Manager#ws_bower_managing_packages": {"parentId": "Using_Bower_Package_Manager","level": 0,"id": "Using_Bower_Package_Manager#ws_bower_managing_packages","title": "Managing Bower packages","disqus_id": "d2","anchor":"#ws_bower_managing_packages","url": "using-bower-package-manager.html"},
"Configuring_JavaScript_Libraries#ws_jsconfigure_libraries_ts_definition_files": {"parentId": "Configuring_JavaScript_Libraries","level": 0,"id": "Configuring_JavaScript_Libraries#ws_jsconfigure_libraries_ts_definition_files","title": "Using TypeScript community stubs (TypeScript definition files)","disqus_id": "d2","anchor":"#ws_jsconfigure_libraries_ts_definition_files","url": "configuring-javascript-libraries.html"},
"Configuring_JavaScript_Libraries#ws_js_libraries_node_js_core": {"parentId": "Configuring_JavaScript_Libraries","level": 0,"id": "Configuring_JavaScript_Libraries#ws_js_libraries_node_js_core","title": "Configuring Node.js Core library","disqus_id": "d2","anchor":"#ws_js_libraries_node_js_core","url": "configuring-javascript-libraries.html"},
"Configuring_JavaScript_Libraries#ws_js_libraries_examples_node_modules": {"parentId": "Configuring_JavaScript_Libraries","level": 0,"id": "Configuring_JavaScript_Libraries#ws_js_libraries_examples_node_modules","title": "Configuring node_modules library","disqus_id": "d2","anchor":"#ws_js_libraries_examples_node_modules","url": "configuring-javascript-libraries.html"},
"Configuring_JavaScript_Libraries#ws_js_configuring_js_libs_change_scope": {"parentId": "Configuring_JavaScript_Libraries","level": 0,"id": "Configuring_JavaScript_Libraries#ws_js_configuring_js_libs_change_scope","title": "Configuring the scope of a library","disqus_id": "d2","anchor":"#ws_js_configuring_js_libs_change_scope","url": "configuring-javascript-libraries.html"},
"Configuring_JavaScript_Libraries#ws_js_external_library_downloaded_from_CDN": {"parentId": "Configuring_JavaScript_Libraries","level": 0,"id": "Configuring_JavaScript_Libraries#ws_js_external_library_downloaded_from_CDN","title": "Configuring a library added via a CDN link","disqus_id": "d2","anchor":"#ws_js_external_library_downloaded_from_CDN","url": "configuring-javascript-libraries.html"},
"Configuring_JavaScript_Libraries#ws_js_custom_third_party_library": {"parentId": "Configuring_JavaScript_Libraries","level": 0,"id": "Configuring_JavaScript_Libraries#ws_js_custom_third_party_library","title": "Configuring a custom third-party JavaScript library","disqus_id": "d2","anchor":"#ws_js_custom_third_party_library","url": "configuring-javascript-libraries.html"},
"Configuring_JavaScript_Libraries#viewingLibsAssociatedWithFile": {"parentId": "Configuring_JavaScript_Libraries","level": 0,"id": "Configuring_JavaScript_Libraries#viewingLibsAssociatedWithFile","title": "Viewing the libraries associated with a file","disqus_id": "d2","anchor":"#viewingLibsAssociatedWithFile","url": "configuring-javascript-libraries.html"},
"Configuring_JavaScript_Libraries#deletingLib": {"parentId": "Configuring_JavaScript_Libraries","level": 0,"id": "Configuring_JavaScript_Libraries#deletingLib","title": "Deleting a library","disqus_id": "d2","anchor":"#deletingLib","url": "configuring-javascript-libraries.html"},
"topicId1000000130#debugging_js_on_built_in_server": {"parentId": "topicId1000000130","level": 0,"id": "topicId1000000130#debugging_js_on_built_in_server","title": "Debugging an application running on the built-in server","disqus_id": "d2","anchor":"#debugging_js_on_built_in_server","url": "debugging-javascript-in-chrome.html"},
"topicId1000000130#90174e22": {"parentId": "topicId1000000130","level": 1,"id": "topicId1000000130#90174e22","title": "Example","disqus_id": "d2","anchor":"#90174e22","url": "debugging-javascript-in-chrome.html"},
"topicId1000000130#debugging_js_on_external_web_server": {"parentId": "topicId1000000130","level": 0,"id": "topicId1000000130#debugging_js_on_external_web_server","title": "Debugging an application running on an external web server","disqus_id": "d2","anchor":"#debugging_js_on_external_web_server","url": "debugging-javascript-in-chrome.html"},
"topicId1000000130#debugging_js_asynchronous_code": {"parentId": "topicId1000000130","level": 0,"id": "topicId1000000130#debugging_js_asynchronous_code","title": "Debugging asynchronous code","disqus_id": "d2","anchor":"#debugging_js_asynchronous_code","url": "debugging-javascript-in-chrome.html"},
"topicId1000000130#debug_workers": {"parentId": "topicId1000000130","level": 0,"id": "topicId1000000130#debug_workers","title": "Debugging workers","disqus_id": "d2","anchor":"#debug_workers","url": "debugging-javascript-in-chrome.html"},
"Debugging_JavaScript_on_an_External_Server_with_Mappings#ws_js_debug_on_remote_server_intro": {"parentId": "Debugging_JavaScript_on_an_External_Server_with_Mappings","level": 0,"id": "Debugging_JavaScript_on_an_External_Server_with_Mappings#ws_js_debug_on_remote_server_intro","title": "What is a remote web server?","disqus_id": "d2","anchor":"#ws_js_debug_on_remote_server_intro","url": "debugging-javascript-on-an-external-server-with-mappings.html"},
"Debugging_JavaScript_on_an_External_Server_with_Mappings#ws_js_debug_on_remote_server_sync": {"parentId": "Debugging_JavaScript_on_an_External_Server_with_Mappings","level": 0,"id": "Debugging_JavaScript_on_an_External_Server_with_Mappings#ws_js_debug_on_remote_server_sync","title": "How do I synchronize my application sources on the server with their local copies in my IntelliJ IDEA project?","disqus_id": "d2","anchor":"#ws_js_debug_on_remote_server_sync","url": "debugging-javascript-on-an-external-server-with-mappings.html"},
"Debugging_JavaScript_on_an_External_Server_with_Mappings#ws_js_debug_on_remote_server_example": {"parentId": "Debugging_JavaScript_on_an_External_Server_with_Mappings","level": 0,"id": "Debugging_JavaScript_on_an_External_Server_with_Mappings#ws_js_debug_on_remote_server_example","title": "Example","disqus_id": "d2","anchor":"#ws_js_debug_on_remote_server_example","url": "debugging-javascript-on-an-external-server-with-mappings.html"},
"Debugging_JavaScript_on_an_External_Server_with_Mappings#ws_js_debug_on_remote_server_mappings": {"parentId": "Debugging_JavaScript_on_an_External_Server_with_Mappings","level": 0,"id": "Debugging_JavaScript_on_an_External_Server_with_Mappings#ws_js_debug_on_remote_server_mappings","title": "Configuring mappings","disqus_id": "d2","anchor":"#ws_js_debug_on_remote_server_mappings","url": "debugging-javascript-on-an-external-server-with-mappings.html"},
"topicId100000012#ws_js_debugging_in_FF_example": {"parentId": "topicId100000012","level": 0,"id": "topicId100000012#ws_js_debugging_in_FF_example","title": "Example","disqus_id": "d2","anchor":"#ws_js_debugging_in_FF_example","url": "debugging-javascript-in-firefox.html"},
"Using_Grunt_Task_Runner#installingGrunt": {"parentId": "Using_Grunt_Task_Runner","level": 0,"id": "Using_Grunt_Task_Runner#installingGrunt","title": "Installing Grunt","disqus_id": "d2","anchor":"#installingGrunt","url": "using-grunt-task-runner.html"},
"Using_Grunt_Task_Runner#ws_grunt_running_tasks_from_tasks_tree": {"parentId": "Using_Grunt_Task_Runner","level": 0,"id": "Using_Grunt_Task_Runner#ws_grunt_running_tasks_from_tasks_tree","title": "Running Grunt tasks from the tasks tree","disqus_id": "d2","anchor":"#ws_grunt_running_tasks_from_tasks_tree","url": "using-grunt-task-runner.html"},
"Using_Grunt_Task_Runner#ws_grunt_run_debug_task_by_run_configuration": {"parentId": "Using_Grunt_Task_Runner","level": 0,"id": "Using_Grunt_Task_Runner#ws_grunt_run_debug_task_by_run_configuration","title": "Running and debugging tasks according to a run configuration","disqus_id": "d2","anchor":"#ws_grunt_run_debug_task_by_run_configuration","url": "using-grunt-task-runner.html"},
"Using_Grunt_Task_Runner#ws_grunt_run_tasks_automatically": {"parentId": "Using_Grunt_Task_Runner","level": 0,"id": "Using_Grunt_Task_Runner#ws_grunt_run_tasks_automatically","title": "Running Grunt tasks automatically","disqus_id": "d2","anchor":"#ws_grunt_run_tasks_automatically","url": "using-grunt-task-runner.html"},
"Using_Gulp_Task_Runner#installingGulp": {"parentId": "Using_Gulp_Task_Runner","level": 0,"id": "Using_Gulp_Task_Runner#installingGulp","title": "Installing Gulp.js","disqus_id": "d2","anchor":"#installingGulp","url": "using-gulp-task-runner.html"},
"Using_Gulp_Task_Runner#ws_gulp_running_tasks_from_tasks_tree": {"parentId": "Using_Gulp_Task_Runner","level": 0,"id": "Using_Gulp_Task_Runner#ws_gulp_running_tasks_from_tasks_tree","title": "Running Gulp.js tasks from the tasks tree","disqus_id": "d2","anchor":"#ws_gulp_running_tasks_from_tasks_tree","url": "using-gulp-task-runner.html"},
"Using_Gulp_Task_Runner#ws_js_gulp_run_tasks_from_gulpfile": {"parentId": "Using_Gulp_Task_Runner","level": 0,"id": "Using_Gulp_Task_Runner#ws_js_gulp_run_tasks_from_gulpfile","title": "Running tasks from Gulpfile.js","disqus_id": "d2","anchor":"#ws_js_gulp_run_tasks_from_gulpfile","url": "using-gulp-task-runner.html"},
"Using_Gulp_Task_Runner#ws_js_gulp_run_tasks_from_run_configuration": {"parentId": "Using_Gulp_Task_Runner","level": 0,"id": "Using_Gulp_Task_Runner#ws_js_gulp_run_tasks_from_run_configuration","title": "Running and debugging tasks according to a run configuration","disqus_id": "d2","anchor":"#ws_js_gulp_run_tasks_from_run_configuration","url": "using-gulp-task-runner.html"},
"Using_Gulp_Task_Runner#ws_js_gulp_run_tasks_automatically": {"parentId": "Using_Gulp_Task_Runner","level": 0,"id": "Using_Gulp_Task_Runner#ws_js_gulp_run_tasks_automatically","title": "Running Gulp.js tasks automatically","disqus_id": "d2","anchor":"#ws_js_gulp_run_tasks_automatically","url": "using-gulp-task-runner.html"},
"settings.javascript.linters.eslint#ws_js_linters_eslint_install_and_configure": {"parentId": "settings.javascript.linters.eslint","level": 0,"id": "settings.javascript.linters.eslint#ws_js_linters_eslint_install_and_configure","title": "Installing, enabling, and configuring ESLint in IntelliJ IDEA","disqus_id": "d2","anchor":"#ws_js_linters_eslint_install_and_configure","url": "eslint.html"},
"settings.javascript.linters.eslint#ws_eslint_configure_highlighting": {"parentId": "settings.javascript.linters.eslint","level": 0,"id": "settings.javascript.linters.eslint#ws_eslint_configure_highlighting","title": "Configuring highlighting for ESLint","disqus_id": "d2","anchor":"#ws_eslint_configure_highlighting","url": "eslint.html"},
"settings.javascript.linters.eslint#ws_js_linters_eslint_import_code_style_from_eslint": {"parentId": "settings.javascript.linters.eslint","level": 0,"id": "settings.javascript.linters.eslint#ws_js_linters_eslint_import_code_style_from_eslint","title": "Importing code style from ESLint","disqus_id": "d2","anchor":"#ws_js_linters_eslint_import_code_style_from_eslint","url": "eslint.html"},
"settings.javascript.linters.eslint#ws_js_linters_eslint_using_JavaScript_Standard_Style": {"parentId": "settings.javascript.linters.eslint","level": 0,"id": "settings.javascript.linters.eslint#ws_js_linters_eslint_using_JavaScript_Standard_Style","title": "Using JavaScript Standard Style","disqus_id": "d2","anchor":"#ws_js_linters_eslint_using_JavaScript_Standard_Style","url": "eslint.html"},
"settings.javascript.linters.eslint#ws_eslint_linting_typescript_files_with_eslint": {"parentId": "settings.javascript.linters.eslint","level": 0,"id": "settings.javascript.linters.eslint#ws_eslint_linting_typescript_files_with_eslint","title": "Linting TypeScript code with ESLint","disqus_id": "d2","anchor":"#ws_eslint_linting_typescript_files_with_eslint","url": "eslint.html"},
"Using_Meteor#ws_meteor_before_you_start": {"parentId": "Using_Meteor","level": 0,"id": "Using_Meteor#ws_meteor_before_you_start","title": "Before you start","disqus_id": "d2","anchor":"#ws_meteor_before_you_start","url": "using-meteor.html"},
"Using_Meteor#installMeteor": {"parentId": "Using_Meteor","level": 0,"id": "Using_Meteor#installMeteor","title": "Installing Meteor","disqus_id": "d2","anchor":"#installMeteor","url": "using-meteor.html"},
"Using_Meteor#ws_meteor_create_new_application": {"parentId": "Using_Meteor","level": 0,"id": "Using_Meteor#ws_meteor_create_new_application","title": "Creating a new Meteor application","disqus_id": "d2","anchor":"#ws_meteor_create_new_application","url": "using-meteor.html"},
"Using_Meteor#ws_meteor_configure_meteor_support_in_existing_project": {"parentId": "Using_Meteor","level": 0,"id": "Using_Meteor#ws_meteor_configure_meteor_support_in_existing_project","title": "Starting with an existing Meteor application","disqus_id": "d2","anchor":"#ws_meteor_configure_meteor_support_in_existing_project","url": "using-meteor.html"},
"Using_Meteor#ws_meteor_download_dependencies": {"parentId": "Using_Meteor","level": 0,"id": "Using_Meteor#ws_meteor_download_dependencies","title": "Importing Meteor packages","disqus_id": "d2","anchor":"#ws_meteor_download_dependencies","url": "using-meteor.html"},
"Using_Meteor#ws_meteor_running": {"parentId": "Using_Meteor","level": 0,"id": "Using_Meteor#ws_meteor_running","title": "Running a Meteor application","disqus_id": "d2","anchor":"#ws_meteor_running","url": "using-meteor.html"},
"Using_Meteor#ws_meteor_debugging": {"parentId": "Using_Meteor","level": 0,"id": "Using_Meteor#ws_meteor_debugging","title": "Debugging a Meteor application","disqus_id": "d2","anchor":"#ws_meteor_debugging","url": "using-meteor.html"},
"Using_Meteor#ws_meteor_debug_preview_changes": {"parentId": "Using_Meteor","level": 1,"id": "Using_Meteor#ws_meteor_debug_preview_changes","title": "Previewing changes in the browser","disqus_id": "d2","anchor":"#ws_meteor_debug_preview_changes","url": "using-meteor.html"},
"settings.project.settings.file.watchers.minifying.javascript#ws_minifying_js_before_you_start": {"parentId": "settings.project.settings.file.watchers.minifying.javascript","level": 0,"id": "settings.project.settings.file.watchers.minifying.javascript#ws_minifying_js_before_you_start","title": "Before you start","disqus_id": "d2","anchor":"#ws_minifying_js_before_you_start","url": "minifying-javascript.html"},
"settings.project.settings.file.watchers.minifying.javascript#ws_minifying_js_install_tools": {"parentId": "settings.project.settings.file.watchers.minifying.javascript","level": 0,"id": "settings.project.settings.file.watchers.minifying.javascript#ws_minifying_js_install_tools","title": "Installing a minification tool","disqus_id": "d2","anchor":"#ws_minifying_js_install_tools","url": "minifying-javascript.html"},
"settings.project.settings.file.watchers.minifying.javascript#ws_miniying_js_create_file_watcher": {"parentId": "settings.project.settings.file.watchers.minifying.javascript","level": 0,"id": "settings.project.settings.file.watchers.minifying.javascript#ws_miniying_js_create_file_watcher","title": "Compressing the code","disqus_id": "d2","anchor":"#ws_miniying_js_create_file_watcher","url": "minifying-javascript.html"},
"settings.project.settings.file.watchers.minifying.javascript#ws_minifying_js_run_compressor": {"parentId": "settings.project.settings.file.watchers.minifying.javascript","level": 1,"id": "settings.project.settings.file.watchers.minifying.javascript#ws_minifying_js_run_compressor","title": "Running a compressor","disqus_id": "d2","anchor":"#ws_minifying_js_run_compressor","url": "minifying-javascript.html"},
"module_dependency_diagram#js_ts_building_module_dependency_diagram": {"parentId": "module_dependency_diagram","level": 0,"id": "module_dependency_diagram#js_ts_building_module_dependency_diagram","title": "Building a module dependency diagram","disqus_id": "d2","anchor":"#js_ts_building_module_dependency_diagram","url": "module-dependency-diagram.html"},
"module_dependency_diagram#js_ts_module_dependency_diagram_analyze": {"parentId": "module_dependency_diagram","level": 0,"id": "module_dependency_diagram#js_ts_module_dependency_diagram_analyze","title": "Analyzing a module dependency diagram","disqus_id": "d2","anchor":"#js_ts_module_dependency_diagram_analyze","url": "module-dependency-diagram.html"},
"module_dependency_diagram#js_ts_module_dependency_diagram_navigation": {"parentId": "module_dependency_diagram","level": 0,"id": "module_dependency_diagram#js_ts_module_dependency_diagram_navigation","title": "Navigating from the diagram to the source code","disqus_id": "d2","anchor":"#js_ts_module_dependency_diagram_navigation","url": "module-dependency-diagram.html"},
"Using_PhoneGap_Cordova#phonegap_before_you_start": {"parentId": "Using_PhoneGap_Cordova","level": 0,"id": "Using_PhoneGap_Cordova#phonegap_before_you_start","title": "Before you start","disqus_id": "d2","anchor":"#phonegap_before_you_start","url": "using-phonegap-cordova.html"},
"Using_PhoneGap_Cordova#installingPhoneGap": {"parentId": "Using_PhoneGap_Cordova","level": 0,"id": "Using_PhoneGap_Cordova#installingPhoneGap","title": "Installing PhoneGap/Cordova/Ionic","disqus_id": "d2","anchor":"#installingPhoneGap","url": "using-phonegap-cordova.html"},
"Using_PhoneGap_Cordova#phonegap_create_new_app": {"parentId": "Using_PhoneGap_Cordova","level": 0,"id": "Using_PhoneGap_Cordova#phonegap_create_new_app","title": "Creating a new PhoneGap/Cordova/Ionic application","disqus_id": "d2","anchor":"#phonegap_create_new_app","url": "using-phonegap-cordova.html"},
"Using_PhoneGap_Cordova#phonegap_starting_with_existing_application": {"parentId": "Using_PhoneGap_Cordova","level": 0,"id": "Using_PhoneGap_Cordova#phonegap_starting_with_existing_application","title": "Starting with an existing PhoneGap/Cordova/Ionic application","disqus_id": "d2","anchor":"#phonegap_starting_with_existing_application","url": "using-phonegap-cordova.html"},
"Using_PhoneGap_Cordova#fbd86d2b": {"parentId": "Using_PhoneGap_Cordova","level": 0,"id": "Using_PhoneGap_Cordova#fbd86d2b","title": "Creating and launching a PhoneGap/Cordova/Ionic run configuration","disqus_id": "d2","anchor":"#fbd86d2b","url": "using-phonegap-cordova.html"},
"React_JSX_and_TSX#create_new_react_app": {"parentId": "React_JSX_and_TSX","level": 0,"id": "React_JSX_and_TSX#create_new_react_app","title": "Creating a new React application","disqus_id": "d2","anchor":"#create_new_react_app","url": "react.html"},
"React_JSX_and_TSX#creating_react_app_with_create_react_app": {"parentId": "React_JSX_and_TSX","level": 1,"id": "React_JSX_and_TSX#creating_react_app_with_create_react_app","title": "Generating a React application with create-react-app","disqus_id": "d2","anchor":"#creating_react_app_with_create_react_app","url": "react.html"},
"React_JSX_and_TSX#install_react_in_empty_project": {"parentId": "React_JSX_and_TSX","level": 1,"id": "React_JSX_and_TSX#install_react_in_empty_project","title": "Installing React in an empty IntelliJ IDEA project","disqus_id": "d2","anchor":"#install_react_in_empty_project","url": "react.html"},
"React_JSX_and_TSX#starting_with_existing_react_application": {"parentId": "React_JSX_and_TSX","level": 0,"id": "React_JSX_and_TSX#starting_with_existing_react_application","title": "Starting with an existing React application","disqus_id": "d2","anchor":"#starting_with_existing_react_application","url": "react.html"},
"React_JSX_and_TSX#react_code_completion": {"parentId": "React_JSX_and_TSX","level": 0,"id": "React_JSX_and_TSX#react_code_completion","title": "Completing code","disqus_id": "d2","anchor":"#react_code_completion","url": "react.html"},
"React_JSX_and_TSX#react_code_completion_methods_and_attributes": {"parentId": "React_JSX_and_TSX","level": 1,"id": "React_JSX_and_TSX#react_code_completion_methods_and_attributes","title": "Completing React methods, attributes, and events","disqus_id": "d2","anchor":"#react_code_completion_methods_and_attributes","url": "react.html"},
"React_JSX_and_TSX#react_code_completion_html_tags_and_components": {"parentId": "React_JSX_and_TSX","level": 1,"id": "React_JSX_and_TSX#react_code_completion_html_tags_and_components","title": "Completing HTML tags and component names","disqus_id": "d2","anchor":"#react_code_completion_html_tags_and_components","url": "react.html"},
"React_JSX_and_TSX#react_code_completion_component_properties": {"parentId": "React_JSX_and_TSX","level": 1,"id": "React_JSX_and_TSX#react_code_completion_component_properties","title": "Completing component properties","disqus_id": "d2","anchor":"#react_code_completion_component_properties","url": "react.html"},
"React_JSX_and_TSX#react_transfer_html_attributes_to_jsx": {"parentId": "React_JSX_and_TSX","level": 0,"id": "React_JSX_and_TSX#react_transfer_html_attributes_to_jsx","title": "Transferring HTML attributes to JSX","disqus_id": "d2","anchor":"#react_transfer_html_attributes_to_jsx","url": "react.html"},
"React_JSX_and_TSX#react_code_snippets": {"parentId": "React_JSX_and_TSX","level": 0,"id": "React_JSX_and_TSX#react_code_snippets","title": "Using React code snippets","disqus_id": "d2","anchor":"#react_code_snippets","url": "react.html"},
"React_JSX_and_TSX#react_emmet": {"parentId": "React_JSX_and_TSX","level": 0,"id": "React_JSX_and_TSX#react_emmet","title": "Using Emmet in JSX","disqus_id": "d2","anchor":"#react_emmet","url": "react.html"},
"React_JSX_and_TSX#react_navigation": {"parentId": "React_JSX_and_TSX","level": 0,"id": "React_JSX_and_TSX#react_navigation","title": "Navigating through a React application","disqus_id": "d2","anchor":"#react_navigation","url": "react.html"},
"React_JSX_and_TSX#react_code_inspection": {"parentId": "React_JSX_and_TSX","level": 0,"id": "React_JSX_and_TSX#react_code_inspection","title": "Linting a React application","disqus_id": "d2","anchor":"#react_code_inspection","url": "react.html"},
"React_JSX_and_TSX#react_eslint": {"parentId": "React_JSX_and_TSX","level": 1,"id": "React_JSX_and_TSX#react_eslint","title": "Using ESLint","disqus_id": "d2","anchor":"#react_eslint","url": "react.html"},
"React_JSX_and_TSX#react_refactoring": {"parentId": "React_JSX_and_TSX","level": 0,"id": "React_JSX_and_TSX#react_refactoring","title": "Refactoring a React application","disqus_id": "d2","anchor":"#react_refactoring","url": "react.html"},
"React_JSX_and_TSX#react_running_and_debugging": {"parentId": "React_JSX_and_TSX","level": 0,"id": "React_JSX_and_TSX#react_running_and_debugging","title": "Running and debugging a React application","disqus_id": "d2","anchor":"#react_running_and_debugging","url": "react.html"},
"React_JSX_and_TSX#react_compiling_application": {"parentId": "React_JSX_and_TSX","level": 0,"id": "React_JSX_and_TSX#react_compiling_application","title": "Building a React application","disqus_id": "d2","anchor":"#react_compiling_application","url": "react.html"},
"React_JSX_and_TSX#react_testing_application": {"parentId": "React_JSX_and_TSX","level": 0,"id": "React_JSX_and_TSX#react_testing_application","title": "Testing a React application","disqus_id": "d2","anchor":"#react_testing_application","url": "react.html"},
"React_JSX_and_TSX#react_debugging_known_limitations": {"parentId": "React_JSX_and_TSX","level": 0,"id": "React_JSX_and_TSX#react_debugging_known_limitations","title": "Some known limitations","disqus_id": "d2","anchor":"#react_debugging_known_limitations","url": "react.html"},
"React_Native#ws_react_native_install_react_native_cli": {"parentId": "React_Native","level": 0,"id": "React_Native#ws_react_native_install_react_native_cli","title": "Installing react-native-cli globally","disqus_id": "d2","anchor":"#ws_react_native_install_react_native_cli","url": "react-native.html"},
"React_Native#create_new_react_native_app": {"parentId": "React_Native","level": 0,"id": "React_Native#create_new_react_native_app","title": "Creating a new React Native application","disqus_id": "d2","anchor":"#create_new_react_native_app","url": "react-native.html"},
"React_Native#starting_with_existing_react_native_application": {"parentId": "React_Native","level": 0,"id": "React_Native#starting_with_existing_react_native_application","title": "Starting with an existing React Native application","disqus_id": "d2","anchor":"#starting_with_existing_react_native_application","url": "react-native.html"},
"React_Native#react_native_coding_assistance": {"parentId": "React_Native","level": 0,"id": "React_Native#react_native_coding_assistance","title": "Coding assistance","disqus_id": "d2","anchor":"#react_native_coding_assistance","url": "react-native.html"},
"React_Native#ws_react_native_run_and_debug": {"parentId": "React_Native","level": 0,"id": "React_Native#ws_react_native_run_and_debug","title": "Running and debugging a React Native application","disqus_id": "d2","anchor":"#ws_react_native_run_and_debug","url": "react-native.html"},
"topicId1000000104#javascript_move_refactorings": {"parentId": "topicId1000000104","level": 0,"id": "topicId1000000104#javascript_move_refactorings","title": "Move Symbol refactoring","disqus_id": "d2","anchor":"#javascript_move_refactorings","url": "specific-javascript-refactorings.html"},
"topicId1000000104#javascript_pull_member_up_refactoring": {"parentId": "topicId1000000104","level": 0,"id": "topicId1000000104#javascript_pull_member_up_refactoring","title": "Pull Class Members Up refactoring","disqus_id": "d2","anchor":"#javascript_pull_member_up_refactoring","url": "specific-javascript-refactorings.html"},
"topicId1000000104#javascript_rename_refactorings": {"parentId": "topicId1000000104","level": 0,"id": "topicId1000000104#javascript_rename_refactorings","title": "Rename refactorings","disqus_id": "d2","anchor":"#javascript_rename_refactorings","url": "specific-javascript-refactorings.html"},
"topicId1000000104#ws_js_rename_refactoring_keep_names_in_compliance": {"parentId": "topicId1000000104","level": 1,"id": "topicId1000000104#ws_js_rename_refactoring_keep_names_in_compliance","title": "Keeping the names of classes and containing files in compliance","disqus_id": "d2","anchor":"#ws_js_rename_refactoring_keep_names_in_compliance","url": "specific-javascript-refactorings.html"},
"topicId1000000104#javascript_extract_refactorings": {"parentId": "topicId1000000104","level": 0,"id": "topicId1000000104#javascript_extract_refactorings","title": "Extract refactorings","disqus_id": "d2","anchor":"#javascript_extract_refactorings","url": "specific-javascript-refactorings.html"},
"topicId1000000104#javascript_extract_parameter": {"parentId": "topicId1000000104","level": 1,"id": "topicId1000000104#javascript_extract_parameter","title": "Extract Parameter","disqus_id": "d2","anchor":"#javascript_extract_parameter","url": "specific-javascript-refactorings.html"},
"topicId1000000104#javascript_extract_parameter_procedure": {"parentId": "topicId1000000104","level": 2,"id": "topicId1000000104#javascript_extract_parameter_procedure","title": "Choosing the refactoring mode","disqus_id": "d2","anchor":"#javascript_extract_parameter_procedure","url": "specific-javascript-refactorings.html"},
"topicId1000000104#javascript_extract_variable": {"parentId": "topicId1000000104","level": 1,"id": "topicId1000000104#javascript_extract_variable","title": "Extract Variable","disqus_id": "d2","anchor":"#javascript_extract_variable","url": "specific-javascript-refactorings.html"},
"topicId1000000104#javascript_extract_variable_procedure": {"parentId": "topicId1000000104","level": 2,"id": "topicId1000000104#javascript_extract_variable_procedure","title": "Choosing the refactoring mode","disqus_id": "d2","anchor":"#javascript_extract_variable_procedure","url": "specific-javascript-refactorings.html"},
"topicId1000000104#javascript_extract_field": {"parentId": "topicId1000000104","level": 1,"id": "topicId1000000104#javascript_extract_field","title": "Extract Field","disqus_id": "d2","anchor":"#javascript_extract_field","url": "specific-javascript-refactorings.html"},
"topicId1000000104#javascript_extract_method": {"parentId": "topicId1000000104","level": 1,"id": "topicId1000000104#javascript_extract_method","title": "Extract Method","disqus_id": "d2","anchor":"#javascript_extract_method","url": "specific-javascript-refactorings.html"},
"topicId1000000104#javascript_extract_superclass": {"parentId": "topicId1000000104","level": 1,"id": "topicId1000000104#javascript_extract_superclass","title": "Extract Superclass","disqus_id": "d2","anchor":"#javascript_extract_superclass","url": "specific-javascript-refactorings.html"},
"topicId1000000104#ws_js_refactoring_extract_vue_component": {"parentId": "topicId1000000104","level": 1,"id": "topicId1000000104#ws_js_refactoring_extract_vue_component","title": "Extract Vue Component","disqus_id": "d2","anchor":"#ws_js_refactoring_extract_vue_component","url": "specific-javascript-refactorings.html"},
"topicId1000000104#javascript_inline_refactorings": {"parentId": "topicId1000000104","level": 0,"id": "topicId1000000104#javascript_inline_refactorings","title": "Inline refactorings","disqus_id": "d2","anchor":"#javascript_inline_refactorings","url": "specific-javascript-refactorings.html"},
"topicId1000000104#javascript_change_signature": {"parentId": "topicId1000000104","level": 0,"id": "topicId1000000104#javascript_change_signature","title": "Change Signature refactoring","disqus_id": "d2","anchor":"#javascript_change_signature","url": "specific-javascript-refactorings.html"},
"Debugging_with_Spy-js#ws_spy_js_ui": {"parentId": "Debugging_with_Spy-js","level": 0,"id": "Debugging_with_Spy-js#ws_spy_js_ui","title": "Spy-js UI","disqus_id": "d2","anchor":"#ws_spy_js_ui","url": "debugging-with-spy-js.html"},
"Debugging_with_Spy-js#createRunConfiguration": {"parentId": "Debugging_with_Spy-js","level": 0,"id": "Debugging_with_Spy-js#createRunConfiguration","title": "Starting a Spy-js tracing session","disqus_id": "d2","anchor":"#createRunConfiguration","url": "debugging-with-spy-js.html"},
"Debugging_with_Spy-js#ws_spy_js_saving_and_loading_tracing_session": {"parentId": "Debugging_with_Spy-js","level": 0,"id": "Debugging_with_Spy-js#ws_spy_js_saving_and_loading_tracing_session","title": "Saving and loading tracing sessions","disqus_id": "d2","anchor":"#ws_spy_js_saving_and_loading_tracing_session","url": "debugging-with-spy-js.html"},
"Debugging_with_Spy-js#ws_spy_js_configuring_range_of_events_to_display": {"parentId": "Debugging_with_Spy-js","level": 0,"id": "Debugging_with_Spy-js#ws_spy_js_configuring_range_of_events_to_display","title": "Configuring the event capturing policy","disqus_id": "d2","anchor":"#ws_spy_js_configuring_range_of_events_to_display","url": "debugging-with-spy-js.html"},
"Debugging_with_Spy-js#ws_spy_js_sync_and_navigation_between_panes_and_editor": {"parentId": "Debugging_with_Spy-js","level": 0,"id": "Debugging_with_Spy-js#ws_spy_js_sync_and_navigation_between_panes_and_editor","title": "Navigating between the panes and the editor","disqus_id": "d2","anchor":"#ws_spy_js_sync_and_navigation_between_panes_and_editor","url": "debugging-with-spy-js.html"},
"Debugging_with_Spy-js#source_maps": {"parentId": "Debugging_with_Spy-js","level": 1,"id": "Debugging_with_Spy-js#source_maps","title": "Navigating through ECMAScript 6, TypeScript, or CoffeeScript","disqus_id": "d2","anchor":"#source_maps","url": "debugging-with-spy-js.html"},
"Debugging_with_Spy-js#advancedNavigation": {"parentId": "Debugging_with_Spy-js","level": 1,"id": "Debugging_with_Spy-js#advancedNavigation","title": "Advanced trace navigation","disqus_id": "d2","anchor":"#advancedNavigation","url": "debugging-with-spy-js.html"},
"Debugging_with_Spy-js#advancedSearch": {"parentId": "Debugging_with_Spy-js","level": 1,"id": "Debugging_with_Spy-js#advancedSearch","title": "Advanced trace search","disqus_id": "d2","anchor":"#advancedSearch","url": "debugging-with-spy-js.html"},
"Debugging_with_Spy-js#autocompletion": {"parentId": "Debugging_with_Spy-js","level": 0,"id": "Debugging_with_Spy-js#autocompletion","title": "Expanding the basic completion list with runtime data (Spy-js autocompletion)","disqus_id": "d2","anchor":"#autocompletion","url": "debugging-with-spy-js.html"},
"Debugging_with_Spy-js#magnification": {"parentId": "Debugging_with_Spy-js","level": 0,"id": "Debugging_with_Spy-js#magnification","title": "Evaluating expressions without running a debugging session (Spy-js magnification)","disqus_id": "d2","anchor":"#magnification","url": "debugging-with-spy-js.html"},
"Debugging_with_Spy-js#diagram": {"parentId": "Debugging_with_Spy-js","level": 0,"id": "Debugging_with_Spy-js#diagram","title": "Viewing dependency diagrams","disqus_id": "d2","anchor":"#diagram","url": "debugging-with-spy-js.html"},
"Running_Cucumber_js_Unit_Tests#prereq": {"parentId": "Running_Cucumber_js_Unit_Tests","level": 0,"id": "Running_Cucumber_js_Unit_Tests#prereq","title": "Before you start","disqus_id": "d2","anchor":"#prereq","url": "running-cucumber-js-unit-tests.html"},
"Running_Cucumber_js_Unit_Tests#ws_cucumber_js_installation": {"parentId": "Running_Cucumber_js_Unit_Tests","level": 0,"id": "Running_Cucumber_js_Unit_Tests#ws_cucumber_js_installation","title": "Installing Cucumber.js","disqus_id": "d2","anchor":"#ws_cucumber_js_installation","url": "running-cucumber-js-unit-tests.html"},
"Running_Cucumber_js_Unit_Tests#test": {"parentId": "Running_Cucumber_js_Unit_Tests","level": 0,"id": "Running_Cucumber_js_Unit_Tests#test","title": "Running tests","disqus_id": "d2","anchor":"#test","url": "running-cucumber-js-unit-tests.html"},
"Running_Cucumber_js_Unit_Tests#nav": {"parentId": "Running_Cucumber_js_Unit_Tests","level": 0,"id": "Running_Cucumber_js_Unit_Tests#nav","title": "Navigation","disqus_id": "d2","anchor":"#nav","url": "running-cucumber-js-unit-tests.html"},
"Running_Unit_Tests_on_Jest#ws_jest_installation": {"parentId": "Running_Unit_Tests_on_Jest","level": 0,"id": "Running_Unit_Tests_on_Jest#ws_jest_installation","title": "Installing Jest","disqus_id": "d2","anchor":"#ws_jest_installation","url": "running-unit-tests-on-jest.html"},
"Running_Unit_Tests_on_Jest#ws_jest_running_tests": {"parentId": "Running_Unit_Tests_on_Jest","level": 0,"id": "Running_Unit_Tests_on_Jest#ws_jest_running_tests","title": "Running tests","disqus_id": "d2","anchor":"#ws_jest_running_tests","url": "running-unit-tests-on-jest.html"},
"Running_Unit_Tests_on_Jest#ws_jest_navigation": {"parentId": "Running_Unit_Tests_on_Jest","level": 0,"id": "Running_Unit_Tests_on_Jest#ws_jest_navigation","title": "Navigation","disqus_id": "d2","anchor":"#ws_jest_navigation","url": "running-unit-tests-on-jest.html"},
"Running_Unit_Tests_on_Jest#ws_jest_snapshot_testing": {"parentId": "Running_Unit_Tests_on_Jest","level": 0,"id": "Running_Unit_Tests_on_Jest#ws_jest_snapshot_testing","title": "Snapshot testing","disqus_id": "d2","anchor":"#ws_jest_snapshot_testing","url": "running-unit-tests-on-jest.html"},
"Running_Unit_Tests_on_Jest#ws_jest_debugging_tests": {"parentId": "Running_Unit_Tests_on_Jest","level": 0,"id": "Running_Unit_Tests_on_Jest#ws_jest_debugging_tests","title": "Debugging tests","disqus_id": "d2","anchor":"#ws_jest_debugging_tests","url": "running-unit-tests-on-jest.html"},
"Running_Unit_Tests_on_Jest#ws_jest_code_coverage": {"parentId": "Running_Unit_Tests_on_Jest","level": 0,"id": "Running_Unit_Tests_on_Jest#ws_jest_code_coverage","title": "Monitoring code coverage","disqus_id": "d2","anchor":"#ws_jest_code_coverage","url": "running-unit-tests-on-jest.html"},
"Running_Tests_on_JSTestDriver#ws_jstd_before_you_start": {"parentId": "Running_Tests_on_JSTestDriver","level": 0,"id": "Running_Tests_on_JSTestDriver#ws_jstd_before_you_start","title": "Before you start","disqus_id": "d2","anchor":"#ws_jstd_before_you_start","url": "running-tests-on-jstestdriver.html"},
"Running_Tests_on_JSTestDriver#enable_extra_frameworks": {"parentId": "Running_Tests_on_JSTestDriver","level": 0,"id": "Running_Tests_on_JSTestDriver#enable_extra_frameworks","title": "Configuring a testing framework in a project","disqus_id": "d2","anchor":"#enable_extra_frameworks","url": "running-tests-on-jstestdriver.html"},
"Running_Tests_on_JSTestDriver#createTestRunnerConfig": {"parentId": "Running_Tests_on_JSTestDriver","level": 0,"id": "Running_Tests_on_JSTestDriver#createTestRunnerConfig","title": "Creating a test runner configuration file manually","disqus_id": "d2","anchor":"#createTestRunnerConfig","url": "running-tests-on-jstestdriver.html"},
"Running_Tests_on_JSTestDriver#ws_jstd_running": {"parentId": "Running_Tests_on_JSTestDriver","level": 0,"id": "Running_Tests_on_JSTestDriver#ws_jstd_running","title": "Running tests","disqus_id": "d2","anchor":"#ws_jstd_running","url": "running-tests-on-jstestdriver.html"},
"Running_Tests_on_JSTestDriver#ws_jstd_navigation": {"parentId": "Running_Tests_on_JSTestDriver","level": 0,"id": "Running_Tests_on_JSTestDriver#ws_jstd_navigation","title": "Navigation","disqus_id": "d2","anchor":"#ws_jstd_navigation","url": "running-tests-on-jstestdriver.html"},
"Running_Tests_on_JSTestDriver#ws_jstd_debugging": {"parentId": "Running_Tests_on_JSTestDriver","level": 0,"id": "Running_Tests_on_JSTestDriver#ws_jstd_debugging","title": "Debugging tests","disqus_id": "d2","anchor":"#ws_jstd_debugging","url": "running-tests-on-jstestdriver.html"},
"Running_Tests_on_JSTestDriver#ws_jstd_code_coverage": {"parentId": "Running_Tests_on_JSTestDriver","level": 0,"id": "Running_Tests_on_JSTestDriver#ws_jstd_code_coverage","title": "Monitoring code coverage","disqus_id": "d2","anchor":"#ws_jstd_code_coverage","url": "running-tests-on-jstestdriver.html"},
"Running_Unit_Tests_on_Karma#ws_karma_before_you_start": {"parentId": "Running_Unit_Tests_on_Karma","level": 0,"id": "Running_Unit_Tests_on_Karma#ws_karma_before_you_start","title": "Before you start","disqus_id": "d2","anchor":"#ws_karma_before_you_start","url": "running-unit-tests-on-karma.html"},
"Running_Unit_Tests_on_Karma#ws_karma_installation": {"parentId": "Running_Unit_Tests_on_Karma","level": 0,"id": "Running_Unit_Tests_on_Karma#ws_karma_installation","title": "Installing Karma and plugins","disqus_id": "d2","anchor":"#ws_karma_installation","url": "running-unit-tests-on-karma.html"},
"Running_Unit_Tests_on_Karma#karmaConfig": {"parentId": "Running_Unit_Tests_on_Karma","level": 0,"id": "Running_Unit_Tests_on_Karma#karmaConfig","title": "Generating a Karma configuration file","disqus_id": "d2","anchor":"#karmaConfig","url": "running-unit-tests-on-karma.html"},
"Running_Unit_Tests_on_Karma#ws_karma_running": {"parentId": "Running_Unit_Tests_on_Karma","level": 0,"id": "Running_Unit_Tests_on_Karma#ws_karma_running","title": "Running tests","disqus_id": "d2","anchor":"#ws_karma_running","url": "running-unit-tests-on-karma.html"},
"Running_Unit_Tests_on_Karma#ws_karma_navigation": {"parentId": "Running_Unit_Tests_on_Karma","level": 0,"id": "Running_Unit_Tests_on_Karma#ws_karma_navigation","title": "Navigation","disqus_id": "d2","anchor":"#ws_karma_navigation","url": "running-unit-tests-on-karma.html"},
"Running_Unit_Tests_on_Karma#ws_karma_debugging": {"parentId": "Running_Unit_Tests_on_Karma","level": 0,"id": "Running_Unit_Tests_on_Karma#ws_karma_debugging","title": "Debugging tests","disqus_id": "d2","anchor":"#ws_karma_debugging","url": "running-unit-tests-on-karma.html"},
"Running_Unit_Tests_on_Karma#ws_karma_code_coverage": {"parentId": "Running_Unit_Tests_on_Karma","level": 0,"id": "Running_Unit_Tests_on_Karma#ws_karma_code_coverage","title": "Monitoring code coverage","disqus_id": "d2","anchor":"#ws_karma_code_coverage","url": "running-unit-tests-on-karma.html"},
"Running_Unit_Tests_on_Mocha#ws_mocha_installation": {"parentId": "Running_Unit_Tests_on_Mocha","level": 0,"id": "Running_Unit_Tests_on_Mocha#ws_mocha_installation","title": "Installing Mocha","disqus_id": "d2","anchor":"#ws_mocha_installation","url": "running-unit-tests-on-mocha.html"},
"Running_Unit_Tests_on_Mocha#ws_mocha_running": {"parentId": "Running_Unit_Tests_on_Mocha","level": 0,"id": "Running_Unit_Tests_on_Mocha#ws_mocha_running","title": "Running tests","disqus_id": "d2","anchor":"#ws_mocha_running","url": "running-unit-tests-on-mocha.html"},
"Running_Unit_Tests_on_Mocha#ws_mocha_navigation": {"parentId": "Running_Unit_Tests_on_Mocha","level": 0,"id": "Running_Unit_Tests_on_Mocha#ws_mocha_navigation","title": "Navigation","disqus_id": "d2","anchor":"#ws_mocha_navigation","url": "running-unit-tests-on-mocha.html"},
"Running_Unit_Tests_on_Mocha#ws_mocha_debugging": {"parentId": "Running_Unit_Tests_on_Mocha","level": 0,"id": "Running_Unit_Tests_on_Mocha#ws_mocha_debugging","title": "Debugging tests","disqus_id": "d2","anchor":"#ws_mocha_debugging","url": "running-unit-tests-on-mocha.html"},
"Running_Unit_Tests_on_Mocha#ws_mocha_code_coverage": {"parentId": "Running_Unit_Tests_on_Mocha","level": 0,"id": "Running_Unit_Tests_on_Mocha#ws_mocha_code_coverage","title": "Monitoring code coverage","disqus_id": "d2","anchor":"#ws_mocha_code_coverage","url": "running-unit-tests-on-mocha.html"},
"Protractor#ws_protractor_installation": {"parentId": "Protractor","level": 0,"id": "Protractor#ws_protractor_installation","title": "Installing Protractor","disqus_id": "d2","anchor":"#ws_protractor_installation","url": "protractor.html"},
"Protractor#ws_protractor_running": {"parentId": "Protractor","level": 0,"id": "Protractor#ws_protractor_running","title": "Running tests","disqus_id": "d2","anchor":"#ws_protractor_running","url": "protractor.html"},
"Protractor#ws_protractor_navigation": {"parentId": "Protractor","level": 0,"id": "Protractor#ws_protractor_navigation","title": "Navigation","disqus_id": "d2","anchor":"#ws_protractor_navigation","url": "protractor.html"},
"Protractor#ws_protractor_debugging": {"parentId": "Protractor","level": 0,"id": "Protractor#ws_protractor_debugging","title": "Debugging tests","disqus_id": "d2","anchor":"#ws_protractor_debugging","url": "protractor.html"},
"vue_js#ws_vue_js_before_you_start": {"parentId": "vue_js","level": 0,"id": "vue_js#ws_vue_js_before_you_start","title": "Before you start","disqus_id": "d2","anchor":"#ws_vue_js_before_you_start","url": "vue-js.html"},
"vue_js#ws_vue_create_new_app": {"parentId": "vue_js","level": 0,"id": "vue_js#ws_vue_create_new_app","title": "Creating a new Vue.js application","disqus_id": "d2","anchor":"#ws_vue_create_new_app","url": "vue-js.html"},
"vue_js#ws_vue_open_existing_application": {"parentId": "vue_js","level": 0,"id": "vue_js#ws_vue_open_existing_application","title": "Starting with an existing Vue.js application","disqus_id": "d2","anchor":"#ws_vue_open_existing_application","url": "vue-js.html"},
"vue_js#ws_vue_working_with_vue_components": {"parentId": "vue_js","level": 0,"id": "vue_js#ws_vue_working_with_vue_components","title": "Creating Vue.js components","disqus_id": "d2","anchor":"#ws_vue_working_with_vue_components","url": "vue-js.html"},
"vue_js#ws_vue_completing_code": {"parentId": "vue_js","level": 0,"id": "vue_js#ws_vue_completing_code","title": "Coding assistance","disqus_id": "d2","anchor":"#ws_vue_completing_code","url": "vue-js.html"},
"vue_js#ws_vue_live_templates": {"parentId": "vue_js","level": 0,"id": "vue_js#ws_vue_live_templates","title": "Generating code with Vue.js Live templates","disqus_id": "d2","anchor":"#ws_vue_live_templates","url": "vue-js.html"},
"vue_js#ws_vue_reformatting_code_with_prettier": {"parentId": "vue_js","level": 0,"id": "vue_js#ws_vue_reformatting_code_with_prettier","title": "Reformatting Vue.js code with Prettier","disqus_id": "d2","anchor":"#ws_vue_reformatting_code_with_prettier","url": "vue-js.html"},
"procedures.webpack#install_and_configure_webpack": {"parentId": "procedures.webpack","level": 0,"id": "procedures.webpack#install_and_configure_webpack","title": "Configuring webpack in IntelliJ IDEA","disqus_id": "d2","anchor":"#install_and_configure_webpack","url": "using-webpack.html"},
"procedures.webpack#edit_webpack_configuration_file": {"parentId": "procedures.webpack","level": 0,"id": "procedures.webpack#edit_webpack_configuration_file","title": "Editing a webpack configuration file","disqus_id": "d2","anchor":"#edit_webpack_configuration_file","url": "using-webpack.html"},
"procedures.webpack#webpack_module_resolution": {"parentId": "procedures.webpack","level": 0,"id": "procedures.webpack#webpack_module_resolution","title": "Resolving modules","disqus_id": "d2","anchor":"#webpack_module_resolution","url": "using-webpack.html"},
"procedures.webpack#debug_application_that_uses_webpack": {"parentId": "procedures.webpack","level": 0,"id": "procedures.webpack#debug_application_that_uses_webpack","title": "Debugging applications that use webpack","disqus_id": "d2","anchor":"#debug_application_that_uses_webpack","url": "using-webpack.html"},
"JSON#ws_json_choose_version": {"parentId": "JSON","level": 0,"id": "JSON#ws_json_choose_version","title": "Enabling JSON5","disqus_id": "d2","anchor":"#ws_json_choose_version","url": "json.html"},
"JSON#ws_json_using_schemas": {"parentId": "JSON","level": 0,"id": "JSON#ws_json_using_schemas","title": "Using schemas from JSON Schema Store","disqus_id": "d2","anchor":"#ws_json_using_schemas","url": "json.html"},
"JSON#ws_json_schema_add_custom": {"parentId": "JSON","level": 0,"id": "JSON#ws_json_schema_add_custom","title": "Using custom JSON schemas","disqus_id": "d2","anchor":"#ws_json_schema_add_custom","url": "json.html"},
"JSON#handling_conflicts_among_scopes_of_schemas": {"parentId": "JSON","level": 0,"id": "JSON#handling_conflicts_among_scopes_of_schemas","title": "Handling conflicts among scopes of schemas","disqus_id": "d2","anchor":"#handling_conflicts_among_scopes_of_schemas","url": "json.html"},
"JSON#ws_json_show_doc_in_html": {"parentId": "JSON","level": 0,"id": "JSON#ws_json_show_doc_in_html","title": "Using HTML descriptions in JSON schema","disqus_id": "d2","anchor":"#ws_json_show_doc_in_html","url": "json.html"},
"Kubernetes#2580ec28": {"parentId": "Kubernetes","level": 0,"id": "Kubernetes#2580ec28","title": "Resource configuration files","disqus_id": "d2","anchor":"#2580ec28","url": "kubernetes.html"},
"Kubernetes#helm": {"parentId": "Kubernetes","level": 0,"id": "Kubernetes#helm","title": "Helm support","disqus_id": "d2","anchor":"#helm","url": "kubernetes.html"},
"Kubernetes#efe51a11": {"parentId": "Kubernetes","level": 0,"id": "Kubernetes#efe51a11","title": "Productivity tips","disqus_id": "d2","anchor":"#efe51a11","url": "kubernetes.html"},
"using_zen_coding_support#ws_emmet_enable": {"parentId": "using_zen_coding_support","level": 0,"id": "using_zen_coding_support#ws_emmet_enable","title": "Enabling and configuring Emmet","disqus_id": "d2","anchor":"#ws_emmet_enable","url": "using-zen-coding-support.html"},
"using_zen_coding_support#emmet_configure_expansion_key": {"parentId": "using_zen_coding_support","level": 0,"id": "using_zen_coding_support#emmet_configure_expansion_key","title": "Configuring the abbreviation expansion key","disqus_id": "d2","anchor":"#emmet_configure_expansion_key","url": "using-zen-coding-support.html"},
"using_zen_coding_support#emmet_surround_code_block_with_emmet_template": {"parentId": "using_zen_coding_support","level": 0,"id": "using_zen_coding_support#emmet_surround_code_block_with_emmet_template","title": "Surrounding a block of code with an Emmet template","disqus_id": "d2","anchor":"#emmet_surround_code_block_with_emmet_template","url": "using-zen-coding-support.html"},
"using_zen_coding_support#emmet_navigation_between_edit_points": {"parentId": "using_zen_coding_support","level": 0,"id": "using_zen_coding_support#emmet_navigation_between_edit_points","title": "Navigating between edit points","disqus_id": "d2","anchor":"#emmet_navigation_between_edit_points","url": "using-zen-coding-support.html"},
"Compressing_CSS#YUI_installation": {"parentId": "Compressing_CSS","level": 0,"id": "Compressing_CSS#YUI_installation","title": "Installing and configuring the YUI Compressor","disqus_id": "d2","anchor":"#YUI_installation","url": "compressing-css.html"},
"Compressing_CSS#compressing_css": {"parentId": "Compressing_CSS","level": 0,"id": "Compressing_CSS#compressing_css","title": "Compressing the CSS code","disqus_id": "d2","anchor":"#compressing_css","url": "compressing-css.html"},
"settings.project.settings.file.watchers.less.sass.scss#sass_scss_less_before_you_start": {"parentId": "settings.project.settings.file.watchers.less.sass.scss","level": 0,"id": "settings.project.settings.file.watchers.less.sass.scss#sass_scss_less_before_you_start","title": "Before you start","disqus_id": "d2","anchor":"#sass_scss_less_before_you_start","url": "transpiling-sass-less-and-scss-to-css.html"},
"settings.project.settings.file.watchers.less.sass.scss#install_sass_scss": {"parentId": "settings.project.settings.file.watchers.less.sass.scss","level": 0,"id": "settings.project.settings.file.watchers.less.sass.scss#install_sass_scss","title": "Installing Sass/SCSS","disqus_id": "d2","anchor":"#install_sass_scss","url": "transpiling-sass-less-and-scss-to-css.html"},
"settings.project.settings.file.watchers.less.sass.scss#ws_less_installation": {"parentId": "settings.project.settings.file.watchers.less.sass.scss","level": 0,"id": "settings.project.settings.file.watchers.less.sass.scss#ws_less_installation","title": "Installing Less","disqus_id": "d2","anchor":"#ws_less_installation","url": "transpiling-sass-less-and-scss-to-css.html"},
"settings.project.settings.file.watchers.less.sass.scss#less_sass_scss_compiling_to_css": {"parentId": "settings.project.settings.file.watchers.less.sass.scss","level": 0,"id": "settings.project.settings.file.watchers.less.sass.scss#less_sass_scss_compiling_to_css","title": "Compiling the code into CSS","disqus_id": "d2","anchor":"#less_sass_scss_compiling_to_css","url": "transpiling-sass-less-and-scss-to-css.html"},
"Extract_variable_for_SASS#inplace_refactoring": {"parentId": "Extract_variable_for_SASS","level": 0,"id": "Extract_variable_for_SASS#inplace_refactoring","title": "Extracting a Sass variable in-place","disqus_id": "d2","anchor":"#inplace_refactoring","url": "extract-variable-for-sass.html"},
"Extract_variable_for_SASS#extract_variable_dialog": {"parentId": "Extract_variable_for_SASS","level": 0,"id": "Extract_variable_for_SASS#extract_variable_dialog","title": "Extracting a Sass variable using the dialog box","disqus_id": "d2","anchor":"#extract_variable_dialog","url": "extract-variable-for-sass.html"},
"settings.project.settings.file.watchers.sass.scss.in.compass#compassPrerequisites": {"parentId": "settings.project.settings.file.watchers.sass.scss.in.compass","level": 0,"id": "settings.project.settings.file.watchers.sass.scss.in.compass#compassPrerequisites","title": "Before you start","disqus_id": "d2","anchor":"#compassPrerequisites","url": "transpiling-compass-to-css.html"},
"settings.project.settings.file.watchers.sass.scss.in.compass#compass_installation": {"parentId": "settings.project.settings.file.watchers.sass.scss.in.compass","level": 0,"id": "settings.project.settings.file.watchers.sass.scss.in.compass#compass_installation","title": "Installing Compass","disqus_id": "d2","anchor":"#compass_installation","url": "transpiling-compass-to-css.html"},
"settings.project.settings.file.watchers.sass.scss.in.compass#compass_create_open_app": {"parentId": "settings.project.settings.file.watchers.sass.scss.in.compass","level": 0,"id": "settings.project.settings.file.watchers.sass.scss.in.compass#compass_create_open_app","title": "Starting with a Compass application in IntelliJ IDEA","disqus_id": "d2","anchor":"#compass_create_open_app","url": "transpiling-compass-to-css.html"},
"settings.project.settings.file.watchers.sass.scss.in.compass#compass_compiling_sass_scss": {"parentId": "settings.project.settings.file.watchers.sass.scss.in.compass","level": 0,"id": "settings.project.settings.file.watchers.sass.scss.in.compass#compass_compiling_sass_scss","title": "Compiling Sass and SCSS","disqus_id": "d2","anchor":"#compass_compiling_sass_scss","url": "transpiling-compass-to-css.html"},
"settings.project.settings.file.watchers.stylus#ws_stylus_installation": {"parentId": "settings.project.settings.file.watchers.stylus","level": 0,"id": "settings.project.settings.file.watchers.stylus#ws_stylus_installation","title": "Installing Stylus","disqus_id": "d2","anchor":"#ws_stylus_installation","url": "transpiling-stylus-to-css.html"},
"settings.project.settings.file.watchers.stylus#stylus_compilation": {"parentId": "settings.project.settings.file.watchers.stylus","level": 0,"id": "settings.project.settings.file.watchers.stylus#stylus_compilation","title": "Compiling the Stylus code","disqus_id": "d2","anchor":"#stylus_compilation","url": "transpiling-stylus-to-css.html"},
"Using_Stylelint_Code_Quality_Tool#ws_stylelint_install": {"parentId": "Using_Stylelint_Code_Quality_Tool","level": 0,"id": "Using_Stylelint_Code_Quality_Tool#ws_stylelint_install","title": "Installing Stylelint","disqus_id": "d2","anchor":"#ws_stylelint_install","url": "using-stylelint-code-quality-tool.html"},
"Using_Stylelint_Code_Quality_Tool#ws_stylelint_activate_and_configure": {"parentId": "Using_Stylelint_Code_Quality_Tool","level": 0,"id": "Using_Stylelint_Code_Quality_Tool#ws_stylelint_activate_and_configure","title": "Activating and configuring Stylelint","disqus_id": "d2","anchor":"#ws_stylelint_activate_and_configure","url": "using-stylelint-code-quality-tool.html"},
"procedure.developingcode.xmlhtml.validate#html_default_language_level": {"parentId": "procedure.developingcode.xmlhtml.validate","level": 0,"id": "procedure.developingcode.xmlhtml.validate#html_default_language_level","title": "Choosing the default HTML language level","disqus_id": "d2","anchor":"#html_default_language_level","url": "validating-web-content-files.html"},
"procedure.developingcode.xmlhtml.validate#xml_default_validation_schema": {"parentId": "procedure.developingcode.xmlhtml.validate","level": 0,"id": "procedure.developingcode.xmlhtml.validate#xml_default_validation_schema","title": "Choosing the default schema to validate XML files","disqus_id": "d2","anchor":"#xml_default_validation_schema","url": "validating-web-content-files.html"},
"procedure.developingcode.xmlhtml.validate#xml_run_full_validation": {"parentId": "procedure.developingcode.xmlhtml.validate","level": 0,"id": "procedure.developingcode.xmlhtml.validate#xml_run_full_validation","title": "Running full validation on an XML file","disqus_id": "d2","anchor":"#xml_run_full_validation","url": "validating-web-content-files.html"},
"Developing_Node_JS_Applications#ws_node_configure_local_node_interpreter": {"parentId": "Developing_Node_JS_Applications","level": 0,"id": "Developing_Node_JS_Applications#ws_node_configure_local_node_interpreter","title": "Configuring a local Node.js interpreter","disqus_id": "d2","anchor":"#ws_node_configure_local_node_interpreter","url": "developing-node-js-applications.html"},
"Developing_Node_JS_Applications#ws_node_version": {"parentId": "Developing_Node_JS_Applications","level": 0,"id": "Developing_Node_JS_Applications#ws_node_version","title": "Using a system Node.js version","disqus_id": "d2","anchor":"#ws_node_version","url": "developing-node-js-applications.html"},
"Developing_Node_JS_Applications#ws_node_wsl": {"parentId": "Developing_Node_JS_Applications","level": 0,"id": "Developing_Node_JS_Applications#ws_node_wsl","title": "Using Node.js on Windows Subsystem for Linux","disqus_id": "d2","anchor":"#ws_node_wsl","url": "developing-node-js-applications.html"},
"Developing_Node_JS_Applications#ws_node_quick_start": {"parentId": "Developing_Node_JS_Applications","level": 0,"id": "Developing_Node_JS_Applications#ws_node_quick_start","title": "Quick start with a Node.js application","disqus_id": "d2","anchor":"#ws_node_quick_start","url": "developing-node-js-applications.html"},
"Configuring_Remote_Node_Interpreters#ws_node_configure_remote_node_interpreter_ssh": {"parentId": "Configuring_Remote_Node_Interpreters","level": 0,"id": "Configuring_Remote_Node_Interpreters#ws_node_configure_remote_node_interpreter_ssh","title": "Configuring a remote Node.js interpreter on a host accessible through SSH connection","disqus_id": "d2","anchor":"#ws_node_configure_remote_node_interpreter_ssh","url": "configuring-remote-node-interpreters.html"},
"Configuring_Remote_Node_Interpreters#ws_node_configure_remote_node_interpreter_vagrant": {"parentId": "Configuring_Remote_Node_Interpreters","level": 0,"id": "Configuring_Remote_Node_Interpreters#ws_node_configure_remote_node_interpreter_vagrant","title": "Configuring a remote Node.js interpreter in a Vagrant environment instance","disqus_id": "d2","anchor":"#ws_node_configure_remote_node_interpreter_vagrant","url": "configuring-remote-node-interpreters.html"},
"Configuring_Remote_Node_Interpreters#ws_node_configure_remote_node_interpreter_sftp": {"parentId": "Configuring_Remote_Node_Interpreters","level": 0,"id": "Configuring_Remote_Node_Interpreters#ws_node_configure_remote_node_interpreter_sftp","title": "Configuring a remote Node.js interpreter on a remote host accessible through SFTP","disqus_id": "d2","anchor":"#ws_node_configure_remote_node_interpreter_sftp","url": "configuring-remote-node-interpreters.html"},
"Configuring_Remote_Node_Interpreters#ws_node_configure_remote_node_interpreter_docker": {"parentId": "Configuring_Remote_Node_Interpreters","level": 0,"id": "Configuring_Remote_Node_Interpreters#ws_node_configure_remote_node_interpreter_docker","title": "Configuring a remote Node.js interpreter in a Docker container","disqus_id": "d2","anchor":"#ws_node_configure_remote_node_interpreter_docker","url": "configuring-remote-node-interpreters.html"},
"Configuring_Remote_Node_Interpreters#ws_node_configure_remote_node_interpreter_mappings": {"parentId": "Configuring_Remote_Node_Interpreters","level": 0,"id": "Configuring_Remote_Node_Interpreters#ws_node_configure_remote_node_interpreter_mappings","title": "Configuring mappings","disqus_id": "d2","anchor":"#ws_node_configure_remote_node_interpreter_mappings","url": "configuring-remote-node-interpreters.html"},
"Running_and_Debugging_Node_JS#before_you_start": {"parentId": "Running_and_Debugging_Node_JS","level": 0,"id": "Running_and_Debugging_Node_JS#before_you_start","title": "Before you start","disqus_id": "d2","anchor":"#before_you_start","url": "running-and-debugging-node-js.html"},
"Running_and_Debugging_Node_JS#running": {"parentId": "Running_and_Debugging_Node_JS","level": 0,"id": "Running_and_Debugging_Node_JS#running","title": "Running a Node.js application","disqus_id": "d2","anchor":"#running","url": "running-and-debugging-node-js.html"},
"Running_and_Debugging_Node_JS#node_debugging_overview": {"parentId": "Running_and_Debugging_Node_JS","level": 0,"id": "Running_and_Debugging_Node_JS#node_debugging_overview","title": "Debugging a Node.js application","disqus_id": "d2","anchor":"#node_debugging_overview","url": "running-and-debugging-node-js.html"},
"Running_and_Debugging_Node_JS#node_debugging_modes": {"parentId": "Running_and_Debugging_Node_JS","level": 1,"id": "Running_and_Debugging_Node_JS#node_debugging_modes","title": "Local and Remote debugging","disqus_id": "d2","anchor":"#node_debugging_modes","url": "running-and-debugging-node-js.html"},
"Running_and_Debugging_Node_JS#debugLocal": {"parentId": "Running_and_Debugging_Node_JS","level": 1,"id": "Running_and_Debugging_Node_JS#debugLocal","title": "Debugging a Node.js application locally","disqus_id": "d2","anchor":"#debugLocal","url": "running-and-debugging-node-js.html"},
"Running_and_Debugging_Node_JS#ws_node_debugging_debugger_console": {"parentId": "Running_and_Debugging_Node_JS","level": 1,"id": "Running_and_Debugging_Node_JS#ws_node_debugging_debugger_console","title": "Using interactive Debugger Console","disqus_id": "d2","anchor":"#ws_node_debugging_debugger_console","url": "running-and-debugging-node-js.html"},
"Running_and_Debugging_Node_JS#remote_debugging": {"parentId": "Running_and_Debugging_Node_JS","level": 1,"id": "Running_and_Debugging_Node_JS#remote_debugging","title": "Debugging a running Node.js application","disqus_id": "d2","anchor":"#remote_debugging","url": "running-and-debugging-node-js.html"},
"Running_and_Debugging_Node_JS#nodemon": {"parentId": "Running_and_Debugging_Node_JS","level": 1,"id": "Running_and_Debugging_Node_JS#nodemon","title": "Debugging a Node.js application that uses nodemon","disqus_id": "d2","anchor":"#nodemon","url": "running-and-debugging-node-js.html"},
"Running_and_Debugging_Node_JS#ws_node_start_jsdebug_rc_with_nodejs_rc": {"parentId": "Running_and_Debugging_Node_JS","level": 1,"id": "Running_and_Debugging_Node_JS#ws_node_start_jsdebug_rc_with_nodejs_rc","title": "Starting a JavaScript Debug configuration together with a Node.js configuration","disqus_id": "d2","anchor":"#ws_node_start_jsdebug_rc_with_nodejs_rc","url": "running-and-debugging-node-js.html"},
"Running_and_Debugging_Node_JS#ws_node_debug_remote_environment": {"parentId": "Running_and_Debugging_Node_JS","level": 1,"id": "Running_and_Debugging_Node_JS#ws_node_debug_remote_environment","title": "Debugging a Node.js application running in a remote environment","disqus_id": "d2","anchor":"#ws_node_debug_remote_environment","url": "running-and-debugging-node-js.html"},
"Running_and_Debugging_Node_JS#node_docker_run_debug": {"parentId": "Running_and_Debugging_Node_JS","level": 2,"id": "Running_and_Debugging_Node_JS#node_docker_run_debug","title": "Debugging a Node.js application in a Docker container","disqus_id": "d2","anchor":"#node_docker_run_debug","url": "running-and-debugging-node-js.html"},
"Running_and_Debugging_Node_JS#node_multiprocess_debugging": {"parentId": "Running_and_Debugging_Node_JS","level": 1,"id": "Running_and_Debugging_Node_JS#node_multiprocess_debugging","title": "Node.js multiprocess debugging","disqus_id": "d2","anchor":"#node_multiprocess_debugging","url": "running-and-debugging-node-js.html"},
"Unit_Testing_Node_JS#enable_nodeunit": {"parentId": "Unit_Testing_Node_JS","level": 0,"id": "Unit_Testing_Node_JS#enable_nodeunit","title": "Before you start","disqus_id": "d2","anchor":"#enable_nodeunit","url": "unit-testing-node-js.html"},
"Unit_Testing_Node_JS#ws_node_test_overview": {"parentId": "Unit_Testing_Node_JS","level": 0,"id": "Unit_Testing_Node_JS#ws_node_test_overview","title": "Creating and running unit tests for Node.js applications","disqus_id": "d2","anchor":"#ws_node_test_overview","url": "unit-testing-node-js.html"},
"Unit_Testing_Node_JS#write_tests": {"parentId": "Unit_Testing_Node_JS","level": 0,"id": "Unit_Testing_Node_JS#write_tests","title": "Creating Nodeunit tests","disqus_id": "d2","anchor":"#write_tests","url": "unit-testing-node-js.html"},
"Unit_Testing_Node_JS#run_config": {"parentId": "Unit_Testing_Node_JS","level": 0,"id": "Unit_Testing_Node_JS#run_config","title": "Creating a Nodeunit run configuration","disqus_id": "d2","anchor":"#run_config","url": "unit-testing-node-js.html"},
"V8_CPU_and_Memory_Profiling#05e075c8": {"parentId": "V8_CPU_and_Memory_Profiling","level": 0,"id": "V8_CPU_and_Memory_Profiling#05e075c8","title": "Why is profiling important","disqus_id": "d2","anchor":"#05e075c8","url": "v8-cpu-and-memory-profiling.html"},
"V8_CPU_and_Memory_Profiling#ws_v8_profiling_preparing": {"parentId": "V8_CPU_and_Memory_Profiling","level": 0,"id": "V8_CPU_and_Memory_Profiling#ws_v8_profiling_preparing","title": "Preparing for V8 CPU and memory heap profiling","disqus_id": "d2","anchor":"#ws_v8_profiling_preparing","url": "v8-cpu-and-memory-profiling.html"},
"V8_CPU_and_Memory_Profiling#ws_node_cpu_profiling": {"parentId": "V8_CPU_and_Memory_Profiling","level": 0,"id": "V8_CPU_and_Memory_Profiling#ws_node_cpu_profiling","title": "CPU profiling","disqus_id": "d2","anchor":"#ws_node_cpu_profiling","url": "v8-cpu-and-memory-profiling.html"},
"V8_CPU_and_Memory_Profiling#ws_node_memory_profiling": {"parentId": "V8_CPU_and_Memory_Profiling","level": 0,"id": "V8_CPU_and_Memory_Profiling#ws_node_memory_profiling","title": "Memory profiling","disqus_id": "d2","anchor":"#ws_node_memory_profiling","url": "v8-cpu-and-memory-profiling.html"},
"settings.project.settings.file.watchers.pug#ws_node_jade_before_you_start": {"parentId": "settings.project.settings.file.watchers.pug","level": 0,"id": "settings.project.settings.file.watchers.pug#ws_node_jade_before_you_start","title": "Before you start","disqus_id": "d2","anchor":"#ws_node_jade_before_you_start","url": "jade.html"},
"settings.project.settings.file.watchers.pug#ws_node_jade_ui_changes": {"parentId": "settings.project.settings.file.watchers.pug","level": 0,"id": "settings.project.settings.file.watchers.pug#ws_node_jade_ui_changes","title": "Changes to the UI","disqus_id": "d2","anchor":"#ws_node_jade_ui_changes","url": "jade.html"},
"settings.project.settings.file.watchers.pug#ws_node_jade_templates": {"parentId": "settings.project.settings.file.watchers.pug","level": 0,"id": "settings.project.settings.file.watchers.pug#ws_node_jade_templates","title": "Using Pug(Jade) templates in a Node.js application","disqus_id": "d2","anchor":"#ws_node_jade_templates","url": "jade.html"},
"Installing_and_Removing_External_Software_Using_Node_Package_Manager#installingNodeJs": {"parentId": "Installing_and_Removing_External_Software_Using_Node_Package_Manager","level": 0,"id": "Installing_and_Removing_External_Software_Using_Node_Package_Manager#installingNodeJs","title": "Before you start","disqus_id": "d2","anchor":"#installingNodeJs","url": "installing-and-removing-external-software-using-node-package-manager.html"},
"Installing_and_Removing_External_Software_Using_Node_Package_Manager#ws_npm_yarn_configure_package_manager": {"parentId": "Installing_and_Removing_External_Software_Using_Node_Package_Manager","level": 0,"id": "Installing_and_Removing_External_Software_Using_Node_Package_Manager#ws_npm_yarn_configure_package_manager","title": "Choosing a project package manager","disqus_id": "d2","anchor":"#ws_npm_yarn_configure_package_manager","url": "installing-and-removing-external-software-using-node-package-manager.html"},
"Installing_and_Removing_External_Software_Using_Node_Package_Manager#ws_npm_install_cmd": {"parentId": "Installing_and_Removing_External_Software_Using_Node_Package_Manager","level": 0,"id": "Installing_and_Removing_External_Software_Using_Node_Package_Manager#ws_npm_install_cmd","title": "Installing packages using the built-in Terminal","disqus_id": "d2","anchor":"#ws_npm_install_cmd","url": "installing-and-removing-external-software-using-node-package-manager.html"},
"Installing_and_Removing_External_Software_Using_Node_Package_Manager#ws_npm_install_ui": {"parentId": "Installing_and_Removing_External_Software_Using_Node_Package_Manager","level": 0,"id": "Installing_and_Removing_External_Software_Using_Node_Package_Manager#ws_npm_install_ui","title": "Installing and upgrading packages on the Node.js and NPM page","disqus_id": "d2","anchor":"#ws_npm_install_ui","url": "installing-and-removing-external-software-using-node-package-manager.html"},
"Installing_and_Removing_External_Software_Using_Node_Package_Manager#ws_npm_yarn_edit_package_json": {"parentId": "Installing_and_Removing_External_Software_Using_Node_Package_Manager","level": 0,"id": "Installing_and_Removing_External_Software_Using_Node_Package_Manager#ws_npm_yarn_edit_package_json","title": "Editing package.json","disqus_id": "d2","anchor":"#ws_npm_yarn_edit_package_json","url": "installing-and-removing-external-software-using-node-package-manager.html"},
"Installing_and_Removing_External_Software_Using_Node_Package_Manager#ws_npm_running_npm_scripts": {"parentId": "Installing_and_Removing_External_Software_Using_Node_Package_Manager","level": 0,"id": "Installing_and_Removing_External_Software_Using_Node_Package_Manager#ws_npm_running_npm_scripts","title": "Running and debugging scripts","disqus_id": "d2","anchor":"#ws_npm_running_npm_scripts","url": "installing-and-removing-external-software-using-node-package-manager.html"},
"Installing_and_Removing_External_Software_Using_Node_Package_Manager#ws_npm_running_scripts_from_editor": {"parentId": "Installing_and_Removing_External_Software_Using_Node_Package_Manager","level": 1,"id": "Installing_and_Removing_External_Software_Using_Node_Package_Manager#ws_npm_running_scripts_from_editor","title": "Running and debugging scripts from package.json","disqus_id": "d2","anchor":"#ws_npm_running_scripts_from_editor","url": "installing-and-removing-external-software-using-node-package-manager.html"},
"Installing_and_Removing_External_Software_Using_Node_Package_Manager#ws_npm_run_debug_scripts_from_npm_tool_window": {"parentId": "Installing_and_Removing_External_Software_Using_Node_Package_Manager","level": 1,"id": "Installing_and_Removing_External_Software_Using_Node_Package_Manager#ws_npm_run_debug_scripts_from_npm_tool_window","title": "Running and debugging scripts from the npm tool window","disqus_id": "d2","anchor":"#ws_npm_run_debug_scripts_from_npm_tool_window","url": "installing-and-removing-external-software-using-node-package-manager.html"},
"Installing_and_Removing_External_Software_Using_Node_Package_Manager#ws_npm_run_config": {"parentId": "Installing_and_Removing_External_Software_Using_Node_Package_Manager","level": 1,"id": "Installing_and_Removing_External_Software_Using_Node_Package_Manager#ws_npm_run_config","title": "Running scripts by a run configuration","disqus_id": "d2","anchor":"#ws_npm_run_config","url": "installing-and-removing-external-software-using-node-package-manager.html"},
"Installing_and_Removing_External_Software_Using_Node_Package_Manager#ws_npm_run_automatically": {"parentId": "Installing_and_Removing_External_Software_Using_Node_Package_Manager","level": 1,"id": "Installing_and_Removing_External_Software_Using_Node_Package_Manager#ws_npm_run_automatically","title": "Running scripts automatically on start-up","disqus_id": "d2","anchor":"#ws_npm_run_automatically","url": "installing-and-removing-external-software-using-node-package-manager.html"},
"Installing_and_Removing_External_Software_Using_Node_Package_Manager#ws_npm_run_bas_before_launch_task": {"parentId": "Installing_and_Removing_External_Software_Using_Node_Package_Manager","level": 1,"id": "Installing_and_Removing_External_Software_Using_Node_Package_Manager#ws_npm_run_bas_before_launch_task","title": "Running scripts as before-launch tasks","disqus_id": "d2","anchor":"#ws_npm_run_bas_before_launch_task","url": "installing-and-removing-external-software-using-node-package-manager.html"},
"composer.settings.dialog#37895ba4": {"parentId": "composer.settings.dialog","level": 0,"id": "composer.settings.dialog#37895ba4","title": "Downloading and installing Composer","disqus_id": "d2","anchor":"#37895ba4","url": "using-the-composer-dependency-manager.html"},
"composer.settings.dialog#creatingFromTemplate": {"parentId": "composer.settings.dialog","level": 0,"id": "composer.settings.dialog#creatingFromTemplate","title": "Creating a new Composer project","disqus_id": "d2","anchor":"#creatingFromTemplate","url": "using-the-composer-dependency-manager.html"},
"composer.settings.dialog#initializing_in_existing_project": {"parentId": "composer.settings.dialog","level": 0,"id": "composer.settings.dialog#initializing_in_existing_project","title": "Initializing Composer in an existing project","disqus_id": "d2","anchor":"#initializing_in_existing_project","url": "using-the-composer-dependency-manager.html"},
"composer.settings.dialog#setting-up-an-external-composer-project": {"parentId": "composer.settings.dialog","level": 0,"id": "composer.settings.dialog#setting-up-an-external-composer-project","title": "Opening an existing Composer project in IntelliJ IDEA","disqus_id": "d2","anchor":"#setting-up-an-external-composer-project","url": "using-the-composer-dependency-manager.html"},
"composer.settings.dialog#default_composer_json": {"parentId": "composer.settings.dialog","level": 0,"id": "composer.settings.dialog#default_composer_json","title": "Appointing a default composer.json in a IntelliJ IDEA project","disqus_id": "d2","anchor":"#default_composer_json","url": "using-the-composer-dependency-manager.html"},
"composer.settings.dialog#addingDependencies": {"parentId": "composer.settings.dialog","level": 0,"id": "composer.settings.dialog#addingDependencies","title": "Installing dependencies","disqus_id": "d2","anchor":"#addingDependencies","url": "using-the-composer-dependency-manager.html"},
"composer.settings.dialog#updating-dependencies": {"parentId": "composer.settings.dialog","level": 0,"id": "composer.settings.dialog#updating-dependencies","title": "Updating dependencies","disqus_id": "d2","anchor":"#updating-dependencies","url": "using-the-composer-dependency-manager.html"},
"composer.settings.dialog#uninstalling-dependencies": {"parentId": "composer.settings.dialog","level": 0,"id": "composer.settings.dialog#uninstalling-dependencies","title": "Uninstalling dependencies","disqus_id": "d2","anchor":"#uninstalling-dependencies","url": "using-the-composer-dependency-manager.html"},
"composer.settings.dialog#composer_log": {"parentId": "composer.settings.dialog","level": 0,"id": "composer.settings.dialog#composer_log","title": "Viewing the Composer Log","disqus_id": "d2","anchor":"#composer_log","url": "using-the-composer-dependency-manager.html"},
"composer.settings.dialog#additional-commands": {"parentId": "composer.settings.dialog","level": 0,"id": "composer.settings.dialog#additional-commands","title": "Running Additional Composer Commands","disqus_id": "d2","anchor":"#additional-commands","url": "using-the-composer-dependency-manager.html"},
"composer.settings.dialog#enableComposerInProduct": {"parentId": "composer.settings.dialog","level": 0,"id": "composer.settings.dialog#enableComposerInProduct","title": "Running Composer from the command line","disqus_id": "d2","anchor":"#enableComposerInProduct","url": "using-the-composer-dependency-manager.html"},
"Refactoring_PHP#php_change_signature": {"parentId": "Refactoring_PHP","level": 0,"id": "Refactoring_PHP#php_change_signature","title": "Change Signature","disqus_id": "d2","anchor":"#php_change_signature","url": "refactoring-php.html"},
"Refactoring_PHP#7fee4889": {"parentId": "Refactoring_PHP","level": 1,"id": "Refactoring_PHP#7fee4889","title": "Examples","disqus_id": "d2","anchor":"#7fee4889","url": "refactoring-php.html"},
"Using_Behat_Framework#php_test_frameworks_behat_before_you_start": {"parentId": "Using_Behat_Framework","level": 0,"id": "Using_Behat_Framework#php_test_frameworks_behat_before_you_start","title": "Before you start","disqus_id": "d2","anchor":"#php_test_frameworks_behat_before_you_start","url": "using-behat-framework.html"},
"Using_Behat_Framework#php_test_frameworks_behat_download": {"parentId": "Using_Behat_Framework","level": 0,"id": "Using_Behat_Framework#php_test_frameworks_behat_download","title": "Downloading and installing Behat","disqus_id": "d2","anchor":"#php_test_frameworks_behat_download","url": "using-behat-framework.html"},
"Using_Behat_Framework#php_test_frameworks_behat_integrate": {"parentId": "Using_Behat_Framework","level": 0,"id": "Using_Behat_Framework#php_test_frameworks_behat_integrate","title": "Integrating Behat with IntelliJ IDEA in a project","disqus_id": "d2","anchor":"#php_test_frameworks_behat_integrate","url": "using-behat-framework.html"},
"Using_Behat_Framework#php_test_frameworks_behat_run_tests": {"parentId": "Using_Behat_Framework","level": 0,"id": "Using_Behat_Framework#php_test_frameworks_behat_run_tests","title": "Running and debugging Behat tests","disqus_id": "d2","anchor":"#php_test_frameworks_behat_run_tests","url": "using-behat-framework.html"},
"Using_Behat_Framework#behat_monitor_test_results": {"parentId": "Using_Behat_Framework","level": 0,"id": "Using_Behat_Framework#behat_monitor_test_results","title": "Monitoring Behat test results","disqus_id": "d2","anchor":"#behat_monitor_test_results","url": "using-behat-framework.html"},
"Using_Codeception_Framework#php_test_frameworks_codeception_before_you_start": {"parentId": "Using_Codeception_Framework","level": 0,"id": "Using_Codeception_Framework#php_test_frameworks_codeception_before_you_start","title": "Before you start","disqus_id": "d2","anchor":"#php_test_frameworks_codeception_before_you_start","url": "using-codeception-framework.html"},
"Using_Codeception_Framework#php_test_frameworks_codeception_download": {"parentId": "Using_Codeception_Framework","level": 0,"id": "Using_Codeception_Framework#php_test_frameworks_codeception_download","title": "Downloading and installing Codeception","disqus_id": "d2","anchor":"#php_test_frameworks_codeception_download","url": "using-codeception-framework.html"},
"Using_Codeception_Framework#php_test_frameworks_codeception_integrate": {"parentId": "Using_Codeception_Framework","level": 0,"id": "Using_Codeception_Framework#php_test_frameworks_codeception_integrate","title": "Integrating Codeception with IntelliJ IDEA in a project","disqus_id": "d2","anchor":"#php_test_frameworks_codeception_integrate","url": "using-codeception-framework.html"},
"Using_Codeception_Framework#generate_codeception_test_for_a_class_in_a_separate_file": {"parentId": "Using_Codeception_Framework","level": 0,"id": "Using_Codeception_Framework#generate_codeception_test_for_a_class_in_a_separate_file","title": "Generating a Codeception test for a class","disqus_id": "d2","anchor":"#generate_codeception_test_for_a_class_in_a_separate_file","url": "using-codeception-framework.html"},
"Using_Codeception_Framework#php_test_frameworks_codeception_run_tests": {"parentId": "Using_Codeception_Framework","level": 0,"id": "Using_Codeception_Framework#php_test_frameworks_codeception_run_tests","title": "Running and debugging Codeception tests","disqus_id": "d2","anchor":"#php_test_frameworks_codeception_run_tests","url": "using-codeception-framework.html"},
"Using_Codeception_Framework#codeception_monitor_test_results": {"parentId": "Using_Codeception_Framework","level": 0,"id": "Using_Codeception_Framework#codeception_monitor_test_results","title": "Monitoring test results","disqus_id": "d2","anchor":"#codeception_monitor_test_results","url": "using-codeception-framework.html"},
"Using_PHPSpec#php_test_frameworks_phpspec_before_you_start": {"parentId": "Using_PHPSpec","level": 0,"id": "Using_PHPSpec#php_test_frameworks_phpspec_before_you_start","title": "Before you start","disqus_id": "d2","anchor":"#php_test_frameworks_phpspec_before_you_start","url": "using-phpspec.html"},
"Using_PHPSpec#phpspec_install_with_composer": {"parentId": "Using_PHPSpec","level": 0,"id": "Using_PHPSpec#phpspec_install_with_composer","title": "Installing PHPSpec with Composer","disqus_id": "d2","anchor":"#phpspec_install_with_composer","url": "using-phpspec.html"},
"Using_PHPSpec#php_test_frameworks_phpspec_integrate": {"parentId": "Using_PHPSpec","level": 0,"id": "Using_PHPSpec#php_test_frameworks_phpspec_integrate","title": "Integrating PHPSpec with a IntelliJ IDEA project","disqus_id": "d2","anchor":"#php_test_frameworks_phpspec_integrate","url": "using-phpspec.html"},
"Using_PHPSpec#generate_phpspec_test_for_a_class_in_a_separate_file": {"parentId": "Using_PHPSpec","level": 0,"id": "Using_PHPSpec#generate_phpspec_test_for_a_class_in_a_separate_file","title": "Generating a PHPSpec test for a class","disqus_id": "d2","anchor":"#generate_phpspec_test_for_a_class_in_a_separate_file","url": "using-phpspec.html"},
"Using_PHPSpec#php_test_frameworks_phpspec_run_tests": {"parentId": "Using_PHPSpec","level": 0,"id": "Using_PHPSpec#php_test_frameworks_phpspec_run_tests","title": "Running and debugging PHPSpec tests","disqus_id": "d2","anchor":"#php_test_frameworks_phpspec_run_tests","url": "using-phpspec.html"},
"Using_PHPSpec#phpspec_monitor_test_results": {"parentId": "Using_PHPSpec","level": 0,"id": "Using_PHPSpec#phpspec_monitor_test_results","title": "Monitoring test results","disqus_id": "d2","anchor":"#phpspec_monitor_test_results","url": "using-phpspec.html"},
"Using_PHP_Code_Sniffer#2ea4fca4": {"parentId": "Using_PHP_Code_Sniffer","level": 0,"id": "Using_PHP_Code_Sniffer#2ea4fca4","title": "Before you start","disqus_id": "d2","anchor":"#2ea4fca4","url": "using-php-code-sniffer.html"},
"Using_PHP_Code_Sniffer#installing-configuring-code-sniffer": {"parentId": "Using_PHP_Code_Sniffer","level": 0,"id": "Using_PHP_Code_Sniffer#installing-configuring-code-sniffer","title": "Installing and configuring PHP Code Sniffer","disqus_id": "d2","anchor":"#installing-configuring-code-sniffer","url": "using-php-code-sniffer.html"},
"Using_PHP_Code_Sniffer#enabling-tool-inspection": {"parentId": "Using_PHP_Code_Sniffer","level": 0,"id": "Using_PHP_Code_Sniffer#enabling-tool-inspection","title": "Configuring PHP Code Sniffer as a IntelliJ IDEA inspection","disqus_id": "d2","anchor":"#enabling-tool-inspection","url": "using-php-code-sniffer.html"},
"Using_PHP_Code_Sniffer#07cd14ac": {"parentId": "Using_PHP_Code_Sniffer","level": 0,"id": "Using_PHP_Code_Sniffer#07cd14ac","title": "Running PHP Code Sniffer in the batch mode","disqus_id": "d2","anchor":"#07cd14ac","url": "using-php-code-sniffer.html"},
"Using_PHP_Code_Sniffer#cd56bbbb": {"parentId": "Using_PHP_Code_Sniffer","level": 0,"id": "Using_PHP_Code_Sniffer#cd56bbbb","title": "Excluding files from PHP Code Sniffer inspection","disqus_id": "d2","anchor":"#cd56bbbb","url": "using-php-code-sniffer.html"},
"Using_PHP_Mess_Detector#53c4b355": {"parentId": "Using_PHP_Mess_Detector","level": 0,"id": "Using_PHP_Mess_Detector#53c4b355","title": "Before you start","disqus_id": "d2","anchor":"#53c4b355","url": "using-php-mess-detector.html"},
"Using_PHP_Mess_Detector#installing-configuring-mess-detector": {"parentId": "Using_PHP_Mess_Detector","level": 0,"id": "Using_PHP_Mess_Detector#installing-configuring-mess-detector","title": "Installing and configuring PHP Mess Detector","disqus_id": "d2","anchor":"#installing-configuring-mess-detector","url": "using-php-mess-detector.html"},
"Using_PHP_Mess_Detector#enabling-tool-inspection": {"parentId": "Using_PHP_Mess_Detector","level": 0,"id": "Using_PHP_Mess_Detector#enabling-tool-inspection","title": "Configuring PHP Mess Detector as a IntelliJ IDEA inspection","disqus_id": "d2","anchor":"#enabling-tool-inspection","url": "using-php-mess-detector.html"},
"Using_PHP_Mess_Detector#2be6b7bb": {"parentId": "Using_PHP_Mess_Detector","level": 0,"id": "Using_PHP_Mess_Detector#2be6b7bb","title": "Sharing a custom coding style with the team","disqus_id": "d2","anchor":"#2be6b7bb","url": "using-php-mess-detector.html"},
"Using_PHP_Mess_Detector#41c8a479": {"parentId": "Using_PHP_Mess_Detector","level": 0,"id": "Using_PHP_Mess_Detector#41c8a479","title": "Running PHP Mess Detector in the batch mode","disqus_id": "d2","anchor":"#41c8a479","url": "using-php-mess-detector.html"},
"Using_PHP_Mess_Detector#c3ed40c8": {"parentId": "Using_PHP_Mess_Detector","level": 0,"id": "Using_PHP_Mess_Detector#c3ed40c8","title": "Excluding files from PHP Mess Detector inspection","disqus_id": "d2","anchor":"#c3ed40c8","url": "using-php-mess-detector.html"},
"Using_PHP_CS_Fixer_Tool#9a29f3e8": {"parentId": "Using_PHP_CS_Fixer_Tool","level": 0,"id": "Using_PHP_CS_Fixer_Tool#9a29f3e8","title": "Before you start","disqus_id": "d2","anchor":"#9a29f3e8","url": "using-php-cs-fixer.html"},
"Using_PHP_CS_Fixer_Tool#installing-configuring-php-cs-fixer": {"parentId": "Using_PHP_CS_Fixer_Tool","level": 0,"id": "Using_PHP_CS_Fixer_Tool#installing-configuring-php-cs-fixer","title": "Installing and configuring PHP CS Fixer","disqus_id": "d2","anchor":"#installing-configuring-php-cs-fixer","url": "using-php-cs-fixer.html"},
"Using_PHP_CS_Fixer_Tool#enabling-tool-inspection": {"parentId": "Using_PHP_CS_Fixer_Tool","level": 0,"id": "Using_PHP_CS_Fixer_Tool#enabling-tool-inspection","title": "Configuring PHP CS Fixer as a IntelliJ IDEA inspection","disqus_id": "d2","anchor":"#enabling-tool-inspection","url": "using-php-cs-fixer.html"},
"Using_PHP_CS_Fixer_Tool#973467d4": {"parentId": "Using_PHP_CS_Fixer_Tool","level": 0,"id": "Using_PHP_CS_Fixer_Tool#973467d4","title": "Sharing a custom coding style with the team","disqus_id": "d2","anchor":"#973467d4","url": "using-php-cs-fixer.html"},
"Using_PHP_CS_Fixer_Tool#724329f3": {"parentId": "Using_PHP_CS_Fixer_Tool","level": 0,"id": "Using_PHP_CS_Fixer_Tool#724329f3","title": "Running PHP CS Fixer in the batch mode","disqus_id": "d2","anchor":"#724329f3","url": "using-php-cs-fixer.html"},
"Using_PHP_CS_Fixer_Tool#5cd10f91": {"parentId": "Using_PHP_CS_Fixer_Tool","level": 0,"id": "Using_PHP_CS_Fixer_Tool#5cd10f91","title": "Excluding files from PHP CS Fixer inspection","disqus_id": "d2","anchor":"#5cd10f91","url": "using-php-cs-fixer.html"},
"Installing_Uninstalling_and_Upgrading_Packages#install-package": {"parentId": "Installing_Uninstalling_and_Upgrading_Packages","level": 0,"id": "Installing_Uninstalling_and_Upgrading_Packages#install-package","title": "To install a package","disqus_id": "d2","anchor":"#install-package","url": "installing-uninstalling-and-upgrading-packages.html"},
"Installing_Uninstalling_and_Upgrading_Packages#1ef45bd8": {"parentId": "Installing_Uninstalling_and_Upgrading_Packages","level": 0,"id": "Installing_Uninstalling_and_Upgrading_Packages#1ef45bd8","title": "To uninstall a package","disqus_id": "d2","anchor":"#1ef45bd8","url": "installing-uninstalling-and-upgrading-packages.html"},
"Installing_Uninstalling_and_Upgrading_Packages#upgrade-packages": {"parentId": "Installing_Uninstalling_and_Upgrading_Packages","level": 0,"id": "Installing_Uninstalling_and_Upgrading_Packages#upgrade-packages","title": "To upgrade a package","disqus_id": "d2","anchor":"#upgrade-packages","url": "installing-uninstalling-and-upgrading-packages.html"},
"Changing_Name_of_a_Python_Interpreter#a3b658c7": {"parentId": "Changing_Name_of_a_Python_Interpreter","level": 0,"id": "Changing_Name_of_a_Python_Interpreter#a3b658c7","title": "To change visible name of a Python interpreter","disqus_id": "d2","anchor":"#a3b658c7","url": "changing-name-of-a-python-interpreter.html"},
"Managing_Dependencies#create-requirements": {"parentId": "Managing_Dependencies","level": 0,"id": "Managing_Dependencies#create-requirements","title": "Defining requirements","disqus_id": "d2","anchor":"#create-requirements","url": "managing-dependencies.html"},
"Managing_Dependencies#configure-requirements": {"parentId": "Managing_Dependencies","level": 0,"id": "Managing_Dependencies#configure-requirements","title": "Configuring the default requirements file","disqus_id": "d2","anchor":"#configure-requirements","url": "managing-dependencies.html"},
"Managing_Dependencies#populate_dependency_files": {"parentId": "Managing_Dependencies","level": 0,"id": "Managing_Dependencies#populate_dependency_files","title": "Populating dependency management files","disqus_id": "d2","anchor":"#populate_dependency_files","url": "managing-dependencies.html"},
"Managing_Dependencies#apply_dependencies": {"parentId": "Managing_Dependencies","level": 0,"id": "Managing_Dependencies#apply_dependencies","title": "Resolving unsatisfied dependencies","disqus_id": "d2","anchor":"#apply_dependencies","url": "managing-dependencies.html"},
"Matplotlib_Support#sm": {"parentId": "Matplotlib_Support","level": 0,"id": "Matplotlib_Support#sm","title": "Scientific mode","disqus_id": "d2","anchor":"#sm","url": "matplotlib-support.html"},
"Matplotlib_Support#console": {"parentId": "Matplotlib_Support","level": 0,"id": "Matplotlib_Support#console","title": "Matplotlib in the console","disqus_id": "d2","anchor":"#console","url": "matplotlib-support.html"},
"Matplotlib_Tutorial#sample_code": {"parentId": "Matplotlib_Tutorial","level": 0,"id": "Matplotlib_Tutorial#sample_code","title": "Adding sample code","disqus_id": "d2","anchor":"#sample_code","url": "matplotlib-tutorial.html"},
"Matplotlib_Tutorial#run": {"parentId": "Matplotlib_Tutorial","level": 0,"id": "Matplotlib_Tutorial#run","title": "Running","disqus_id": "d2","anchor":"#run","url": "matplotlib-tutorial.html"},
"Matplotlib_Tutorial#debug": {"parentId": "Matplotlib_Tutorial","level": 0,"id": "Matplotlib_Tutorial#debug","title": "Debugging","disqus_id": "d2","anchor":"#debug","url": "matplotlib-tutorial.html"},
"Matplotlib_Tutorial#console": {"parentId": "Matplotlib_Tutorial","level": 0,"id": "Matplotlib_Tutorial#console","title": "Running in console","disqus_id": "d2","anchor":"#console","url": "matplotlib-tutorial.html"},
"Matplotlib_Tutorial#summary": {"parentId": "Matplotlib_Tutorial","level": 0,"id": "Matplotlib_Tutorial#summary","title": "Summary","disqus_id": "d2","anchor":"#summary","url": "matplotlib-tutorial.html"},
"REST_client_in__product__code_editor#creating-an-http-request-file": {"parentId": "REST_client_in__product__code_editor","level": 0,"id": "REST_client_in__product__code_editor#creating-an-http-request-file","title": "Creating an HTTP request file","disqus_id": "d2","anchor":"#creating-an-http-request-file","url": "http-client-in-product-code-editor.html"},
"REST_client_in__product__code_editor#composing-an-http-request": {"parentId": "REST_client_in__product__code_editor","level": 0,"id": "REST_client_in__product__code_editor#composing-an-http-request","title": "Composing an HTTP request","disqus_id": "d2","anchor":"#composing-an-http-request","url": "http-client-in-product-code-editor.html"},
"REST_client_in__product__code_editor#using_env_vars": {"parentId": "REST_client_in__product__code_editor","level": 1,"id": "REST_client_in__product__code_editor#using_env_vars","title": "Using environment variables","disqus_id": "d2","anchor":"#using_env_vars","url": "http-client-in-product-code-editor.html"},
"REST_client_in__product__code_editor#using-response-handler-scripts": {"parentId": "REST_client_in__product__code_editor","level": 1,"id": "REST_client_in__product__code_editor#using-response-handler-scripts","title": "Using response handler scripts","disqus_id": "d2","anchor":"#using-response-handler-scripts","url": "http-client-in-product-code-editor.html"},
"REST_client_in__product__code_editor#run_request": {"parentId": "REST_client_in__product__code_editor","level": 0,"id": "REST_client_in__product__code_editor#run_request","title": "Executing an HTTP request","disqus_id": "d2","anchor":"#run_request","url": "http-client-in-product-code-editor.html"},
"REST_client_in__product__code_editor#http-request-run-debug-configurations": {"parentId": "REST_client_in__product__code_editor","level": 1,"id": "REST_client_in__product__code_editor#http-request-run-debug-configurations","title": "Working with HTTP Request Run/Debug Configurations","disqus_id": "d2","anchor":"#http-request-run-debug-configurations","url": "http-client-in-product-code-editor.html"},
"REST_client_in__product__code_editor#viewingResponse": {"parentId": "REST_client_in__product__code_editor","level": 0,"id": "REST_client_in__product__code_editor#viewingResponse","title": "Viewing responses from web services","disqus_id": "d2","anchor":"#viewingResponse","url": "http-client-in-product-code-editor.html"},
"REST_client_in__product__code_editor#requests_history": {"parentId": "REST_client_in__product__code_editor","level": 0,"id": "REST_client_in__product__code_editor#requests_history","title": "Viewing requests history","disqus_id": "d2","anchor":"#requests_history","url": "http-client-in-product-code-editor.html"},
"REST_client_in__product__code_editor#configureProxy": {"parentId": "REST_client_in__product__code_editor","level": 0,"id": "REST_client_in__product__code_editor#configureProxy","title": "Configuring Proxy settings","disqus_id": "d2","anchor":"#configureProxy","url": "http-client-in-product-code-editor.html"},
"Exploring_HTTP_Syntax#comments-in-http-requests": {"parentId": "Exploring_HTTP_Syntax","level": 0,"id": "Exploring_HTTP_Syntax#comments-in-http-requests","title": "Use comments in HTTP requests","disqus_id": "d2","anchor":"#comments-in-http-requests","url": "exploring-http-syntax.html"},
"Exploring_HTTP_Syntax#short-form-for-get-requests": {"parentId": "Exploring_HTTP_Syntax","level": 0,"id": "Exploring_HTTP_Syntax#short-form-for-get-requests","title": "Use short form for GET requests","disqus_id": "d2","anchor":"#short-form-for-get-requests","url": "exploring-http-syntax.html"},
"Exploring_HTTP_Syntax#compose-several-requests-in-a-file": {"parentId": "Exploring_HTTP_Syntax","level": 0,"id": "Exploring_HTTP_Syntax#compose-several-requests-in-a-file","title": "Compose several requests in a single file","disqus_id": "d2","anchor":"#compose-several-requests-in-a-file","url": "exploring-http-syntax.html"},
"Exploring_HTTP_Syntax#break-long-requests-into-several-lines": {"parentId": "Exploring_HTTP_Syntax","level": 0,"id": "Exploring_HTTP_Syntax#break-long-requests-into-several-lines","title": "Break long requests into several lines","disqus_id": "d2","anchor":"#break-long-requests-into-several-lines","url": "exploring-http-syntax.html"},
"Exploring_HTTP_Syntax#access-web-service-with-authentication": {"parentId": "Exploring_HTTP_Syntax","level": 0,"id": "Exploring_HTTP_Syntax#access-web-service-with-authentication","title": "Access a web service with authentication","disqus_id": "d2","anchor":"#access-web-service-with-authentication","url": "exploring-http-syntax.html"},
"Exploring_HTTP_Syntax#enable-disable-redirects": {"parentId": "Exploring_HTTP_Syntax","level": 0,"id": "Exploring_HTTP_Syntax#enable-disable-redirects","title": "Enable or disable following redirects","disqus_id": "d2","anchor":"#enable-disable-redirects","url": "exploring-http-syntax.html"},
"Exploring_HTTP_Syntax#provide-request-body": {"parentId": "Exploring_HTTP_Syntax","level": 0,"id": "Exploring_HTTP_Syntax#provide-request-body","title": "Provide the request message body","disqus_id": "d2","anchor":"#provide-request-body","url": "exploring-http-syntax.html"},
"Exploring_HTTP_Syntax#use-multipart-form-data": {"parentId": "Exploring_HTTP_Syntax","level": 0,"id": "Exploring_HTTP_Syntax#use-multipart-form-data","title": "Use multipart/form-data content type","disqus_id": "d2","anchor":"#use-multipart-form-data","url": "exploring-http-syntax.html"},
"HTTP_Client_reference#client-properties": {"parentId": "HTTP_Client_reference","level": 0,"id": "HTTP_Client_reference#client-properties","title": "Properties","disqus_id": "d2","anchor":"#client-properties","url": "http-client-reference.html"},
"HTTP_Client_reference#client-methods": {"parentId": "HTTP_Client_reference","level": 0,"id": "HTTP_Client_reference#client-methods","title": "Methods","disqus_id": "d2","anchor":"#client-methods","url": "http-client-reference.html"},
"HTTP_Client_reference#global-variables-storage-reference": {"parentId": "HTTP_Client_reference","level": 0,"id": "HTTP_Client_reference#global-variables-storage-reference","title": "Global variables storage","disqus_id": "d2","anchor":"#global-variables-storage-reference","url": "http-client-reference.html"},
"HTTP_Response_reference#response-properties": {"parentId": "HTTP_Response_reference","level": 0,"id": "HTTP_Response_reference#response-properties","title": "Properties","disqus_id": "d2","anchor":"#response-properties","url": "http-response-reference.html"},
"HTTP_Response_reference#headers-reference": {"parentId": "HTTP_Response_reference","level": 0,"id": "HTTP_Response_reference#headers-reference","title": "Headers object","disqus_id": "d2","anchor":"#headers-reference","url": "http-response-reference.html"},
"HTTP_Response_reference#content-type-reference": {"parentId": "HTTP_Response_reference","level": 0,"id": "HTTP_Response_reference#content-type-reference","title": "ContentType object","disqus_id": "d2","anchor":"#content-type-reference","url": "http-response-reference.html"},
"HTTP_Response_Handling_Examples#checking-response-headers-body": {"parentId": "HTTP_Response_Handling_Examples","level": 0,"id": "HTTP_Response_Handling_Examples#checking-response-headers-body","title": "Checking response headers, body, and content type","disqus_id": "d2","anchor":"#checking-response-headers-body","url": "http-response-handling-examples.html"},
"HTTP_Response_Handling_Examples#script-var-example": {"parentId": "HTTP_Response_Handling_Examples","level": 0,"id": "HTTP_Response_Handling_Examples#script-var-example","title": "Working with environment variables","disqus_id": "d2","anchor":"#script-var-example","url": "http-response-handling-examples.html"},
"Opening_a_Rails_Project_in_IntelliJ_IDEA#prerequisites": {"parentId": "Opening_a_Rails_Project_in_IntelliJ_IDEA","level": 0,"id": "Opening_a_Rails_Project_in_IntelliJ_IDEA#prerequisites","title": "Prerequisites","disqus_id": "d2","anchor":"#prerequisites","url": "opening-a-rails-project-in-intellij-idea.html"},
"Opening_a_Rails_Project_in_IntelliJ_IDEA#check_out": {"parentId": "Opening_a_Rails_Project_in_IntelliJ_IDEA","level": 0,"id": "Opening_a_Rails_Project_in_IntelliJ_IDEA#check_out","title": "Check out a project","disqus_id": "d2","anchor":"#check_out","url": "opening-a-rails-project-in-intellij-idea.html"},
"Opening_a_Rails_Project_in_IntelliJ_IDEA#sdk": {"parentId": "Opening_a_Rails_Project_in_IntelliJ_IDEA","level": 0,"id": "Opening_a_Rails_Project_in_IntelliJ_IDEA#sdk","title": "Configure Ruby SDK","disqus_id": "d2","anchor":"#sdk","url": "opening-a-rails-project-in-intellij-idea.html"},
"Opening_a_Rails_Project_in_IntelliJ_IDEA#gems": {"parentId": "Opening_a_Rails_Project_in_IntelliJ_IDEA","level": 0,"id": "Opening_a_Rails_Project_in_IntelliJ_IDEA#gems","title": "Install gems","disqus_id": "d2","anchor":"#gems","url": "opening-a-rails-project-in-intellij-idea.html"},
"Opening_a_Rails_Project_in_IntelliJ_IDEA#migrations": {"parentId": "Opening_a_Rails_Project_in_IntelliJ_IDEA","level": 0,"id": "Opening_a_Rails_Project_in_IntelliJ_IDEA#migrations","title": "Run migrations","disqus_id": "d2","anchor":"#migrations","url": "opening-a-rails-project-in-intellij-idea.html"},
"Opening_a_Rails_Project_in_IntelliJ_IDEA#run": {"parentId": "Opening_a_Rails_Project_in_IntelliJ_IDEA","level": 0,"id": "Opening_a_Rails_Project_in_IntelliJ_IDEA#run","title": "Run the application","disqus_id": "d2","anchor":"#run","url": "opening-a-rails-project-in-intellij-idea.html"},
"Discover_Intellij_IDEA_for_Scala#scala_plugin": {"parentId": "Discover_Intellij_IDEA_for_Scala","level": 0,"id": "Discover_Intellij_IDEA_for_Scala#scala_plugin","title": "Install Scala plugin","disqus_id": "d2","anchor":"#scala_plugin","url": "discover-intellij-idea-for-scala.html"},
"Discover_Intellij_IDEA_for_Scala#UserInterface": {"parentId": "Discover_Intellij_IDEA_for_Scala","level": 0,"id": "Discover_Intellij_IDEA_for_Scala#UserInterface","title": "User interface","disqus_id": "d2","anchor":"#UserInterface","url": "discover-intellij-idea-for-scala.html"},
"Discover_Intellij_IDEA_for_Scala#EditorBasics": {"parentId": "Discover_Intellij_IDEA_for_Scala","level": 0,"id": "Discover_Intellij_IDEA_for_Scala#EditorBasics","title": "Editor basics","disqus_id": "d2","anchor":"#EditorBasics","url": "discover-intellij-idea-for-scala.html"},
"Discover_Intellij_IDEA_for_Scala#CodeCompletion": {"parentId": "Discover_Intellij_IDEA_for_Scala","level": 0,"id": "Discover_Intellij_IDEA_for_Scala#CodeCompletion","title": "Code completion","disqus_id": "d2","anchor":"#CodeCompletion","url": "discover-intellij-idea-for-scala.html"},
"Discover_Intellij_IDEA_for_Scala#Navigation": {"parentId": "Discover_Intellij_IDEA_for_Scala","level": 0,"id": "Discover_Intellij_IDEA_for_Scala#Navigation","title": "Navigation","disqus_id": "d2","anchor":"#Navigation","url": "discover-intellij-idea-for-scala.html"},
"Discover_Intellij_IDEA_for_Scala#6de9a19a": {"parentId": "Discover_Intellij_IDEA_for_Scala","level": 1,"id": "Discover_Intellij_IDEA_for_Scala#6de9a19a","title": "Recent files","disqus_id": "d2","anchor":"#6de9a19a","url": "discover-intellij-idea-for-scala.html"},
"Discover_Intellij_IDEA_for_Scala#6d29e94c": {"parentId": "Discover_Intellij_IDEA_for_Scala","level": 1,"id": "Discover_Intellij_IDEA_for_Scala#6d29e94c","title": "Structure","disqus_id": "d2","anchor":"#6d29e94c","url": "discover-intellij-idea-for-scala.html"},
"Discover_Intellij_IDEA_for_Scala#d01dbaf8": {"parentId": "Discover_Intellij_IDEA_for_Scala","level": 1,"id": "Discover_Intellij_IDEA_for_Scala#d01dbaf8","title": "Select in","disqus_id": "d2","anchor":"#d01dbaf8","url": "discover-intellij-idea-for-scala.html"},
"Discover_Intellij_IDEA_for_Scala#QuickPopups": {"parentId": "Discover_Intellij_IDEA_for_Scala","level": 0,"id": "Discover_Intellij_IDEA_for_Scala#QuickPopups","title": "Quick pop-ups","disqus_id": "d2","anchor":"#QuickPopups","url": "discover-intellij-idea-for-scala.html"},
"Discover_Intellij_IDEA_for_Scala#RefactoringBasics": {"parentId": "Discover_Intellij_IDEA_for_Scala","level": 0,"id": "Discover_Intellij_IDEA_for_Scala#RefactoringBasics","title": "Refactoring basics","disqus_id": "d2","anchor":"#RefactoringBasics","url": "discover-intellij-idea-for-scala.html"},
"Discover_Intellij_IDEA_for_Scala#FindingUsages": {"parentId": "Discover_Intellij_IDEA_for_Scala","level": 0,"id": "Discover_Intellij_IDEA_for_Scala#FindingUsages","title": "Finding usages","disqus_id": "d2","anchor":"#FindingUsages","url": "discover-intellij-idea-for-scala.html"},
"Discover_Intellij_IDEA_for_Scala#Inspections": {"parentId": "Discover_Intellij_IDEA_for_Scala","level": 0,"id": "Discover_Intellij_IDEA_for_Scala#Inspections","title": "Inspections","disqus_id": "d2","anchor":"#Inspections","url": "discover-intellij-idea-for-scala.html"},
"Discover_Intellij_IDEA_for_Scala#CodeStyleFormatting": {"parentId": "Discover_Intellij_IDEA_for_Scala","level": 0,"id": "Discover_Intellij_IDEA_for_Scala#CodeStyleFormatting","title": "Code style and formatting","disqus_id": "d2","anchor":"#CodeStyleFormatting","url": "discover-intellij-idea-for-scala.html"},
"Discover_Intellij_IDEA_for_Scala#RunningDebugging": {"parentId": "Discover_Intellij_IDEA_for_Scala","level": 0,"id": "Discover_Intellij_IDEA_for_Scala#RunningDebugging","title": "Run and debug","disqus_id": "d2","anchor":"#RunningDebugging","url": "discover-intellij-idea-for-scala.html"},
"Discover_Intellij_IDEA_for_Scala#a99ba519": {"parentId": "Discover_Intellij_IDEA_for_Scala","level": 1,"id": "Discover_Intellij_IDEA_for_Scala#a99ba519","title": "Reloading changes and hot swapping","disqus_id": "d2","anchor":"#a99ba519","url": "discover-intellij-idea-for-scala.html"},
"Discover_Intellij_IDEA_for_Scala#77c9c786": {"parentId": "Discover_Intellij_IDEA_for_Scala","level": 1,"id": "Discover_Intellij_IDEA_for_Scala#77c9c786","title": "Application servers","disqus_id": "d2","anchor":"#77c9c786","url": "discover-intellij-idea-for-scala.html"},
"Discover_Intellij_IDEA_for_Scala#BuildTools": {"parentId": "Discover_Intellij_IDEA_for_Scala","level": 0,"id": "Discover_Intellij_IDEA_for_Scala#BuildTools","title": "Build","disqus_id": "d2","anchor":"#BuildTools","url": "discover-intellij-idea-for-scala.html"},
"Edit_Scala_code#4411094b": {"parentId": "Edit_Scala_code","level": 0,"id": "Edit_Scala_code#4411094b","title": "Strings in Scala","disqus_id": "d2","anchor":"#4411094b","url": "edit-scala-code.html"},
"Edit_Scala_code#scala_hints": {"parentId": "Edit_Scala_code","level": 0,"id": "Edit_Scala_code#scala_hints","title": "Implicit hints","disqus_id": "d2","anchor":"#scala_hints","url": "edit-scala-code.html"},
"Edit_Scala_code#implicit_methods_arguments": {"parentId": "Edit_Scala_code","level": 0,"id": "Edit_Scala_code#implicit_methods_arguments","title": "Implicit conversions","disqus_id": "d2","anchor":"#implicit_methods_arguments","url": "edit-scala-code.html"},
"Edit_Scala_code#c9d4fad0": {"parentId": "Edit_Scala_code","level": 0,"id": "Edit_Scala_code#c9d4fad0","title": "Type Info action","disqus_id": "d2","anchor":"#c9d4fad0","url": "edit-scala-code.html"},
"Edit_Scala_code#c2b0e0ce": {"parentId": "Edit_Scala_code","level": 0,"id": "Edit_Scala_code#c2b0e0ce","title": "Code completion","disqus_id": "d2","anchor":"#c2b0e0ce","url": "edit-scala-code.html"},
"Edit_Scala_code#8445a144": {"parentId": "Edit_Scala_code","level": 0,"id": "Edit_Scala_code#8445a144","title": "Create from usage","disqus_id": "d2","anchor":"#8445a144","url": "edit-scala-code.html"},
"Edit_Scala_code#965260d4": {"parentId": "Edit_Scala_code","level": 0,"id": "Edit_Scala_code#965260d4","title": "Structure view","disqus_id": "d2","anchor":"#965260d4","url": "edit-scala-code.html"},
"Edit_Scala_code#89f76e1f": {"parentId": "Edit_Scala_code","level": 0,"id": "Edit_Scala_code#89f76e1f","title": "Java-to-Scala code conversion","disqus_id": "d2","anchor":"#89f76e1f","url": "edit-scala-code.html"},
"Edit_Scala_code#scala_to_java": {"parentId": "Edit_Scala_code","level": 0,"id": "Edit_Scala_code#scala_to_java","title": "Decompile Scala code to Java","disqus_id": "d2","anchor":"#scala_to_java","url": "edit-scala-code.html"},
"Edit_Scala_code#55f5b539": {"parentId": "Edit_Scala_code","level": 0,"id": "Edit_Scala_code#55f5b539","title": "Scala generate actions","disqus_id": "d2","anchor":"#55f5b539","url": "edit-scala-code.html"},
"Edit_Scala_code#13215248": {"parentId": "Edit_Scala_code","level": 0,"id": "Edit_Scala_code#13215248","title": "Scala templates","disqus_id": "d2","anchor":"#13215248","url": "edit-scala-code.html"},
"Edit_Scala_code#2a4e936c": {"parentId": "Edit_Scala_code","level": 0,"id": "Edit_Scala_code#2a4e936c","title": "Scala postfix completion","disqus_id": "d2","anchor":"#2a4e936c","url": "edit-scala-code.html"},
"Edit_Scala_code#81315431": {"parentId": "Edit_Scala_code","level": 0,"id": "Edit_Scala_code#81315431","title": "Scala inspections","disqus_id": "d2","anchor":"#81315431","url": "edit-scala-code.html"},
"Run__debug_and_test_Scala#run_scala_app": {"parentId": "Run__debug_and_test_Scala","level": 0,"id": "Run__debug_and_test_Scala#run_scala_app","title": "Run Scala applications","disqus_id": "d2","anchor":"#run_scala_app","url": "run-debug-and-test-scala.html"},
"Run__debug_and_test_Scala#debug_scala_code": {"parentId": "Run__debug_and_test_Scala","level": 0,"id": "Run__debug_and_test_Scala#debug_scala_code","title": "Debug Scala code","disqus_id": "d2","anchor":"#debug_scala_code","url": "run-debug-and-test-scala.html"},
"Run__debug_and_test_Scala#test_scala_app": {"parentId": "Run__debug_and_test_Scala","level": 0,"id": "Run__debug_and_test_Scala#test_scala_app","title": "Test Scala applications","disqus_id": "d2","anchor":"#test_scala_app","url": "run-debug-and-test-scala.html"},
"SBT_support#import_sbt": {"parentId": "SBT_support","level": 0,"id": "SBT_support#import_sbt","title": "Importing an sbt project","disqus_id": "d2","anchor":"#import_sbt","url": "sbt-support.html"},
"SBT_support#sbt_scala_version_compatibility": {"parentId": "SBT_support","level": 0,"id": "SBT_support#sbt_scala_version_compatibility","title": "Ensuring sbt and Scala versions compatibility","disqus_id": "d2","anchor":"#sbt_scala_version_compatibility","url": "sbt-support.html"},
"SBT_support#manage_sbt_projects": {"parentId": "SBT_support","level": 0,"id": "SBT_support#manage_sbt_projects","title": "Managing sbt projects","disqus_id": "d2","anchor":"#manage_sbt_projects","url": "sbt-support.html"},
"SBT_support#sbt_structure": {"parentId": "SBT_support","level": 1,"id": "SBT_support#sbt_structure","title": "sbt project structure","disqus_id": "d2","anchor":"#sbt_structure","url": "sbt-support.html"},
"SBT_support#add_library_scala_file": {"parentId": "SBT_support","level": 1,"id": "SBT_support#add_library_scala_file","title": "Adding a library to the sbt project","disqus_id": "d2","anchor":"#add_library_scala_file","url": "sbt-support.html"},
"SBT_support#sbt_shell": {"parentId": "SBT_support","level": 1,"id": "SBT_support#sbt_shell","title": "Working with sbt shell","disqus_id": "d2","anchor":"#sbt_shell","url": "sbt-support.html"},
"SBT_support#sbt_task": {"parentId": "SBT_support","level": 1,"id": "SBT_support#sbt_task","title": "Running sbt tasks","disqus_id": "d2","anchor":"#sbt_task","url": "sbt-support.html"},
"SBT_support#sbt_settings": {"parentId": "SBT_support","level": 1,"id": "SBT_support#sbt_settings","title": "Working with sbt settings","disqus_id": "d2","anchor":"#sbt_settings","url": "sbt-support.html"},
"Troubleshoot_common_Scala_issues#type_aware_highlighting": {"parentId": "Troubleshoot_common_Scala_issues","level": 0,"id": "Troubleshoot_common_Scala_issues#type_aware_highlighting","title": "Why is my code highlighted incorrectly?","disqus_id": "d2","anchor":"#type_aware_highlighting","url": "troubleshoot-common-scala-issues.html"},
"Troubleshoot_common_Scala_issues#scala_assertion_error": {"parentId": "Troubleshoot_common_Scala_issues","level": 0,"id": "Troubleshoot_common_Scala_issues#scala_assertion_error","title": "Why do I get Assertion error when I use the Make Project command?","disqus_id": "d2","anchor":"#scala_assertion_error","url": "troubleshoot-common-scala-issues.html"},
"Troubleshoot_common_Scala_issues#scala_compile_error": {"parentId": "Troubleshoot_common_Scala_issues","level": 0,"id": "Troubleshoot_common_Scala_issues#scala_compile_error","title": "Why am I unable to compile my Scala project?","disqus_id": "d2","anchor":"#scala_compile_error","url": "troubleshoot-common-scala-issues.html"},
"Troubleshoot_common_Scala_issues#scala_outofmemory_error": {"parentId": "Troubleshoot_common_Scala_issues","level": 0,"id": "Troubleshoot_common_Scala_issues#scala_outofmemory_error","title": "How do I resolve OutOfMemory exceptions when I compile my Scala project?","disqus_id": "d2","anchor":"#scala_outofmemory_error","url": "troubleshoot-common-scala-issues.html"},
"Troubleshoot_common_Scala_issues#sbt_migrate": {"parentId": "Troubleshoot_common_Scala_issues","level": 0,"id": "Troubleshoot_common_Scala_issues#sbt_migrate","title": "How do I migrate an IDEA-based Scala project to the sbt project?","disqus_id": "d2","anchor":"#sbt_migrate","url": "troubleshoot-common-scala-issues.html"},
"Troubleshoot_common_Scala_issues#sbt_integration_test": {"parentId": "Troubleshoot_common_Scala_issues","level": 0,"id": "Troubleshoot_common_Scala_issues#sbt_integration_test","title": "Does IntelliJ IDEA support the sbt's model of integration tests?","disqus_id": "d2","anchor":"#sbt_integration_test","url": "troubleshoot-common-scala-issues.html"},
"Troubleshoot_common_Scala_issues#sbt_outofmemory": {"parentId": "Troubleshoot_common_Scala_issues","level": 0,"id": "Troubleshoot_common_Scala_issues#sbt_outofmemory","title": "How do I resolve OutOfMemory exceptions in my sbt project?","disqus_id": "d2","anchor":"#sbt_outofmemory","url": "troubleshoot-common-scala-issues.html"},
"Getting_Started_with_Play_2_x#new_play_project": {"parentId": "Getting_Started_with_Play_2_x","level": 0,"id": "Getting_Started_with_Play_2_x#new_play_project","title": "Creating a new Play 2 project","disqus_id": "d2","anchor":"#new_play_project","url": "getting-started-with-play-2-x.html"},
"Getting_Started_with_Play_2_x#play_using_project_starte": {"parentId": "Getting_Started_with_Play_2_x","level": 0,"id": "Getting_Started_with_Play_2_x#play_using_project_starte","title": "Creating a Play 2 template with Lightbend project starter","disqus_id": "d2","anchor":"#play_using_project_starte","url": "getting-started-with-play-2-x.html"},
"Getting_Started_with_Play_2_x#sbt_add_play": {"parentId": "Getting_Started_with_Play_2_x","level": 0,"id": "Getting_Started_with_Play_2_x#sbt_add_play","title": "Creating an sbt project with Play 2 framework","disqus_id": "d2","anchor":"#sbt_add_play","url": "getting-started-with-play-2-x.html"},
"Getting_Started_with_Play_2_x#run_debug_play": {"parentId": "Getting_Started_with_Play_2_x","level": 0,"id": "Getting_Started_with_Play_2_x#run_debug_play","title": "Running and debugging Play 2 application","disqus_id": "d2","anchor":"#run_debug_play","url": "getting-started-with-play-2-x.html"},
"Getting_Started_with_Play_2_x#play_settings": {"parentId": "Getting_Started_with_Play_2_x","level": 0,"id": "Getting_Started_with_Play_2_x#play_settings","title": "Working with Play2 settings","disqus_id": "d2","anchor":"#play_settings","url": "getting-started-with-play-2-x.html"},
"IntelliJ.IDEA.Concepts.Java.EE.Development.Spring#configure-spring-project-facet": {"parentId": "IntelliJ.IDEA.Concepts.Java.EE.Development.Spring","level": 0,"id": "IntelliJ.IDEA.Concepts.Java.EE.Development.Spring#configure-spring-project-facet","title": "Configure the Spring facet","disqus_id": "d2","anchor":"#configure-spring-project-facet","url": "spring-support.html"},
"IntelliJ.IDEA.Concepts.Java.EE.Development.Spring#spring-file-set": {"parentId": "IntelliJ.IDEA.Concepts.Java.EE.Development.Spring","level": 1,"id": "IntelliJ.IDEA.Concepts.Java.EE.Development.Spring#spring-file-set","title": "Create an application context","disqus_id": "d2","anchor":"#spring-file-set","url": "spring-support.html"},
"IntelliJ.IDEA.Concepts.Java.EE.Development.Spring#configure-parent-context": {"parentId": "IntelliJ.IDEA.Concepts.Java.EE.Development.Spring","level": 1,"id": "IntelliJ.IDEA.Concepts.Java.EE.Development.Spring#configure-parent-context","title": "Configure a parent context","disqus_id": "d2","anchor":"#configure-parent-context","url": "spring-support.html"},
"IntelliJ.IDEA.Concepts.Java.EE.Development.Spring#spring-dependencies": {"parentId": "IntelliJ.IDEA.Concepts.Java.EE.Development.Spring","level": 0,"id": "IntelliJ.IDEA.Concepts.Java.EE.Development.Spring#spring-dependencies","title": "Navigate Spring dependencies","disqus_id": "d2","anchor":"#spring-dependencies","url": "spring-support.html"},
"IntelliJ.IDEA.Concepts.Java.EE.Development.Spring#spring-beans-diagram": {"parentId": "IntelliJ.IDEA.Concepts.Java.EE.Development.Spring","level": 1,"id": "IntelliJ.IDEA.Concepts.Java.EE.Development.Spring#spring-beans-diagram","title": "Spring Beans Dependencies","disqus_id": "d2","anchor":"#spring-beans-diagram","url": "spring-support.html"},
"IntelliJ.IDEA.Concepts.Java.EE.Development.Spring#application-context-dependencies": {"parentId": "IntelliJ.IDEA.Concepts.Java.EE.Development.Spring","level": 1,"id": "IntelliJ.IDEA.Concepts.Java.EE.Development.Spring#application-context-dependencies","title": "Spring Application Context Dependencies","disqus_id": "d2","anchor":"#application-context-dependencies","url": "spring-support.html"},
"IntelliJ.IDEA.Concepts.Java.EE.Development.Spring#spring-tool-window": {"parentId": "IntelliJ.IDEA.Concepts.Java.EE.Development.Spring","level": 1,"id": "IntelliJ.IDEA.Concepts.Java.EE.Development.Spring#spring-tool-window","title": "Browse dependencies in the Spring tool window","disqus_id": "d2","anchor":"#spring-tool-window","url": "spring-support.html"},
"IntelliJ.IDEA.Concepts.Java.EE.Development.Spring#spring-change-active-profiles": {"parentId": "IntelliJ.IDEA.Concepts.Java.EE.Development.Spring","level": 0,"id": "IntelliJ.IDEA.Concepts.Java.EE.Development.Spring#spring-change-active-profiles","title": "Change active profiles","disqus_id": "d2","anchor":"#spring-change-active-profiles","url": "spring-support.html"},
"Spring_Boot#get-started-spring-boot": {"parentId": "Spring_Boot","level": 0,"id": "Spring_Boot#get-started-spring-boot","title": "Get started with Spring Boot","disqus_id": "d2","anchor":"#get-started-spring-boot","url": "spring-boot.html"},
"Spring_Boot#configure-custom-configuration-files": {"parentId": "Spring_Boot","level": 0,"id": "Spring_Boot#configure-custom-configuration-files","title": "Configure custom configuration files","disqus_id": "d2","anchor":"#configure-custom-configuration-files","url": "spring-boot.html"},
"Spring_Boot#run-monitor-spring-boot-applications": {"parentId": "Spring_Boot","level": 0,"id": "Spring_Boot#run-monitor-spring-boot-applications","title": "Monitor Spring Boot endpoints","disqus_id": "d2","anchor":"#run-monitor-spring-boot-applications","url": "spring-boot.html"},
"Spring_Boot#runtime-beans": {"parentId": "Spring_Boot","level": 0,"id": "Spring_Boot#runtime-beans","title": "View dependencies between runtime beans","disqus_id": "d2","anchor":"#runtime-beans","url": "spring-boot.html"},
"Spring_Boot#access-http-request-mappings": {"parentId": "Spring_Boot","level": 0,"id": "Spring_Boot#access-http-request-mappings","title": "Access HTTP request mappings","disqus_id": "d2","anchor":"#access-http-request-mappings","url": "spring-boot.html"},
"Spring_Boot#configure-application-update-policies-with-devtools": {"parentId": "Spring_Boot","level": 0,"id": "Spring_Boot#configure-application-update-policies-with-devtools","title": "Configure application update policies with devtools","disqus_id": "d2","anchor":"#configure-application-update-policies-with-devtools","url": "spring-boot.html"},
"TypeScript_Support#typescript_configuring_TypeScript_Language_Service": {"parentId": "TypeScript_Support","level": 0,"id": "TypeScript_Support#typescript_configuring_TypeScript_Language_Service","title": "Verifying TypeScript and compiling it into JavaScript","disqus_id": "d2","anchor":"#typescript_configuring_TypeScript_Language_Service","url": "typescript-support.html"},
"TypeScript_Support#typescript_parameter_hints": {"parentId": "TypeScript_Support","level": 0,"id": "TypeScript_Support#typescript_parameter_hints","title": "Viewing parameter hints","disqus_id": "d2","anchor":"#typescript_parameter_hints","url": "typescript-support.html"},
"TypeScript_Support#typescript_parameter_inferred_type_information": {"parentId": "TypeScript_Support","level": 0,"id": "TypeScript_Support#typescript_parameter_inferred_type_information","title": "Viewing inferred type information","disqus_id": "d2","anchor":"#typescript_parameter_inferred_type_information","url": "typescript-support.html"},
"TypeScript_Support#typescript_js_libraries_install_typescript_type_declarations": {"parentId": "TypeScript_Support","level": 0,"id": "TypeScript_Support#typescript_js_libraries_install_typescript_type_declarations","title": "Using JavaScript libraries in TypeScript","disqus_id": "d2","anchor":"#typescript_js_libraries_install_typescript_type_declarations","url": "typescript-support.html"},
"TypeScript_Support#ws_ts_documentation_look_up": {"parentId": "TypeScript_Support","level": 0,"id": "TypeScript_Support#ws_ts_documentation_look_up","title": "Documentation look-up","disqus_id": "d2","anchor":"#ws_ts_documentation_look_up","url": "typescript-support.html"},
"TypeScript_Support#typescript_refactoring": {"parentId": "TypeScript_Support","level": 0,"id": "TypeScript_Support#typescript_refactoring","title": "Refactoring code","disqus_id": "d2","anchor":"#typescript_refactoring","url": "typescript-support.html"},
"TypeScript_Support#ws_ts_add_import_statements_automatically": {"parentId": "TypeScript_Support","level": 0,"id": "TypeScript_Support#ws_ts_add_import_statements_automatically","title": "Auto import in TypeScript","disqus_id": "d2","anchor":"#ws_ts_add_import_statements_automatically","url": "typescript-support.html"},
"TypeScript_Support#ws_ts_add_import_with_popup": {"parentId": "TypeScript_Support","level": 1,"id": "TypeScript_Support#ws_ts_add_import_with_popup","title": "Using import popups","disqus_id": "d2","anchor":"#ws_ts_add_import_with_popup","url": "typescript-support.html"},
"TypeScript_Support#ws_ts_auto_import_quick_fix": {"parentId": "TypeScript_Support","level": 1,"id": "TypeScript_Support#ws_ts_auto_import_quick_fix","title": "Using import quick-fixes","disqus_id": "d2","anchor":"#ws_ts_auto_import_quick_fix","url": "typescript-support.html"},
"reference.refactoring.change.signature.typescript#typescript_move_refactorings": {"parentId": "reference.refactoring.change.signature.typescript","level": 0,"id": "reference.refactoring.change.signature.typescript#typescript_move_refactorings","title": "Move refactorings","disqus_id": "d2","anchor":"#typescript_move_refactorings","url": "specific-typescript-refactorings.html"},
"reference.refactoring.change.signature.typescript#typescript_pull_member_up_refactoring": {"parentId": "reference.refactoring.change.signature.typescript","level": 0,"id": "reference.refactoring.change.signature.typescript#typescript_pull_member_up_refactoring","title": "Pull Class Members Up refactoring","disqus_id": "d2","anchor":"#typescript_pull_member_up_refactoring","url": "specific-typescript-refactorings.html"},
"reference.refactoring.change.signature.typescript#typescript_rename_refactorings": {"parentId": "reference.refactoring.change.signature.typescript","level": 0,"id": "reference.refactoring.change.signature.typescript#typescript_rename_refactorings","title": "Rename refactorings","disqus_id": "d2","anchor":"#typescript_rename_refactorings","url": "specific-typescript-refactorings.html"},
"reference.refactoring.change.signature.typescript#ws_ts_rename_refactoring_keep_names_in_compliance": {"parentId": "reference.refactoring.change.signature.typescript","level": 1,"id": "reference.refactoring.change.signature.typescript#ws_ts_rename_refactoring_keep_names_in_compliance","title": "Keeping the names of classes and containing files in compliance","disqus_id": "d2","anchor":"#ws_ts_rename_refactoring_keep_names_in_compliance","url": "specific-typescript-refactorings.html"},
"reference.refactoring.change.signature.typescript#typescript_extract_refactorings": {"parentId": "reference.refactoring.change.signature.typescript","level": 0,"id": "reference.refactoring.change.signature.typescript#typescript_extract_refactorings","title": "Extract refactorings","disqus_id": "d2","anchor":"#typescript_extract_refactorings","url": "specific-typescript-refactorings.html"},
"reference.refactoring.change.signature.typescript#typescript_extract_parameter": {"parentId": "reference.refactoring.change.signature.typescript","level": 1,"id": "reference.refactoring.change.signature.typescript#typescript_extract_parameter","title": "Extract Parameter","disqus_id": "d2","anchor":"#typescript_extract_parameter","url": "specific-typescript-refactorings.html"},
"reference.refactoring.change.signature.typescript#typescript_extract_variable": {"parentId": "reference.refactoring.change.signature.typescript","level": 1,"id": "reference.refactoring.change.signature.typescript#typescript_extract_variable","title": "Extract Variable","disqus_id": "d2","anchor":"#typescript_extract_variable","url": "specific-typescript-refactorings.html"},
"reference.refactoring.change.signature.typescript#typescript_extract_field": {"parentId": "reference.refactoring.change.signature.typescript","level": 1,"id": "reference.refactoring.change.signature.typescript#typescript_extract_field","title": "Extract Field","disqus_id": "d2","anchor":"#typescript_extract_field","url": "specific-typescript-refactorings.html"},
"reference.refactoring.change.signature.typescript#typescript_extract_method": {"parentId": "reference.refactoring.change.signature.typescript","level": 1,"id": "reference.refactoring.change.signature.typescript#typescript_extract_method","title": "Extract Method","disqus_id": "d2","anchor":"#typescript_extract_method","url": "specific-typescript-refactorings.html"},
"reference.refactoring.change.signature.typescript#typescript_extract_type_alias": {"parentId": "reference.refactoring.change.signature.typescript","level": 1,"id": "reference.refactoring.change.signature.typescript#typescript_extract_type_alias","title": "Extract Type Alias","disqus_id": "d2","anchor":"#typescript_extract_type_alias","url": "specific-typescript-refactorings.html"},
"reference.refactoring.change.signature.typescript#typescript_extract_superclass": {"parentId": "reference.refactoring.change.signature.typescript","level": 1,"id": "reference.refactoring.change.signature.typescript#typescript_extract_superclass","title": "Extract Superclass","disqus_id": "d2","anchor":"#typescript_extract_superclass","url": "specific-typescript-refactorings.html"},
"reference.refactoring.change.signature.typescript#typescript_extract_interface": {"parentId": "reference.refactoring.change.signature.typescript","level": 1,"id": "reference.refactoring.change.signature.typescript#typescript_extract_interface","title": "Extract Interface","disqus_id": "d2","anchor":"#typescript_extract_interface","url": "specific-typescript-refactorings.html"},
"reference.refactoring.change.signature.typescript#typescript_inline_refactorings": {"parentId": "reference.refactoring.change.signature.typescript","level": 0,"id": "reference.refactoring.change.signature.typescript#typescript_inline_refactorings","title": "Inline refactorings","disqus_id": "d2","anchor":"#typescript_inline_refactorings","url": "specific-typescript-refactorings.html"},
"reference.refactoring.change.signature.typescript#typescript_change_signature": {"parentId": "reference.refactoring.change.signature.typescript","level": 0,"id": "reference.refactoring.change.signature.typescript#typescript_change_signature","title": "Change Signature refactoring","disqus_id": "d2","anchor":"#typescript_change_signature","url": "specific-typescript-refactorings.html"},
"Running_and_Debugging_TypeScript#ws_ts_run": {"parentId": "Running_and_Debugging_TypeScript","level": 0,"id": "Running_and_Debugging_TypeScript#ws_ts_run","title": "Running a client-side TypeScript application","disqus_id": "d2","anchor":"#ws_ts_run","url": "running-and-debugging-typescript.html"},
"Running_and_Debugging_TypeScript#ws_ts_debug": {"parentId": "Running_and_Debugging_TypeScript","level": 0,"id": "Running_and_Debugging_TypeScript#ws_ts_debug","title": "Debugging TypeScript","disqus_id": "d2","anchor":"#ws_ts_debug","url": "running-and-debugging-typescript.html"},
"Using_TSLint_Code_Quality_Tool#ws_tslint_install": {"parentId": "Using_TSLint_Code_Quality_Tool","level": 0,"id": "Using_TSLint_Code_Quality_Tool#ws_tslint_install","title": "Installing TSLint","disqus_id": "d2","anchor":"#ws_tslint_install","url": "using-tslint-code-quality-tool.html"},
"Using_TSLint_Code_Quality_Tool#ws_tslint_activate_and_configure": {"parentId": "Using_TSLint_Code_Quality_Tool","level": 0,"id": "Using_TSLint_Code_Quality_Tool#ws_tslint_activate_and_configure","title": "Activating and configuring TSLint in IntelliJ IDEA","disqus_id": "d2","anchor":"#ws_tslint_activate_and_configure","url": "using-tslint-code-quality-tool.html"},
"Using_TSLint_Code_Quality_Tool#ws_tslint_configure_highlighting": {"parentId": "Using_TSLint_Code_Quality_Tool","level": 0,"id": "Using_TSLint_Code_Quality_Tool#ws_tslint_configure_highlighting","title": "Configuring highlighting for TSLint","disqus_id": "d2","anchor":"#ws_tslint_configure_highlighting","url": "using-tslint-code-quality-tool.html"},
"Using_TSLint_Code_Quality_Tool#ws_tslint_import_code_style": {"parentId": "Using_TSLint_Code_Quality_Tool","level": 0,"id": "Using_TSLint_Code_Quality_Tool#ws_tslint_import_code_style","title": "Importing code style from a TSLint configuration file","disqus_id": "d2","anchor":"#ws_tslint_import_code_style","url": "using-tslint-code-quality-tool.html"},
"Using_TSLint_Code_Quality_Tool#ws_tslint_quick_fixes": {"parentId": "Using_TSLint_Code_Quality_Tool","level": 0,"id": "Using_TSLint_Code_Quality_Tool#ws_tslint_quick_fixes","title": "TSLint quick-fixes","disqus_id": "d2","anchor":"#ws_tslint_quick_fixes","url": "using-tslint-code-quality-tool.html"},
"xslt.completion#completing_xpath_expressions": {"parentId": "xslt.completion","level": 0,"id": "xslt.completion#completing_xpath_expressions","title": "Completion in XPath Expressions","disqus_id": "d2","anchor":"#completing_xpath_expressions","url": "completion.html"},
"xslt.completion#completing)template_names": {"parentId": "xslt.completion","level": 0,"id": "xslt.completion#completing)template_names","title": "Completion for Template Names in Xsl:Call-Template","disqus_id": "d2","anchor":"#completing)template_names","url": "completion.html"},
"xslt.completion#Param": {"parentId": "xslt.completion","level": 0,"id": "xslt.completion#Param","title": "Completion for Template Parameters","disqus_id": "d2","anchor":"#Param","url": "completion.html"},
"xslt.refactoring#rename_templates": {"parentId": "xslt.refactoring","level": 0,"id": "xslt.refactoring#rename_templates","title": "Renaming templates","disqus_id": "d2","anchor":"#rename_templates","url": "refactoring.html"},
"xslt.refactoring#rename_variables_parameters": {"parentId": "xslt.refactoring","level": 0,"id": "xslt.refactoring#rename_variables_parameters","title": "Rename variables and parameters","disqus_id": "d2","anchor":"#rename_variables_parameters","url": "refactoring.html"},
"xslt.refactoring#safe_delete": {"parentId": "xslt.refactoring","level": 0,"id": "xslt.refactoring#safe_delete","title": "Safe delete","disqus_id": "d2","anchor":"#safe_delete","url": "refactoring.html"},
"xslt.refactoring#introduce-variable": {"parentId": "xslt.refactoring","level": 0,"id": "xslt.refactoring#introduce-variable","title": "Introduce variable","disqus_id": "d2","anchor":"#introduce-variable","url": "refactoring.html"},
"xslt.refactoring#introduce-parameter": {"parentId": "xslt.refactoring","level": 0,"id": "xslt.refactoring#introduce-parameter","title": "Introduce parameter","disqus_id": "d2","anchor":"#introduce-parameter","url": "refactoring.html"},
"xslt.refactoring#inline-variable": {"parentId": "xslt.refactoring","level": 0,"id": "xslt.refactoring#inline-variable","title": "Inline variable","disqus_id": "d2","anchor":"#inline-variable","url": "refactoring.html"},
"xslt.error_checking#syntax_highlighting": {"parentId": "xslt.error_checking","level": 0,"id": "xslt.error_checking#syntax_highlighting","title": "Syntax highlighting","disqus_id": "d2","anchor":"#syntax_highlighting","url": "error-highlighting.html"},
"xslt.error_checking#xpath_syntax_checks": {"parentId": "xslt.error_checking","level": 0,"id": "xslt.error_checking#xpath_syntax_checks","title": "XPath syntax checks","disqus_id": "d2","anchor":"#xpath_syntax_checks","url": "error-highlighting.html"},
"xslt.error_checking#xpath_type_check": {"parentId": "xslt.error_checking","level": 0,"id": "xslt.error_checking#xpath_type_check","title": "XPath type checking","disqus_id": "d2","anchor":"#xpath_type_check","url": "error-highlighting.html"},
"xslt.error_checking#pattern_validation": {"parentId": "xslt.error_checking","level": 0,"id": "xslt.error_checking#pattern_validation","title": "Pattern validation","disqus_id": "d2","anchor":"#pattern_validation","url": "error-highlighting.html"},
"xslt.error_checking#unresolved_references": {"parentId": "xslt.error_checking","level": 0,"id": "xslt.error_checking#unresolved_references","title": "Unresolved references","disqus_id": "d2","anchor":"#unresolved_references","url": "error-highlighting.html"},
"xslt.error_checking#duplicate_declarations": {"parentId": "xslt.error_checking","level": 0,"id": "xslt.error_checking#duplicate_declarations","title": "Duplicate declarations","disqus_id": "d2","anchor":"#duplicate_declarations","url": "error-highlighting.html"},
"xslt.error_checking#other_checks": {"parentId": "xslt.error_checking","level": 0,"id": "xslt.error_checking#other_checks","title": "Other checks","disqus_id": "d2","anchor":"#other_checks","url": "error-highlighting.html"},
"xslt.error_checking#shadowed_variables": {"parentId": "xslt.error_checking","level": 1,"id": "xslt.error_checking#shadowed_variables","title": "Shadowed variables","disqus_id": "d2","anchor":"#shadowed_variables","url": "error-highlighting.html"},
"xslt.error_checking#missing_template_arguments": {"parentId": "xslt.error_checking","level": 1,"id": "xslt.error_checking#missing_template_arguments","title": "Missing template arguments","disqus_id": "d2","anchor":"#missing_template_arguments","url": "error-highlighting.html"},
"xslt.error_checking#superfluous_template_arguments": {"parentId": "xslt.error_checking","level": 1,"id": "xslt.error_checking#superfluous_template_arguments","title": "Superfluous template arguments","disqus_id": "d2","anchor":"#superfluous_template_arguments","url": "error-highlighting.html"},
"xslt.error_checking#function_call_arguments": {"parentId": "xslt.error_checking","level": 1,"id": "xslt.error_checking#function_call_arguments","title": "Function call arguments","disqus_id": "d2","anchor":"#function_call_arguments","url": "error-highlighting.html"},
"xslt.error_checking#xpath_inspections": {"parentId": "xslt.error_checking","level": 2,"id": "xslt.error_checking#xpath_inspections","title": "XPath inspections","disqus_id": "d2","anchor":"#xpath_inspections","url": "error-highlighting.html"},
"xpath.inspections#[path_type_checking": {"parentId": "xpath.inspections","level": 0,"id": "xpath.inspections#[path_type_checking","title": "XPath Type Checking","disqus_id": "d2","anchor":"#[path_type_checking","url": "xpath-inspections.html"},
"xpath.inspections#implicit_type_conversion": {"parentId": "xpath.inspections","level": 1,"id": "xpath.inspections#implicit_type_conversion","title": "Implicit Type Conversion","disqus_id": "d2","anchor":"#implicit_type_conversion","url": "xpath-inspections.html"},
"xpath.inspections#redundant_type_conversion": {"parentId": "xpath.inspections","level": 1,"id": "xpath.inspections#redundant_type_conversion","title": "Redundant Type Conversion","disqus_id": "d2","anchor":"#redundant_type_conversion","url": "xpath-inspections.html"},
"xpath.inspections#expression_validity_checks": {"parentId": "xpath.inspections","level": 0,"id": "xpath.inspections#expression_validity_checks","title": "Expression validity checks","disqus_id": "d2","anchor":"#expression_validity_checks","url": "xpath-inspections.html"},
"xpath.inspections#check_node_test": {"parentId": "xpath.inspections","level": 1,"id": "xpath.inspections#check_node_test","title": "Check Node Test","disqus_id": "d2","anchor":"#check_node_test","url": "xpath-inspections.html"},
"xpath.inspections#index_zero_usage": {"parentId": "xpath.inspections","level": 1,"id": "xpath.inspections#index_zero_usage","title": "Index Zero Usage","disqus_id": "d2","anchor":"#index_zero_usage","url": "xpath-inspections.html"},
"xpath.inspections#custom_xpath_inspections": {"parentId": "xpath.inspections","level": 0,"id": "xpath.inspections#custom_xpath_inspections","title": "Developing custom XPath inspections","disqus_id": "d2","anchor":"#custom_xpath_inspections","url": "xpath-inspections.html"},
"xslt.navigation#find_usages": {"parentId": "xslt.navigation","level": 0,"id": "xslt.navigation#find_usages","title": "Find Usages","disqus_id": "d2","anchor":"#find_usages","url": "xslt-navigation.html"},
"xslt.navigation#goto_symbol": {"parentId": "xslt.navigation","level": 0,"id": "xslt.navigation#goto_symbol","title": "Goto Symbol","disqus_id": "d2","anchor":"#goto_symbol","url": "xslt-navigation.html"},
"xslt.running#create_run_config": {"parentId": "xslt.running","level": 0,"id": "xslt.running#create_run_config","title": "Creating Run Configurations","disqus_id": "d2","anchor":"#create_run_config","url": "xslt-run-configurations.html"},
"xslt.running#run_config_settings": {"parentId": "xslt.running","level": 0,"id": "xslt.running#run_config_settings","title": "Run Configuration Settings","disqus_id": "d2","anchor":"#run_config_settings","url": "xslt-run-configurations.html"},
"xslt.running#input": {"parentId": "xslt.running","level": 1,"id": "xslt.running#input","title": "Input","disqus_id": "d2","anchor":"#input","url": "xslt-run-configurations.html"},
"xslt.running#output": {"parentId": "xslt.running","level": 1,"id": "xslt.running#output","title": "Output","disqus_id": "d2","anchor":"#output","url": "xslt-run-configurations.html"},
"xslt.running#parameters": {"parentId": "xslt.running","level": 1,"id": "xslt.running#parameters","title": "Parameters","disqus_id": "d2","anchor":"#parameters","url": "xslt-run-configurations.html"},
"xslt.running#advanced_options": {"parentId": "xslt.running","level": 0,"id": "xslt.running#advanced_options","title": "Advanced options","disqus_id": "d2","anchor":"#advanced_options","url": "xslt-run-configurations.html"},
"xslt.running#smart_error_handling": {"parentId": "xslt.running","level": 1,"id": "xslt.running#smart_error_handling","title": "Smart error handling","disqus_id": "d2","anchor":"#smart_error_handling","url": "xslt-run-configurations.html"},
"xslt.running#vm_arguments": {"parentId": "xslt.running","level": 1,"id": "xslt.running#vm_arguments","title": "VM arguments","disqus_id": "d2","anchor":"#vm_arguments","url": "xslt-run-configurations.html"},
"xslt.running#working_directory": {"parentId": "xslt.running","level": 1,"id": "xslt.running#working_directory","title": "Working directory","disqus_id": "d2","anchor":"#working_directory","url": "xslt-run-configurations.html"},
"xslt.running#classpath_and_jdk": {"parentId": "xslt.running","level": 2,"id": "xslt.running#classpath_and_jdk","title": "Classpath and JDK","disqus_id": "d2","anchor":"#classpath_and_jdk","url": "xslt-run-configurations.html"},
"topicId620709#manage_associations_from_editor": {"parentId": "topicId620709","level": 0,"id": "topicId620709#manage_associations_from_editor","title": "Managing associations from the editor","disqus_id": "d2","anchor":"#manage_associations_from_editor","url": "file-associations.html"},
"topicId620709#removing_association": {"parentId": "topicId620709","level": 0,"id": "topicId620709#removing_association","title": "Removing an association","disqus_id": "d2","anchor":"#removing_association","url": "file-associations.html"},
"xslt.intentions#convert_if_ti_choose": {"parentId": "xslt.intentions","level": 0,"id": "xslt.intentions#convert_if_ti_choose","title": "Intention to convert xsl:if to xsl:choose","disqus_id": "d2","anchor":"#convert_if_ti_choose","url": "intentions.html"},
"xslt.intentions#add_optional_param": {"parentId": "xslt.intentions","level": 0,"id": "xslt.intentions#add_optional_param","title": "Intention to add optional parameters","disqus_id": "d2","anchor":"#add_optional_param","url": "intentions.html"},
"Project_Category_and_Options#java": {"parentId": "Project_Category_and_Options","level": 0,"id": "Project_Category_and_Options#java","title": "Java","disqus_id": "d2","anchor":"#java","url": "project-category-and-options.html"},
"Project_Category_and_Options#java_enterprise": {"parentId": "Project_Category_and_Options","level": 0,"id": "Project_Category_and_Options#java_enterprise","title": "Java Enterprise","disqus_id": "d2","anchor":"#java_enterprise","url": "project-category-and-options.html"},
"Project_Category_and_Options#j2me": {"parentId": "Project_Category_and_Options","level": 0,"id": "Project_Category_and_Options#j2me","title": "J2ME","disqus_id": "d2","anchor":"#j2me","url": "project-category-and-options.html"},
"Project_Category_and_Options#android": {"parentId": "Project_Category_and_Options","level": 0,"id": "Project_Category_and_Options#android","title": "Android","disqus_id": "d2","anchor":"#android","url": "project-category-and-options.html"},
"Project_Category_and_Options#clouds": {"parentId": "Project_Category_and_Options","level": 0,"id": "Project_Category_and_Options#clouds","title": "Clouds","disqus_id": "d2","anchor":"#clouds","url": "project-category-and-options.html"},
"Project_Category_and_Options#spring": {"parentId": "Project_Category_and_Options","level": 0,"id": "Project_Category_and_Options#spring","title": "Spring","disqus_id": "d2","anchor":"#spring","url": "project-category-and-options.html"},
"Project_Category_and_Options#java_fx": {"parentId": "Project_Category_and_Options","level": 0,"id": "Project_Category_and_Options#java_fx","title": "Java FX","disqus_id": "d2","anchor":"#java_fx","url": "project-category-and-options.html"},
"Project_Category_and_Options#plugin": {"parentId": "Project_Category_and_Options","level": 0,"id": "Project_Category_and_Options#plugin","title": "IntelliJ Platform Plugin","disqus_id": "d2","anchor":"#plugin","url": "project-category-and-options.html"},
"Project_Category_and_Options#SpringInitiazlir": {"parentId": "Project_Category_and_Options","level": 0,"id": "Project_Category_and_Options#SpringInitiazlir","title": "Spring Initializr","disqus_id": "d2","anchor":"#SpringInitiazlir","url": "project-category-and-options.html"},
"Project_Category_and_Options#maven": {"parentId": "Project_Category_and_Options","level": 0,"id": "Project_Category_and_Options#maven","title": "Maven","disqus_id": "d2","anchor":"#maven","url": "project-category-and-options.html"},
"Project_Category_and_Options#gradle": {"parentId": "Project_Category_and_Options","level": 0,"id": "Project_Category_and_Options#gradle","title": "Gradle","disqus_id": "d2","anchor":"#gradle","url": "project-category-and-options.html"},
"Project_Category_and_Options#groovy": {"parentId": "Project_Category_and_Options","level": 0,"id": "Project_Category_and_Options#groovy","title": "Groovy","disqus_id": "d2","anchor":"#groovy","url": "project-category-and-options.html"},
"Project_Category_and_Options#grails": {"parentId": "Project_Category_and_Options","level": 0,"id": "Project_Category_and_Options#grails","title": "Grails","disqus_id": "d2","anchor":"#grails","url": "project-category-and-options.html"},
"Project_Category_and_Options#application_forge": {"parentId": "Project_Category_and_Options","level": 0,"id": "Project_Category_and_Options#application_forge","title": "Application Forge","disqus_id": "d2","anchor":"#application_forge","url": "project-category-and-options.html"},
"Project_Category_and_Options#php": {"parentId": "Project_Category_and_Options","level": 0,"id": "Project_Category_and_Options#php","title": "PHP","disqus_id": "d2","anchor":"#php","url": "project-category-and-options.html"},
"Project_Category_and_Options#kotlin": {"parentId": "Project_Category_and_Options","level": 0,"id": "Project_Category_and_Options#kotlin","title": "Kotlin","disqus_id": "d2","anchor":"#kotlin","url": "project-category-and-options.html"},
"Project_Category_and_Options#web": {"parentId": "Project_Category_and_Options","level": 0,"id": "Project_Category_and_Options#web","title": "Static Web","disqus_id": "d2","anchor":"#web","url": "project-category-and-options.html"},
"Project_Category_and_Options#flash": {"parentId": "Project_Category_and_Options","level": 0,"id": "Project_Category_and_Options#flash","title": "Flash","disqus_id": "d2","anchor":"#flash","url": "project-category-and-options.html"},
"Project_Category_and_Options#empty_project": {"parentId": "Project_Category_and_Options","level": 0,"id": "Project_Category_and_Options#empty_project","title": "Empty Project","disqus_id": "d2","anchor":"#empty_project","url": "project-category-and-options.html"},
"reference.runToolWindow.jdbcTab#overview": {"parentId": "reference.runToolWindow.jdbcTab","level": 0,"id": "reference.runToolWindow.jdbcTab#overview","title": "Overview","disqus_id": "d2","anchor":"#overview","url": "database-console.html"},
"reference.runToolWindow.jdbcTab#input": {"parentId": "reference.runToolWindow.jdbcTab","level": 0,"id": "reference.runToolWindow.jdbcTab#input","title": "Input pane","disqus_id": "d2","anchor":"#input","url": "database-console.html"},
"reference.runToolWindow.jdbcTab#input_icons": {"parentId": "reference.runToolWindow.jdbcTab","level": 1,"id": "reference.runToolWindow.jdbcTab#input_icons","title": "Toolbar icons and shortcuts","disqus_id": "d2","anchor":"#input_icons","url": "database-console.html"},
"reference.runToolWindow.jdbcTab#input_context_menu": {"parentId": "reference.runToolWindow.jdbcTab","level": 1,"id": "reference.runToolWindow.jdbcTab#input_context_menu","title": "Most useful context menu commands","disqus_id": "d2","anchor":"#input_context_menu","url": "database-console.html"},
"reference.runToolWindow.jdbcTab#120508b5": {"parentId": "reference.runToolWindow.jdbcTab","level": 0,"id": "reference.runToolWindow.jdbcTab#120508b5","title": "Toolbar of the Database Console tool window","disqus_id": "d2","anchor":"#120508b5","url": "database-console.html"},
"reference.runToolWindow.jdbcTab#83aea1d7": {"parentId": "reference.runToolWindow.jdbcTab","level": 0,"id": "reference.runToolWindow.jdbcTab#83aea1d7","title": "Output pane","disqus_id": "d2","anchor":"#83aea1d7","url": "database-console.html"},
"reference.runToolWindow.jdbcTab#8641fdf2": {"parentId": "reference.runToolWindow.jdbcTab","level": 0,"id": "reference.runToolWindow.jdbcTab#8641fdf2","title": "Result pane","disqus_id": "d2","anchor":"#8641fdf2","url": "database-console.html"},
"reference.runToolWindow.jdbcTab#e9713a81": {"parentId": "reference.runToolWindow.jdbcTab","level": 1,"id": "reference.runToolWindow.jdbcTab#e9713a81","title": "Main functions","disqus_id": "d2","anchor":"#e9713a81","url": "database-console.html"},
"reference.runToolWindow.jdbcTab#header_row": {"parentId": "reference.runToolWindow.jdbcTab","level": 1,"id": "reference.runToolWindow.jdbcTab#header_row","title": "Sorting data","disqus_id": "d2","anchor":"#header_row","url": "database-console.html"},
"reference.runToolWindow.jdbcTab#f69cb4ff": {"parentId": "reference.runToolWindow.jdbcTab","level": 1,"id": "reference.runToolWindow.jdbcTab#f69cb4ff","title": "Reordering columns","disqus_id": "d2","anchor":"#f69cb4ff","url": "database-console.html"},
"reference.runToolWindow.jdbcTab#f6227deb": {"parentId": "reference.runToolWindow.jdbcTab","level": 1,"id": "reference.runToolWindow.jdbcTab#f6227deb","title": "Hiding and showing columns","disqus_id": "d2","anchor":"#f6227deb","url": "database-console.html"},
"reference.runToolWindow.jdbcTab#parameters": {"parentId": "reference.runToolWindow.jdbcTab","level": 0,"id": "reference.runToolWindow.jdbcTab#parameters","title": "Parameters pane","disqus_id": "d2","anchor":"#parameters","url": "database-console.html"},
"reference.tools.datasource#overview": {"parentId": "reference.tools.datasource","level": 0,"id": "reference.tools.datasource#overview","title": "Overview","disqus_id": "d2","anchor":"#overview","url": "database-tool-window.html"},
"reference.tools.datasource#toolbar_icons_context_menu_shortcuts": {"parentId": "reference.tools.datasource","level": 0,"id": "reference.tools.datasource#toolbar_icons_context_menu_shortcuts","title": "Toolbar icons, context menu commands and shortcuts","disqus_id": "d2","anchor":"#toolbar_icons_context_menu_shortcuts","url": "database-tool-window.html"},
"reference.tools.datasource#view_options": {"parentId": "reference.tools.datasource","level": 0,"id": "reference.tools.datasource#view_options","title": "View options","disqus_id": "d2","anchor":"#view_options","url": "database-tool-window.html"},
"reference.tools.datasource#3": {"parentId": "reference.tools.datasource","level": 0,"id": "reference.tools.datasource#3","title": "Icons for data sources and their elements","disqus_id": "d2","anchor":"#3","url": "database-tool-window.html"},
"reference.tools.datasource#title_bar": {"parentId": "reference.tools.datasource","level": 0,"id": "reference.tools.datasource#title_bar","title": "Title bar context menu and buttons","disqus_id": "d2","anchor":"#title_bar","url": "database-tool-window.html"},
"reference.toolWindows.favorites#e399a2b4": {"parentId": "reference.toolWindows.favorites","level": 0,"id": "reference.toolWindows.favorites#e399a2b4","title": "Toolbar buttons","disqus_id": "d2","anchor":"#e399a2b4","url": "favorites-tool-window.html"},
"reference.toolWindows.favorites#c4920052": {"parentId": "reference.toolWindows.favorites","level": 0,"id": "reference.toolWindows.favorites#c4920052","title": "Context menu commands","disqus_id": "d2","anchor":"#c4920052","url": "favorites-tool-window.html"},
"reference.tool.window.npm#ws_npm_tool_window_before_you_start": {"parentId": "reference.tool.window.npm","level": 0,"id": "reference.tool.window.npm#ws_npm_tool_window_before_you_start","title": "Before you start","disqus_id": "d2","anchor":"#ws_npm_tool_window_before_you_start","url": "npm-tool-window.html"},
"reference.tool.window.npm#220c4469": {"parentId": "reference.tool.window.npm","level": 1,"id": "reference.tool.window.npm#220c4469","title": "","disqus_id": "d2","anchor":"#220c4469","url": "npm-tool-window.html"},
"reference.tool.window.npm#ws_npm_tool_window_running_scripts": {"parentId": "reference.tool.window.npm","level": 0,"id": "reference.tool.window.npm#ws_npm_tool_window_running_scripts","title": "Running scripts","disqus_id": "d2","anchor":"#ws_npm_tool_window_running_scripts","url": "npm-tool-window.html"},
"reference.tool.window.npm#ws_npm_tool_window_building_tree_of_scripts": {"parentId": "reference.tool.window.npm","level": 1,"id": "reference.tool.window.npm#ws_npm_tool_window_building_tree_of_scripts","title": "To build a tree of scripts, do one of the following:","disqus_id": "d2","anchor":"#ws_npm_tool_window_building_tree_of_scripts","url": "npm-tool-window.html"},
"reference.tool.window.npm#f4fab797": {"parentId": "reference.tool.window.npm","level": 1,"id": "reference.tool.window.npm#f4fab797","title": "To re-build a tree","disqus_id": "d2","anchor":"#f4fab797","url": "npm-tool-window.html"},
"reference.tool.window.npm#a77954c1": {"parentId": "reference.tool.window.npm","level": 1,"id": "reference.tool.window.npm#a77954c1","title": "To sort the scripts in a tree by their names","disqus_id": "d2","anchor":"#a77954c1","url": "npm-tool-window.html"},
"reference.tool.window.npm#ws_npm_tool_window_run_one_script": {"parentId": "reference.tool.window.npm","level": 1,"id": "reference.tool.window.npm#ws_npm_tool_window_run_one_script","title": "Running one script","disqus_id": "d2","anchor":"#ws_npm_tool_window_run_one_script","url": "npm-tool-window.html"},
"reference.tool.window.npm#ws_npm_tool_window_run_several_scripts": {"parentId": "reference.tool.window.npm","level": 1,"id": "reference.tool.window.npm#ws_npm_tool_window_run_several_scripts","title": "Running several scripts","disqus_id": "d2","anchor":"#ws_npm_tool_window_run_several_scripts","url": "npm-tool-window.html"},
"reference.tool.window.npm#ws_npm_tool_window_toolbar": {"parentId": "reference.tool.window.npm","level": 0,"id": "reference.tool.window.npm#ws_npm_tool_window_toolbar","title": "Toolbar","disqus_id": "d2","anchor":"#ws_npm_tool_window_toolbar","url": "npm-tool-window.html"},
"reference.tool.window.npm#ws_npm_tool_window_context_menu_of_scripts_tree": {"parentId": "reference.tool.window.npm","level": 0,"id": "reference.tool.window.npm#ws_npm_tool_window_context_menu_of_scripts_tree","title": "Context Menu of a Tree","disqus_id": "d2","anchor":"#ws_npm_tool_window_context_menu_of_scripts_tree","url": "npm-tool-window.html"},
"reference.tool.window.npm#ws_npm_tool_window_context_menu_of_script": {"parentId": "reference.tool.window.npm","level": 0,"id": "reference.tool.window.npm#ws_npm_tool_window_context_menu_of_script","title": "Context Menu of a Script","disqus_id": "d2","anchor":"#ws_npm_tool_window_context_menu_of_script","url": "npm-tool-window.html"},
"reference.tool.windows.typescript#ws_ts_tool_window_errors_pane": {"parentId": "reference.tool.windows.typescript","level": 0,"id": "reference.tool.windows.typescript#ws_ts_tool_window_errors_pane","title": "Errors","disqus_id": "d2","anchor":"#ws_ts_tool_window_errors_pane","url": "typescript-compiler-tool-window.html"},
"reference.tool.windows.typescript#ws_ts_tool_window_compile_errors_pane": {"parentId": "reference.tool.windows.typescript","level": 0,"id": "reference.tool.windows.typescript#ws_ts_tool_window_compile_errors_pane","title": "Compile Errors","disqus_id": "d2","anchor":"#ws_ts_tool_window_compile_errors_pane","url": "typescript-compiler-tool-window.html"},
"reference.tool.windows.typescript#ws_ts_tool_window_toolbar": {"parentId": "reference.tool.windows.typescript","level": 0,"id": "reference.tool.windows.typescript#ws_ts_tool_window_toolbar","title": "Toolbar","disqus_id": "d2","anchor":"#ws_ts_tool_window_toolbar","url": "typescript-compiler-tool-window.html"},
"reference.tool.windows.typescript#ws_ts_tool_window_context_menu": {"parentId": "reference.tool.windows.typescript","level": 0,"id": "reference.tool.windows.typescript#ws_ts_tool_window_context_menu","title": "Context Menu","disqus_id": "d2","anchor":"#ws_ts_tool_window_context_menu","url": "typescript-compiler-tool-window.html"},
"reference.tool.windows.typescript#ws_ts_tool_window_console": {"parentId": "reference.tool.windows.typescript","level": 0,"id": "reference.tool.windows.typescript#ws_ts_tool_window_console","title": "Console","disqus_id": "d2","anchor":"#ws_ts_tool_window_console","url": "typescript-compiler-tool-window.html"},
"reference.tools.datasource.properties#e69c61a5": {"parentId": "reference.tools.datasource.properties","level": 0,"id": "reference.tools.datasource.properties#e69c61a5","title": "Overview","disqus_id": "d2","anchor":"#e69c61a5","url": "data-sources-and-drivers-dialog.html"},
"reference.tools.datasource.properties#left_hand_pane": {"parentId": "reference.tools.datasource.properties","level": 0,"id": "reference.tools.datasource.properties#left_hand_pane","title": "Left-hand pane","disqus_id": "d2","anchor":"#left_hand_pane","url": "data-sources-and-drivers-dialog.html"},
"reference.tools.datasource.properties#android": {"parentId": "reference.tools.datasource.properties","level": 0,"id": "reference.tools.datasource.properties#android","title": "Android SQLite data source settings","disqus_id": "d2","anchor":"#android","url": "data-sources-and-drivers-dialog.html"},
"reference.tools.datasource.properties#db": {"parentId": "reference.tools.datasource.properties","level": 0,"id": "reference.tools.datasource.properties#db","title": "DB data source settings","disqus_id": "d2","anchor":"#db","url": "data-sources-and-drivers-dialog.html"},
"reference.tools.datasource.properties#databaseTab": {"parentId": "reference.tools.datasource.properties","level": 1,"id": "reference.tools.datasource.properties#databaseTab","title": "General tab","disqus_id": "d2","anchor":"#databaseTab","url": "data-sources-and-drivers-dialog.html"},
"reference.tools.datasource.properties#sshAndSsl": {"parentId": "reference.tools.datasource.properties","level": 1,"id": "reference.tools.datasource.properties#sshAndSsl","title": "SSH/SSL tab","disqus_id": "d2","anchor":"#sshAndSsl","url": "data-sources-and-drivers-dialog.html"},
"reference.tools.datasource.properties#schemasAndTablesTab": {"parentId": "reference.tools.datasource.properties","level": 1,"id": "reference.tools.datasource.properties#schemasAndTablesTab","title": "Schemas tab","disqus_id": "d2","anchor":"#schemasAndTablesTab","url": "data-sources-and-drivers-dialog.html"},
"reference.tools.datasource.properties#optionsTab": {"parentId": "reference.tools.datasource.properties","level": 1,"id": "reference.tools.datasource.properties#optionsTab","title": "Options tab","disqus_id": "d2","anchor":"#optionsTab","url": "data-sources-and-drivers-dialog.html"},
"reference.tools.datasource.properties#advancedTab": {"parentId": "reference.tools.datasource.properties","level": 1,"id": "reference.tools.datasource.properties#advancedTab","title": "Advanced tab","disqus_id": "d2","anchor":"#advancedTab","url": "data-sources-and-drivers-dialog.html"},
"reference.tools.datasource.properties#ddl": {"parentId": "reference.tools.datasource.properties","level": 0,"id": "reference.tools.datasource.properties#ddl","title": "DDL data source settings","disqus_id": "d2","anchor":"#ddl","url": "data-sources-and-drivers-dialog.html"},
"reference.tools.datasource.properties#driver": {"parentId": "reference.tools.datasource.properties","level": 0,"id": "reference.tools.datasource.properties#driver","title": "Driver settings","disqus_id": "d2","anchor":"#driver","url": "data-sources-and-drivers-dialog.html"},
"reference.tools.datasource.properties#driver_settings_tab": {"parentId": "reference.tools.datasource.properties","level": 1,"id": "reference.tools.datasource.properties#driver_settings_tab","title": "Settings tab","disqus_id": "d2","anchor":"#driver_settings_tab","url": "data-sources-and-drivers-dialog.html"},
"reference.tools.datasource.properties#driver_advanced_tab": {"parentId": "reference.tools.datasource.properties","level": 1,"id": "reference.tools.datasource.properties#driver_advanced_tab","title": "Advanced tab","disqus_id": "d2","anchor":"#driver_advanced_tab","url": "data-sources-and-drivers-dialog.html"},
"reference.tools.datasource.properties#problems": {"parentId": "reference.tools.datasource.properties","level": 0,"id": "reference.tools.datasource.properties#problems","title": "Problems","disqus_id": "d2","anchor":"#problems","url": "data-sources-and-drivers-dialog.html"},
"reference.dialogs.rundebug.cucumber.js#ws_cucumber_rc_before_you_start": {"parentId": "reference.dialogs.rundebug.cucumber.js","level": 0,"id": "reference.dialogs.rundebug.cucumber.js#ws_cucumber_rc_before_you_start","title": "Before you start","disqus_id": "d2","anchor":"#ws_cucumber_rc_before_you_start","url": "run-debug-configuration-cucumberjs.html"},
"reference.dialogs.rundebug.cucumber.js#ws_cucumber_rc_specific_config_settings": {"parentId": "reference.dialogs.rundebug.cucumber.js","level": 0,"id": "reference.dialogs.rundebug.cucumber.js#ws_cucumber_rc_specific_config_settings","title": "Cucumber.js-specific configuration settings","disqus_id": "d2","anchor":"#ws_cucumber_rc_specific_config_settings","url": "run-debug-configuration-cucumberjs.html"},
"reference.dialogs.rundebug.cucumber.js#common": {"parentId": "reference.dialogs.rundebug.cucumber.js","level": 0,"id": "reference.dialogs.rundebug.cucumber.js#common","title": "Common options","disqus_id": "d2","anchor":"#common","url": "run-debug-configuration-cucumberjs.html"},
"reference.dialogs.rundebug.cucumber.js#toolbar": {"parentId": "reference.dialogs.rundebug.cucumber.js","level": 0,"id": "reference.dialogs.rundebug.cucumber.js#toolbar","title": "Toolbar","disqus_id": "d2","anchor":"#toolbar","url": "run-debug-configuration-cucumberjs.html"},
"reference.dialogs.rundebug.cucumber.js#defaults": {"parentId": "reference.dialogs.rundebug.cucumber.js","level": 0,"id": "reference.dialogs.rundebug.cucumber.js#defaults","title": "Templates","disqus_id": "d2","anchor":"#defaults","url": "run-debug-configuration-cucumberjs.html"},
"reference.dialogs.rundebug.cucumber.js#before-launch-options": {"parentId": "reference.dialogs.rundebug.cucumber.js","level": 0,"id": "reference.dialogs.rundebug.cucumber.js#before-launch-options","title": "Before Launch options","disqus_id": "d2","anchor":"#before-launch-options","url": "run-debug-configuration-cucumberjs.html"},
"reference.dialogs.rundebug.docker-deploy#docker_image_run_config": {"parentId": "reference.dialogs.rundebug.docker-deploy","level": 0,"id": "reference.dialogs.rundebug.docker-deploy#docker_image_run_config","title": "Docker Image run configuration settings","disqus_id": "d2","anchor":"#docker_image_run_config","url": "run-debug-configuration-docker.html"},
"reference.dialogs.rundebug.docker-deploy#docker_compose_run_config": {"parentId": "reference.dialogs.rundebug.docker-deploy","level": 0,"id": "reference.dialogs.rundebug.docker-deploy#docker_compose_run_config","title": "Docker-compose run configuration settings","disqus_id": "d2","anchor":"#docker_compose_run_config","url": "run-debug-configuration-docker.html"},
"reference.dialogs.rundebug.docker-deploy#dockerfile_run_config": {"parentId": "reference.dialogs.rundebug.docker-deploy","level": 0,"id": "reference.dialogs.rundebug.docker-deploy#dockerfile_run_config","title": "Dockerfile run configuration settings","disqus_id": "d2","anchor":"#dockerfile_run_config","url": "run-debug-configuration-docker.html"},
"reference.dialogs.rundebug.docker-deploy#common": {"parentId": "reference.dialogs.rundebug.docker-deploy","level": 0,"id": "reference.dialogs.rundebug.docker-deploy#common","title": "Common options","disqus_id": "d2","anchor":"#common","url": "run-debug-configuration-docker.html"},
"reference.dialogs.rundebug.docker-deploy#toolbar": {"parentId": "reference.dialogs.rundebug.docker-deploy","level": 0,"id": "reference.dialogs.rundebug.docker-deploy#toolbar","title": "Toolbar","disqus_id": "d2","anchor":"#toolbar","url": "run-debug-configuration-docker.html"},
"reference.dialogs.rundebug.docker-deploy#defaults": {"parentId": "reference.dialogs.rundebug.docker-deploy","level": 0,"id": "reference.dialogs.rundebug.docker-deploy#defaults","title": "Templates","disqus_id": "d2","anchor":"#defaults","url": "run-debug-configuration-docker.html"},
"reference.dialogs.rundebug.docker-deploy#before-launch-options": {"parentId": "reference.dialogs.rundebug.docker-deploy","level": 0,"id": "reference.dialogs.rundebug.docker-deploy#before-launch-options","title": "Before Launch options","disqus_id": "d2","anchor":"#before-launch-options","url": "run-debug-configuration-docker.html"},
"reference.dialogs.rundebug.FirefoxRemoteDebugType#245b6267": {"parentId": "reference.dialogs.rundebug.FirefoxRemoteDebugType","level": 0,"id": "reference.dialogs.rundebug.FirefoxRemoteDebugType#245b6267","title": "Firefox Remote-specific configuration settings","disqus_id": "d2","anchor":"#245b6267","url": "run-debug-configuration-firefox-remote.html"},
"reference.dialogs.rundebug.FirefoxRemoteDebugType#common": {"parentId": "reference.dialogs.rundebug.FirefoxRemoteDebugType","level": 0,"id": "reference.dialogs.rundebug.FirefoxRemoteDebugType#common","title": "Common options","disqus_id": "d2","anchor":"#common","url": "run-debug-configuration-firefox-remote.html"},
"reference.dialogs.rundebug.FirefoxRemoteDebugType#toolbar": {"parentId": "reference.dialogs.rundebug.FirefoxRemoteDebugType","level": 0,"id": "reference.dialogs.rundebug.FirefoxRemoteDebugType#toolbar","title": "Toolbar","disqus_id": "d2","anchor":"#toolbar","url": "run-debug-configuration-firefox-remote.html"},
"reference.dialogs.rundebug.FirefoxRemoteDebugType#defaults": {"parentId": "reference.dialogs.rundebug.FirefoxRemoteDebugType","level": 0,"id": "reference.dialogs.rundebug.FirefoxRemoteDebugType#defaults","title": "Templates","disqus_id": "d2","anchor":"#defaults","url": "run-debug-configuration-firefox-remote.html"},
"reference.dialogs.rundebug.FirefoxRemoteDebugType#before-launch-options": {"parentId": "reference.dialogs.rundebug.FirefoxRemoteDebugType","level": 0,"id": "reference.dialogs.rundebug.FirefoxRemoteDebugType#before-launch-options","title": "Before Launch options","disqus_id": "d2","anchor":"#before-launch-options","url": "run-debug-configuration-firefox-remote.html"},
"reference.dialogs.rundebug.js.build_tools.grunt#ws_grunt_rc_before_you_start": {"parentId": "reference.dialogs.rundebug.js.build_tools.grunt","level": 0,"id": "reference.dialogs.rundebug.js.build_tools.grunt#ws_grunt_rc_before_you_start","title": "Before you start","disqus_id": "d2","anchor":"#ws_grunt_rc_before_you_start","url": "run-debug-configuration-grunt.html"},
"reference.dialogs.rundebug.js.build_tools.grunt#0a8a4a74": {"parentId": "reference.dialogs.rundebug.js.build_tools.grunt","level": 0,"id": "reference.dialogs.rundebug.js.build_tools.grunt#0a8a4a74","title": "Grunt-specific configuration settings","disqus_id": "d2","anchor":"#0a8a4a74","url": "run-debug-configuration-grunt.html"},
"reference.dialogs.rundebug.js.build_tools.grunt#common": {"parentId": "reference.dialogs.rundebug.js.build_tools.grunt","level": 0,"id": "reference.dialogs.rundebug.js.build_tools.grunt#common","title": "Common options","disqus_id": "d2","anchor":"#common","url": "run-debug-configuration-grunt.html"},
"reference.dialogs.rundebug.js.build_tools.grunt#toolbar": {"parentId": "reference.dialogs.rundebug.js.build_tools.grunt","level": 0,"id": "reference.dialogs.rundebug.js.build_tools.grunt#toolbar","title": "Toolbar","disqus_id": "d2","anchor":"#toolbar","url": "run-debug-configuration-grunt.html"},
"reference.dialogs.rundebug.js.build_tools.grunt#defaults": {"parentId": "reference.dialogs.rundebug.js.build_tools.grunt","level": 0,"id": "reference.dialogs.rundebug.js.build_tools.grunt#defaults","title": "Templates","disqus_id": "d2","anchor":"#defaults","url": "run-debug-configuration-grunt.html"},
"reference.dialogs.rundebug.js.build_tools.grunt#before-launch-options": {"parentId": "reference.dialogs.rundebug.js.build_tools.grunt","level": 0,"id": "reference.dialogs.rundebug.js.build_tools.grunt#before-launch-options","title": "Before Launch options","disqus_id": "d2","anchor":"#before-launch-options","url": "run-debug-configuration-grunt.html"},
"reference.dialogs.rundebug.js.build_tools.gulp#ws_gulp_rc_before_you_start": {"parentId": "reference.dialogs.rundebug.js.build_tools.gulp","level": 0,"id": "reference.dialogs.rundebug.js.build_tools.gulp#ws_gulp_rc_before_you_start","title": "Before you start","disqus_id": "d2","anchor":"#ws_gulp_rc_before_you_start","url": "run-debug-configuration-gulp-js.html"},
"reference.dialogs.rundebug.js.build_tools.gulp#2b43fb67": {"parentId": "reference.dialogs.rundebug.js.build_tools.gulp","level": 0,"id": "reference.dialogs.rundebug.js.build_tools.gulp#2b43fb67","title": "Gulp.js-specific configuration settings","disqus_id": "d2","anchor":"#2b43fb67","url": "run-debug-configuration-gulp-js.html"},
"reference.dialogs.rundebug.js.build_tools.gulp#common": {"parentId": "reference.dialogs.rundebug.js.build_tools.gulp","level": 0,"id": "reference.dialogs.rundebug.js.build_tools.gulp#common","title": "Common options","disqus_id": "d2","anchor":"#common","url": "run-debug-configuration-gulp-js.html"},
"reference.dialogs.rundebug.js.build_tools.gulp#toolbar": {"parentId": "reference.dialogs.rundebug.js.build_tools.gulp","level": 0,"id": "reference.dialogs.rundebug.js.build_tools.gulp#toolbar","title": "Toolbar","disqus_id": "d2","anchor":"#toolbar","url": "run-debug-configuration-gulp-js.html"},
"reference.dialogs.rundebug.js.build_tools.gulp#defaults": {"parentId": "reference.dialogs.rundebug.js.build_tools.gulp","level": 0,"id": "reference.dialogs.rundebug.js.build_tools.gulp#defaults","title": "Templates","disqus_id": "d2","anchor":"#defaults","url": "run-debug-configuration-gulp-js.html"},
"reference.dialogs.rundebug.js.build_tools.gulp#before-launch-options": {"parentId": "reference.dialogs.rundebug.js.build_tools.gulp","level": 0,"id": "reference.dialogs.rundebug.js.build_tools.gulp#before-launch-options","title": "Before Launch options","disqus_id": "d2","anchor":"#before-launch-options","url": "run-debug-configuration-gulp-js.html"},
"reference.dialogs.rundebug.HttpRequestRunConfigurationType#48988dc9": {"parentId": "reference.dialogs.rundebug.HttpRequestRunConfigurationType","level": 0,"id": "reference.dialogs.rundebug.HttpRequestRunConfigurationType#48988dc9","title": "Configuration","disqus_id": "d2","anchor":"#48988dc9","url": "run-debug-configuration-http-request.html"},
"reference.dialogs.rundebug.HttpRequestRunConfigurationType#common": {"parentId": "reference.dialogs.rundebug.HttpRequestRunConfigurationType","level": 0,"id": "reference.dialogs.rundebug.HttpRequestRunConfigurationType#common","title": "Common options","disqus_id": "d2","anchor":"#common","url": "run-debug-configuration-http-request.html"},
"reference.dialogs.rundebug.HttpRequestRunConfigurationType#toolbar": {"parentId": "reference.dialogs.rundebug.HttpRequestRunConfigurationType","level": 0,"id": "reference.dialogs.rundebug.HttpRequestRunConfigurationType#toolbar","title": "Toolbar","disqus_id": "d2","anchor":"#toolbar","url": "run-debug-configuration-http-request.html"},
"reference.dialogs.rundebug.HttpRequestRunConfigurationType#defaults": {"parentId": "reference.dialogs.rundebug.HttpRequestRunConfigurationType","level": 0,"id": "reference.dialogs.rundebug.HttpRequestRunConfigurationType#defaults","title": "Templates","disqus_id": "d2","anchor":"#defaults","url": "run-debug-configuration-http-request.html"},
"reference.dialogs.rundebug.HttpRequestRunConfigurationType#before-launch-options": {"parentId": "reference.dialogs.rundebug.HttpRequestRunConfigurationType","level": 0,"id": "reference.dialogs.rundebug.HttpRequestRunConfigurationType#before-launch-options","title": "Before Launch options","disqus_id": "d2","anchor":"#before-launch-options","url": "run-debug-configuration-http-request.html"},
"reference.dialogs.rundebug.JavascriptDebugType#eb4e7d04": {"parentId": "reference.dialogs.rundebug.JavascriptDebugType","level": 0,"id": "reference.dialogs.rundebug.JavascriptDebugType#eb4e7d04","title": "JavaScript Debug-specific configuration settings","disqus_id": "d2","anchor":"#eb4e7d04","url": "run-debug-configuration-javascript-debug.html"},
"reference.dialogs.rundebug.JavascriptDebugType#common": {"parentId": "reference.dialogs.rundebug.JavascriptDebugType","level": 0,"id": "reference.dialogs.rundebug.JavascriptDebugType#common","title": "Common options","disqus_id": "d2","anchor":"#common","url": "run-debug-configuration-javascript-debug.html"},
"reference.dialogs.rundebug.JavascriptDebugType#toolbar": {"parentId": "reference.dialogs.rundebug.JavascriptDebugType","level": 0,"id": "reference.dialogs.rundebug.JavascriptDebugType#toolbar","title": "Toolbar","disqus_id": "d2","anchor":"#toolbar","url": "run-debug-configuration-javascript-debug.html"},
"reference.dialogs.rundebug.JavascriptDebugType#defaults": {"parentId": "reference.dialogs.rundebug.JavascriptDebugType","level": 0,"id": "reference.dialogs.rundebug.JavascriptDebugType#defaults","title": "Templates","disqus_id": "d2","anchor":"#defaults","url": "run-debug-configuration-javascript-debug.html"},
"reference.dialogs.rundebug.JavascriptDebugType#before-launch-options": {"parentId": "reference.dialogs.rundebug.JavascriptDebugType","level": 0,"id": "reference.dialogs.rundebug.JavascriptDebugType#before-launch-options","title": "Before Launch options","disqus_id": "d2","anchor":"#before-launch-options","url": "run-debug-configuration-javascript-debug.html"},
"reference.dialogs.rundebug.JavaScriptTestRunnerJest#9383186c": {"parentId": "reference.dialogs.rundebug.JavaScriptTestRunnerJest","level": 0,"id": "reference.dialogs.rundebug.JavaScriptTestRunnerJest#9383186c","title": "Before you start","disqus_id": "d2","anchor":"#9383186c","url": "run-debug-configuration-jest.html"},
"reference.dialogs.rundebug.JavaScriptTestRunnerJest#59af0d3e": {"parentId": "reference.dialogs.rundebug.JavaScriptTestRunnerJest","level": 0,"id": "reference.dialogs.rundebug.JavaScriptTestRunnerJest#59af0d3e","title": "Jest-specific configuration settings","disqus_id": "d2","anchor":"#59af0d3e","url": "run-debug-configuration-jest.html"},
"reference.dialogs.rundebug.JavaScriptTestRunnerJest#common": {"parentId": "reference.dialogs.rundebug.JavaScriptTestRunnerJest","level": 0,"id": "reference.dialogs.rundebug.JavaScriptTestRunnerJest#common","title": "Common options","disqus_id": "d2","anchor":"#common","url": "run-debug-configuration-jest.html"},
"reference.dialogs.rundebug.JavaScriptTestRunnerJest#toolbar": {"parentId": "reference.dialogs.rundebug.JavaScriptTestRunnerJest","level": 0,"id": "reference.dialogs.rundebug.JavaScriptTestRunnerJest#toolbar","title": "Toolbar","disqus_id": "d2","anchor":"#toolbar","url": "run-debug-configuration-jest.html"},
"reference.dialogs.rundebug.JavaScriptTestRunnerJest#defaults": {"parentId": "reference.dialogs.rundebug.JavaScriptTestRunnerJest","level": 0,"id": "reference.dialogs.rundebug.JavaScriptTestRunnerJest#defaults","title": "Templates","disqus_id": "d2","anchor":"#defaults","url": "run-debug-configuration-jest.html"},
"reference.dialogs.rundebug.JavaScriptTestRunnerJest#before-launch-options": {"parentId": "reference.dialogs.rundebug.JavaScriptTestRunnerJest","level": 0,"id": "reference.dialogs.rundebug.JavaScriptTestRunnerJest#before-launch-options","title": "Before Launch options","disqus_id": "d2","anchor":"#before-launch-options","url": "run-debug-configuration-jest.html"},
"reference.dialogs.rundebug.JsTestDriver-test-runner#8baa15e2": {"parentId": "reference.dialogs.rundebug.JsTestDriver-test-runner","level": 0,"id": "reference.dialogs.rundebug.JsTestDriver-test-runner#8baa15e2","title": "Before you start","disqus_id": "d2","anchor":"#8baa15e2","url": "run-debug-configuration-jstestdriver.html"},
"reference.dialogs.rundebug.JsTestDriver-test-runner#a4a83122": {"parentId": "reference.dialogs.rundebug.JsTestDriver-test-runner","level": 0,"id": "reference.dialogs.rundebug.JsTestDriver-test-runner#a4a83122","title": "Configuration tab","disqus_id": "d2","anchor":"#a4a83122","url": "run-debug-configuration-jstestdriver.html"},
"reference.dialogs.rundebug.JsTestDriver-test-runner#95e7b9c6": {"parentId": "reference.dialogs.rundebug.JsTestDriver-test-runner","level": 0,"id": "reference.dialogs.rundebug.JsTestDriver-test-runner#95e7b9c6","title": "Debug tab","disqus_id": "d2","anchor":"#95e7b9c6","url": "run-debug-configuration-jstestdriver.html"},
"reference.dialogs.rundebug.JsTestDriver-test-runner#9018a54a": {"parentId": "reference.dialogs.rundebug.JsTestDriver-test-runner","level": 0,"id": "reference.dialogs.rundebug.JsTestDriver-test-runner#9018a54a","title": "Coverage tab","disqus_id": "d2","anchor":"#9018a54a","url": "run-debug-configuration-jstestdriver.html"},
"reference.dialogs.rundebug.JsTestDriver-test-runner#common": {"parentId": "reference.dialogs.rundebug.JsTestDriver-test-runner","level": 0,"id": "reference.dialogs.rundebug.JsTestDriver-test-runner#common","title": "Common options","disqus_id": "d2","anchor":"#common","url": "run-debug-configuration-jstestdriver.html"},
"reference.dialogs.rundebug.JsTestDriver-test-runner#toolbar": {"parentId": "reference.dialogs.rundebug.JsTestDriver-test-runner","level": 0,"id": "reference.dialogs.rundebug.JsTestDriver-test-runner#toolbar","title": "Toolbar","disqus_id": "d2","anchor":"#toolbar","url": "run-debug-configuration-jstestdriver.html"},
"reference.dialogs.rundebug.JsTestDriver-test-runner#defaults": {"parentId": "reference.dialogs.rundebug.JsTestDriver-test-runner","level": 0,"id": "reference.dialogs.rundebug.JsTestDriver-test-runner#defaults","title": "Templates","disqus_id": "d2","anchor":"#defaults","url": "run-debug-configuration-jstestdriver.html"},
"reference.dialogs.rundebug.JsTestDriver-test-runner#before-launch-options": {"parentId": "reference.dialogs.rundebug.JsTestDriver-test-runner","level": 0,"id": "reference.dialogs.rundebug.JsTestDriver-test-runner#before-launch-options","title": "Before Launch options","disqus_id": "d2","anchor":"#before-launch-options","url": "run-debug-configuration-jstestdriver.html"},
"reference.dialogs.rundebug.JavaScriptTestRunnerKarma#44bcaaea": {"parentId": "reference.dialogs.rundebug.JavaScriptTestRunnerKarma","level": 0,"id": "reference.dialogs.rundebug.JavaScriptTestRunnerKarma#44bcaaea","title": "Before you start","disqus_id": "d2","anchor":"#44bcaaea","url": "run-debug-configuration-karma.html"},
"reference.dialogs.rundebug.JavaScriptTestRunnerKarma#85a9b0dc": {"parentId": "reference.dialogs.rundebug.JavaScriptTestRunnerKarma","level": 0,"id": "reference.dialogs.rundebug.JavaScriptTestRunnerKarma#85a9b0dc","title": "Karma-specific configuration settings","disqus_id": "d2","anchor":"#85a9b0dc","url": "run-debug-configuration-karma.html"},
"reference.dialogs.rundebug.JavaScriptTestRunnerKarma#common": {"parentId": "reference.dialogs.rundebug.JavaScriptTestRunnerKarma","level": 0,"id": "reference.dialogs.rundebug.JavaScriptTestRunnerKarma#common","title": "Common options","disqus_id": "d2","anchor":"#common","url": "run-debug-configuration-karma.html"},
"reference.dialogs.rundebug.JavaScriptTestRunnerKarma#toolbar": {"parentId": "reference.dialogs.rundebug.JavaScriptTestRunnerKarma","level": 0,"id": "reference.dialogs.rundebug.JavaScriptTestRunnerKarma#toolbar","title": "Toolbar","disqus_id": "d2","anchor":"#toolbar","url": "run-debug-configuration-karma.html"},
"reference.dialogs.rundebug.JavaScriptTestRunnerKarma#defaults": {"parentId": "reference.dialogs.rundebug.JavaScriptTestRunnerKarma","level": 0,"id": "reference.dialogs.rundebug.JavaScriptTestRunnerKarma#defaults","title": "Templates","disqus_id": "d2","anchor":"#defaults","url": "run-debug-configuration-karma.html"},
"reference.dialogs.rundebug.JavaScriptTestRunnerKarma#before-launch-options": {"parentId": "reference.dialogs.rundebug.JavaScriptTestRunnerKarma","level": 0,"id": "reference.dialogs.rundebug.JavaScriptTestRunnerKarma#before-launch-options","title": "Before Launch options","disqus_id": "d2","anchor":"#before-launch-options","url": "run-debug-configuration-karma.html"},
"reference.dialogs.rundebug.mocha-javascript-test-runner#48c7ca6f": {"parentId": "reference.dialogs.rundebug.mocha-javascript-test-runner","level": 0,"id": "reference.dialogs.rundebug.mocha-javascript-test-runner#48c7ca6f","title": "Before you start","disqus_id": "d2","anchor":"#48c7ca6f","url": "run-debug-configuration-mocha.html"},
"reference.dialogs.rundebug.mocha-javascript-test-runner#a6ddda0f": {"parentId": "reference.dialogs.rundebug.mocha-javascript-test-runner","level": 0,"id": "reference.dialogs.rundebug.mocha-javascript-test-runner#a6ddda0f","title": "Mocha-specific configuration settings","disqus_id": "d2","anchor":"#a6ddda0f","url": "run-debug-configuration-mocha.html"},
"reference.dialogs.rundebug.mocha-javascript-test-runner#common": {"parentId": "reference.dialogs.rundebug.mocha-javascript-test-runner","level": 0,"id": "reference.dialogs.rundebug.mocha-javascript-test-runner#common","title": "Common options","disqus_id": "d2","anchor":"#common","url": "run-debug-configuration-mocha.html"},
"reference.dialogs.rundebug.mocha-javascript-test-runner#toolbar": {"parentId": "reference.dialogs.rundebug.mocha-javascript-test-runner","level": 0,"id": "reference.dialogs.rundebug.mocha-javascript-test-runner#toolbar","title": "Toolbar","disqus_id": "d2","anchor":"#toolbar","url": "run-debug-configuration-mocha.html"},
"reference.dialogs.rundebug.mocha-javascript-test-runner#defaults": {"parentId": "reference.dialogs.rundebug.mocha-javascript-test-runner","level": 0,"id": "reference.dialogs.rundebug.mocha-javascript-test-runner#defaults","title": "Templates","disqus_id": "d2","anchor":"#defaults","url": "run-debug-configuration-mocha.html"},
"reference.dialogs.rundebug.mocha-javascript-test-runner#before-launch-options": {"parentId": "reference.dialogs.rundebug.mocha-javascript-test-runner","level": 0,"id": "reference.dialogs.rundebug.mocha-javascript-test-runner#before-launch-options","title": "Before Launch options","disqus_id": "d2","anchor":"#before-launch-options","url": "run-debug-configuration-mocha.html"},
"reference.dialogs.rundebug.meteor-app-runner#34b19465": {"parentId": "reference.dialogs.rundebug.meteor-app-runner","level": 0,"id": "reference.dialogs.rundebug.meteor-app-runner#34b19465","title": "Before you start","disqus_id": "d2","anchor":"#34b19465","url": "run-debug-configuration-meteor.html"},
"reference.dialogs.rundebug.meteor-app-runner#d9deb90d": {"parentId": "reference.dialogs.rundebug.meteor-app-runner","level": 0,"id": "reference.dialogs.rundebug.meteor-app-runner#d9deb90d","title": "Configuration tab","disqus_id": "d2","anchor":"#d9deb90d","url": "run-debug-configuration-meteor.html"},
"reference.dialogs.rundebug.meteor-app-runner#browser-live-edit-tab": {"parentId": "reference.dialogs.rundebug.meteor-app-runner","level": 0,"id": "reference.dialogs.rundebug.meteor-app-runner#browser-live-edit-tab","title": "Browser / Live Edit tab","disqus_id": "d2","anchor":"#browser-live-edit-tab","url": "run-debug-configuration-meteor.html"},
"reference.dialogs.rundebug.meteor-app-runner#common": {"parentId": "reference.dialogs.rundebug.meteor-app-runner","level": 0,"id": "reference.dialogs.rundebug.meteor-app-runner#common","title": "Common options","disqus_id": "d2","anchor":"#common","url": "run-debug-configuration-meteor.html"},
"reference.dialogs.rundebug.meteor-app-runner#toolbar": {"parentId": "reference.dialogs.rundebug.meteor-app-runner","level": 0,"id": "reference.dialogs.rundebug.meteor-app-runner#toolbar","title": "Toolbar","disqus_id": "d2","anchor":"#toolbar","url": "run-debug-configuration-meteor.html"},
"reference.dialogs.rundebug.meteor-app-runner#defaults": {"parentId": "reference.dialogs.rundebug.meteor-app-runner","level": 0,"id": "reference.dialogs.rundebug.meteor-app-runner#defaults","title": "Templates","disqus_id": "d2","anchor":"#defaults","url": "run-debug-configuration-meteor.html"},
"reference.dialogs.rundebug.meteor-app-runner#before-launch-options": {"parentId": "reference.dialogs.rundebug.meteor-app-runner","level": 0,"id": "reference.dialogs.rundebug.meteor-app-runner#before-launch-options","title": "Before Launch options","disqus_id": "d2","anchor":"#before-launch-options","url": "run-debug-configuration-meteor.html"},
"reference.dialogs.rundebug.NodeJSConfigurationType#ws_node_access_to_rc": {"parentId": "reference.dialogs.rundebug.NodeJSConfigurationType","level": 0,"id": "reference.dialogs.rundebug.NodeJSConfigurationType#ws_node_access_to_rc","title": "Before you start","disqus_id": "d2","anchor":"#ws_node_access_to_rc","url": "run-debug-configuration-node-js.html"},
"reference.dialogs.rundebug.NodeJSConfigurationType#s_run_config_node_configuration_tab": {"parentId": "reference.dialogs.rundebug.NodeJSConfigurationType","level": 0,"id": "reference.dialogs.rundebug.NodeJSConfigurationType#s_run_config_node_configuration_tab","title": "Configuration tab","disqus_id": "d2","anchor":"#s_run_config_node_configuration_tab","url": "run-debug-configuration-node-js.html"},
"reference.dialogs.rundebug.NodeJSConfigurationType#browser-live-edit-tab": {"parentId": "reference.dialogs.rundebug.NodeJSConfigurationType","level": 0,"id": "reference.dialogs.rundebug.NodeJSConfigurationType#browser-live-edit-tab","title": "Browser / Live Edit tab","disqus_id": "d2","anchor":"#browser-live-edit-tab","url": "run-debug-configuration-node-js.html"},
"reference.dialogs.rundebug.NodeJSConfigurationType#ws_run_config_node_v8_profiling_tab": {"parentId": "reference.dialogs.rundebug.NodeJSConfigurationType","level": 0,"id": "reference.dialogs.rundebug.NodeJSConfigurationType#ws_run_config_node_v8_profiling_tab","title": "V8 Profiling tab","disqus_id": "d2","anchor":"#ws_run_config_node_v8_profiling_tab","url": "run-debug-configuration-node-js.html"},
"reference.dialogs.rundebug.NodeJSConfigurationType#ws_run_config_node_logs_tab": {"parentId": "reference.dialogs.rundebug.NodeJSConfigurationType","level": 0,"id": "reference.dialogs.rundebug.NodeJSConfigurationType#ws_run_config_node_logs_tab","title": "Logs tab","disqus_id": "d2","anchor":"#ws_run_config_node_logs_tab","url": "run-debug-configuration-node-js.html"},
"reference.dialogs.rundebug.NodeJSConfigurationType#common": {"parentId": "reference.dialogs.rundebug.NodeJSConfigurationType","level": 0,"id": "reference.dialogs.rundebug.NodeJSConfigurationType#common","title": "Common options","disqus_id": "d2","anchor":"#common","url": "run-debug-configuration-node-js.html"},
"reference.dialogs.rundebug.NodeJSConfigurationType#toolbar": {"parentId": "reference.dialogs.rundebug.NodeJSConfigurationType","level": 0,"id": "reference.dialogs.rundebug.NodeJSConfigurationType#toolbar","title": "Toolbar","disqus_id": "d2","anchor":"#toolbar","url": "run-debug-configuration-node-js.html"},
"reference.dialogs.rundebug.NodeJSConfigurationType#defaults": {"parentId": "reference.dialogs.rundebug.NodeJSConfigurationType","level": 0,"id": "reference.dialogs.rundebug.NodeJSConfigurationType#defaults","title": "Templates","disqus_id": "d2","anchor":"#defaults","url": "run-debug-configuration-node-js.html"},
"reference.dialogs.rundebug.NodeJSConfigurationType#before-launch-options": {"parentId": "reference.dialogs.rundebug.NodeJSConfigurationType","level": 0,"id": "reference.dialogs.rundebug.NodeJSConfigurationType#before-launch-options","title": "Before Launch options","disqus_id": "d2","anchor":"#before-launch-options","url": "run-debug-configuration-node-js.html"},
"reference.dialogs.rundebug.ChromiumRemoteDebugType#ws_node_access_to_rc": {"parentId": "reference.dialogs.rundebug.ChromiumRemoteDebugType","level": 0,"id": "reference.dialogs.rundebug.ChromiumRemoteDebugType#ws_node_access_to_rc","title": "Before you start","disqus_id": "d2","anchor":"#ws_node_access_to_rc","url": "run-debug-configuration-node-js-remote-debug.html"},
"reference.dialogs.rundebug.ChromiumRemoteDebugType#ws_node_specific_attach_to_chrome_settings": {"parentId": "reference.dialogs.rundebug.ChromiumRemoteDebugType","level": 0,"id": "reference.dialogs.rundebug.ChromiumRemoteDebugType#ws_node_specific_attach_to_chrome_settings","title": "Specific Attach to Node.js/Chrome configuration settings","disqus_id": "d2","anchor":"#ws_node_specific_attach_to_chrome_settings","url": "run-debug-configuration-node-js-remote-debug.html"},
"reference.dialogs.rundebug.ChromiumRemoteDebugType#common": {"parentId": "reference.dialogs.rundebug.ChromiumRemoteDebugType","level": 0,"id": "reference.dialogs.rundebug.ChromiumRemoteDebugType#common","title": "Common options","disqus_id": "d2","anchor":"#common","url": "run-debug-configuration-node-js-remote-debug.html"},
"reference.dialogs.rundebug.ChromiumRemoteDebugType#toolbar": {"parentId": "reference.dialogs.rundebug.ChromiumRemoteDebugType","level": 0,"id": "reference.dialogs.rundebug.ChromiumRemoteDebugType#toolbar","title": "Toolbar","disqus_id": "d2","anchor":"#toolbar","url": "run-debug-configuration-node-js-remote-debug.html"},
"reference.dialogs.rundebug.ChromiumRemoteDebugType#defaults": {"parentId": "reference.dialogs.rundebug.ChromiumRemoteDebugType","level": 0,"id": "reference.dialogs.rundebug.ChromiumRemoteDebugType#defaults","title": "Templates","disqus_id": "d2","anchor":"#defaults","url": "run-debug-configuration-node-js-remote-debug.html"},
"reference.dialogs.rundebug.ChromiumRemoteDebugType#before-launch-options": {"parentId": "reference.dialogs.rundebug.ChromiumRemoteDebugType","level": 0,"id": "reference.dialogs.rundebug.ChromiumRemoteDebugType#before-launch-options","title": "Before Launch options","disqus_id": "d2","anchor":"#before-launch-options","url": "run-debug-configuration-node-js-remote-debug.html"},
"reference.dialogs.rundebug.NodeunitConfigurationType#ws_node_access_to_rc": {"parentId": "reference.dialogs.rundebug.NodeunitConfigurationType","level": 0,"id": "reference.dialogs.rundebug.NodeunitConfigurationType#ws_node_access_to_rc","title": "Before you start","disqus_id": "d2","anchor":"#ws_node_access_to_rc","url": "run-debug-configuration-nodeunit.html"},
"reference.dialogs.rundebug.NodeunitConfigurationType#f2c317d6": {"parentId": "reference.dialogs.rundebug.NodeunitConfigurationType","level": 0,"id": "reference.dialogs.rundebug.NodeunitConfigurationType#f2c317d6","title": "NodeUnit-specific configuration settings","disqus_id": "d2","anchor":"#f2c317d6","url": "run-debug-configuration-nodeunit.html"},
"reference.dialogs.rundebug.NodeunitConfigurationType#common": {"parentId": "reference.dialogs.rundebug.NodeunitConfigurationType","level": 0,"id": "reference.dialogs.rundebug.NodeunitConfigurationType#common","title": "Common options","disqus_id": "d2","anchor":"#common","url": "run-debug-configuration-nodeunit.html"},
"reference.dialogs.rundebug.NodeunitConfigurationType#toolbar": {"parentId": "reference.dialogs.rundebug.NodeunitConfigurationType","level": 0,"id": "reference.dialogs.rundebug.NodeunitConfigurationType#toolbar","title": "Toolbar","disqus_id": "d2","anchor":"#toolbar","url": "run-debug-configuration-nodeunit.html"},
"reference.dialogs.rundebug.NodeunitConfigurationType#defaults": {"parentId": "reference.dialogs.rundebug.NodeunitConfigurationType","level": 0,"id": "reference.dialogs.rundebug.NodeunitConfigurationType#defaults","title": "Templates","disqus_id": "d2","anchor":"#defaults","url": "run-debug-configuration-nodeunit.html"},
"reference.dialogs.rundebug.NodeunitConfigurationType#before-launch-options": {"parentId": "reference.dialogs.rundebug.NodeunitConfigurationType","level": 0,"id": "reference.dialogs.rundebug.NodeunitConfigurationType#before-launch-options","title": "Before Launch options","disqus_id": "d2","anchor":"#before-launch-options","url": "run-debug-configuration-nodeunit.html"},
"reference.dialogs.rundebug.NodeWebKit#2c8f49ab": {"parentId": "reference.dialogs.rundebug.NodeWebKit","level": 0,"id": "reference.dialogs.rundebug.NodeWebKit#2c8f49ab","title": "Before you start","disqus_id": "d2","anchor":"#2c8f49ab","url": "run-debug-configuration-node-webkit.html"},
"reference.dialogs.rundebug.NodeWebKit#8b6579d5": {"parentId": "reference.dialogs.rundebug.NodeWebKit","level": 0,"id": "reference.dialogs.rundebug.NodeWebKit#8b6579d5","title": "NW.js-specific configuration settings","disqus_id": "d2","anchor":"#8b6579d5","url": "run-debug-configuration-node-webkit.html"},
"reference.dialogs.rundebug.NodeWebKit#common": {"parentId": "reference.dialogs.rundebug.NodeWebKit","level": 0,"id": "reference.dialogs.rundebug.NodeWebKit#common","title": "Common options","disqus_id": "d2","anchor":"#common","url": "run-debug-configuration-node-webkit.html"},
"reference.dialogs.rundebug.NodeWebKit#toolbar": {"parentId": "reference.dialogs.rundebug.NodeWebKit","level": 0,"id": "reference.dialogs.rundebug.NodeWebKit#toolbar","title": "Toolbar","disqus_id": "d2","anchor":"#toolbar","url": "run-debug-configuration-node-webkit.html"},
"reference.dialogs.rundebug.NodeWebKit#defaults": {"parentId": "reference.dialogs.rundebug.NodeWebKit","level": 0,"id": "reference.dialogs.rundebug.NodeWebKit#defaults","title": "Templates","disqus_id": "d2","anchor":"#defaults","url": "run-debug-configuration-node-webkit.html"},
"reference.dialogs.rundebug.NodeWebKit#before-launch-options": {"parentId": "reference.dialogs.rundebug.NodeWebKit","level": 0,"id": "reference.dialogs.rundebug.NodeWebKit#before-launch-options","title": "Before Launch options","disqus_id": "d2","anchor":"#before-launch-options","url": "run-debug-configuration-node-webkit.html"},
"reference.dialogs.rundebug.js.build_tools.npm#ws_npm_run_config_before_you_start": {"parentId": "reference.dialogs.rundebug.js.build_tools.npm","level": 0,"id": "reference.dialogs.rundebug.js.build_tools.npm#ws_npm_run_config_before_you_start","title": "Before you start","disqus_id": "d2","anchor":"#ws_npm_run_config_before_you_start","url": "run-debug-configuration-npm.html"},
"reference.dialogs.rundebug.js.build_tools.npm#a01ec781": {"parentId": "reference.dialogs.rundebug.js.build_tools.npm","level": 0,"id": "reference.dialogs.rundebug.js.build_tools.npm#a01ec781","title": "Configuration tab","disqus_id": "d2","anchor":"#a01ec781","url": "run-debug-configuration-npm.html"},
"reference.dialogs.rundebug.JavaScriptTestRunnerProtractor#056536bc": {"parentId": "reference.dialogs.rundebug.JavaScriptTestRunnerProtractor","level": 0,"id": "reference.dialogs.rundebug.JavaScriptTestRunnerProtractor#056536bc","title": "Before you start","disqus_id": "d2","anchor":"#056536bc","url": "run-debug-configuration-protractor.html"},
"reference.dialogs.rundebug.JavaScriptTestRunnerProtractor#1": {"parentId": "reference.dialogs.rundebug.JavaScriptTestRunnerProtractor","level": 0,"id": "reference.dialogs.rundebug.JavaScriptTestRunnerProtractor#1","title": "Protractor-specific configuration settings","disqus_id": "d2","anchor":"#1","url": "run-debug-configuration-protractor.html"},
"reference.dialogs.rundebug.JavaScriptTestRunnerProtractor#common": {"parentId": "reference.dialogs.rundebug.JavaScriptTestRunnerProtractor","level": 0,"id": "reference.dialogs.rundebug.JavaScriptTestRunnerProtractor#common","title": "Common options","disqus_id": "d2","anchor":"#common","url": "run-debug-configuration-protractor.html"},
"reference.dialogs.rundebug.JavaScriptTestRunnerProtractor#toolbar": {"parentId": "reference.dialogs.rundebug.JavaScriptTestRunnerProtractor","level": 0,"id": "reference.dialogs.rundebug.JavaScriptTestRunnerProtractor#toolbar","title": "Toolbar","disqus_id": "d2","anchor":"#toolbar","url": "run-debug-configuration-protractor.html"},
"reference.dialogs.rundebug.JavaScriptTestRunnerProtractor#defaults": {"parentId": "reference.dialogs.rundebug.JavaScriptTestRunnerProtractor","level": 0,"id": "reference.dialogs.rundebug.JavaScriptTestRunnerProtractor#defaults","title": "Templates","disqus_id": "d2","anchor":"#defaults","url": "run-debug-configuration-protractor.html"},
"reference.dialogs.rundebug.JavaScriptTestRunnerProtractor#before-launch-options": {"parentId": "reference.dialogs.rundebug.JavaScriptTestRunnerProtractor","level": 0,"id": "reference.dialogs.rundebug.JavaScriptTestRunnerProtractor#before-launch-options","title": "Before Launch options","disqus_id": "d2","anchor":"#before-launch-options","url": "run-debug-configuration-protractor.html"},
"reference.dialogs.rundebug.ReactNative#f2c0eefe": {"parentId": "reference.dialogs.rundebug.ReactNative","level": 0,"id": "reference.dialogs.rundebug.ReactNative#f2c0eefe","title": "Before you start","disqus_id": "d2","anchor":"#f2c0eefe","url": "run-debug-configuration-react-native.html"},
"reference.dialogs.rundebug.ReactNative#3d64ffd7": {"parentId": "reference.dialogs.rundebug.ReactNative","level": 0,"id": "reference.dialogs.rundebug.ReactNative#3d64ffd7","title": "React Native-specific configuration settings","disqus_id": "d2","anchor":"#3d64ffd7","url": "run-debug-configuration-react-native.html"},
"reference.dialogs.rundebug.ReactNative#common": {"parentId": "reference.dialogs.rundebug.ReactNative","level": 0,"id": "reference.dialogs.rundebug.ReactNative#common","title": "Common options","disqus_id": "d2","anchor":"#common","url": "run-debug-configuration-react-native.html"},
"reference.dialogs.rundebug.ReactNative#toolbar": {"parentId": "reference.dialogs.rundebug.ReactNative","level": 0,"id": "reference.dialogs.rundebug.ReactNative#toolbar","title": "Toolbar","disqus_id": "d2","anchor":"#toolbar","url": "run-debug-configuration-react-native.html"},
"reference.dialogs.rundebug.ReactNative#defaults": {"parentId": "reference.dialogs.rundebug.ReactNative","level": 0,"id": "reference.dialogs.rundebug.ReactNative#defaults","title": "Templates","disqus_id": "d2","anchor":"#defaults","url": "run-debug-configuration-react-native.html"},
"reference.dialogs.rundebug.ReactNative#before-launch-options": {"parentId": "reference.dialogs.rundebug.ReactNative","level": 0,"id": "reference.dialogs.rundebug.ReactNative#before-launch-options","title": "Before Launch options","disqus_id": "d2","anchor":"#before-launch-options","url": "run-debug-configuration-react-native.html"},
"reference.dialogs.rundebug.JavaScriptTraceType#1bed4e7a": {"parentId": "reference.dialogs.rundebug.JavaScriptTraceType","level": 0,"id": "reference.dialogs.rundebug.JavaScriptTraceType#1bed4e7a","title": "Before you start","disqus_id": "d2","anchor":"#1bed4e7a","url": "run-debug-configuration-spy-js.html"},
"reference.dialogs.rundebug.JavaScriptTraceType#1": {"parentId": "reference.dialogs.rundebug.JavaScriptTraceType","level": 0,"id": "reference.dialogs.rundebug.JavaScriptTraceType#1","title": "Spy-js-specific configuration settings","disqus_id": "d2","anchor":"#1","url": "run-debug-configuration-spy-js.html"},
"reference.dialogs.rundebug.JavaScriptTraceType#common": {"parentId": "reference.dialogs.rundebug.JavaScriptTraceType","level": 0,"id": "reference.dialogs.rundebug.JavaScriptTraceType#common","title": "Common options","disqus_id": "d2","anchor":"#common","url": "run-debug-configuration-spy-js.html"},
"reference.dialogs.rundebug.JavaScriptTraceType#toolbar": {"parentId": "reference.dialogs.rundebug.JavaScriptTraceType","level": 0,"id": "reference.dialogs.rundebug.JavaScriptTraceType#toolbar","title": "Toolbar","disqus_id": "d2","anchor":"#toolbar","url": "run-debug-configuration-spy-js.html"},
"reference.dialogs.rundebug.JavaScriptTraceType#defaults": {"parentId": "reference.dialogs.rundebug.JavaScriptTraceType","level": 0,"id": "reference.dialogs.rundebug.JavaScriptTraceType#defaults","title": "Templates","disqus_id": "d2","anchor":"#defaults","url": "run-debug-configuration-spy-js.html"},
"reference.dialogs.rundebug.JavaScriptTraceType#before-launch-options": {"parentId": "reference.dialogs.rundebug.JavaScriptTraceType","level": 0,"id": "reference.dialogs.rundebug.JavaScriptTraceType#before-launch-options","title": "Before Launch options","disqus_id": "d2","anchor":"#before-launch-options","url": "run-debug-configuration-spy-js.html"},
"reference.dialogs.rundebug.JavaScriptNodeJsTraceType#e2f55591": {"parentId": "reference.dialogs.rundebug.JavaScriptNodeJsTraceType","level": 0,"id": "reference.dialogs.rundebug.JavaScriptNodeJsTraceType#e2f55591","title": "Before you start","disqus_id": "d2","anchor":"#e2f55591","url": "run-debug-configuration-spy-js-for-node-js.html"},
"reference.dialogs.rundebug.JavaScriptNodeJsTraceType#1": {"parentId": "reference.dialogs.rundebug.JavaScriptNodeJsTraceType","level": 0,"id": "reference.dialogs.rundebug.JavaScriptNodeJsTraceType#1","title": "Spy-js for Node.js-specific configuration settings","disqus_id": "d2","anchor":"#1","url": "run-debug-configuration-spy-js-for-node-js.html"},
"reference.dialogs.rundebug.JavaScriptNodeJsTraceType#common": {"parentId": "reference.dialogs.rundebug.JavaScriptNodeJsTraceType","level": 0,"id": "reference.dialogs.rundebug.JavaScriptNodeJsTraceType#common","title": "Common options","disqus_id": "d2","anchor":"#common","url": "run-debug-configuration-spy-js-for-node-js.html"},
"reference.dialogs.rundebug.JavaScriptNodeJsTraceType#toolbar": {"parentId": "reference.dialogs.rundebug.JavaScriptNodeJsTraceType","level": 0,"id": "reference.dialogs.rundebug.JavaScriptNodeJsTraceType#toolbar","title": "Toolbar","disqus_id": "d2","anchor":"#toolbar","url": "run-debug-configuration-spy-js-for-node-js.html"},
"reference.dialogs.rundebug.JavaScriptNodeJsTraceType#defaults": {"parentId": "reference.dialogs.rundebug.JavaScriptNodeJsTraceType","level": 0,"id": "reference.dialogs.rundebug.JavaScriptNodeJsTraceType#defaults","title": "Templates","disqus_id": "d2","anchor":"#defaults","url": "run-debug-configuration-spy-js-for-node-js.html"},
"reference.dialogs.rundebug.JavaScriptNodeJsTraceType#before-launch-options": {"parentId": "reference.dialogs.rundebug.JavaScriptNodeJsTraceType","level": 0,"id": "reference.dialogs.rundebug.JavaScriptNodeJsTraceType#before-launch-options","title": "Before Launch options","disqus_id": "d2","anchor":"#before-launch-options","url": "run-debug-configuration-spy-js-for-node-js.html"},
"reference.dialogs.rundebug.DartCommandLineRunConfigurationType#5b8681b6": {"parentId": "reference.dialogs.rundebug.DartCommandLineRunConfigurationType","level": 0,"id": "reference.dialogs.rundebug.DartCommandLineRunConfigurationType#5b8681b6","title": "Dart Command Line Application-specific configuration settings","disqus_id": "d2","anchor":"#5b8681b6","url": "run-debug-configuration-dart-command-line-application.html"},
"reference.dialogs.rundebug.DartCommandLineRunConfigurationType#common": {"parentId": "reference.dialogs.rundebug.DartCommandLineRunConfigurationType","level": 0,"id": "reference.dialogs.rundebug.DartCommandLineRunConfigurationType#common","title": "Common options","disqus_id": "d2","anchor":"#common","url": "run-debug-configuration-dart-command-line-application.html"},
"reference.dialogs.rundebug.DartCommandLineRunConfigurationType#toolbar": {"parentId": "reference.dialogs.rundebug.DartCommandLineRunConfigurationType","level": 0,"id": "reference.dialogs.rundebug.DartCommandLineRunConfigurationType#toolbar","title": "Toolbar","disqus_id": "d2","anchor":"#toolbar","url": "run-debug-configuration-dart-command-line-application.html"},
"reference.dialogs.rundebug.DartCommandLineRunConfigurationType#defaults": {"parentId": "reference.dialogs.rundebug.DartCommandLineRunConfigurationType","level": 0,"id": "reference.dialogs.rundebug.DartCommandLineRunConfigurationType#defaults","title": "Templates","disqus_id": "d2","anchor":"#defaults","url": "run-debug-configuration-dart-command-line-application.html"},
"reference.dialogs.rundebug.DartCommandLineRunConfigurationType#before-launch-options": {"parentId": "reference.dialogs.rundebug.DartCommandLineRunConfigurationType","level": 0,"id": "reference.dialogs.rundebug.DartCommandLineRunConfigurationType#before-launch-options","title": "Before Launch options","disqus_id": "d2","anchor":"#before-launch-options","url": "run-debug-configuration-dart-command-line-application.html"},
"reference.dialogs.rundebug.DartRemoteDebugConfigurationType#35fbf5dc": {"parentId": "reference.dialogs.rundebug.DartRemoteDebugConfigurationType","level": 0,"id": "reference.dialogs.rundebug.DartRemoteDebugConfigurationType#35fbf5dc","title": "Dart Remote Debug-specific configuration settings","disqus_id": "d2","anchor":"#35fbf5dc","url": "run-debug-configuration-dart-remote-debug.html"},
"reference.dialogs.rundebug.DartRemoteDebugConfigurationType#common": {"parentId": "reference.dialogs.rundebug.DartRemoteDebugConfigurationType","level": 0,"id": "reference.dialogs.rundebug.DartRemoteDebugConfigurationType#common","title": "Common options","disqus_id": "d2","anchor":"#common","url": "run-debug-configuration-dart-remote-debug.html"},
"reference.dialogs.rundebug.DartRemoteDebugConfigurationType#toolbar": {"parentId": "reference.dialogs.rundebug.DartRemoteDebugConfigurationType","level": 0,"id": "reference.dialogs.rundebug.DartRemoteDebugConfigurationType#toolbar","title": "Toolbar","disqus_id": "d2","anchor":"#toolbar","url": "run-debug-configuration-dart-remote-debug.html"},
"reference.dialogs.rundebug.DartRemoteDebugConfigurationType#defaults": {"parentId": "reference.dialogs.rundebug.DartRemoteDebugConfigurationType","level": 0,"id": "reference.dialogs.rundebug.DartRemoteDebugConfigurationType#defaults","title": "Templates","disqus_id": "d2","anchor":"#defaults","url": "run-debug-configuration-dart-remote-debug.html"},
"reference.dialogs.rundebug.DartRemoteDebugConfigurationType#before-launch-options": {"parentId": "reference.dialogs.rundebug.DartRemoteDebugConfigurationType","level": 0,"id": "reference.dialogs.rundebug.DartRemoteDebugConfigurationType#before-launch-options","title": "Before Launch options","disqus_id": "d2","anchor":"#before-launch-options","url": "run-debug-configuration-dart-remote-debug.html"},
"reference.dialogs.rundebug.DartTestRunConfigurationType#e9484444": {"parentId": "reference.dialogs.rundebug.DartTestRunConfigurationType","level": 0,"id": "reference.dialogs.rundebug.DartTestRunConfigurationType#e9484444","title": "Dart Test-specific configuration settings","disqus_id": "d2","anchor":"#e9484444","url": "run-debug-configuration-dartunit.html"},
"reference.dialogs.rundebug.DartTestRunConfigurationType#common": {"parentId": "reference.dialogs.rundebug.DartTestRunConfigurationType","level": 0,"id": "reference.dialogs.rundebug.DartTestRunConfigurationType#common","title": "Common options","disqus_id": "d2","anchor":"#common","url": "run-debug-configuration-dartunit.html"},
"reference.dialogs.rundebug.DartTestRunConfigurationType#toolbar": {"parentId": "reference.dialogs.rundebug.DartTestRunConfigurationType","level": 0,"id": "reference.dialogs.rundebug.DartTestRunConfigurationType#toolbar","title": "Toolbar","disqus_id": "d2","anchor":"#toolbar","url": "run-debug-configuration-dartunit.html"},
"reference.dialogs.rundebug.DartTestRunConfigurationType#defaults": {"parentId": "reference.dialogs.rundebug.DartTestRunConfigurationType","level": 0,"id": "reference.dialogs.rundebug.DartTestRunConfigurationType#defaults","title": "Templates","disqus_id": "d2","anchor":"#defaults","url": "run-debug-configuration-dartunit.html"},
"reference.dialogs.rundebug.DartTestRunConfigurationType#before-launch-options": {"parentId": "reference.dialogs.rundebug.DartTestRunConfigurationType","level": 0,"id": "reference.dialogs.rundebug.DartTestRunConfigurationType#before-launch-options","title": "Before Launch options","disqus_id": "d2","anchor":"#before-launch-options","url": "run-debug-configuration-dartunit.html"},
"reference.dialogs.rundebug.PhoneGap#3431e242": {"parentId": "reference.dialogs.rundebug.PhoneGap","level": 0,"id": "reference.dialogs.rundebug.PhoneGap#3431e242","title": "Before you start","disqus_id": "d2","anchor":"#3431e242","url": "run-debug-configuration-phonegap-cordova.html"},
"reference.dialogs.rundebug.PhoneGap#e43439e0": {"parentId": "reference.dialogs.rundebug.PhoneGap","level": 0,"id": "reference.dialogs.rundebug.PhoneGap#e43439e0","title": "PhoneGap/Cordova/Ionic-specific configuration settings","disqus_id": "d2","anchor":"#e43439e0","url": "run-debug-configuration-phonegap-cordova.html"},
"reference.dialogs.rundebug.PhoneGap#common": {"parentId": "reference.dialogs.rundebug.PhoneGap","level": 0,"id": "reference.dialogs.rundebug.PhoneGap#common","title": "Common options","disqus_id": "d2","anchor":"#common","url": "run-debug-configuration-phonegap-cordova.html"},
"reference.dialogs.rundebug.PhoneGap#toolbar": {"parentId": "reference.dialogs.rundebug.PhoneGap","level": 0,"id": "reference.dialogs.rundebug.PhoneGap#toolbar","title": "Toolbar","disqus_id": "d2","anchor":"#toolbar","url": "run-debug-configuration-phonegap-cordova.html"},
"reference.dialogs.rundebug.PhoneGap#defaults": {"parentId": "reference.dialogs.rundebug.PhoneGap","level": 0,"id": "reference.dialogs.rundebug.PhoneGap#defaults","title": "Templates","disqus_id": "d2","anchor":"#defaults","url": "run-debug-configuration-phonegap-cordova.html"},
"reference.dialogs.rundebug.PhoneGap#before-launch-options": {"parentId": "reference.dialogs.rundebug.PhoneGap","level": 0,"id": "reference.dialogs.rundebug.PhoneGap#before-launch-options","title": "Before Launch options","disqus_id": "d2","anchor":"#before-launch-options","url": "run-debug-configuration-phonegap-cordova.html"},
"topicId971470#settings": {"parentId": "topicId971470","level": 0,"id": "topicId971470#settings","title": "Settings tab","disqus_id": "d2","anchor":"#settings","url": "run-debug-configuration-xslt.html"},
"topicId971470#advanced": {"parentId": "topicId971470","level": 0,"id": "topicId971470#advanced","title": "Advanced tab","disqus_id": "d2","anchor":"#advanced","url": "run-debug-configuration-xslt.html"},
"topicId971470#common": {"parentId": "topicId971470","level": 0,"id": "topicId971470#common","title": "Common options","disqus_id": "d2","anchor":"#common","url": "run-debug-configuration-xslt.html"},
"topicId971470#toolbar": {"parentId": "topicId971470","level": 0,"id": "topicId971470#toolbar","title": "Toolbar","disqus_id": "d2","anchor":"#toolbar","url": "run-debug-configuration-xslt.html"},
"topicId971470#defaults": {"parentId": "topicId971470","level": 0,"id": "topicId971470#defaults","title": "Templates","disqus_id": "d2","anchor":"#defaults","url": "run-debug-configuration-xslt.html"},
"topicId971470#before-launch-options": {"parentId": "topicId971470","level": 0,"id": "topicId971470#before-launch-options","title": "Before Launch options","disqus_id": "d2","anchor":"#before-launch-options","url": "run-debug-configuration-xslt.html"},
"reference.settings.codestyle.php#60827a04": {"parentId": "reference.settings.codestyle.php","level": 0,"id": "reference.settings.codestyle.php#60827a04","title": "PHP-specific formatting settings for Spaces","disqus_id": "d2","anchor":"#60827a04","url": "settings-code-style-php.html"},
"reference.settings.codestyle.php#fa507e09": {"parentId": "reference.settings.codestyle.php","level": 0,"id": "reference.settings.codestyle.php#fa507e09","title": "PHP-specific formatting settings for Wrapping and Braces","disqus_id": "d2","anchor":"#fa507e09","url": "settings-code-style-php.html"},
"reference.settings.codestyle.php#blank_lines": {"parentId": "reference.settings.codestyle.php","level": 0,"id": "reference.settings.codestyle.php#blank_lines","title": "Blank lines","disqus_id": "d2","anchor":"#blank_lines","url": "settings-code-style-php.html"},
"reference.settings.codestyle.php#b9eb61b5": {"parentId": "reference.settings.codestyle.php","level": 0,"id": "reference.settings.codestyle.php#b9eb61b5","title": "PHPDoc","disqus_id": "d2","anchor":"#b9eb61b5","url": "settings-code-style-php.html"},
"reference.settings.codestyle.php#code-conversion-tab": {"parentId": "reference.settings.codestyle.php","level": 0,"id": "reference.settings.codestyle.php#code-conversion-tab","title": "Code Conversion","disqus_id": "d2","anchor":"#code-conversion-tab","url": "settings-code-style-php.html"},
"reference.settings.codestyle.php#code-generation-tab": {"parentId": "reference.settings.codestyle.php","level": 0,"id": "reference.settings.codestyle.php#code-generation-tab","title": "Code Generation","disqus_id": "d2","anchor":"#code-generation-tab","url": "settings-code-style-php.html"},
"reference.settings.codestyle.php#c82082a3": {"parentId": "reference.settings.codestyle.php","level": 0,"id": "reference.settings.codestyle.php#c82082a3","title": "Arrangement","disqus_id": "d2","anchor":"#c82082a3","url": "settings-code-style-php.html"},
"reference.settingsdialog.codestyle.coffeescript#tabs_and_indents": {"parentId": "reference.settingsdialog.codestyle.coffeescript","level": 0,"id": "reference.settingsdialog.codestyle.coffeescript#tabs_and_indents","title": "Tabs and Indents","disqus_id": "d2","anchor":"#tabs_and_indents","url": "code-style-coffeescript.html"},
"reference.settingsdialog.codestyle.coffeescript#ws_coffee_editor_code_style_spaces": {"parentId": "reference.settingsdialog.codestyle.coffeescript","level": 0,"id": "reference.settingsdialog.codestyle.coffeescript#ws_coffee_editor_code_style_spaces","title": "Spaces","disqus_id": "d2","anchor":"#ws_coffee_editor_code_style_spaces","url": "code-style-coffeescript.html"},
"reference.settingsdialog.codestyle.coffeescript#formatting_options": {"parentId": "reference.settingsdialog.codestyle.coffeescript","level": 0,"id": "reference.settingsdialog.codestyle.coffeescript#formatting_options","title": "Wrapping and braces","disqus_id": "d2","anchor":"#formatting_options","url": "code-style-coffeescript.html"},
"reference.settingsdialog.codestyle.coffeescript#ws_coffee_settings_editor_code_style_blank_lines": {"parentId": "reference.settingsdialog.codestyle.coffeescript","level": 0,"id": "reference.settingsdialog.codestyle.coffeescript#ws_coffee_settings_editor_code_style_blank_lines","title": "Blank Lines","disqus_id": "d2","anchor":"#ws_coffee_settings_editor_code_style_blank_lines","url": "code-style-coffeescript.html"},
"reference.settingsdialog.codestyle.coffeescript#ws_coffee_settings_editor_code_style_other": {"parentId": "reference.settingsdialog.codestyle.coffeescript","level": 0,"id": "reference.settingsdialog.codestyle.coffeescript#ws_coffee_settings_editor_code_style_other","title": "Other","disqus_id": "d2","anchor":"#ws_coffee_settings_editor_code_style_other","url": "code-style-coffeescript.html"},
"reference.settingsdialog.codestyle.coffeescript#copyCodeStyle": {"parentId": "reference.settingsdialog.codestyle.coffeescript","level": 0,"id": "reference.settingsdialog.codestyle.coffeescript#copyCodeStyle","title": "Set from","disqus_id": "d2","anchor":"#copyCodeStyle","url": "code-style-coffeescript.html"},
"reference.settingsdialog.IDE.csscodestyle#tabs_and_indents": {"parentId": "reference.settingsdialog.IDE.csscodestyle","level": 0,"id": "reference.settingsdialog.IDE.csscodestyle#tabs_and_indents","title": "Tabs and Indents","disqus_id": "d2","anchor":"#tabs_and_indents","url": "settings-code-style-css.html"},
"reference.settingsdialog.IDE.csscodestyle#ws_js_settings_editor_code_style_blank_lines_tab": {"parentId": "reference.settingsdialog.IDE.csscodestyle","level": 0,"id": "reference.settingsdialog.IDE.csscodestyle#ws_js_settings_editor_code_style_blank_lines_tab","title": "Blank Lines","disqus_id": "d2","anchor":"#ws_js_settings_editor_code_style_blank_lines_tab","url": "settings-code-style-css.html"},
"reference.settingsdialog.IDE.csscodestyle#ws_css_settings_editor_code_style_other": {"parentId": "reference.settingsdialog.IDE.csscodestyle","level": 0,"id": "reference.settingsdialog.IDE.csscodestyle#ws_css_settings_editor_code_style_other","title": "Other","disqus_id": "d2","anchor":"#ws_css_settings_editor_code_style_other","url": "settings-code-style-css.html"},
"reference.settingsdialog.IDE.csscodestyle#ws_css_settings_editor_code_style_arrangement": {"parentId": "reference.settingsdialog.IDE.csscodestyle","level": 0,"id": "reference.settingsdialog.IDE.csscodestyle#ws_css_settings_editor_code_style_arrangement","title": "Arrangement","disqus_id": "d2","anchor":"#ws_css_settings_editor_code_style_arrangement","url": "settings-code-style-css.html"},
"reference.settingsdialog.IDE.csscodestyle#copyCodeStyle": {"parentId": "reference.settingsdialog.IDE.csscodestyle","level": 0,"id": "reference.settingsdialog.IDE.csscodestyle#copyCodeStyle","title": "Set from","disqus_id": "d2","anchor":"#copyCodeStyle","url": "settings-code-style-css.html"},
"reference.settingsdialog.codestyle.less#tabs_and_indents": {"parentId": "reference.settingsdialog.codestyle.less","level": 0,"id": "reference.settingsdialog.codestyle.less#tabs_and_indents","title": "Tabs and Indents","disqus_id": "d2","anchor":"#tabs_and_indents","url": "settings-code-style-less.html"},
"reference.settingsdialog.codestyle.less#ws_js_settings_editor_code_style_blank_lines_tab": {"parentId": "reference.settingsdialog.codestyle.less","level": 0,"id": "reference.settingsdialog.codestyle.less#ws_js_settings_editor_code_style_blank_lines_tab","title": "Blank Lines","disqus_id": "d2","anchor":"#ws_js_settings_editor_code_style_blank_lines_tab","url": "settings-code-style-less.html"},
"reference.settingsdialog.codestyle.less#ws_less_settings_editor_code_style_other": {"parentId": "reference.settingsdialog.codestyle.less","level": 0,"id": "reference.settingsdialog.codestyle.less#ws_less_settings_editor_code_style_other","title": "Other","disqus_id": "d2","anchor":"#ws_less_settings_editor_code_style_other","url": "settings-code-style-less.html"},
"reference.settingsdialog.codestyle.less#copyCodeStyle": {"parentId": "reference.settingsdialog.codestyle.less","level": 0,"id": "reference.settingsdialog.codestyle.less#copyCodeStyle","title": "Set from","disqus_id": "d2","anchor":"#copyCodeStyle","url": "settings-code-style-less.html"},
"reference.settingsdialog.codestyle.sass#tabs_and_indents": {"parentId": "reference.settingsdialog.codestyle.sass","level": 0,"id": "reference.settingsdialog.codestyle.sass#tabs_and_indents","title": "Tabs and Indents","disqus_id": "d2","anchor":"#tabs_and_indents","url": "settings-code-style-sass.html"},
"reference.settingsdialog.codestyle.sass#ws_js_settings_editor_code_style_blank_lines_tab": {"parentId": "reference.settingsdialog.codestyle.sass","level": 0,"id": "reference.settingsdialog.codestyle.sass#ws_js_settings_editor_code_style_blank_lines_tab","title": "Blank Lines","disqus_id": "d2","anchor":"#ws_js_settings_editor_code_style_blank_lines_tab","url": "settings-code-style-sass.html"},
"reference.settingsdialog.codestyle.sass#copyCodeStyle": {"parentId": "reference.settingsdialog.codestyle.sass","level": 0,"id": "reference.settingsdialog.codestyle.sass#copyCodeStyle","title": "Set from","disqus_id": "d2","anchor":"#copyCodeStyle","url": "settings-code-style-sass.html"},
"reference.settingsdialog.codestyle.scss#tabs_and_indents": {"parentId": "reference.settingsdialog.codestyle.scss","level": 0,"id": "reference.settingsdialog.codestyle.scss#tabs_and_indents","title": "Tabs and Indents","disqus_id": "d2","anchor":"#tabs_and_indents","url": "settings-code-style-scss.html"},
"reference.settingsdialog.codestyle.scss#ws_js_settings_editor_code_style_blank_lines_tab": {"parentId": "reference.settingsdialog.codestyle.scss","level": 0,"id": "reference.settingsdialog.codestyle.scss#ws_js_settings_editor_code_style_blank_lines_tab","title": "Blank Lines","disqus_id": "d2","anchor":"#ws_js_settings_editor_code_style_blank_lines_tab","url": "settings-code-style-scss.html"},
"reference.settingsdialog.codestyle.scss#ws_scss_settings_editor_code_style_other": {"parentId": "reference.settingsdialog.codestyle.scss","level": 0,"id": "reference.settingsdialog.codestyle.scss#ws_scss_settings_editor_code_style_other","title": "Other","disqus_id": "d2","anchor":"#ws_scss_settings_editor_code_style_other","url": "settings-code-style-scss.html"},
"reference.settingsdialog.codestyle.scss#copyCodeStyle": {"parentId": "reference.settingsdialog.codestyle.scss","level": 0,"id": "reference.settingsdialog.codestyle.scss#copyCodeStyle","title": "Set from","disqus_id": "d2","anchor":"#copyCodeStyle","url": "settings-code-style-scss.html"},
"reference.settingsdialog.codestyle.stylus#tabs_and_indents": {"parentId": "reference.settingsdialog.codestyle.stylus","level": 0,"id": "reference.settingsdialog.codestyle.stylus#tabs_and_indents","title": "Tabs and Indents","disqus_id": "d2","anchor":"#tabs_and_indents","url": "code-style-stylus.html"},
"reference.settingsdialog.codestyle.stylus#ws_js_settings_editor_code_style_blank_lines_tab": {"parentId": "reference.settingsdialog.codestyle.stylus","level": 0,"id": "reference.settingsdialog.codestyle.stylus#ws_js_settings_editor_code_style_blank_lines_tab","title": "Blank Lines","disqus_id": "d2","anchor":"#ws_js_settings_editor_code_style_blank_lines_tab","url": "code-style-stylus.html"},
"reference.settingsdialog.codestyle.stylus#copyCodeStyle": {"parentId": "reference.settingsdialog.codestyle.stylus","level": 0,"id": "reference.settingsdialog.codestyle.stylus#copyCodeStyle","title": "Set from","disqus_id": "d2","anchor":"#copyCodeStyle","url": "code-style-stylus.html"},
"reference.settingsdialog.codestyle.dart#dartfmt": {"parentId": "reference.settingsdialog.codestyle.dart","level": 0,"id": "reference.settingsdialog.codestyle.dart#dartfmt","title": "Dartfmt","disqus_id": "d2","anchor":"#dartfmt","url": "code-style-dart.html"},
"reference.settingsdialog.codestyle.dart#tabs_and_indents": {"parentId": "reference.settingsdialog.codestyle.dart","level": 0,"id": "reference.settingsdialog.codestyle.dart#tabs_and_indents","title": "Tabs and Indents","disqus_id": "d2","anchor":"#tabs_and_indents","url": "code-style-dart.html"},
"reference.settingsdialog.codestyle.dart#ws_dart_settings_editor_code_style_spaces": {"parentId": "reference.settingsdialog.codestyle.dart","level": 0,"id": "reference.settingsdialog.codestyle.dart#ws_dart_settings_editor_code_style_spaces","title": "Spaces","disqus_id": "d2","anchor":"#ws_dart_settings_editor_code_style_spaces","url": "code-style-dart.html"},
"reference.settingsdialog.codestyle.dart#ws_dart_settings_editor_code_style_wrapping_and_braces": {"parentId": "reference.settingsdialog.codestyle.dart","level": 0,"id": "reference.settingsdialog.codestyle.dart#ws_dart_settings_editor_code_style_wrapping_and_braces","title": "Wrapping and braces","disqus_id": "d2","anchor":"#ws_dart_settings_editor_code_style_wrapping_and_braces","url": "code-style-dart.html"},
"reference.settingsdialog.codestyle.dart#ws_dart_settings_editor_code_blank_lines": {"parentId": "reference.settingsdialog.codestyle.dart","level": 0,"id": "reference.settingsdialog.codestyle.dart#ws_dart_settings_editor_code_blank_lines","title": "Blank Lines","disqus_id": "d2","anchor":"#ws_dart_settings_editor_code_blank_lines","url": "code-style-dart.html"},
"reference.settingsdialog.codestyle.dart#ws_dart_settings_editor_code_style_code-generation": {"parentId": "reference.settingsdialog.codestyle.dart","level": 0,"id": "reference.settingsdialog.codestyle.dart#ws_dart_settings_editor_code_style_code-generation","title": "Code Generation","disqus_id": "d2","anchor":"#ws_dart_settings_editor_code_style_code-generation","url": "code-style-dart.html"},
"reference.settingsdialog.codestyle.dart#copyCodeStyle": {"parentId": "reference.settingsdialog.codestyle.dart","level": 0,"id": "reference.settingsdialog.codestyle.dart#copyCodeStyle","title": "Set from","disqus_id": "d2","anchor":"#copyCodeStyle","url": "code-style-dart.html"},
"reference.settingsdialog.codestyle.gherkin#tabs_and_indents": {"parentId": "reference.settingsdialog.codestyle.gherkin","level": 0,"id": "reference.settingsdialog.codestyle.gherkin#tabs_and_indents","title": "Tabs and Indents","disqus_id": "d2","anchor":"#tabs_and_indents","url": "code-style-gherkin.html"},
"reference.settingsdialog.codestyle.gherkin#copyCodeStyle": {"parentId": "reference.settingsdialog.codestyle.gherkin","level": 0,"id": "reference.settingsdialog.codestyle.gherkin#copyCodeStyle","title": "Set from","disqus_id": "d2","anchor":"#copyCodeStyle","url": "code-style-gherkin.html"},
"reference.settingsdialog.codestyle.haml#tabs_and_indents": {"parentId": "reference.settingsdialog.codestyle.haml","level": 0,"id": "reference.settingsdialog.codestyle.haml#tabs_and_indents","title": "Tabs and Indents","disqus_id": "d2","anchor":"#tabs_and_indents","url": "code-style-haml.html"},
"reference.settingsdialog.codestyle.haml#copyCodeStyle": {"parentId": "reference.settingsdialog.codestyle.haml","level": 0,"id": "reference.settingsdialog.codestyle.haml#copyCodeStyle","title": "Set from","disqus_id": "d2","anchor":"#copyCodeStyle","url": "code-style-haml.html"},
"reference.settingsdialog.IDE.globalcodestyle.html#tabs_and_indents": {"parentId": "reference.settingsdialog.IDE.globalcodestyle.html","level": 0,"id": "reference.settingsdialog.IDE.globalcodestyle.html#tabs_and_indents","title": "Tabs and Indents","disqus_id": "d2","anchor":"#tabs_and_indents","url": "settings-code-style-html.html"},
"reference.settingsdialog.IDE.globalcodestyle.html#ws_html_settings_editor_code_other": {"parentId": "reference.settingsdialog.IDE.globalcodestyle.html","level": 0,"id": "reference.settingsdialog.IDE.globalcodestyle.html#ws_html_settings_editor_code_other","title": "Other","disqus_id": "d2","anchor":"#ws_html_settings_editor_code_other","url": "settings-code-style-html.html"},
"reference.settingsdialog.IDE.globalcodestyle.html#ws_html_settings_editor_code_style_arrangement_tab": {"parentId": "reference.settingsdialog.IDE.globalcodestyle.html","level": 0,"id": "reference.settingsdialog.IDE.globalcodestyle.html#ws_html_settings_editor_code_style_arrangement_tab","title": "Arrangement","disqus_id": "d2","anchor":"#ws_html_settings_editor_code_style_arrangement_tab","url": "settings-code-style-html.html"},
"reference.settingsdialog.IDE.globalcodestyle.html#copyCodeStyle": {"parentId": "reference.settingsdialog.IDE.globalcodestyle.html","level": 0,"id": "reference.settingsdialog.IDE.globalcodestyle.html#copyCodeStyle","title": "Set from","disqus_id": "d2","anchor":"#copyCodeStyle","url": "settings-code-style-html.html"},
"reference.settingsdialog.codestyle.javascript#tabs_and_indents": {"parentId": "reference.settingsdialog.codestyle.javascript","level": 0,"id": "reference.settingsdialog.codestyle.javascript#tabs_and_indents","title": "Tabs and Indents","disqus_id": "d2","anchor":"#tabs_and_indents","url": "settings-code-style-javascript.html"},
"reference.settingsdialog.codestyle.javascript#ws_js_settings_editor_code_style_spaces_tab": {"parentId": "reference.settingsdialog.codestyle.javascript","level": 0,"id": "reference.settingsdialog.codestyle.javascript#ws_js_settings_editor_code_style_spaces_tab","title": "Spaces","disqus_id": "d2","anchor":"#ws_js_settings_editor_code_style_spaces_tab","url": "settings-code-style-javascript.html"},
"reference.settingsdialog.codestyle.javascript#ws_js_settings_editor_code_style_wrapping_and_braces_tab": {"parentId": "reference.settingsdialog.codestyle.javascript","level": 0,"id": "reference.settingsdialog.codestyle.javascript#ws_js_settings_editor_code_style_wrapping_and_braces_tab","title": "Wrapping and Braces","disqus_id": "d2","anchor":"#ws_js_settings_editor_code_style_wrapping_and_braces_tab","url": "settings-code-style-javascript.html"},
"reference.settingsdialog.codestyle.javascript#ws_js_settings_editor_code_style_blank_lines_tab": {"parentId": "reference.settingsdialog.codestyle.javascript","level": 0,"id": "reference.settingsdialog.codestyle.javascript#ws_js_settings_editor_code_style_blank_lines_tab","title": "Blank Lines","disqus_id": "d2","anchor":"#ws_js_settings_editor_code_style_blank_lines_tab","url": "settings-code-style-javascript.html"},
"reference.settingsdialog.codestyle.javascript#ws_js_settings_editor_code_style_punctuation_tab": {"parentId": "reference.settingsdialog.codestyle.javascript","level": 0,"id": "reference.settingsdialog.codestyle.javascript#ws_js_settings_editor_code_style_punctuation_tab","title": "Punctuation","disqus_id": "d2","anchor":"#ws_js_settings_editor_code_style_punctuation_tab","url": "settings-code-style-javascript.html"},
"reference.settingsdialog.codestyle.javascript#ws_settings_code_style_js_code_generation": {"parentId": "reference.settingsdialog.codestyle.javascript","level": 0,"id": "reference.settingsdialog.codestyle.javascript#ws_settings_code_style_js_code_generation","title": "Code Generation","disqus_id": "d2","anchor":"#ws_settings_code_style_js_code_generation","url": "settings-code-style-javascript.html"},
"reference.settingsdialog.codestyle.javascript#ws_js_settings_editor_code_style_imports_tab": {"parentId": "reference.settingsdialog.codestyle.javascript","level": 0,"id": "reference.settingsdialog.codestyle.javascript#ws_js_settings_editor_code_style_imports_tab","title": "Imports","disqus_id": "d2","anchor":"#ws_js_settings_editor_code_style_imports_tab","url": "settings-code-style-javascript.html"},
"reference.settingsdialog.codestyle.javascript#ws_js_settings_editor_code_style_arrangement_tab": {"parentId": "reference.settingsdialog.codestyle.javascript","level": 0,"id": "reference.settingsdialog.codestyle.javascript#ws_js_settings_editor_code_style_arrangement_tab","title": "Arrangement","disqus_id": "d2","anchor":"#ws_js_settings_editor_code_style_arrangement_tab","url": "settings-code-style-javascript.html"},
"reference.settingsdialog.codestyle.javascript#copyCodeStyle": {"parentId": "reference.settingsdialog.codestyle.javascript","level": 0,"id": "reference.settingsdialog.codestyle.javascript#copyCodeStyle","title": "Set from","disqus_id": "d2","anchor":"#copyCodeStyle","url": "settings-code-style-javascript.html"},
"reference.settingsdialog.codestyle.json#tabs_and_indents": {"parentId": "reference.settingsdialog.codestyle.json","level": 0,"id": "reference.settingsdialog.codestyle.json#tabs_and_indents","title": "Tabs and Indents","disqus_id": "d2","anchor":"#tabs_and_indents","url": "settings-code-style-json.html"},
"reference.settingsdialog.codestyle.json#08ce5852": {"parentId": "reference.settingsdialog.codestyle.json","level": 0,"id": "reference.settingsdialog.codestyle.json#08ce5852","title": "Spaces","disqus_id": "d2","anchor":"#08ce5852","url": "settings-code-style-json.html"},
"reference.settingsdialog.codestyle.json#ws_json_settings_editor_code_style_wrapping_and_braces": {"parentId": "reference.settingsdialog.codestyle.json","level": 0,"id": "reference.settingsdialog.codestyle.json#ws_json_settings_editor_code_style_wrapping_and_braces","title": "Wrapping and braces","disqus_id": "d2","anchor":"#ws_json_settings_editor_code_style_wrapping_and_braces","url": "settings-code-style-json.html"},
"reference.settingsdialog.codestyle.json#ws_json_settings_editor_code_style_blank_lines": {"parentId": "reference.settingsdialog.codestyle.json","level": 0,"id": "reference.settingsdialog.codestyle.json#ws_json_settings_editor_code_style_blank_lines","title": "Blank Lines","disqus_id": "d2","anchor":"#ws_json_settings_editor_code_style_blank_lines","url": "settings-code-style-json.html"},
"reference.settingsdialog.codestyle.typescript#tabs_and_indents": {"parentId": "reference.settingsdialog.codestyle.typescript","level": 0,"id": "reference.settingsdialog.codestyle.typescript#tabs_and_indents","title": "Tabs and Indents","disqus_id": "d2","anchor":"#tabs_and_indents","url": "settings-code-style-typescript.html"},
"reference.settingsdialog.codestyle.typescript#ws_ts_settings_editor_code_style_spaces_tab": {"parentId": "reference.settingsdialog.codestyle.typescript","level": 0,"id": "reference.settingsdialog.codestyle.typescript#ws_ts_settings_editor_code_style_spaces_tab","title": "Spaces","disqus_id": "d2","anchor":"#ws_ts_settings_editor_code_style_spaces_tab","url": "settings-code-style-typescript.html"},
"reference.settingsdialog.codestyle.typescript#formatting_options": {"parentId": "reference.settingsdialog.codestyle.typescript","level": 0,"id": "reference.settingsdialog.codestyle.typescript#formatting_options","title": "Wrapping and braces","disqus_id": "d2","anchor":"#formatting_options","url": "settings-code-style-typescript.html"},
"reference.settingsdialog.codestyle.typescript#ws_js_settings_editor_code_style_blank_lines_tab": {"parentId": "reference.settingsdialog.codestyle.typescript","level": 0,"id": "reference.settingsdialog.codestyle.typescript#ws_js_settings_editor_code_style_blank_lines_tab","title": "Blank Lines","disqus_id": "d2","anchor":"#ws_js_settings_editor_code_style_blank_lines_tab","url": "settings-code-style-typescript.html"},
"reference.settingsdialog.codestyle.typescript#ws_ts_settings_editor_code_style_punctuation_tab": {"parentId": "reference.settingsdialog.codestyle.typescript","level": 0,"id": "reference.settingsdialog.codestyle.typescript#ws_ts_settings_editor_code_style_punctuation_tab","title": "Punctuation","disqus_id": "d2","anchor":"#ws_ts_settings_editor_code_style_punctuation_tab","url": "settings-code-style-typescript.html"},
"reference.settingsdialog.codestyle.typescript#ws_settings_code_style_ts_code_generation": {"parentId": "reference.settingsdialog.codestyle.typescript","level": 0,"id": "reference.settingsdialog.codestyle.typescript#ws_settings_code_style_ts_code_generation","title": "Code Generation","disqus_id": "d2","anchor":"#ws_settings_code_style_ts_code_generation","url": "settings-code-style-typescript.html"},
"reference.settingsdialog.codestyle.typescript#ws_ts_settings_editor_code_style_imports_tab": {"parentId": "reference.settingsdialog.codestyle.typescript","level": 0,"id": "reference.settingsdialog.codestyle.typescript#ws_ts_settings_editor_code_style_imports_tab","title": "Imports","disqus_id": "d2","anchor":"#ws_ts_settings_editor_code_style_imports_tab","url": "settings-code-style-typescript.html"},
"reference.settingsdialog.codestyle.typescript#ws_ts_settings_editor_code_style_arrangement_tab": {"parentId": "reference.settingsdialog.codestyle.typescript","level": 0,"id": "reference.settingsdialog.codestyle.typescript#ws_ts_settings_editor_code_style_arrangement_tab","title": "Arrangement","disqus_id": "d2","anchor":"#ws_ts_settings_editor_code_style_arrangement_tab","url": "settings-code-style-typescript.html"},
"reference.settingsdialog.codestyle.typescript#copyCodeStyle": {"parentId": "reference.settingsdialog.codestyle.typescript","level": 0,"id": "reference.settingsdialog.codestyle.typescript#copyCodeStyle","title": "Set from","disqus_id": "d2","anchor":"#copyCodeStyle","url": "settings-code-style-typescript.html"},
"reference.settingsdialog.IDE.globalcodestyle.xml#tabs_and_indents": {"parentId": "reference.settingsdialog.IDE.globalcodestyle.xml","level": 0,"id": "reference.settingsdialog.IDE.globalcodestyle.xml#tabs_and_indents","title": "Tabs and Indents","disqus_id": "d2","anchor":"#tabs_and_indents","url": "settings-code-style-xml.html"},
"reference.settingsdialog.IDE.globalcodestyle.xml#ws_xml_settings_editor_code_other": {"parentId": "reference.settingsdialog.IDE.globalcodestyle.xml","level": 0,"id": "reference.settingsdialog.IDE.globalcodestyle.xml#ws_xml_settings_editor_code_other","title": "Other","disqus_id": "d2","anchor":"#ws_xml_settings_editor_code_other","url": "settings-code-style-xml.html"},
"reference.settingsdialog.IDE.globalcodestyle.xml#android_tab": {"parentId": "reference.settingsdialog.IDE.globalcodestyle.xml","level": 0,"id": "reference.settingsdialog.IDE.globalcodestyle.xml#android_tab","title": "Android","disqus_id": "d2","anchor":"#android_tab","url": "settings-code-style-xml.html"},
"reference.settingsdialog.IDE.globalcodestyle.xml#copyCodeStyle": {"parentId": "reference.settingsdialog.IDE.globalcodestyle.xml","level": 0,"id": "reference.settingsdialog.IDE.globalcodestyle.xml#copyCodeStyle","title": "Set from","disqus_id": "d2","anchor":"#copyCodeStyle","url": "settings-code-style-xml.html"},
"reference.settingsdialog.codestyle.yaml#tabs_and_indents": {"parentId": "reference.settingsdialog.codestyle.yaml","level": 0,"id": "reference.settingsdialog.codestyle.yaml#tabs_and_indents","title": "Tabs and Indents","disqus_id": "d2","anchor":"#tabs_and_indents","url": "code-style-yaml.html"},
"reference.settingsdialog.codestyle.yaml#copyCodeStyle": {"parentId": "reference.settingsdialog.codestyle.yaml","level": 0,"id": "reference.settingsdialog.codestyle.yaml#copyCodeStyle","title": "Set from","disqus_id": "d2","anchor":"#copyCodeStyle","url": "code-style-yaml.html"},
"Other_File_Types#a032e587": {"parentId": "Other_File_Types","level": 0,"id": "Other_File_Types#a032e587","title": "Scheme","disqus_id": "d2","anchor":"#a032e587","url": "settings-code-style-other-file-types.html"},
"Other_File_Types#tabs_and_indents": {"parentId": "Other_File_Types","level": 0,"id": "Other_File_Types#tabs_and_indents","title": "Tabs and Indents","disqus_id": "d2","anchor":"#tabs_and_indents","url": "settings-code-style-other-file-types.html"},
"deployment_connection_tab#272505a8": {"parentId": "deployment_connection_tab","level": 0,"id": "deployment_connection_tab#272505a8","title": "Settings common for all server types","disqus_id": "d2","anchor":"#272505a8","url": "deployment-connection-tab.html"},
"deployment_connection_tab#a8e640a0": {"parentId": "deployment_connection_tab","level": 0,"id": "deployment_connection_tab#a8e640a0","title": "FTP and FTPS settings","disqus_id": "d2","anchor":"#a8e640a0","url": "deployment-connection-tab.html"},
"deployment_connection_tab#f7ccae40": {"parentId": "deployment_connection_tab","level": 0,"id": "deployment_connection_tab#f7ccae40","title": "SFTP settings","disqus_id": "d2","anchor":"#f7ccae40","url": "deployment-connection-tab.html"},
"deployment_connection_tab#22a15659": {"parentId": "deployment_connection_tab","level": 0,"id": "deployment_connection_tab#22a15659","title": "Local or mounted folder settings","disqus_id": "d2","anchor":"#22a15659","url": "deployment-connection-tab.html"},
"reference.settings.php.test.frameworks#PHP_test_frameworks_PHPUnit": {"parentId": "reference.settings.php.test.frameworks","level": 0,"id": "reference.settings.php.test.frameworks#PHP_test_frameworks_PHPUnit","title": "PHPUnit","disqus_id": "d2","anchor":"#PHP_test_frameworks_PHPUnit","url": "php-test-frameworks.html"},
"reference.settings.php.test.frameworks#PHP_test_frameworks_Behat": {"parentId": "reference.settings.php.test.frameworks","level": 0,"id": "reference.settings.php.test.frameworks#PHP_test_frameworks_Behat","title": "Behat","disqus_id": "d2","anchor":"#PHP_test_frameworks_Behat","url": "php-test-frameworks.html"},
"reference.settings.php.test.frameworks#PHP_test_frameworks_Codeception": {"parentId": "reference.settings.php.test.frameworks","level": 0,"id": "reference.settings.php.test.frameworks#PHP_test_frameworks_Codeception","title": "Codeception","disqus_id": "d2","anchor":"#PHP_test_frameworks_Codeception","url": "php-test-frameworks.html"},
"reference.settings.php.test.frameworks#PHP_test_frameworks_PHPSpec": {"parentId": "reference.settings.php.test.frameworks","level": 0,"id": "reference.settings.php.test.frameworks#PHP_test_frameworks_PHPSpec","title": "PHPSpec","disqus_id": "d2","anchor":"#PHP_test_frameworks_PHPSpec","url": "php-test-frameworks.html"},
"reference.settings.php.codesniffer#php_quality_tools_code_sniffer": {"parentId": "reference.settings.php.codesniffer","level": 0,"id": "reference.settings.php.codesniffer#php_quality_tools_code_sniffer","title": "Code Sniffer","disqus_id": "d2","anchor":"#php_quality_tools_code_sniffer","url": "php-quality-tools.html"},
"reference.settings.php.codesniffer#php_quality_tools_mess_detector": {"parentId": "reference.settings.php.codesniffer","level": 0,"id": "reference.settings.php.codesniffer#php_quality_tools_mess_detector","title": "Mess Detector","disqus_id": "d2","anchor":"#php_quality_tools_mess_detector","url": "php-quality-tools.html"},
"reference.settings.php.codesniffer#php_quality_tools_php_cs_fixer": {"parentId": "reference.settings.php.codesniffer","level": 0,"id": "reference.settings.php.codesniffer#php_quality_tools_php_cs_fixer","title": "PHP CS Fixer","disqus_id": "d2","anchor":"#php_quality_tools_php_cs_fixer","url": "php-quality-tools.html"},
"settings.project.settings.file.watchers.new.watcher#ws_file_watcher_dialog_name": {"parentId": "settings.project.settings.file.watchers.new.watcher","level": 0,"id": "settings.project.settings.file.watchers.new.watcher#ws_file_watcher_dialog_name","title": "Name","disqus_id": "d2","anchor":"#ws_file_watcher_dialog_name","url": "new-watcher-dialog.html"},
"settings.project.settings.file.watchers.new.watcher#ws_file_watcher_dialog_files_to_watch": {"parentId": "settings.project.settings.file.watchers.new.watcher","level": 0,"id": "settings.project.settings.file.watchers.new.watcher#ws_file_watcher_dialog_files_to_watch","title": "Files to watch","disqus_id": "d2","anchor":"#ws_file_watcher_dialog_files_to_watch","url": "new-watcher-dialog.html"},
"settings.project.settings.file.watchers.new.watcher#ws_file_watcher_dialog_tool_to_run_on_changes": {"parentId": "settings.project.settings.file.watchers.new.watcher","level": 0,"id": "settings.project.settings.file.watchers.new.watcher#ws_file_watcher_dialog_tool_to_run_on_changes","title": "Tool to run on changes","disqus_id": "d2","anchor":"#ws_file_watcher_dialog_tool_to_run_on_changes","url": "new-watcher-dialog.html"},
"settings.project.settings.file.watchers.new.watcher#ws_file_watcher_dialog_working_directory_and_environment_variables": {"parentId": "settings.project.settings.file.watchers.new.watcher","level": 0,"id": "settings.project.settings.file.watchers.new.watcher#ws_file_watcher_dialog_working_directory_and_environment_variables","title": "Working Directory and Environment Variables","disqus_id": "d2","anchor":"#ws_file_watcher_dialog_working_directory_and_environment_variables","url": "new-watcher-dialog.html"},
"settings.project.settings.file.watchers.new.watcher#ws_file_watcher_dialog_advanced_options": {"parentId": "settings.project.settings.file.watchers.new.watcher","level": 0,"id": "settings.project.settings.file.watchers.new.watcher#ws_file_watcher_dialog_advanced_options","title": "Advanced Options","disqus_id": "d2","anchor":"#ws_file_watcher_dialog_advanced_options","url": "new-watcher-dialog.html"},
"reference.table.editor#overview": {"parentId": "reference.table.editor","level": 0,"id": "reference.table.editor#overview","title": "Overview","disqus_id": "d2","anchor":"#overview","url": "table-editor.html"},
"reference.table.editor#bc7dec71": {"parentId": "reference.table.editor","level": 0,"id": "reference.table.editor#bc7dec71","title": "Toolbar controls, context menu commands for data cells and keyboard shortcuts","disqus_id": "d2","anchor":"#bc7dec71","url": "table-editor.html"},
"reference.table.editor#header_row": {"parentId": "reference.table.editor","level": 0,"id": "reference.table.editor#header_row","title": "Sorting data","disqus_id": "d2","anchor":"#header_row","url": "table-editor.html"},
"reference.table.editor#24dda959": {"parentId": "reference.table.editor","level": 0,"id": "reference.table.editor#24dda959","title": "Reordering columns","disqus_id": "d2","anchor":"#24dda959","url": "table-editor.html"},
"reference.table.editor#b54ad64b": {"parentId": "reference.table.editor","level": 0,"id": "reference.table.editor#b54ad64b","title": "Hiding and showing columns","disqus_id": "d2","anchor":"#b54ad64b","url": "table-editor.html"},
"reference.scope.syntax#sets-of-classes": {"parentId": "reference.scope.syntax","level": 0,"id": "reference.scope.syntax#sets-of-classes","title": "Sets of classes","disqus_id": "d2","anchor":"#sets-of-classes","url": "scope-language-syntax-reference.html"},
"reference.scope.syntax#sets-of-files": {"parentId": "reference.scope.syntax","level": 0,"id": "reference.scope.syntax#sets-of-files","title": "Sets of files","disqus_id": "d2","anchor":"#sets-of-files","url": "scope-language-syntax-reference.html"},
"reference.scope.syntax#modifiers": {"parentId": "reference.scope.syntax","level": 0,"id": "reference.scope.syntax#modifiers","title": "Modifiers","disqus_id": "d2","anchor":"#modifiers","url": "scope-language-syntax-reference.html"},
"reference.scope.syntax#logical-operators": {"parentId": "reference.scope.syntax","level": 0,"id": "reference.scope.syntax#logical-operators","title": "Logical operators","disqus_id": "d2","anchor":"#logical-operators","url": "scope-language-syntax-reference.html"},
"reference.scope.syntax#create-scope-from-existing-scopes": {"parentId": "reference.scope.syntax","level": 0,"id": "reference.scope.syntax#create-scope-from-existing-scopes","title": "Create a new scope from existing scopes","disqus_id": "d2","anchor":"#create-scope-from-existing-scopes","url": "scope-language-syntax-reference.html"},
"reference.scope.syntax#examples": {"parentId": "reference.scope.syntax","level": 0,"id": "reference.scope.syntax#examples","title": "Examples","disqus_id": "d2","anchor":"#examples","url": "scope-language-syntax-reference.html"}
}
},
"topLevelIds": [

"top",
"procedures.workingwithprojects.config.template",
"concepts.module.path",
"Working_with_source_code",
"d732e166",
"d732e254",
"procedures.vcWithIDEA",
"managing_tasks_and_context",
"d732e375",
"d732e380",
"d732e1056",
"d732e1069",
"feedback.mainpage"
]
}*/
class Menu extends React.Component{
    constructor(){
        super()
    }
    getTopPages(data){
        let result = []

        for(let page in data.entities.pages){
            if(data.entities.pages[page].level == 0){
                result.push(data.entities.pages[page])
            }
        }
        
        return result
    }
    render(){
        return <div className="menu">
            <MenuList list={this.getTopPages(data)} data={data}/>
        </div>
    }
}

export default Menu