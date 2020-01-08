-- MySQL dump 10.13  Distrib 5.7.24, for macos10.14 (x86_64)
--
-- Host: localhost    Database: repos
-- ------------------------------------------------------
-- Server version	5.7.24

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `repos`
--

DROP TABLE IF EXISTS `repos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `repos` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned NOT NULL,
  `reponame` varchar(128) DEFAULT NULL,
  `programmingLanguage` varchar(64) DEFAULT NULL,
  `description` text,
  `stars` int(11) DEFAULT NULL,
  `forks` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_user_id` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=144 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `repos`
--

LOCK TABLES `repos` WRITE;
/*!40000 ALTER TABLE `repos` DISABLE KEYS */;
INSERT INTO `repos` VALUES (1,1,'ReaderML','TeX','Reader voor machine learning in thema 4.1',2,1),(2,1,'cv','HTML','Curriculum Vitae',0,0),(3,1,'node','JavaScript','Node.js JavaScript runtime',0,15138),(4,1,'ng-demo','TypeScript','Demo die gebruikt werd tijdens het college',0,0),(5,1,'tweedekamer','Java','Awesome demo voor ITANN 15 maart',0,10),(6,1,'OOP3','Java','Voorbeeldcode en uitwerkingen voor OOP3 (thema 2.3)',4,2),(7,1,'ITANN','Java','Voorbeeldcode voor de leergang programmeren van ITANN',0,0),(8,1,'Thema2.4','TypeScript','Voorbeeldcode voor thema 2.4',1,0),(9,1,'trump','Python','A graphical representation of the Trump White House using neo4j',0,0),(10,1,'boterkaaseieren','Java','Command-line boter kaas en eieren.',3,6),(11,1,'zuul','Java','',0,16),(12,1,'practicum.2.3','Java','Voorbeeldcode die tijdens de practica van thema 2.3 is besproken.',0,1),(13,1,'Yfke','Assembly','',0,0),(14,2,'You-Dont-Know-JS','','A book series on JavaScript. @YDKJS on twitter.',110243,22019),(15,2,'Functional-Light-JS','JavaScript','Pragmatic, balanced FP in JavaScript. @FLJSBook on twitter.',11839,1357),(16,2,'Incomplete-JS','','\"The Incomplete Guide to JavaScript\" (book). @IncompleteJS on twitter.',169,0),(17,2,'TNG-Hooks','JavaScript','Provides React-inspired \'hooks\' like useState(..) for stand-alone functions',813,32),(18,2,'revocable-queue','JavaScript','Specialized async queue data structure, supports revocation of values',158,3),(19,2,'CAF','JavaScript','Cancelable Async Flows (CAF)',742,23),(20,2,'TypL','JavaScript','The JavaScript Type Linter',169,7),(21,2,'A-Tale-Of-Three-Lists','JavaScript','Comparing various async patterns for a single demo',612,69),(22,2,'LABjs','HTML','Loading And Blocking JavaScript: On-demand parallel loader for JavaScript with execution order dependencies',2185,317),(23,2,'FPO','JavaScript','FP library for JavaScript. Supports named-argument style methods.',376,19),(24,2,'eslint-plugin-proper-ternary','JavaScript','ESLint rules to ensure proper usage of ternary/conditional expressions',56,1),(25,2,'eslint-plugin-proper-arrows','JavaScript','ESLint rules to ensure proper arrow function definitions',192,5),(26,2,'fasy','JavaScript','FP iterators that are both eager and asynchronous',386,9),(27,2,'asynquence','JavaScript','Asynchronous flow control (promises, generators, observables, CSP, etc)',1561,126),(28,2,'getify.github.io','JavaScript','',20,4),(29,2,'eslint-plugin-arrow-require-this','JavaScript','DEPRECATED: ESLint rule to require arrow functions to reference the \'this\' keyword',30,1),(30,2,'JSON.minify','','Simple minifier for JSON to remove comments and whitespace',335,86),(31,2,'node-static-alias','JavaScript','Serve static file which is not requested file. (e.g. `file.min.js` is requested, serve `file.js`)',4,4),(32,2,'native-promise-only','JavaScript','A polyfill for native ES6 Promises as close as possible (no extensions) to the strict spec definitions.',666,79),(33,2,'santa-connect-app','JavaScript','Santa Connect: keeping track of your kids\' nice/naughty status',4,1),(34,2,'Mock-DOM-Resources','JavaScript','A mock of (parts of) the DOM API to simulate resource preloading and loading',20,2),(35,2,'stable-timers','JavaScript','timers with less race conditions',36,1),(36,2,'deePool','JavaScript','highly-efficient pool for JavaScript objects',84,7),(37,2,'pong-around-workshop','','Workshop files for building a pong-variant game in JS and <canvas>',9,4),(38,2,'tic-tac-toe-workshop','','Workshop files for building tic-tac-toe in JS and <canvas>',22,6),(39,2,'make-a-game','JavaScript','some project files for a tutorial on making a simple web game',19,18),(40,2,'BikechainJS','C++','JavaScript VM engine (powered by V8); server-side environment modules; server-side synchronous web app controllers',60,8),(41,2,'cloud-sweeper','JavaScript','A casual game built for the web.',86,18),(42,2,'ScanTree','JavaScript','Scan a JS file tree to build an ordered and grouped dependency listing',47,7),(43,2,'remote-csp-channel','JavaScript','Remote bridge for CSP channels',54,1),(44,3,'black','Python','The uncompromising Python code formatter',0,689),(45,3,'vega-cli-feedstock','Shell','A conda-smithy repository for vega-cli.',0,1),(46,3,'staged-recipes','Python','A place to submit conda recipes before they become fully fledged conda-forge feedstocks',0,1510),(47,3,'htsjdk','Java','A Java API for high-throughput sequencing data (HTS) formats.',0,222),(48,3,'conda','Python','OS-agnostic, system-level binary package manager and ecosystem',0,818),(49,3,'hugo-whisper-theme','CSS','Whisper is a minimal documentation theme for Hugo.',0,37),(50,3,'hugo-theme-learn','CSS','Porting Grav Learn theme to Hugo',0,721),(51,3,'MultiQC','Python','Aggregate results from bioinformatics analyses across many samples into a single report.',0,285),(52,3,'single-cell-rna-seq','HTML','A single cell RNA-seq workflow following http://dx.doi.org/10.12688/f1000research.9501.2',0,21),(53,3,'igv-reports','Python','Python application to generate self-contained igv.js pages that can be opened within a browser with \"file\" protocol.',0,8),(54,3,'katacoda-scenarios','Shell','Katacoda Scenarios',0,0),(55,3,'schema-salad-feedstock','Shell','A conda-smithy repository for schema-salad.',0,5),(56,3,'cachecontrol-feedstock','Shell','A conda-smithy repository for cachecontrol.',0,4),(57,3,'cellassign','R','Automated, probabilistic assignment of cell types in scRNA-seq data',0,8),(58,3,'bzip2-rs','C','libbz2 (bzip2 compression) bindings for Rust',0,26),(59,3,'conda-build','Python','Commands and tools for building conda packages',0,265),(60,3,'cwltool','Python','Common Workflow Language reference implementation',0,135),(61,3,'UMI-tools','Python','Tools for handling Unique Molecular Identifiers in NGS data sets',0,122),(62,3,'noise-feedstock','Shell','A conda-smithy repository for noise.',0,2),(63,3,'r-base-feedstock','Shell','A conda-smithy repository for r-base.',0,30),(64,3,'dna-seq-gatk-variant-calling','HTML','This Snakemake pipeline implements the GATK best-practices workflow',0,53),(65,3,'toposort-feedstock','Shell','A conda-smithy repository for toposort.',0,7),(66,3,'graphviz-feedstock','Shell','A conda-smithy repository for graphviz.',0,15),(67,3,'scikit-bio-feedstock','Shell','A conda-smithy repository for scikit-bio.',0,8),(68,3,'bioconda-recipes','Shell','Conda recipes for the bioconda channel.',0,1231),(69,3,'awesome-single-cell','','List of software packages for single-cell data analysis, including RNA-seq, ATAC-seq, etc.',1,432),(70,3,'cairosvg-feedstock','Shell','A conda-smithy repository for cairosvg.',0,5),(71,3,'fp-rust-succinct-trees','','Fachprojekt: Entwicklung einer Rust-Bibliothek am Beispiel von Succinct Trees',0,0),(72,3,'rustlings','Rust','Small exercises to get you used to reading and writing Rust code',0,608),(73,3,'svgutils-feedstock','Shell','A conda-smithy repository for svgutils.',0,2);
/*!40000 ALTER TABLE `repos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(64) DEFAULT NULL,
  `name` varchar(128) DEFAULT NULL,
  `avatar` varchar(128) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'bart314','Bart Barnard','https://avatars0.githubusercontent.com/u/5617184?s=88&v=4'),(2,'getify','Kyle Simpson','https://avatars1.githubusercontent.com/u/150330?s=88&v=4'),(3,'johanneskoester','Johannes Köster','https://avatars1.githubusercontent.com/u/1858646?s=88&v=4');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-11-05  9:26:53
