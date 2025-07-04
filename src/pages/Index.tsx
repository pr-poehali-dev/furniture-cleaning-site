import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Icon name="Sparkles" size={24} className="text-blue-600" />
              <h1 className="text-xl font-bold text-gray-900">ЧистоДом</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#services"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Услуги
              </a>
              <a
                href="#advantages"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Преимущества
              </a>
              <a
                href="#faq"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Вопросы
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Контакты
              </a>
            </nav>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Icon name="Phone" size={16} className="mr-2" />
              Заказать звонок
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                Химчистка мебели в Барнауле
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Профессиональная химчистка мебели
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Вернем вашей мебели первозданную чистоту и свежесть.
                Эко-средства, экспресс-сушка, выезд на дом.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Icon name="Calendar" size={20} className="mr-2" />
                  Записаться на чистку
                </Button>
                <Button size="lg" variant="outline">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать стоимость
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/img/9d3110d3-fd26-47c8-a0be-9705add6c8b8.jpg"
                alt="Профессиональная химчистка мебели"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Icon
                      name="CheckCircle"
                      size={24}
                      className="text-green-600"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Гарантия качества
                    </p>
                    <p className="text-sm text-gray-600">30 дней</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Наши услуги
            </h2>
            <p className="text-xl text-gray-600">
              Профессиональная химчистка любых типов мебели
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center">
                  <Icon name="Sofa" size={32} className="text-blue-600" />
                </div>
                <CardTitle className="text-lg">Диваны и кресла</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Глубокая очистка мягкой мебели с удалением пятен и запахов
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center">
                  <Icon name="Bed" size={32} className="text-blue-600" />
                </div>
                <CardTitle className="text-lg">Матрасы</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Антибактериальная обработка и устранение клещей
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center">
                  <Icon name="Home" size={32} className="text-blue-600" />
                </div>
                <CardTitle className="text-lg">Ковры</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Восстановление цвета и текстуры ковровых покрытий
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center">
                  <Icon name="Crown" size={32} className="text-blue-600" />
                </div>
                <CardTitle className="text-lg">Антиквариат</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Бережная очистка детской мебели и антикварных предметов
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Наши преимущества
            </h2>
            <p className="text-xl text-gray-600">Почему выбирают нас</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Icon name="Leaf" size={24} className="text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Эко-средства
              </h3>
              <p className="text-gray-600">
                Используем только безопасные для здоровья чистящие средства
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Icon name="Zap" size={24} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Экспресс-сушка
              </h3>
              <p className="text-gray-600">
                Профессиональное оборудование для быстрого высыхания
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="bg-orange-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Icon name="Car" size={24} className="text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Выезд на дом
              </h3>
              <p className="text-gray-600">
                Работаем у вас дома в удобное время
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="bg-purple-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Icon name="Shield" size={24} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Гарантия качества
              </h3>
              <p className="text-gray-600">
                30 дней гарантии на все виды работ
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="bg-pink-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Icon name="Baby" size={24} className="text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Детская мебель
              </h3>
              <p className="text-gray-600">
                Специальные средства для детских комнат
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="bg-yellow-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Icon name="Star" size={24} className="text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Опыт 10+ лет
              </h3>
              <p className="text-gray-600">
                Более 5000 довольных клиентов в Барнауле
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Часто задаваемые вопросы
            </h2>
            <p className="text-xl text-gray-600">
              Ответы на популярные вопросы о химчистке мебели
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem
                value="item-1"
                className="bg-slate-50 px-6 rounded-lg"
              >
                <AccordionTrigger className="text-left">
                  Сколько времени занимает химчистка дивана?
                </AccordionTrigger>
                <AccordionContent>
                  Обычно химчистка дивана занимает 2-4 часа, в зависимости от
                  размера и степени загрязнения. Благодаря технологии
                  экспресс-сушки, мебель будет готова к использованию через 4-6
                  часов.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className="bg-slate-50 px-6 rounded-lg"
              >
                <AccordionTrigger className="text-left">
                  Безопасны ли средства для детей и домашних животных?
                </AccordionTrigger>
                <AccordionContent>
                  Да, мы используем только сертифицированные эко-средства,
                  безопасные для детей и домашних животных. Все наши чистящие
                  составы гипоаллергенны и не содержат токсичных веществ.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-3"
                className="bg-slate-50 px-6 rounded-lg"
              >
                <AccordionTrigger className="text-left">
                  Можете ли вы удалить старые пятна?
                </AccordionTrigger>
                <AccordionContent>
                  Да, наше профессиональное оборудование и специальные средства
                  позволяют удалять даже застарелые пятна. Мы используем
                  различные методы в зависимости от типа пятна и ткани.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-4"
                className="bg-slate-50 px-6 rounded-lg"
              >
                <AccordionTrigger className="text-left">
                  Какова стоимость ваших услуг?
                </AccordionTrigger>
                <AccordionContent>
                  Стоимость зависит от типа мебели, размера и сложности работы.
                  Диван от 2000 руб., кресло от 1500 руб., матрас от 1000 руб.
                  Точную стоимость рассчитаем после осмотра.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-5"
                className="bg-slate-50 px-6 rounded-lg"
              >
                <AccordionTrigger className="text-left">
                  Предоставляете ли вы гарантию?
                </AccordionTrigger>
                <AccordionContent>
                  Да, мы предоставляем 30-дневную гарантию на все наши услуги.
                  Если вы не довольны результатом, мы переделаем работу
                  бесплатно.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-slate-300">
              Готовы вернуть вашей мебели первозданный вид
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-600 p-3 rounded-full">
                  <Icon name="Phone" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Телефон</h3>
                  <p className="text-slate-300">+7 (3852) 123-45-67</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-blue-600 p-3 rounded-full">
                  <Icon name="MapPin" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Адрес</h3>
                  <p className="text-slate-300">г. Барнаул, ул. Ленина, 123</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-blue-600 p-3 rounded-full">
                  <Icon name="Clock" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Время работы</h3>
                  <p className="text-slate-300">Пн-Вс: 8:00 - 20:00</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-blue-600 p-3 rounded-full">
                  <Icon name="Mail" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-slate-300">info@chistodom-barnaul.ru</p>
                </div>
              </div>
            </div>
            <div className="bg-slate-800 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6">Заказать звонок</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Имя
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Сообщение
                  </label>
                  <textarea
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white h-24 resize-none"
                    placeholder="Опишите, что нужно почистить..."
                  ></textarea>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  <Icon name="Send" size={16} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex justify-center items-center space-x-2 mb-4">
              <Icon name="Sparkles" size={24} className="text-blue-500" />
              <span className="text-xl font-bold text-white">ЧистоДом</span>
            </div>
            <p className="text-sm">© 2024 ЧистоДом. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
